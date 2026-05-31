# AI Hotel Image Generation Workflow

Use this workflow when adding fully AI-generated luxury hotel images to the 50 Five-Star Hotels site.

## Goal

Create and integrate realistic, premium hotel photography for selected hotel candidates. Final website images must be 100% AI-generated and should stay close to the real character of each hotel.

Do not download, crop, edit, or republish online hotel/source photos as final assets. Online images may be reviewed only as visual research references for architecture, materials, setting, pool or garden layout, entrance, facade, colors, signage, and atmosphere.

## Key Rules

- Use OpenAI `gpt-image-2` through the OpenAI Images API as the preferred generation model.
- Use `OPENAI_API_KEY` from the environment. Never hard-code or print API keys.
- Generate two images per hotel:
  - editorial luxury dusk/evening image
  - realistic daylight travel-photography image
- Save final master images as optimized WebP files at `1600 x 1000`.
- Also create responsive WebP derivatives at `1200 x 750` and `800 x 500`.
- Use lowercase kebab-case filenames.
- Avoid readable logos or prominent brand marks unless accurate.
- Prefer architectural realism over text/signage realism because AI text can distort.
- Do not copy a single online source-photo composition too closely.

## Project Paths

Project folder:

```text
C:\Users\Gary\code\50fivestarhotels
```

Required folders:

```text
research/images/
public/images/hotels/
public/images/hotels/responsive/
```

Research and generation files:

```text
research/images/hotel-ai-image-reference-research.md
research/images/hotel-ai-image-prompts.json
research/images/hotel-ai-image-audit.md
```

Current helper scripts:

```text
scripts/hotel-ai-image-data.js
scripts/write-hotel-ai-image-files.js
scripts/generate-hotel-ai-images.js
scripts/apply-hotel-ai-image-frontmatter.js
```

## Filename Pattern

Master files:

```text
hotel-city-editorial-dusk.webp
hotel-city-realistic-daylight.webp
```

Responsive files:

```text
public/images/hotels/responsive/hotel-city-editorial-dusk-1200.webp
public/images/hotels/responsive/hotel-city-editorial-dusk-800.webp
public/images/hotels/responsive/hotel-city-realistic-daylight-1200.webp
public/images/hotels/responsive/hotel-city-realistic-daylight-800.webp
```

Example:

```text
angkor-aurora-siem-reap-editorial-dusk.webp
angkor-aurora-siem-reap-realistic-daylight.webp
```

## Research Process

For each hotel, review official, brand, booking, travel, and visual reference pages to understand the real hotel. Do not download source images.

Save only:

- source page URLs
- useful image/page URLs
- observed visual features
- uncertainty notes

Try to identify:

- facade style
- entrance
- pool, courtyard, garden, or rooftop
- palm trees, greenery, balconies, windows, arches, columns
- dominant colors and materials
- heritage/design/business/resort character
- surrounding city or landscape context
- the most attractive realistic angle for the hotel

Preferred source types:

- official hotel website
- official brand page, for example Accor, Marriott, Melia, Hyatt, NH, Millennium
- reputable booking/travel pages, only for visual research
- travel articles or architecture/design reviews with useful visual context
- Google image results, only for visual research

## Reference Research Log Format

In `research/images/hotel-ai-image-reference-research.md`, create one section per hotel:

```markdown
## Hotel Name - City, Country

### Reference URLs reviewed
- URL 1
- URL 2
- URL 3

### Observed visual features
- Architecture:
- Entrance/facade:
- Pool/garden/courtyard:
- Colours/materials:
- Setting:
- Useful details to preserve:

### Recommended image direction
- Dusk image:
- Daylight image:

### Uncertainty / manual-review notes
- Note ambiguity, weak source coverage, conflicting visuals, or risks.
```

## Prompt Requirements

Create hotel-specific prompts in `research/images/hotel-ai-image-prompts.json`.

Each hotel needs:

- `editorialDusk`
- `realisticDaylight`
- a consistent negative prompt

Do not use one generic prompt for all hotels. A consistent base style is fine, but each prompt must include specific architectural and setting details discovered during research.

JSON shape:

```json
[
  {
    "hotel": "Angkor Aurora",
    "city": "Siem Reap",
    "country": "Cambodia",
    "slug": "angkor-aurora-siem-reap",
    "contentFile": "angkor-aurora-siem-reap.md",
    "prompts": {
      "editorialDusk": "...",
      "realisticDaylight": "..."
    },
    "negativePrompt": "..."
  }
]
```

Base creative direction:

```text
Luxury hotel editorial transformation - generate realistic AI hotel photography.

Create a beautiful, realistic hotel photograph that conveys luxury, upmarket travel, anticipation, and the excitement of staying somewhere special. The image should be inspired by the real hotel's architecture, setting, facade, entrance, pool/courtyard, garden, colors, and overall atmosphere, based on visual research. The result must be fully AI-generated and original, not a copy of any single source photograph.
```

Dusk image direction:

```text
Create a polished, aspirational travel image in the style of a premium hotel magazine feature. Show the hotel in the most flattering way, with either the exterior entrance or the pool courtyard as the hero. Emphasize warm architectural lighting, elegant symmetry, clean composition, golden-hour, sunset, or violet-dusk tones, glowing windows, inviting ambience, subtle reflections if appropriate, crisp architectural detail, and a luxurious atmospheric travel mood. The image should feel upmarket, cinematic, elegant, and exciting, while still believable.
```

Daylight image direction:

```text
Create a second image of the same hotel that feels more realistic and natural, using daylight colors and a true-to-life travel-photography look. Show another strong angle of the hotel or a different key feature such as the pool courtyard, facade, garden, rooftop, or entrance. Emphasize natural daylight tones, realistic sky and lighting, true-to-life materials, greenery, pool-water colors, clear architectural detail, a fresh inviting premium travel feel, and a more authentic less stylized look than the dusk image.
```

Consistent negative prompt:

```text
No collage, no split screen, no fantasy architecture, no cartoon style, no illustration, no exaggerated neon colours, no warped columns, no distorted balconies, no impossible windows, no unreadable large text, no fake hotel brand logo, no crowds, no people dominating the frame, no low-resolution look, no fisheye distortion, no messy clutter, no over-saturated HDR, no unrealistic reflections, no duplicated architectural elements, no direct copy of any reference photo.
```

## Generation

Use:

```powershell
$env:OPENAI_API_KEY=[Environment]::GetEnvironmentVariable('OPENAI_API_KEY','User')
node scripts\generate-hotel-ai-images.js
```

Useful resume controls:

```powershell
$env:HOTEL_IMAGE_START_INDEX='19'
$env:HOTEL_IMAGE_LIMIT='6'
node scripts\generate-hotel-ai-images.js
```

The generator should:

- read prompts from `research/images/hotel-ai-image-prompts.json`
- generate two images per hotel
- save master WebP files to `public/images/hotels/`
- create responsive derivatives in `public/images/hotels/responsive/`
- write results to `research/images/hotel-ai-image-audit.md`
- stop clearly if `OPENAI_API_KEY` is unavailable
- never expose the full API key

If the API returns PNG/JPEG or another supported format first, convert locally to optimized WebP.

The project currently uses `sharp` for image resizing/conversion.

## Quality Control

Inspect generated output manually or with a contact sheet. Reject and regenerate if:

- architecture is visibly distorted
- the hotel looks too fictional
- columns, windows, or balconies are warped or duplicated unrealistically
- it looks like a palace/resort unrelated to the real hotel
- it copies a single reference-photo composition too closely
- it contains fake/unreadable major signage
- people dominate the frame
- it looks cartoonish or obviously AI-generated
- it does not look like premium hotel photography
- it does not preserve known hotel character

Maximum retry limit:

- Try up to 3 generation attempts per image.
- If still unsuitable, keep it out of integration or save the best attempt in a review folder and mark `manual-review-needed` in the audit.

## Audit Format

`research/images/hotel-ai-image-audit.md` should use:

```markdown
# Hotel AI Image Generation Audit

## Summary
- Total hotels:
- Images required:
- Images generated:
- Images approved:
- Images needing manual review:

## Hotel Name - City, Country

### Required files
- hotel-city-editorial-dusk.webp
- hotel-city-realistic-daylight.webp

### Generation result
- Dusk image: approved / regenerated / manual review needed
- Daylight image: approved / regenerated / manual review needed

### Quality notes
- Architectural accuracy:
- Realism:
- Luxury/editorial quality:
- Issues found:
- Final decision:
```

## Website Integration

After generation, inspect the current project structure. Do not assume data shape.

Likely files:

```text
src/content/hotels/
src/content.config.ts
src/components/HotelCard.astro
src/components/PhotoCarousel.astro
src/layouts/HotelLayout.astro
public/images/hotels/
```

Current integration pattern:

- use the editorial dusk image as the primary `image` in hotel frontmatter
- add both images to `generatedGallery`
- display order is dusk first, daylight second
- `PhotoCarousel.astro` renders the generated gallery on hotel detail pages
- `HotelCard.astro` uses the primary image for cards
- use `srcSet` metadata for responsive derivatives
- do not add a visible page label saying the images are AI-generated

Alt text pattern:

```text
AI-generated editorial dusk view of [Hotel Name] in [City], [Country]
AI-generated realistic daylight view of [Hotel Name] in [City], [Country]
```

Example frontmatter:

```yaml
image:
  src: "/images/hotels/angkor-aurora-siem-reap-editorial-dusk.webp"
  alt: "AI-generated editorial dusk view of Angkor Aurora in Siem Reap, Cambodia"
  srcSet:
    large: "/images/hotels/responsive/angkor-aurora-siem-reap-editorial-dusk-1200.webp"
    small: "/images/hotels/responsive/angkor-aurora-siem-reap-editorial-dusk-800.webp"
generatedGallery:
  - src: "/images/hotels/angkor-aurora-siem-reap-editorial-dusk.webp"
    alt: "AI-generated editorial dusk view of Angkor Aurora in Siem Reap, Cambodia"
    type: "editorial-dusk"
    srcSet:
      large: "/images/hotels/responsive/angkor-aurora-siem-reap-editorial-dusk-1200.webp"
      small: "/images/hotels/responsive/angkor-aurora-siem-reap-editorial-dusk-800.webp"
  - src: "/images/hotels/angkor-aurora-siem-reap-realistic-daylight.webp"
    alt: "AI-generated realistic daylight view of Angkor Aurora in Siem Reap, Cambodia"
    type: "realistic-daylight"
    srcSet:
      large: "/images/hotels/responsive/angkor-aurora-siem-reap-realistic-daylight-1200.webp"
      small: "/images/hotels/responsive/angkor-aurora-siem-reap-realistic-daylight-800.webp"
```

## Brand and Realism Guidance

The images should support the 50 Five-Star Hotels brand:

- affordable luxury
- polished but not fake
- elegant but not snobbish
- premium travel feel
- honest and believable
- not generic stock-photo luxury
- visually strong enough for hotel cards and homepage features

Some hotels are more business-oriented or local five-star than true international luxury. Keep those premium but believable.

Examples:

- NH Collection Bogota WTC Royal should look like a polished urban business hotel, not a tropical resort.
- Novotel Ahmedabad should look like a modern premium city hotel, not a palace.
- Grand Mercure Medan Angkasa should look like a large urban hotel, not a boutique resort.
- Millennium Downtown Abu Dhabi should look like a central Gulf city hotel, not a beachfront palace.
- Graffit Gallery Design Hotel should look design-forward and urban, not heritage grand.
- Hotel Majapahit and Phoenix Yogyakarta can lean more strongly into heritage architecture and atmospheric luxury.

## Validation

After integration:

```powershell
npm.cmd run build
```

Then:

- fix build errors
- confirm all referenced image files exist
- confirm master images are `1600 x 1000`
- confirm responsive images are `1200 x 750` and `800 x 500`
- inspect contact sheets or sample pages
- check `git status`
- stage only task-related files
- commit with a clear message
- do not push unless explicitly instructed

## Final Report

Report:

- total images generated
- total hotels completed
- any hotels needing manual review
- location of generated images
- location of research logs
- files changed
- build result
- commit hash, if committed

Never claim that source images were downloaded or used as website assets. The final website assets must be fully AI-generated.
