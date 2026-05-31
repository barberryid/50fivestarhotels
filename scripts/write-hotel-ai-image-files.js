import { mkdir, writeFile } from 'node:fs/promises';
import { hotels, negativePrompt, buildPrompts, imageRecords } from './hotel-ai-image-data.js';

const researchDir = new URL('../research/images/', import.meta.url);

function researchMarkdown() {
  const sections = hotels.map((hotel) => {
    const f = hotel.features;
    const d = hotel.directions;
    return `## ${hotel.hotel} - ${hotel.city}, ${hotel.country}

### Reference URLs reviewed
${hotel.sources.map((source) => `- ${source}`).join('\n')}

### Observed visual features
- Architecture: ${f.architecture}
- Entrance/facade: ${f.entrance}
- Pool/garden/courtyard: ${f.pool}
- Colours/materials: ${f.colours}
- Setting: ${f.setting}
- Useful details to preserve: ${f.details}

### Recommended image direction
- Dusk image: ${d.dusk}
- Daylight image: ${d.daylight}

### Uncertainty / manual-review notes
- ${hotel.uncertainty ?? 'No major source conflict noted from the reviewed URLs; final AI output should still be checked for architectural believability and property-specific character.'}
`;
  });

  return `# Hotel AI Image Reference Research

Online source pages were reviewed only as visual research references. No online hotel/source photos are used as website assets.

${sections.join('\n')}`;
}

function promptsJson() {
  return JSON.stringify(
    hotels.map((hotel) => ({
      hotel: hotel.hotel,
      city: hotel.city,
      country: hotel.country,
      slug: hotel.slug,
      contentFile: hotel.contentFile,
      prompts: buildPrompts(hotel),
      negativePrompt,
    })),
    null,
    2,
  );
}

function auditMarkdown() {
  const sections = hotels.map((hotel) => {
    const records = imageRecords(hotel);
    return `## ${hotel.hotel} - ${hotel.city}, ${hotel.country}

### Required files
- ${records[0].filename}
- ${records[1].filename}

### Generation result
- Dusk image: pending
- Daylight image: pending

### Quality notes
- Architectural accuracy: pending visual review
- Realism: pending visual review
- Luxury/editorial quality: pending visual review
- Issues found: pending
- Final decision: pending
`;
  });

  return `# Hotel AI Image Generation Audit

## Summary
- Total hotels: ${hotels.length}
- Images required: ${hotels.length * 2}
- Images generated: 0
- Images approved: 0
- Images needing manual review: 0

${sections.join('\n')}`;
}

await mkdir(researchDir, { recursive: true });
await writeFile(new URL('hotel-ai-image-reference-research.md', researchDir), researchMarkdown(), 'utf8');
await writeFile(new URL('hotel-ai-image-prompts.json', researchDir), `${promptsJson()}\n`, 'utf8');
await writeFile(new URL('hotel-ai-image-audit.md', researchDir), auditMarkdown(), 'utf8');

console.log(`Wrote research image files for ${hotels.length} hotels.`);
