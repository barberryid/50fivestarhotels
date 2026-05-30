import csv
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE = (ROOT / "public" / "images" / "hotels").resolve()

with (ROOT / "src" / "data" / "imageAttributions.csv").open("r", encoding="utf-8", newline="") as f:
    rows = list(csv.DictReader(f))

keep = set()
for row in rows:
    if row["Local Path Original"]:
        keep.add((ROOT / row["Local Path Original"]).resolve())
    if row["Local Path Web"]:
        keep.add((ROOT / "public" / row["Local Path Web"].lstrip("/")).resolve())

removed = []
for path in BASE.rglob("*"):
    if path.is_file() and path.resolve() not in keep:
        path.unlink()
        removed.append(str(path.relative_to(ROOT)))

print(f"removed {len(removed)}")
for item in removed[:80]:
    print(item)
