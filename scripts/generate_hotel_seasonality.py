import json
import pathlib
import re

import openpyxl


ROOT = pathlib.Path(__file__).resolve().parents[1]
MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

TITLE_ALIASES = {
    "Hotel Majapahit Surabaya - MGallery": "hotel-majapahit-surabaya",
    "Hotel Majapahit Surabaya \u2013 MGallery": "hotel-majapahit-surabaya",
    "Grand Hotel Yerevan \u2013 Small Luxury Hotels of the World": "grand-hotel-yerevan",
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


def optional_text(value):
    if value is None:
        return None
    text = str(value).strip()
    return text or None


def row_payload(row_type: str, row: dict) -> dict:
    last_checked = row.get("Last checked")
    if hasattr(last_checked, "date"):
        last_checked = last_checked.date().isoformat()
    else:
        last_checked = optional_text(last_checked)

    return {
        "title": "Best time for weather" if row_type == "weather" else "Best time for price",
        "months": [{"month": month, "label": row[month]} for month in MONTHS],
        "summary": optional_text(row.get("Summary")) or "",
        "notes": optional_text(row.get("Avoid / expensive notes")),
        "confidenceLevel": optional_text(row.get("Confidence level")),
        "lastChecked": last_checked,
        "sources": optional_text(row.get("Sources")),
    }


def main() -> None:
    workbook_path = ROOT / "research" / "hotel-seasonality-weather-price.xlsx"
    workbook = openpyxl.load_workbook(workbook_path, data_only=True)
    sheet = workbook["Seasonality Data"]
    rows = list(sheet.iter_rows(values_only=True))
    headers = list(rows[0])

    title_to_slug = site_title_to_slug()
    grouped = {}
    missing = []

    for values in rows[1:]:
        row = dict(zip(headers, values))
        hotel = row["Hotel"]
        row_type = row["Row type"].lower()
        slug = title_to_slug.get(hotel) or TITLE_ALIASES.get(hotel)

        if not slug:
            if row_type == "weather":
                missing.append(hotel)
            continue

        grouped.setdefault(
            slug,
            {
                "hotel": hotel,
                "city": row["City"],
                "country": row["Country"],
            },
        )
        grouped[slug][row_type] = row_payload(row_type, row)

    output = ROOT / "src" / "data" / "hotelSeasonality.ts"
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        "\n\n".join(
            [
                'export type SeasonalityLabel =\n  | "Best"\n  | "Good"\n  | "Possible"\n  | "Avoid"\n  | "Cheapest"\n  | "Good value"\n  | "Average"\n  | "Expensive"\n  | "Most expensive";\n',
                'export type SeasonalityMonth = {\n  month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec";\n  label: SeasonalityLabel;\n};\n',
                'export type HotelSeasonality = {\n  hotel: string;\n  city: string;\n  country: string;\n  weather: {\n    title: "Best time for weather";\n    months: SeasonalityMonth[];\n    summary: string;\n    notes?: string;\n    confidenceLevel?: string;\n    lastChecked?: string;\n    sources?: string;\n  };\n  price: {\n    title: "Best time for price";\n    months: SeasonalityMonth[];\n    summary: string;\n    notes?: string;\n    confidenceLevel?: string;\n    lastChecked?: string;\n    sources?: string;\n  };\n};\n',
                "export const hotelSeasonality: Record<string, HotelSeasonality> = "
                + json.dumps(grouped, ensure_ascii=False, indent=2)
                + ";\n",
            ]
        ),
        encoding="utf-8",
    )

    print(f"Wrote {len(grouped)} seasonality records to {output}")
    if missing:
        print("Workbook hotels not found in current site content:")
        for hotel in missing:
            print(f"- {hotel}")


if __name__ == "__main__":
    main()
