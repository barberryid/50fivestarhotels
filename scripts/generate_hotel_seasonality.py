import json
import pathlib
import re
import unicodedata
from collections import OrderedDict

import openpyxl


ROOT = pathlib.Path(__file__).resolve().parents[1]
MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
REQUIRED_ROW_TYPES = ["Weather", "Price", "Temp °C", "Temp °F", "Humidity %"]
WEATHER_LABELS = {"Best", "Good", "Possible", "Avoid"}
PRICE_LABELS = {"Cheapest", "Good value", "Average", "Expensive", "Most expensive"}

TITLE_ALIASES = {
    "Hotel Majapahit Surabaya - MGallery": "hotel-majapahit-surabaya",
    "Hotel Majapahit Surabaya – MGallery": "hotel-majapahit-surabaya",
    "Graffit Gallery Varna": "graffit-gallery-varna",
    "Grand Hotel Yerevan – Small Luxury Hotels of the World": "grand-hotel-yerevan",
    "The Hermitage Jakarta": "hermitage-jakarta",
    "Sofitel Marrakech Lounge & Spa": "sofitel-marrakech",
}


def frontmatter_value(text: str, key: str) -> str:
    frontmatter = text.split("---", 2)[1]
    match = re.search(rf"^{key}:\s*[\"']?(.*?)[\"']?\s*$", frontmatter, re.MULTILINE)
    if not match:
        raise ValueError(f"Missing {key}")
    return match.group(1)


def site_title_to_slug() -> dict[str, str]:
    titles = {}
    for path in (ROOT / "src" / "content" / "hotels").glob("*.md"):
        text = path.read_text(encoding="utf-8")
        titles[frontmatter_value(text, "title")] = frontmatter_value(text, "slug")
    return titles


def slugify(value: str) -> str:
    text = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")
    text = text.lower().replace("&", " and ")
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


def optional_text(value):
    if value is None:
        return None
    text = str(value).strip()
    return text or None


def checked_date(value):
    if hasattr(value, "date"):
        return value.date().isoformat()
    return optional_text(value)


def row_summary(row: dict) -> dict:
    return {
        "summary": optional_text(row.get("Summary")) or "",
        "notes": optional_text(row.get("Avoid / expensive notes")),
        "confidenceLevel": optional_text(row.get("Confidence level")),
        "lastChecked": checked_date(row.get("Last checked")),
        "sources": optional_text(row.get("Sources")),
    }


def normalized_row_type(value: str) -> str:
    return str(value).strip()


def normalized_key(value: str) -> str:
    return normalized_row_type(value).lower()


def is_number(value) -> bool:
    return isinstance(value, (int, float)) and not isinstance(value, bool)


def validate_row(hotel: str, row_type: str, row: dict, warnings: list[str]) -> None:
    for month in MONTHS:
        value = row.get(month)
        if value is None or value == "":
            warnings.append(f"{hotel}: {row_type} {month} is missing")
            continue

        if row_type in {"Temp °C", "Temp °F", "Humidity %"} and not is_number(value):
            warnings.append(f"{hotel}: {row_type} {month} has invalid numeric value {value!r}")

        if row_type == "Weather" and value not in WEATHER_LABELS:
            warnings.append(f"{hotel}: Weather {month} has invalid label {value!r}")

        if row_type == "Price" and value not in PRICE_LABELS:
            warnings.append(f"{hotel}: Price {month} has invalid label {value!r}")


def ordered_months(rows_by_type: dict[str, dict]) -> list[dict]:
    weather = rows_by_type["weather"]
    price = rows_by_type["price"]
    temp_c = rows_by_type["temp °c"]
    temp_f = rows_by_type["temp °f"]
    humidity = rows_by_type["humidity %"]

    return [
        {
            "month": month,
            "weather": weather[month],
            "price": price[month],
            "tempC": temp_c[month],
            "tempF": temp_f[month],
            "humidity": humidity[month],
        }
        for month in MONTHS
    ]


def main() -> None:
    workbook_path = ROOT / "research" / "hotel-seasonality-weather-price.xlsx"
    workbook = openpyxl.load_workbook(workbook_path, data_only=True)
    sheet = workbook["Seasonality Data"]
    rows = list(sheet.iter_rows(values_only=True))
    headers = list(rows[0])

    title_to_slug = site_title_to_slug()
    site_slugs = set(title_to_slug.values())
    source_rows: OrderedDict[str, dict] = OrderedDict()
    warnings: list[str] = []

    for values in rows[1:]:
        row = dict(zip(headers, values))
        hotel = optional_text(row.get("Hotel"))
        row_type = normalized_row_type(row.get("Row type"))
        if not hotel or not row_type:
            continue

        if row_type not in REQUIRED_ROW_TYPES:
            warnings.append(f"{hotel}: unexpected row type {row_type!r}")
            continue

        validate_row(hotel, row_type, row, warnings)

        source_rows.setdefault(
            hotel,
            {
                "rank": row.get("Rank"),
                "hotel": hotel,
                "city": row.get("City"),
                "country": row.get("Country"),
                "rows": {},
            },
        )
        source_rows[hotel]["rows"][normalized_key(row_type)] = row

    generated = OrderedDict()
    matched_slugs = set()
    unmatched_workbook_hotels = []

    for hotel, record in source_rows.items():
        row_types = record["rows"]
        missing_types = [
            row_type for row_type in REQUIRED_ROW_TYPES if normalized_key(row_type) not in row_types
        ]
        if missing_types:
            warnings.append(f"{hotel}: missing row types {', '.join(missing_types)}")
            continue

        slug = title_to_slug.get(hotel) or TITLE_ALIASES.get(hotel)
        matched_site = bool(slug)
        if not slug:
            slug = slugify(hotel)
            unmatched_workbook_hotels.append(hotel)
        else:
            matched_slugs.add(slug)

        weather_summary = row_summary(row_types["weather"])
        price_summary = row_summary(row_types["price"])
        generated[slug] = {
            "hotel": hotel,
            "city": record["city"],
            "country": record["country"],
            "matchedSite": matched_site,
            "weather": {
                "title": "Best time for weather",
                "months": [
                    {"month": month, "label": row_types["weather"][month]} for month in MONTHS
                ],
                **weather_summary,
            },
            "price": {
                "title": "Best time for price",
                "months": [
                    {"month": month, "label": row_types["price"][month]} for month in MONTHS
                ],
                **price_summary,
            },
            "months": ordered_months(row_types),
        }

    site_hotels_without_data = sorted(site_slugs - matched_slugs)

    output = ROOT / "src" / "data" / "hotelSeasonality.ts"
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        "\n\n".join(
            [
                'export type WeatherRating = "Best" | "Good" | "Possible" | "Avoid";\n',
                'export type PriceRating = "Cheapest" | "Good value" | "Average" | "Expensive" | "Most expensive";\n',
                'export type SeasonalityLabel = WeatherRating | PriceRating;\n',
                'export type SeasonalityMonthName = "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec";\n',
                'export type SeasonalityMonth = {\n  month: SeasonalityMonthName;\n  label: SeasonalityLabel;\n};\n',
                'export type HotelSeasonalityMonth = {\n  month: SeasonalityMonthName;\n  weather: WeatherRating;\n  price: PriceRating;\n  tempC: number;\n  tempF: number;\n  humidity: number;\n};\n',
                'export type SeasonalitySummary = {\n  title: "Best time for weather" | "Best time for price";\n  months: SeasonalityMonth[];\n  summary: string;\n  notes?: string;\n  confidenceLevel?: string;\n  lastChecked?: string;\n  sources?: string;\n};\n',
                'export type HotelSeasonality = {\n  hotel: string;\n  city: string;\n  country: string;\n  matchedSite: boolean;\n  weather: SeasonalitySummary & { title: "Best time for weather" };\n  price: SeasonalitySummary & { title: "Best time for price" };\n  months: HotelSeasonalityMonth[];\n};\n',
                "export const hotelSeasonality: Record<string, HotelSeasonality> = "
                + json.dumps(generated, ensure_ascii=False, indent=2)
                + ";\n",
            ]
        ),
        encoding="utf-8",
    )

    print(f"Wrote {len(generated)} seasonality records to {output}")
    if warnings:
        print("Validation warnings:")
        for warning in warnings:
            print(f"- {warning}")
    if site_hotels_without_data:
        print("Site hotels without workbook data:")
        for slug in site_hotels_without_data:
            print(f"- {slug}")
    if unmatched_workbook_hotels:
        print("Workbook hotels without current site pages:")
        for hotel in unmatched_workbook_hotels:
            print(f"- {hotel}")


if __name__ == "__main__":
    main()
