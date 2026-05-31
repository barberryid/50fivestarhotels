import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const promptsPath = path.join(root, 'research/destination-ai-image-prompts.md');
const outputDir = path.join(root, 'public/images/destinations');
const sourceDir = path.join(outputDir, 'source');
const auditPath = path.join(root, 'research/destination-image-audit.md');

const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2';
const quality = process.env.DESTINATION_IMAGE_QUALITY || 'high';
const force = process.argv.includes('--force') || process.env.DESTINATION_IMAGE_FORCE === '1';
const apiUrl = 'https://api.openai.com/v1/images/generations';

const jobs = [
  {
    destination: 'Siem Reap',
    slug: 'siem-reap',
    subject: 'Angkor Wat sunrise',
    filename: 'angkor-wat-siem-reap-ai',
    alt: 'Angkor Wat at sunrise in Siem Reap, Cambodia',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no fake signage, no surreal architecture. Create a realistic editorial travel photograph of Angkor Wat at sunrise in Siem Reap, Cambodia. Show the temple silhouette reflected in the lotus pond, soft pink and gold dawn sky, gentle morning mist, restrained colours, a calm premium travel mood. Keep the composition wide and balanced for a destination card. No crowds in the foreground, no text, no logos, no fantasy elements.',
  },
  {
    destination: 'Yogyakarta',
    slug: 'yogyakarta',
    subject: 'Borobudur sunrise',
    filename: 'borobudur-yogyakarta-ai',
    alt: 'Borobudur temple at sunrise near Yogyakarta, Indonesia',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no fake signage, no surreal architecture. Create a realistic editorial travel photograph of Borobudur near Yogyakarta at sunrise. Show the stone stupas and Buddha silhouettes in warm dawn light, with soft mist and distant green hills. The image should feel ancient, peaceful and culturally rich, not overdramatic. Landscape 16:10 composition, premium travel-magazine style, no text, no logos, no crowds dominating the image.',
  },
  {
    destination: 'Luxor',
    slug: 'luxor',
    subject: 'Nile balloons at dawn',
    filename: 'luxor-nile-balloons-ai',
    alt: 'Hot air balloons over the Nile at dawn in Luxor, Egypt',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no fake signage, no surreal architecture. Create a realistic editorial travel photograph of Luxor at dawn, with hot air balloons floating over the Nile and the West Bank landscape. Include palm silhouettes, soft golden-violet sunrise light, a hint of river reflection, and an archaeological travel mood. Make it beautiful but believable, not fantasy-like. No text, no logos, no exaggerated pyramids, no incorrect monuments.',
  },
  {
    destination: 'Marrakech',
    slug: 'marrakech',
    subject: 'Jardin Majorelle inspired garden',
    filename: 'jardin-majorelle-marrakech-ai',
    alt: 'Palm-framed Moroccan garden inspired by Jardin Majorelle in Marrakech',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no fake signage, no surreal architecture. Create a realistic editorial travel photograph inspired by Jardin Majorelle in Marrakech: cobalt blue walls, yellow accents, lush palms, cactus forms, terracotta paths, refined Moroccan garden atmosphere. Use warm daylight, elegant composition, premium travel style. Avoid copying any exact copyrighted photo composition. No text, no logos, no people posing.',
  },
  {
    destination: 'Abu Dhabi',
    slug: 'abu-dhabi',
    subject: 'Sheikh Zayed Grand Mosque golden hour',
    filename: 'sheikh-zayed-grand-mosque-abu-dhabi-ai',
    alt: 'Sheikh Zayed Grand Mosque at golden hour in Abu Dhabi',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no fake signage, no surreal architecture. Create a realistic editorial travel photograph of Sheikh Zayed Grand Mosque in Abu Dhabi at golden hour. Show the white marble domes and minarets glowing softly, with reflective pools and clean architectural symmetry. Serene, grand, premium, believable. No text, no logos, no artificial fantasy skyline, no people dominating the frame.',
  },
  {
    destination: 'Jakarta',
    slug: 'jakarta',
    subject: 'Kota Tua heritage restaurant atmosphere',
    filename: 'cafe-batavia-jakarta-ai',
    alt: 'Historic Kota Tua restaurant atmosphere in Jakarta',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no fake signage, no surreal architecture. Create a realistic editorial travel photograph of a historic restaurant atmosphere in Jakarta Kota Tua district, inspired by Cafe Batavia: colonial-era dining room or facade, dark timber, tall windows, warm lamps, tiled floors, old-world Indonesian-Dutch heritage mood, subtle food-and-travel atmosphere. Premium but believable, no visible brand name, no readable signage, no logos, no copied exact interior layout.',
  },
  {
    destination: 'Sarajevo',
    slug: 'sarajevo',
    subject: 'Bascarsija Ottoman bazaar street',
    filename: 'bascarsija-sarajevo-ai',
    alt: 'Bascarsija bazaar street in Sarajevo, Bosnia and Herzegovina',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no fake signage, no surreal architecture. Create a realistic editorial travel photograph of Bascarsija in Sarajevo, Bosnia and Herzegovina. Show an atmospheric Ottoman bazaar street with stone paving, small wooden shopfronts, warm lantern light, copper crafts or cafe tables, and surrounding historic texture. Travel-magazine style, elegant and inviting, no text, no readable shop signs, no staged tourist crowd.',
  },
  {
    destination: 'Olhao',
    slug: 'olhao',
    subject: 'Ria Formosa boats and lagoon islands',
    filename: 'ria-formosa-olhao-ai',
    alt: 'Small boats on the Ria Formosa lagoon near Olhao, Portugal',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no fake signage, no surreal architecture. Create a realistic editorial travel photograph of Ria Formosa near Olhao in the Algarve, Portugal. Show small boats on calm lagoon water, low barrier islands in the distance, whitewashed coastal buildings or marina hints, golden late-afternoon light, relaxed coastal luxury mood. Clear landscape composition for a destination card. No text, no logos, no over-tropical beach fantasy.',
  },
  {
    destination: 'Tbilisi',
    slug: 'tbilisi',
    subject: 'Old Tbilisi sulfur baths',
    filename: 'old-tbilisi-sulfur-baths-ai',
    alt: 'Old Tbilisi sulfur bath domes with the Narikala hillside in Georgia',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no fake signage, no surreal architecture. Create a realistic editorial travel photograph of Old Tbilisi, Georgia, with sulfur bath domes, warm brick and stone textures, balconies, and the Narikala hillside in the background. Use soft late-afternoon or dusk light, atmospheric but realistic colours, premium design-travel mood. No text, no logos, no modern glass skyline dominating the frame.',
  },
  {
    destination: 'Iasi',
    slug: 'iasi',
    subject: 'Palace of Culture',
    filename: 'palace-of-culture-iasi-ai',
    alt: 'Palace of Culture in Iasi, Romania',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no fake signage, no surreal architecture. Create a realistic editorial travel photograph of the Palace of Culture in Iasi, Romania. Show the ornate neo-Gothic palace facade in elegant daylight or soft golden hour, with a clean public square foreground and refined European city-break mood. Balanced landscape composition, no text, no logos, no crowds dominating the image.',
  },
  {
    destination: 'Surabaya',
    slug: 'surabaya',
    subject: 'Surabaya Old Town / House of Sampoerna heritage atmosphere',
    filename: 'surabaya-old-town-house-of-sampoerna-ai',
    alt: 'Historic colonial architecture in Surabaya Old Town, Indonesia',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no readable signage, no surreal architecture. Create a realistic editorial travel photograph of Surabaya Old Town, Indonesia, inspired by the House of Sampoerna heritage district. Show elegant Dutch-colonial architecture, whitewashed or pale historic facades, shaded arcades, tropical greenery, and warm late-afternoon light. The image should feel atmospheric, historic, refined and connected to Surabaya colonial heritage. No copied exact building layout, no crowds dominating the image.',
  },
  {
    destination: 'Kuala Lumpur',
    slug: 'kuala-lumpur',
    subject: 'Merdeka Square',
    filename: 'merdeka-square-kuala-lumpur-ai',
    alt: 'Sultan Abdul Samad Building at Merdeka Square in Kuala Lumpur, Malaysia',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no readable signage, no surreal architecture. Create a realistic editorial travel photograph of Merdeka Square in Kuala Lumpur, Malaysia, with the Sultan Abdul Samad Building as the main architectural subject. Show Moorish arches, copper-toned domes, the clock tower, a broad civic square, tropical city greenery, and warm golden-hour light. No distorted clock tower, no modern skyscrapers dominating the scene.',
  },
  {
    destination: 'Bangkok',
    slug: 'bangkok',
    subject: 'Old Bangkok temple district',
    filename: 'wat-pho-bangkok-ai',
    alt: 'Ornate temple architecture in old Bangkok, Thailand',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no readable signage, no surreal architecture. Create a realistic editorial travel photograph of old Bangkok, Thailand, inspired by Wat Pho and the Grand Palace temple district. Show ornate Thai temple roofs, golden chedi details, glazed ceramic patterns, warm cream and gold tones, and soft morning light. No crowds dominating the image, no fantasy temple shapes, no over-saturated colours.',
  },
  {
    destination: 'Solo',
    slug: 'solo',
    subject: 'Javanese palace courtyard',
    filename: 'mangkunegaran-palace-solo-ai',
    alt: 'Traditional Javanese palace courtyard in Solo, Indonesia',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no readable signage, no surreal architecture. Create a realistic editorial travel photograph of a royal Javanese palace courtyard in Solo, Indonesia, inspired by Mangkunegaran Palace or Keraton Surakarta. Show carved timber columns, open pendopo architecture, patterned floor tiles, refined Javanese symmetry, warm interior shade, and tropical courtyard greenery. No fantasy palace elements.',
  },
  {
    destination: 'Hue',
    slug: 'hue',
    subject: 'Imperial City',
    filename: 'hue-imperial-city-ai',
    alt: 'Imperial City citadel gate in Hue, Vietnam',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no readable signage, no surreal architecture. Create a realistic editorial travel photograph of the Imperial City in Hue, Vietnam. Show a historic citadel gate with red and gold imperial details, stone walls, tiled roofs, a calm moat or courtyard foreground, and soft humid daylight. No crowds dominating the scene, no fantasy palace architecture.',
  },
  {
    destination: 'Nha Trang',
    slug: 'nha-trang',
    subject: 'Po Nagar Cham Towers',
    filename: 'po-nagar-towers-nha-trang-ai',
    alt: 'Po Nagar Cham Towers in Nha Trang, Vietnam',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no readable signage, no surreal architecture. Create a realistic editorial travel photograph of Po Nagar Cham Towers in Nha Trang, Vietnam. Show warm red-brick Cham temple towers on a gentle rise, tropical greenery, a hint of the coastal city or blue sea in the background, and clean daylight or soft golden-hour light. No crowds dominating the image, no fantasy ruins.',
  },
  {
    destination: 'Makati',
    slug: 'makati',
    subject: 'Intramuros',
    filename: 'intramuros-manila-ai',
    alt: 'Historic colonial street in Intramuros, Manila, Philippines',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no readable signage, no surreal architecture. Create a realistic editorial travel photograph of Intramuros in Manila, Philippines. Show a colonial-era stone street, Spanish-era walls, warm lantern light or late-afternoon sun, tropical greenery, old wooden balconies, and a refined heritage-city atmosphere. No beach or resort cues.',
  },
  {
    destination: 'Varna',
    slug: 'varna',
    subject: 'Sea Garden',
    filename: 'varna-sea-garden-ai',
    alt: 'Sea Garden and Black Sea promenade in Varna, Bulgaria',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no readable signage, no surreal architecture. Create a realistic editorial travel photograph of Varna, Bulgaria, focused on the Sea Garden and Black Sea promenade. Show leafy park paths, elegant coastal landscaping, glimpses of the Black Sea, warm summer daylight, and a relaxed European seaside-city mood. No crowded beach scene, no Mediterranean cliches.',
  },
  {
    destination: 'Tashkent',
    slug: 'tashkent',
    subject: 'Tashkent Metro',
    filename: 'tashkent-metro-mosaics-ai',
    alt: 'Decorative metro station interior in Tashkent, Uzbekistan',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no readable signage, no surreal architecture. Create a realistic editorial travel photograph inspired by the Tashkent Metro in Uzbekistan. Show a grand underground station with elegant Soviet-modern architecture, mosaic or ceramic decorative panels, marble columns, warm symmetrical lighting, and a refined Silk Road capital atmosphere. No readable station signs, no crowds dominating the frame.',
  },
  {
    destination: 'Yerevan',
    slug: 'yerevan',
    subject: 'Cascade Complex',
    filename: 'yerevan-cascade-ararat-ai',
    alt: 'Cascade Complex with Mount Ararat atmosphere in Yerevan, Armenia',
    prompt:
      'Create a realistic editorial travel photograph for an affordable-luxury travel website. Landscape composition, 16:10 aspect ratio, natural light, premium but believable colour grading, sharp but not overprocessed, no text, no logos, no watermark, no readable signage, no surreal architecture. Create a realistic editorial travel photograph of Yerevan, Armenia, focused on the Cascade Complex with Mount Ararat atmosphere in the distance. Show pale stone steps, outdoor sculpture or architectural terraces, warm Armenian tuff city tones, soft golden-hour light, and a hazy mountain backdrop. No fantasy mountain scale, no crowds dominating the image.',
  },
];

const negativePrompt =
  'No collage, no split screen, no fantasy architecture, no cartoon style, no illustration, no exaggerated neon colours, no warped columns, no distorted domes, no impossible windows, no readable text, no fake brand logo, no crowds, no people dominating the frame, no low-resolution look, no fisheye distortion, no over-saturated HDR, no unrealistic reflections, no direct copy of any reference photo.';

if (!apiKey) {
  console.error('OPENAI_API_KEY is unavailable. Set it in the current PowerShell session before running this script.');
  process.exit(1);
}

await mkdir(outputDir, { recursive: true });
await mkdir(sourceDir, { recursive: true });

async function generateBase64(prompt) {
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
      output_format: 'png',
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

async function saveImage(job, buffer) {
  const sourcePath = path.join(sourceDir, `${job.filename}.png`);
  const webpPath = path.join(outputDir, `${job.filename}.webp`);
  await writeFile(sourcePath, buffer);
  await sharp(buffer)
    .resize(1600, 1000, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(webpPath);
}

async function writeAudit(results) {
  const generatedOn = new Date().toISOString();
  const sections = jobs.map((job) => {
    const result = results.find((item) => item.filename === job.filename);
    const filePath = `/images/destinations/${job.filename}.webp`;
    return `## ${job.destination}

- File: \`${filePath}\`
- Subject: ${job.subject}
- Model: ${model}
- Prompt: ${job.prompt}
- Status: ${result?.status ?? (existsSync(path.join(outputDir, `${job.filename}.webp`)) ? 'Generated' : 'Pending')}
- Generation date: ${result?.generatedOn ?? generatedOn}
- Manual review: Pending
`;
  });

  await writeFile(
    auditPath,
    `# Destination AI Image Audit

Prompts were created from visual-reference research. Online images were reviewed only as references; no online images are used as website assets.

${sections.join('\n')}`,
    'utf8',
  );
}

console.log(`Using ${promptsPath} for human-readable prompt documentation.`);

const results = [];
for (const job of jobs) {
  const sourcePath = path.join(sourceDir, `${job.filename}.png`);
  const webpPath = path.join(outputDir, `${job.filename}.webp`);
  if (!force && existsSync(sourcePath) && existsSync(webpPath)) {
    console.log(`Skipping ${job.destination}; files already exist.`);
    results.push({ filename: job.filename, status: 'Existing files kept', generatedOn: 'previous run' });
    continue;
  }

  console.log(`Generating ${job.destination}: ${job.subject}`);
  const b64 = await generateBase64(job.prompt);
  await saveImage(job, Buffer.from(b64, 'base64'));
  results.push({ filename: job.filename, status: 'Generated', generatedOn: new Date().toISOString() });
  await writeAudit(results);
}

await writeAudit(results);
console.log(`Destination image generation complete. ${results.length} jobs processed.`);
