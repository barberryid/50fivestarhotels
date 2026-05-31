import { writeFile } from 'node:fs/promises';
import { hotels, imageRecords } from './hotel-ai-image-data.js';

const auditPath = new URL('../research/images/hotel-ai-image-audit.md', import.meta.url);
const reason = process.env.HOTEL_IMAGE_BLOCK_REASON || 'OpenAI image generation blocked before assets could be produced.';

const sections = hotels.map((hotel) => {
  const records = imageRecords(hotel);
  return `## ${hotel.hotel} - ${hotel.city}, ${hotel.country}

### Required files
- ${records[0].filename}
- ${records[1].filename}

### Generation result
- Dusk image: manual review needed
- Daylight image: manual review needed

### Quality notes
- Architectural accuracy: not reviewed because generation did not complete
- Realism: not reviewed because generation did not complete
- Luxury/editorial quality: not reviewed because generation did not complete
- Issues found: ${reason}
- Final decision: manual-review-needed
`;
});

await writeFile(
  auditPath,
  `# Hotel AI Image Generation Audit

## Summary
- Total hotels: ${hotels.length}
- Images required: ${hotels.length * 2}
- Images generated: 0
- Images approved: 0
- Images needing manual review: ${hotels.length * 2}
- Blocking issue: ${reason}

${sections.join('\n')}`,
  'utf8',
);

console.log('Wrote blocked/manual-review audit.');
