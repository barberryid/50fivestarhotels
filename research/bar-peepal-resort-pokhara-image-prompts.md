# Bar Peepal Resort — ChatGPT hero image prompts

Two prompts for the AI-generated hero images, matching the editorial, realistic, architectural travel-photography style of the existing hotel heroes on the site (see `angkor-aurora-siem-reap-editorial-dusk.webp` etc.).

**Workflow**
1. Generate both images in ChatGPT (or equivalent), 16:8-ish landscape, high resolution.
2. Save the originals to: `C:\Users\Gary\code\50fivestarhotels\images generated\`
3. Rename / move to the final filenames below.

## Image 1 — Editorial dusk

**Final filename:** `bar-peepal-resort-pokhara-editorial-dusk.webp`
**Placed at:** `public/images/hotels/bar-peepal-resort-pokhara-editorial-dusk.webp`
**Responsive variants:** `public/images/hotels/responsive/bar-peepal-resort-pokhara-editorial-dusk-1200.webp` and `-800.webp`

**Prompt:**

> Editorial-style, photorealistic dusk view of a luxury boutique resort in Pokhara, Nepal. A modern multi-storey property with a glowing rooftop infinity pool reflecting a soft twilight sky in shades of amber, rose and deep blue. Warm terrace and interior lighting spill across stone-and-timber architecture. In the background, the calm expanse of Phewa Lake and the silhouetted Himalayan skyline, with the distinctive twin peak of Machhapuchhre (Fishtail Mountain) and the Annapurna range catching the last alpenglow. Lush sub-tropical garden and palms in the foreground. Tranquil, aspirational, high-end travel-magazine atmosphere. Shot like premium architectural travel photography, wide 16:8 landscape framing, natural depth of field, no people, no text, no logos, no watermarks.

## Image 2 — Realistic daylight

**Final filename:** `bar-peepal-resort-pokhara-realistic-daylight.webp`
**Placed at:** `public/images/hotels/bar-peepal-resort-pokhara-realistic-daylight.webp`
**Responsive variants:** `public/images/hotels/responsive/bar-peepal-resort-pokhara-realistic-daylight-1200.webp` and `-800.webp`

**Prompt:**

> Photorealistic daytime exterior of a boutique resort in Pokhara, Nepal, under a clear blue sky with a few high white clouds. The resort facade in warm stone and timber, fronted by a turquoise pool terrace with loungers and a manicured tropical garden. Beyond the property, Phewa Lake glints in the sun and the snow-capped Annapurna range with Machhapuchhre (Fishtail Mountain) rises sharply on the horizon. Bright, crisp natural midday light, vivid but natural colours, realistic travel-photography style, wide 16:8 landscape framing, no people, no text, no logos, no watermarks.

## Notes

- Keep both images free of recognisable real-brand signage — they are illustrative AI renders, not photographs of the actual building.
- The page currently uses the sourced Wikimedia hero (slot 01, the Annapurna/Phewa view) so nothing 404s until the AI heroes exist.
- After placing the two `.webp` heroes and their four responsive variants (and deleting the matching `.txt` placeholder markers in `public/images/hotels/` and `public/images/hotels/responsive/`), update the frontmatter in `src/content/hotels/bar-peepal-resort-pokhara.md`. Replace the `image:` block with:

```yaml
image:
  src: "/images/hotels/bar-peepal-resort-pokhara-editorial-dusk.webp"
  alt: "AI-generated editorial dusk view of Bar Peepal Resort in Pokhara, Nepal"
  srcSet:
    large: "/images/hotels/responsive/bar-peepal-resort-pokhara-editorial-dusk-1200.webp"
    small: "/images/hotels/responsive/bar-peepal-resort-pokhara-editorial-dusk-800.webp"
```

and add this `generatedGallery` block (mirrors `angkor-aurora-siem-reap.md`, which makes the hero render as a two-image carousel):

```yaml
generatedGallery:
  - src: "/images/hotels/bar-peepal-resort-pokhara-editorial-dusk.webp"
    alt: "AI-generated editorial dusk view of Bar Peepal Resort in Pokhara, Nepal"
    type: "editorial-dusk"
    srcSet:
      large: "/images/hotels/responsive/bar-peepal-resort-pokhara-editorial-dusk-1200.webp"
      small: "/images/hotels/responsive/bar-peepal-resort-pokhara-editorial-dusk-800.webp"
  - src: "/images/hotels/bar-peepal-resort-pokhara-realistic-daylight.webp"
    alt: "AI-generated realistic daylight view of Bar Peepal Resort in Pokhara, Nepal"
    type: "realistic-daylight"
    srcSet:
      large: "/images/hotels/responsive/bar-peepal-resort-pokhara-realistic-daylight-1200.webp"
      small: "/images/hotels/responsive/bar-peepal-resort-pokhara-realistic-daylight-800.webp"
```

You can keep the existing Wikimedia `gallery:` block as-is — it powers the "Images from the stay and destination" section lower on the page and is independent of the hero.
