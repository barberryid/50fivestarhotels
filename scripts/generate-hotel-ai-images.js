import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const promptsPath = path.join(root, 'research/images/hotel-ai-image-prompts.json');
const outputDir = path.join(root, 'public/images/hotels');
const responsiveDir = path.join(outputDir, 'responsive');
const auditPath = path.join(root, 'research/images/hotel-ai-image-audit.md');

const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2';
const limit = Number.parseInt(process.env.HOTEL_IMAGE_LIMIT || '', 10);
const startIndex = Number.parseInt(process.env.HOTEL_IMAGE_START_INDEX || '0', 10);
const force = process.env.HOTEL_IMAGE_FORCE === '1';
const quality = process.env.HOTEL_IMAGE_QUALITY || 'high';
const apiUrl = 'https://api.openai.com/v1/images/generations';

if (!apiKey) {
  console.error('OPENAI_API_KEY is unavailable. Set it in the current PowerShell session before running this script.');
  process.exit(1);
}

await mkdir(outputDir, { recursive: true });
await mkdir(responsiveDir, { recursive: true });

const hotels = JSON.parse(await readFile(promptsPath, 'utf8'));
const fromStart = Number.isFinite(startIndex) && startIndex > 0 ? hotels.slice(startIndex) : hotels;
const selectedHotels = Number.isFinite(limit) && limit > 0 ? fromStart.slice(0, limit) : fromStart;
const results = [];

function outputNames(slug, type) {
  const base = `${slug}-${type}`;
  return {
    master: path.join(outputDir, `${base}.webp`),
    medium: path.join(responsiveDir, `${base}-1200.webp`),
    small: path.join(responsiveDir, `${base}-800.webp`),
  };
}

async function generateBase64(prompt, negativePrompt) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      prompt: `${prompt}\n\nAvoid: ${negativePrompt}`,
      n: 1,
      size: '1536x1024',
      quality,
      background: 'opaque',
      output_format: 'webp',
      output_compression: 82,
    }),
  });

  const json = await response.json();
  if (!response.ok) {
    const message = json?.error?.message || JSON.stringify(json);
    throw new Error(`OpenAI image generation failed (${response.status}): ${message}`);
  }

  const b64 = json?.data?.[0]?.b64_json;
  if (!b64) {
    throw new Error('OpenAI image generation response did not include data[0].b64_json.');
  }

  return b64;
}

async function saveDerivatives(buffer, names) {
  await sharp(buffer)
    .resize(1600, 1000, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(names.master);
  await sharp(buffer)
    .resize(1200, 750, { fit: 'cover', position: 'centre' })
    .webp({ quality: 80 })
    .toFile(names.medium);
  await sharp(buffer)
    .resize(800, 500, { fit: 'cover', position: 'centre' })
    .webp({ quality: 78 })
    .toFile(names.small);
}

async function generateOne(hotel, type, prompt) {
  const names = outputNames(hotel.slug, type);
  if (!force && existsSync(names.master) && existsSync(names.medium) && existsSync(names.small)) {
    return { status: 'approved', attempts: 0, note: 'Existing files kept.' };
  }

  let lastError = '';
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      console.log(`Generating ${hotel.slug} ${type}, attempt ${attempt} with ${model}`);
      const b64 = await generateBase64(prompt, hotel.negativePrompt);
      await saveDerivatives(Buffer.from(b64, 'base64'), names);
      return { status: attempt > 1 ? 'regenerated' : 'approved', attempts: attempt, note: 'Generated and resized to WebP derivatives.' };
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
      console.error(lastError);
    }
  }

  return { status: 'manual review needed', attempts: 3, note: lastError };
}

async function writeAudit(currentResults = results) {
  const statusBySlug = new Map(currentResults.map((result) => [result.hotel.slug, result]));
  let generated = 0;
  let manual = 0;

  const sections = hotels.map((hotel) => {
    const foundDusk = existsSync(outputNames(hotel.slug, 'editorial-dusk').master);
    const foundDaylight = existsSync(outputNames(hotel.slug, 'realistic-daylight').master);
    const result = statusBySlug.get(hotel.slug);
    const duskStatus = foundDusk ? (result?.dusk.status ?? 'approved') : (result?.dusk.status ?? 'pending');
    const daylightStatus = foundDaylight ? (result?.daylight.status ?? 'approved') : (result?.daylight.status ?? 'pending');

    if (foundDusk) generated += 1; else if (duskStatus === 'manual review needed') manual += 1;
    if (foundDaylight) generated += 1; else if (daylightStatus === 'manual review needed') manual += 1;

    return `## ${hotel.hotel} - ${hotel.city}, ${hotel.country}

### Required files
- ${hotel.slug}-editorial-dusk.webp
- ${hotel.slug}-realistic-daylight.webp

### Generation result
- Dusk image: ${duskStatus}
- Daylight image: ${daylightStatus}

### Quality notes
- Architectural accuracy: ${foundDusk && foundDaylight ? 'requires visual spot-check against research notes' : 'pending generation or review'}
- Realism: ${foundDusk && foundDaylight ? 'generated; visual review recommended' : 'pending generation or review'}
- Luxury/editorial quality: ${foundDusk && foundDaylight ? 'premium hotel-photography prompt applied' : 'pending generation or review'}
- Issues found: ${[result?.dusk.note, result?.daylight.note].filter(Boolean).join(' / ') || 'none recorded'}
- Final decision: ${foundDusk && foundDaylight ? 'approved pending visual spot-check' : (duskStatus === 'manual review needed' || daylightStatus === 'manual review needed' ? 'manual-review-needed' : 'pending')}
`;
  });

  await writeFile(
    auditPath,
    `# Hotel AI Image Generation Audit

## Summary
- Total hotels: ${hotels.length}
- Images required: ${hotels.length * 2}
- Images generated: ${generated}
- Images approved: ${generated}
- Images needing manual review: ${manual}
- Images pending: ${hotels.length * 2 - generated - manual}
- Model requested: ${model}
- Quality requested: ${quality}

${sections.join('\n')}`,
    'utf8',
  );
}

for (const hotel of selectedHotels) {
  const dusk = await generateOne(hotel, 'editorial-dusk', hotel.prompts.editorialDusk);
  const daylight = await generateOne(hotel, 'realistic-daylight', hotel.prompts.realisticDaylight);
  results.push({ hotel, dusk, daylight });
  await writeAudit();
}

const generatedCount = results.flatMap((r) => [r.dusk, r.daylight]).filter((r) => r.status !== 'manual review needed').length;
const manualCount = results.flatMap((r) => [r.dusk, r.daylight]).filter((r) => r.status === 'manual review needed').length;

await writeAudit();

console.log(`Generation complete. Generated/kept ${generatedCount} images; manual review needed for ${manualCount}.`);
