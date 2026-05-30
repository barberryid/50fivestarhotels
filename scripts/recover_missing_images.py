import csv
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import source_images as si


ALTERNATES = {
    "hotel-majapahit-surabaya-03": ["Jembatan Merah Surabaya", "Surabaya skyline", "Surabaya old city"],
    "phoenix-hotel-yogyakarta-01": ["Tugu Yogyakarta", "Yogyakarta Tugu monument", "Yogyakarta Java city"],
    "phoenix-hotel-yogyakarta-02": ["Bank Negara Indonesia Yogyakarta Main Branch", "Yogyakarta colonial architecture", "Taman Sari Yogyakarta"],
    "phoenix-hotel-yogyakarta-05": ["Gudeg Yogyakarta", "Yogyakarta food", "Malioboro food Yogyakarta"],
    "raweekanlaya-bangkok-02": ["Dusit Palace Bangkok", "Vimanmek Mansion Bangkok", "Bangkok heritage house"],
    "angkor-aurora-siem-reap-02": ["Siem Reap hotel pool", "Siem Reap resort", "Cambodia boutique hotel pool"],
    "royal-surakarta-heritage-01": ["Keraton Surakarta", "Surakarta palace", "Solo Indonesia Keraton"],
    "pleiada-boutique-hotel-iasi-01": ["Palace of Culture Iasi", "Iasi Romania city", "Iasi Palace of Culture"],
    "steigenberger-resort-achti-luxor-05": ["Egyptian cuisine", "Luxor market Egypt", "Egyptian food market"],
    "silk-path-grand-hue-01": ["Imperial City Hue Vietnam", "Hue Vietnam citadel", "Perfume River Hue"],
    "hermitage-jakarta-01": ["Menteng Jakarta", "Jakarta colonial architecture", "Kota Tua Jakarta"],
    "boton-blue-nha-trang-01": ["Nha Trang beach Vietnam", "Nha Trang sea view", "Nha Trang coastline"],
    "real-marina-olhao-06": ["Armona Island", "Culatra Island Algarve", "Ria Formosa island"],
    "millennium-downtown-abu-dhabi-02": ["Abu Dhabi skyline", "Abu Dhabi downtown", "Abu Dhabi city skyline"],
    "millennium-downtown-abu-dhabi-05": ["Emirati cuisine", "UAE food", "Abu Dhabi food"],
    "majestic-hotel-kuala-lumpur-01": ["Kuala Lumpur railway station", "Kuala Lumpur heritage architecture", "Merdeka Square Kuala Lumpur"],
    "raweekanlaya-bangkok-01": ["Bangkok old town temple", "Grand Palace Bangkok", "Bangkok heritage architecture"],
    "stamba-hotel-tbilisi-02": ["Tbilisi architecture", "Tbilisi design architecture", "Tbilisi Rustaveli Avenue architecture"],
    "silk-path-grand-hue-02": ["Hue Vietnam colonial building", "Hue Vietnam architecture", "Hue Vietnam garden"],
    "hermitage-jakarta-02": ["Menteng Jakarta heritage architecture", "Jakarta colonial architecture", "Menteng Jakarta"],
    "im-hotel-makati-02": ["Makati skyline", "Makati business district", "Makati city"],
    "im-hotel-makati-05": ["Filipino food Manila", "Makati food", "Philippines street food"],
    "real-marina-olhao-01": ["Olhao marina", "Olhao Portugal waterfront", "Olhao Algarve marina"],
    "graffit-gallery-varna-02": ["Varna Bulgaria architecture", "Varna Bulgaria city", "Varna cathedral"],
    "graffit-gallery-varna-05": ["Varna Bulgaria food", "Bulgarian food", "Varna market"],
    "millennium-downtown-abu-dhabi-01": ["Abu Dhabi skyline", "Abu Dhabi Corniche skyline", "Abu Dhabi downtown"],
    "boton-blue-nha-trang-05": ["Nha Trang seafood", "Nha Trang market", "Vietnam seafood Nha Trang"],
    "raweekanlaya-bangkok-01": ["Wat Benchamabophit Bangkok", "Grand Palace Bangkok exterior", "Bangkok old town temple"],
    "raweekanlaya-bangkok-02": ["Jim Thompson House Bangkok", "Vimanmek Mansion Bangkok", "Dusit Palace Bangkok"],
    "stamba-hotel-tbilisi-05": ["Khinkali Georgia", "Khachapuri Georgia", "Georgian cuisine"],
    "grand-hotel-yerevan-05": ["Armenian food Yerevan", "Yerevan cafe", "Armenian lavash"],
    "im-hotel-makati-05": ["Filipino cuisine", "Philippines street food", "Manila food"],
    "graffit-gallery-varna-01": ["Varna Sea Garden", "Varna Black Sea beach", "Varna Bulgaria skyline"],
    "graffit-gallery-varna-02": ["Dormition Cathedral Varna", "Varna Opera", "Varna city center"],
    "hermitage-jakarta-04": ["National Monument Jakarta", "Monas Jakarta", "Jakarta National Monument"],
    "hermitage-jakarta-06": ["Kota Tua Jakarta", "Jakarta old town", "Fatahillah Square Jakarta"],
}

FORCE_IDS = {
    "majestic-hotel-kuala-lumpur-01",
    "raweekanlaya-bangkok-01",
    "stamba-hotel-tbilisi-02",
    "silk-path-grand-hue-02",
    "hermitage-jakarta-02",
    "im-hotel-makati-02",
    "im-hotel-makati-05",
    "real-marina-olhao-01",
    "graffit-gallery-varna-02",
    "graffit-gallery-varna-05",
    "millennium-downtown-abu-dhabi-01",
    "boton-blue-nha-trang-05",
    "raweekanlaya-bangkok-02",
    "stamba-hotel-tbilisi-05",
    "grand-hotel-yerevan-05",
    "graffit-gallery-varna-01",
    "hermitage-jakarta-04",
    "hermitage-jakarta-06",
}


def read_rows():
    path = ROOT / "src" / "data" / "imageAttributions.csv"
    with path.open("r", encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def hotel_lookup():
    return {slug: (rank, hotel, city, country) for rank, hotel, slug, city, country, _ in si.HOTELS}


def recover_row(row, lookup):
    slug = row["Hotel Slug"]
    _, hotel, city, country = lookup[slug]
    image_id = row["ID"]
    slot = int(row["Image Slot"])
    image_type = row["Image Type"]
    short_subject = row["ID"].split(f"{slug}-{slot:02d}-")[-1] or si.slugify(row["Subject"])
    queries = ALTERNATES.get(image_id, [row["Subject"], f"{city} {country} travel"])
    page, matched_query = si.choose_image(queries[0], queries[1:] + [f"{city} {country} travel"])
    if not page:
        row["Notes"] = row["Notes"] + " Recovery pass did not find a safe downloadable Commons image."
        return row

    info = page["imageinfo"][0]
    meta = info.get("extmetadata") or {}
    title = page.get("title", "").replace("File:", "")
    creator = si.clean_meta_value(meta, "Artist")
    licence = si.clean_meta_value(meta, "LicenseShortName")
    licence_url = si.clean_meta_value(meta, "LicenseUrl")
    page_url = info.get("descriptionurl", "")
    download_url = info.get("thumburl") or info.get("url", "")
    ext = si.ext_from_mime(info.get("mime", ""), download_url)
    base = f"{slug}-{slot:02d}-{image_type.lower()}-{si.slugify(short_subject)}"
    original_name = f"{base}.{ext}"
    web_name = f"{base}.webp"
    original_path = ROOT / "public" / "images" / "hotels" / slug / "original" / original_name
    web_path = ROOT / "public" / "images" / "hotels" / slug / "web" / web_name
    original_path.parent.mkdir(parents=True, exist_ok=True)
    web_path.parent.mkdir(parents=True, exist_ok=True)

    try:
        si.download(download_url, original_path)
        width, height, web_size = si.optimize(original_path, web_path)
    except Exception as exc:
        row["Notes"] = row["Notes"] + f" Recovery download failed: {exc}"
        return row

    row.update({
        "Subject": title or row["Subject"],
        "File Name Original": original_name,
        "File Name Web": web_name,
        "Local Path Original": str(original_path.relative_to(ROOT)).replace("\\", "/"),
        "Local Path Web": "/" + str(web_path.relative_to(ROOT / "public")).replace("\\", "/"),
        "Source Site": "Wikimedia Commons",
        "Source Page URL": page_url,
        "Direct Download URL": download_url,
        "Photographer / Creator": creator,
        "Photographer Profile URL": "",
        "Licence": licence,
        "Licence URL": licence_url,
        "Attribution Required?": "No" if ("public domain" in licence.lower() or licence.upper().startswith("CC0")) else "Yes",
        "Recommended Attribution Text": si.attribution_text(title, creator, licence, page_url),
        "Commercial Use Allowed?": "Yes",
        "Modification Allowed?": "Yes",
        "Verification Date": si.TODAY,
        "Notes": f"Recovered with Commons query: {matched_query}. Hotel-specific image not found under safe licence; using destination alternative.",
        "Safe to Use?": "Yes",
        "Width": width,
        "Height": height,
        "Web File Size Bytes": web_size,
    })
    print((f"recovered {image_id}: {title[:90]}").encode("ascii", "replace").decode("ascii"))
    return row


if __name__ == "__main__":
    rows = read_rows()
    lookup = hotel_lookup()
    si.used_pages = {r["Source Page URL"] for r in rows if r.get("Source Page URL")}
    si.rows = []
    si.rejected = []
    recovered = []
    for row in rows:
        if row["Safe to Use?"] != "Yes" or row["ID"] in FORCE_IDS:
            row = recover_row(row, lookup)
        recovered.append(row)
    si.rows = recovered
    si.write_csv_json()
    si.write_workbook()
    si.write_audit()
    print(f"DONE recovered safe={sum(1 for r in recovered if r['Safe to Use?'] == 'Yes')} review={sum(1 for r in recovered if r['Safe to Use?'] != 'Yes')}")
