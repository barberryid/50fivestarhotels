import fs from "node:fs";
import path from "node:path";

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });
}

let total = 0;
const issues = [];
const relDist = {};

for (const file of walk("dist")) {
  const text = fs.readFileSync(file, "utf8");
  const anchors = text.match(/<a\b[^>]*href=["'][^"']*booking\.com[^"']*["'][^>]*>/gi) || [];
  for (const a of anchors) {
    total++;
    const m = a.match(/rel=["']([^"']*)["']/i);
    const rel = m ? m[1].toLowerCase() : "";
    relDist[rel] = (relDist[rel] || 0) + 1;
    const values = new Set(rel.split(/\s+/).filter(Boolean));
    if (!(values.has("nofollow") && values.has("sponsored"))) {
      issues.push([file, a.slice(0, 200)]);
    }
  }
}

console.log("Booking.com anchors checked:", total);
console.log("rel value distribution:", relDist);
if (issues.length) {
  console.log("\nMissing required rel values:");
  for (const [file, a] of issues) console.log(file, "\n", a, "\n");
  process.exit(1);
}
console.log("All Booking.com anchors include nofollow and sponsored.");
