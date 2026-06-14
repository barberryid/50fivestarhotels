// One-off: warm up the hardcoded palette across all source files.
// Maps the old functional palette onto the new warm affordable-luxury palette.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = new URL('../src', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

// Order matters: longer / more specific first is not needed here since keys are distinct.
const map = {
  '#F8F5EF': '#F8F2E8', // bg ivory -> warmer ivory
  '#1D2433': '#1F2428', // ink -> warm charcoal
  '#58745A': '#4F6547', // value green -> deeper warm green
  '#6B7280': '#6F685F', // muted -> warm muted
  '#9CA3AF': '#C4B9A6', // footer light gray -> warm gray
  '#9a7338': '#A8763A', // gold hover -> warm gold hover
};

const classMap = {
  'bg-white': 'bg-[#FFFDF8]', // pure white card -> warm white card
};

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (['.astro', '.css', '.ts'].includes(extname(p))) out.push(p);
  }
  return out;
}

let totalFiles = 0;
let totalReplacements = 0;

for (const file of walk(root)) {
  let text = readFileSync(file, 'utf8');
  const original = text;
  let count = 0;

  for (const [from, to] of Object.entries(map)) {
    const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    text = text.replace(re, () => { count++; return to; });
  }
  // class token replacement with word boundary so bg-white/95 also matches
  for (const [from, to] of Object.entries(classMap)) {
    const re = new RegExp('\\b' + from + '(?![\\w-])', 'g');
    text = text.replace(re, () => { count++; return to; });
  }

  if (text !== original) {
    writeFileSync(file, text, 'utf8');
    totalFiles++;
    totalReplacements += count;
    console.log(`  ${file.split(/[\\/]/).slice(-2).join('/')}: ${count}`);
  }
}

console.log(`\nDone: ${totalReplacements} replacements across ${totalFiles} files.`);
