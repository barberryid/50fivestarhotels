import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HOTELS_DIR = ROOT / "src" / "content" / "hotels"
ATTRIBUTIONS = ROOT / "src" / "data" / "imageAttributions.json"


def yaml_string(value):
    return json.dumps(str(value or ""), ensure_ascii=False)


def clean_subject(subject):
    subject = re.sub(r"\.(jpg|jpeg|png|webp)$", "", subject or "", flags=re.I)
    subject = subject.replace("_", " ").replace("  ", " ").strip()
    return subject


def concise_attribution(record):
    photographer = record.get("photographer") or "Unknown / not listed"
    source = record.get("sourceSite") or "source"
    license_name = record.get("license") or "licence not listed"
    if photographer == "Unknown / not listed":
        return f"Image via {source}, {license_name}"
    if "public domain" in license_name.lower():
        return f"Image by {photographer} via {source}, public domain"
    return f"Photo by {photographer} via {source}, {license_name}"


def alt_text(record):
    subject = clean_subject(record.get("subject"))
    city = record.get("city")
    country = record.get("country")
    image_type = record.get("imageType")
    if image_type == "Food":
        return f"{subject}, a local food or culture image for {city}, {country}"
    if image_type == "Hotel":
        return f"{subject}, a stay or neighbourhood image for {city}, {country}"
    return f"{subject} in or near {city}, {country}"


def image_block(record, indent="  "):
    lines = [
        f"{indent}src: {yaml_string(record.get('localPathWeb'))}",
        f"{indent}alt: {yaml_string(alt_text(record))}",
        f"{indent}attribution: {yaml_string(concise_attribution(record))}",
        f"{indent}sourcePageUrl: {yaml_string(record.get('sourcePageUrl'))}",
        f"{indent}sourceSite: {yaml_string(record.get('sourceSite'))}",
        f"{indent}photographer: {yaml_string(record.get('photographer'))}",
        f"{indent}license: {yaml_string(record.get('license'))}",
        f"{indent}licenseUrl: {yaml_string(record.get('licenseUrl'))}",
    ]
    return "\n".join(lines)


def gallery_item(record):
    lines = [
        f"  - src: {yaml_string(record.get('localPathWeb'))}",
        f"    alt: {yaml_string(alt_text(record))}",
        f"    type: {yaml_string(record.get('imageType'))}",
        f"    subject: {yaml_string(clean_subject(record.get('subject')))}",
        f"    attribution: {yaml_string(concise_attribution(record))}",
        f"    sourceSite: {yaml_string(record.get('sourceSite'))}",
        f"    sourcePageUrl: {yaml_string(record.get('sourcePageUrl'))}",
        f"    photographer: {yaml_string(record.get('photographer'))}",
        f"    license: {yaml_string(record.get('license'))}",
        f"    licenseUrl: {yaml_string(record.get('licenseUrl'))}",
    ]
    return "\n".join(lines)


records = json.loads(ATTRIBUTIONS.read_text(encoding="utf-8"))
by_slug = {}
for record in records:
    if record.get("safeToUse") != "Yes" or not record.get("localPathWeb"):
        continue
    by_slug.setdefault(record["hotelSlug"], []).append(record)

for slug, items in by_slug.items():
    items.sort(key=lambda record: int(record.get("imageSlot") or 0))
    path = HOTELS_DIR / f"{slug}.md"
    if not path.exists():
        continue
    text = path.read_text(encoding="utf-8")
    hero = next((record for record in items if record.get("imageType") == "Hero"), items[0])
    new_image = "image:\n" + image_block(hero) + "\n  todo: false"
    gallery = "gallery:\n" + "\n".join(gallery_item(record) for record in items[:6])

    text = re.sub(
        r"image:\n(?:  .+\n)+",
        new_image + "\n",
        text,
        count=1,
    )
    if re.search(r"\ngallery:\n", text):
        text = re.sub(r"\ngallery:\n(?:  - .+\n(?:    .+\n)*)+", "\n" + gallery + "\n", text, count=1)
    else:
        text = text.replace("\nhighlights:\n", "\n" + gallery + "\nhighlights:\n", 1)
    path.write_text(text, encoding="utf-8")
    print(f"updated {path.name} with {len(items[:6])} images")
