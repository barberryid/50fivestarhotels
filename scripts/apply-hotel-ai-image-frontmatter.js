import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { hotels, imageRecords } from './hotel-ai-image-data.js';

const root = path.resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const contentDir = path.join(root, 'src/content/hotels');

function yamlString(value) {
  return String(value).replaceAll('"', '\\"');
}

function imageYaml(hotel, record) {
  const base = `/images/hotels/${record.filename}`;
  const responsiveBase = `/images/hotels/responsive/${hotel.slug}-${record.type}`;
  return `image:
  src: "${base}"
  alt: "${yamlString(record.alt)}"
  srcSet:
    large: "${responsiveBase}-1200.webp"
    small: "${responsiveBase}-800.webp"
`;
}

function generatedGalleryYaml(hotel) {
  const records = imageRecords(hotel);
  const items = records.map((record) => {
    const base = `/images/hotels/${record.filename}`;
    const responsiveBase = `/images/hotels/responsive/${hotel.slug}-${record.type}`;
    return `  - src: "${base}"
    alt: "${yamlString(record.alt)}"
    type: "${record.type}"
    srcSet:
      large: "${responsiveBase}-1200.webp"
      small: "${responsiveBase}-800.webp"`;
  });

  return `generatedGallery:
${items.join('\n')}
`;
}

function replaceBlock(frontmatter, key, replacement) {
  const lines = frontmatter.split('\n');
  const start = lines.findIndex((line) => line === `${key}:`);
  if (start >= 0) {
    let end = start + 1;
    while (end < lines.length && (lines[end].startsWith(' ') || lines[end].trim() === '')) {
      end += 1;
    }
    lines.splice(start, end - start, ...replacement.trimEnd().split('\n'));
    return lines.join('\n');
  }
  return `${frontmatter.trimEnd()}\n${replacement}`;
}

for (const hotel of hotels.filter((item) => item.contentFile)) {
  const filePath = path.join(contentDir, hotel.contentFile);
  const source = await readFile(filePath, 'utf8');
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error(`Missing frontmatter in ${filePath}`);
  }

  let frontmatter = match[1].replace(/\r\n/g, '\n');
  const body = match[2];
  const records = imageRecords(hotel);

  frontmatter = replaceBlock(frontmatter, 'image', imageYaml(hotel, records[0]));
  frontmatter = replaceBlock(frontmatter, 'generatedGallery', generatedGalleryYaml(hotel));

  await writeFile(filePath, `---\n${frontmatter.trimEnd()}\n---\n${body}`, 'utf8');
  console.log(`Updated ${hotel.contentFile}`);
}
