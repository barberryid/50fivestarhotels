// One-off Wikimedia Commons image sourcing for Bar Peepal Resort, Pokhara.
// Mirrors the licensing/QC logic of scripts/source_images.py but uses Node + sharp
// (Python/PIL is not available on this machine). Run: node scripts/source_bar_peepal_images.mjs
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SLUG = 'bar-peepal-resort-pokhara';
const UA = '50fivestarhotels-image-audit/1.0 (royalty-free travel image research; contact via barberryid github)';
const webDir = join(ROOT, 'public', 'images', 'hotels', SLUG, 'web');
const origDir = join(ROOT, 'public', 'images', 'hotels', SLUG, 'original');
mkdirSync(webDir, { recursive: true });
mkdirSync(origDir, { recursive: true });

const SLOTS = [
  { idx: 1, type: 'Hero', short: 'pokhara-annapurna', queries: ['Pokhara Annapurna', 'Pokhara panorama Annapurna', 'Phewa lake Annapurna', 'Pokhara valley Himalaya'] },
  { idx: 2, type: 'Hotel', short: 'pokhara-lakeside', queries: ['Pokhara Lakeside', 'Lakeside Pokhara Baidam', 'Pokhara lakeside street', 'Pokhara town'] },
  { idx: 3, type: 'City', short: 'phewa-lake', queries: ['Phewa Lake boats', 'Fewa Lake Pokhara', 'Phewa Tal Pokhara', 'Pokhara lake'] },
  { idx: 4, type: 'Attraction', short: 'machhapuchhre', queries: ['Machhapuchhre', 'Machapuchare Fishtail mountain', 'Annapurna South Pokhara', 'Annapurna range'] },
  { idx: 5, type: 'Food', short: 'nepali-food', queries: ['Dal bhat', 'Dal bhat Nepal thali', 'Momo Nepali dumpling', 'Nepali food'] },
  { idx: 6, type: 'Secondary', short: 'world-peace-pagoda', queries: ['World Peace Pagoda Pokhara', 'Shanti Stupa Pokhara', 'Pokhara World Peace Pagoda', 'Davis Falls Pokhara'] },
];

const BAD = ['booking.com', 'agoda', 'expedia', 'tripadvisor', 'kayak', 'trivago', 'instagram', 'pinterest'];
const used = new Set();

const strip = (s) => (s ? String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '');
const meta = (ext, k) => strip(ext?.[k]?.value) || '';

function licenseOk(name, url) {
  const t = `${name} ${url}`.toLowerCase();
  if (/noncommercial|non-commercial|-nc|by-nc|no commercial|-nd|noderiv/.test(t)) return false;
  return /cc[ -]?by|cc0|public domain|pdm|pd-|attribution|share[ -]?alike|by-sa|gfdl/.test(t);
}

async function apiJson(params) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({ format: 'json', formatversion: '2', ...params }).forEach(([k, v]) => u.searchParams.set(k, v));
  for (let a = 0; a < 5; a++) {
    const r = await fetch(u, { headers: { 'User-Agent': UA } });
    if (r.status === 429) { await new Promise((res) => setTimeout(res, 12000 + a * 8000)); continue; }
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }
  throw new Error('rate limited');
}

async function search(query) {
  const d = await apiJson({
    action: 'query', generator: 'search', gsrsearch: query, gsrnamespace: '6', gsrlimit: '20',
    prop: 'imageinfo', iiprop: 'url|size|mime|extmetadata', iiurlwidth: '2200',
  });
  return d?.query?.pages ?? [];
}

function scorePage(page) {
  const info = page.imageinfo?.[0] ?? {};
  const ext = info.extmetadata ?? {};
  const title = page.title ?? '';
  const mime = info.mime ?? '';
  const w = +info.width || 0, h = +info.height || 0;
  const lic = meta(ext, 'LicenseShortName');
  const licUrl = meta(ext, 'LicenseUrl');
  const blob = `${title} ${meta(ext, 'ImageDescription')} ${meta(ext, 'Credit')} ${info.descriptionurl ?? ''}`.toLowerCase();
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(mime)) return null;
  if (w < 1000 || h < 650) return null;
  if (BAD.some((b) => blob.includes(b))) return null;
  if (!licenseOk(lic, licUrl)) return null;
  const hardReject = ['watermark', 'logo', 'map of', 'street sign', 'diagram', 'military', 'flag of', 'coat of arms'];
  if (hardReject.some((t) => blob.includes(t))) return null;
  let score = 0;
  if (w >= h) score += 25;          // prefer landscape
  if (w >= 1600) score += 20;
  if (/quality image|featured picture/.test(blob)) score += 10;
  score += Math.min(w / 400, 10);
  return score;
}

async function choose(slot) {
  const cands = [];
  for (const q of slot.queries) {
    let pages = [];
    try { pages = await search(q); } catch (e) { continue; }
    for (const p of pages) {
      const url = p.imageinfo?.[0]?.descriptionurl;
      if (!url || used.has(url)) continue;
      const s = scorePage(p);
      if (s == null) continue;
      cands.push({ s, p, q });
    }
    if (cands.length) break;
    await new Promise((r) => setTimeout(r, 250));
  }
  if (!cands.length) return null;
  cands.sort((a, b) => b.s - a.s);
  const winner = cands[0];
  used.add(winner.p.imageinfo[0].descriptionurl);
  return winner;
}

async function download(url) {
  for (let a = 0; a < 5; a++) {
    const r = await fetch(url, { headers: { 'User-Agent': UA } });
    if (r.status === 429) { await new Promise((res) => setTimeout(res, 20000 + a * 10000)); continue; }
    if (!r.ok) throw new Error('download HTTP ' + r.status);
    return Buffer.from(await r.arrayBuffer());
  }
  throw new Error('download rate limited');
}

function attribution(title, creator, lic) {
  const isPd = /public domain|cc0|pdm/i.test(lic);
  if (isPd) return `Image: ${title} by ${creator || 'unknown'}, public domain via Wikimedia Commons.`;
  return `Photo by ${creator || 'unknown'} via Wikimedia Commons, ${lic}`;
}

const results = [];
for (const slot of SLOTS) {
  const win = await choose(slot);
  if (!win) { console.log(`SLOT ${slot.idx} ${slot.type}: NO IMAGE FOUND`); results.push({ ...slot, found: false }); continue; }
  const info = win.p.imageinfo[0];
  const ext = info.extmetadata ?? {};
  const title = (win.p.title || '').replace(/^File:/, '');
  const creator = meta(ext, 'Artist');
  const lic = meta(ext, 'LicenseShortName');
  const licUrl = meta(ext, 'LicenseUrl');
  const pageUrl = info.descriptionurl;
  const dl = info.thumburl || info.url;
  const base = `${SLUG}-${String(slot.idx).padStart(2, '0')}-${slot.type.toLowerCase()}-${slot.short}`;
  const webPath = join(webDir, `${base}.webp`);
  const origExt = info.mime === 'image/png' ? 'png' : info.mime === 'image/webp' ? 'webp' : 'jpg';
  const origPath = join(origDir, `${base}.${origExt}`);
  try {
    const buf = await download(dl);
    writeFileSync(origPath, buf);
    let img = sharp(buf, { failOn: 'none' }).rotate();
    const m = await img.metadata();
    if ((m.width || 0) > 2200) img = img.resize({ width: 2200 });
    await img.webp({ quality: 82, effort: 6 }).toFile(webPath);
  } catch (e) {
    console.log(`SLOT ${slot.idx} ${slot.type}: ERROR ${e.message}`);
    results.push({ ...slot, found: false, error: e.message });
    continue;
  }
  const rec = {
    idx: slot.idx, type: slot.type, found: true,
    src: `/images/hotels/${SLUG}/web/${base}.webp`,
    subject: title.replace(/\.(jpg|jpeg|png|webp)$/i, ''),
    creator, license: lic, licenseUrl: licUrl, sourcePageUrl: pageUrl,
    attribution: attribution(title.replace(/\.(jpg|jpeg|png|webp)$/i, ''), creator, lic),
    matchedQuery: win.q,
  };
  results.push(rec);
  console.log(`SLOT ${slot.idx} ${slot.type}: ${lic} | ${rec.subject.slice(0, 70)}`);
  await new Promise((r) => setTimeout(r, 300));
}

writeFileSync(join(ROOT, 'research', 'bar-peepal-image-meta.json'), JSON.stringify(results, null, 2));
console.log('\nDONE. meta -> research/bar-peepal-image-meta.json; found=' + results.filter((r) => r.found).length + '/6');
