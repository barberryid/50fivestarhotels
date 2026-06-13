// Replace Booking.com search URLs (searchresults.html?ss=) with canonical
// hotel listing URLs in the form:
//   https://www.booking.com/hotel/{country-code}/{hotel-slug}.en-gb.html
//
// Canonical URLs were resolved via Booking.com search and each was confirmed
// against a matching Booking.com /reviews/ page showing the same hotel name.
// Stores ONLY the clean Booking.com URL — affiliate links are generated
// dynamically at render time (jdoqocy click wrapper + encodeURIComponent).
//
// Run:  node scripts/canonicalize-booking-urls.mjs
// Produces updated .md files + research/booking-url-canonicalization-report.csv

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HOTELS_DIR = join(__dirname, "..", "src", "content", "hotels");
const REPORT_PATH = join(
  __dirname,
  "..",
  "research",
  "booking-url-canonicalization-report.csv"
);

// filename (without .md) -> canonical /hotel/{cc}/{slug} path.
// Notes mark properties whose Booking slug differs from the current brand
// name (Booking keeps the original pre-rebrand slug); all confirmed via the
// matching /reviews/ page.
const CANONICAL = {
  "angkor-aurora-siem-reap": "kh/angkor-aurora",
  "bar-peepal-resort-pokhara": "np/bar-peepal-resort",
  "boton-blue-nha-trang": "vn/boton-blue-nha-trang",
  "cartesiano-puebla": "mx/cartesiano-puebla",
  "casa-don-gustavo-campeche": "mx/casa-don-gustavo-boutique",
  "graffit-gallery-varna": "bg/graffit-gallery",
  "grand-hotel-wagner-palermo": "it/grand-wagner",
  "grand-hotel-yerevan": "am/golden-tulip-yerevan", // pre-rebrand slug
  "hodelpa-nicolas-de-ovando": "do/nicolas-de-ovando-santo-domingo",
  "hermitage-jakarta": "id/the-hermitage-menteng-jakarta-jakarta",
  "hotel-bristol-palace-genoa": "it/bristol-palace",
  "hotel-de-bourgtheroulde-rouen": "fr/de-bourgtheroulde",
  "hotel-de-la-cite-carcassonne": "fr/hotel-de-la-cite",
  "hotel-elephant-weimar": "de/elephantweimarhotel",
  "hotel-suitess-dresden": "de/suitess",
  "hotel-majapahit-surabaya": "id/majapahit-surabaya",
  "hyatt-regency-tashkent": "uz/hyatt-regency-tashkent",
  "im-hotel-makati": "ph/i-39-m-and-residences", // Booking encoding of "I'M Hotel"
  "kimpton-blythswood-square": "gb/blythswood-square",
  "majestic-hotel-kuala-lumpur": "my/the-majestic-kuala-lumpur",
  "mansion-merida-boutique-hotel": "mx/mansion-merida-on-the-park",
  "malak-regency-sarajevo": "ba/malak-regency",
  "millennium-downtown-abu-dhabi": "ae/millennium-plaza-downtown-abu-dhabi",
  "natura-cabana-cabarete": "do/natura-cabana",
  "municipal-hotel-liverpool": "gb/the-municipal-liverpool-mgallery",
  "phoenix-hotel-yogyakarta":
    "id/the-phoenix-yogyakarta-a-member-of-the-mgallery-collection",
  "pleiada-boutique-hotel-iasi": "ro/pleiada-boutique-hotel-and-spa",
  "raweekanlaya-bangkok": "th/raweekanlaya",
  "real-marina-olhao": "pt/real-marina-spa",
  "regent-petite-france-strasbourg": "fr/regentpetitefrance",
  "relais-antica-badia-ragusa": "it/antica-badia-relais",
  "royal-surakarta-heritage": "id/the-royal-surakarta-heritage",
  "silk-path-grand-hue": "vn/green-hue-hue", // pre-rebrand slug
  "sofitel-marrakech": "ma/sofitel-marrakech",
  "steigenberger-handelshof-leipzig":
    "de/steigenberger-grandhotel-handelshof-leipzig",
  "stamba-hotel-tbilisi": "ge/stamba-tbilisi",
  "steigenberger-resort-achti-luxor": "eg/sheraton-luxor-resort", // pre-rebrand slug
  "sublime-samana": "do/sublime-samana",
  "the-grand-york": "gb/cedar-court-grand", // pre-rebrand slug
};

const BOOKING_RE = /^bookingUrl:\s*"([^"]*)"\s*$/m;
const FIELD = (name, src) => {
  const m = src.match(new RegExp(`^${name}:\\s*"?([^"\\n]*?)"?\\s*$`, "m"));
  return m ? m[1].trim() : "";
};

const csvCell = (v) => `"${String(v).replace(/"/g, '""')}"`;

const rows = [];
const files = readdirSync(HOTELS_DIR).filter((f) => f.endsWith(".md")).sort();

for (const file of files) {
  const path = join(HOTELS_DIR, file);
  const slug = file.replace(/\.md$/, "");
  let src = readFileSync(path, "utf8");

  const title = FIELD("title", src);
  const city = FIELD("city", src);
  const country = FIELD("country", src);
  const bm = src.match(BOOKING_RE);
  const original = bm ? bm[1] : "";

  let canonical = original;
  let status;

  if (CANONICAL[slug]) {
    canonical = `https://www.booking.com/hotel/${CANONICAL[slug]}.en-gb.html`;
    if (original !== canonical) {
      src = src.replace(BOOKING_RE, `bookingUrl: "${canonical}"`);
      writeFileSync(path, src, "utf8");
    }
    status = "Updated";
  } else if (/\/hotel\//.test(original)) {
    status = "Already canonical";
  } else if (/searchresults\.html|[?&]ss=/.test(original)) {
    status = "Review Required"; // search URL with no resolved mapping
  } else {
    status = "Already canonical";
  }

  rows.push({ title, city, country, original, canonical, status });
}

const header = ["Hotel Name", "City", "Country", "Original URL", "Canonical URL", "Status"];
const csv =
  header.map(csvCell).join(",") +
  "\n" +
  rows
    .map((r) =>
      [r.title, r.city, r.country, r.original, r.canonical, r.status]
        .map(csvCell)
        .join(",")
    )
    .join("\n") +
  "\n";

writeFileSync(REPORT_PATH, csv, "utf8");

const counts = rows.reduce((a, r) => ((a[r.status] = (a[r.status] || 0) + 1), a), {});
console.log(`Processed ${rows.length} hotels:`);
for (const [k, v] of Object.entries(counts)) console.log(`  ${k}: ${v}`);
console.log(`Report written to ${REPORT_PATH}`);
