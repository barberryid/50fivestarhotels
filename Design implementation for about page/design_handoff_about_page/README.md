# Handoff: About Page — 50 Five-Star Hotels

## Overview
A redesigned **About page** for *50 Five-Star Hotels*, a personal hotel-research project by Gary and Isabel Wilson. The page's job is conversion and trust, not biography: it positions Gary & Isabel's judgement as the engine behind the site's tools (Hotel Finder, Best Time to Go) and repeatedly routes visitors back into those tools. It explains *how* hotel value is judged, *where* value tends to hide, and *who* is behind the research — while keeping a warm, editorial, illustrated feel.

The desired takeaway for a visitor: *"Gary and Isabel travel widely, take notes obsessively, and built this site to help ordinary travellers find hotels where the experience feels significantly better than the price."*

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look, copy and behavior. They are **not production code to copy directly**.

The HTML uses a small custom runtime (`support.js`) that turns `*.dc.html` "Design Component" files into rendered pages. **Ignore that runtime when implementing.** Your task is to **recreate this design in the target codebase's existing environment** (React, Vue, Astro, plain HTML/CSS, etc.) using its established patterns, components and styling conventions. If no front-end environment exists yet, choose the most appropriate one for the project and implement there.

> Note: the live site this replaces is at `https://50fivestarhotels.com/about/`. Match the new design, not the old page.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy and interactions are all specified below and should be recreated faithfully. Reproduce the layout, palette and type scale precisely; substitute the codebase's own button/card primitives where they exist, but keep the visual result matching.

---

## Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| Cream / page background | `#fdfaf3` | Page background |
| Panel cream | `#f5f0e6` | "The standard" box, chips, light promise band |
| Gradient panel | `#fbf4e4 → #f6ecd6 → #efe3c7` | Final CTA panel (linear-gradient 150deg) |
| Ink (primary text / dark sections) | `#15201d` | Headings, dark band, footer, dark CTA card |
| Ink-soft (body text) | `#283531` | Lead paragraphs |
| Muted text | `#5c6762` | Captions, microcopy |
| Muted text (cards) | `#4f5a55` | Card body copy (slightly darker for contrast) |
| Clay (primary accent / CTA) | `#b85832` | Primary buttons, numerals, rules |
| Clay-hover | `#a64c29` | Primary button hover |
| Clay-text | `#8d3f1f` | Eyebrow labels, secondary button text, active nav |
| Forest (secondary accent) | `#1f4c3b` | Icon chips, "catch" card accent, value numerals |
| Gold | `#c49a3a` | Badges/tags on illustration cards, dark-section eyebrows |
| Border | `#ddd6c4` | Card borders, hairline dividers |
| Border (warm, CTA) | `#e4d9bd` | Final CTA panel border |
| On-dark text | `rgba(244,239,228,0.7–0.82)` | Body text on ink backgrounds |

### Typography
- **Display / headings:** `'Playfair Display', serif` — weight 600 (and italic 500 for pull-quotes). Negative letter-spacing on large headings (`-0.015em` to `-0.022em`), line-height `1.04–1.12`.
- **Body / prose:** `'Source Serif 4', serif` — weight 300–500, line-height `1.6–1.7`.
- **UI / labels / chips / buttons / nav:** `Inter, sans-serif`.
- **Eyebrow labels:** Inter, weight 800, `text-transform:uppercase`, `letter-spacing:0.18em`, `font-size:12px`, color `#8d3f1f` (gold `#c49a3a` on dark).

Type scale (fluid `clamp()` — min, preferred, max):
| Element | clamp |
|---|---|
| H1 (hero) | `clamp(2.4rem, 4.6vw, 4rem)` |
| H2 (section) | `clamp(1.9rem, 3vw, 2.6rem)` |
| H2 (final CTA) | `clamp(2rem, 3.4vw, 3rem)` |
| Lead paragraph | `clamp(1.1rem, 1.5vw, 1.3125rem)` |
| Card title | `18–20px` |
| Card body | `15–15.5px` |
| Microcopy / caption | `12.5–14px` |

Google Fonts import (weights used): `Playfair Display` (400–800 + italics), `Source Serif 4` (300–600 + italics), `Inter` (400–900).

### Spacing & layout
- **Content max-width:** `1200px`, centered, horizontal padding `clamp(20px, 4vw, 48px)`.
- **Section vertical rhythm:** top `clamp(20px, 3vw, 32px)`, bottom `clamp(40px, 6vw, 72px)`; most sections begin with a `1px solid #ddd6c4` top border + `padding-top: clamp(28px, 4vw, 44px)`.
- **Hero top padding** is intentionally tighter: `clamp(28px, 3.5vw, 52px)`.
- **Grid gaps:** `16px` between cards; `clamp(36px, 5vw, 72px)` between hero/text+image columns.

### Border radius
- Cards `14–18px`; large CTA panel `22px`; buttons `10px`; image frames `16px` (inner image `6–9px`); chips/pills `999px`.

### Shadows
- Card (subtle): `0 2px 14px rgba(21,32,29,0.05)`
- Image card (hero): `0 18px 50px rgba(21,32,29,0.18)`
- Image card (smaller): `0 14px 40px rgba(21,32,29,0.14)`
- Infographic frame: `0 16px 48px rgba(21,32,29,0.14)`
- Final CTA panel: `0 22px 60px rgba(21,32,29,0.12)`
- Primary button: `0 8px 22px rgba(184,88,50,0.22)` (CTA panel: `0 10px 26px rgba(184,88,50,0.26)`)

---

## Screens / Views

Single long-scroll page. Sticky header + 8 stacked sections + footer, in this order.

### Header (sticky)
- **Layout:** sticky top, `z-index:40`, background `rgba(253,250,243,0.9)` + `backdrop-filter: blur(10px)`, bottom border `1px #ddd6c4`. Inner row max-width 1200px, height `72px`, space-between.
- **Left:** star logo (`assets/logo-star.svg`, 26×26) + wordmark "50 Five-Star Hotels" (Playfair 600, 17px).
- **Right nav (Inter 14px/500):** The Collection (`/all-hotels/`), Hotel Finder (`/hotel-finder/`), Best Time (`/best-time-to-go/`), **About** (`/about/`, active — color `#8d3f1f`, weight 600).

### 1 · Hero
- **Layout:** two-column flex, wraps to stacked on narrow; columns `align-items:center`, gap `clamp(36px,5vw,72px)`. Text column `flex:1 1 440px`; image column `flex:1 1 460px`.
- **Text column:**
  - Eyebrow: "About 50 Five-Star Hotels"
  - **H1:** "Built to help you find your dream hotel at a sensible price."
  - **Body:** "50 Five-Star Hotels is a personal research project by Gary and Isabel Wilson for travellers who want more than the cheapest room. We help you build smarter hotel searches, compare value honestly, and find stays where the experience feels significantly better than the price." (max-width `50ch`, `text-wrap:pretty`)
  - **Buttons (flex, gap 14px):** Primary "Use the Hotel Finder →" (clay fill, white text, → `/hotel-finder/`); Secondary "See how we choose hotels" (clay outline, anchors to `#how-we-judge-value`).
  - **Microcopy (Inter 13.5px, `#5c6762`):** "No account needed. No booking pressure. Just better prompts for smarter travel research."
- **Image column:** white "postcard" card, padding 16px, rotated `-1.2deg`, max-width `530px`, border `#ddd6c4`, shadow `0 18px 50px rgba(21,32,29,0.18)`.
  - Gold pill badge overlapping top-left (rotated `-1.6deg`): "Gary & Isabel's travel notes".
  - Image: `assets/hero-gary-isabel.png` (radius 9px).
  - Caption under image (Source Serif italic 14px, centered): "Gary & Isabel's travel notes became the basis for the Hotel Finder."

### 2 · What this site helps you do (trust panel)
- Eyebrow "Why use it"; **H2** "What this site helps you do"; intro (`#5c6762`, max-width 56ch): "It exists to make one decision easier: which hotel actually offers good value, and what should you check before you book?"
- **Grid:** `repeat(auto-fit, minmax(380px, 1fr))`, gap 16px. Six cards, each = white card (border `#ddd6c4`, radius 14px, padding 22px) with a circular forest icon chip (44×44, bg `rgba(31,76,59,0.1)`, color `#1f4c3b`, 1.8px-stroke line icon) + title (Playfair 19px) + body (Source Serif 15px, `#4f5a55`).
  1. **Build a better hotel shortlist** — "Start from a focused brief, not a hundred open tabs." *(icon: checklist)*
  2. **Compare value, location and five-star reality** — "See what the rate really buys before you commit." *(icon: scales/balance)*
  3. **Find the best month to travel** — "Line up price, weather and crowds in your favour." *(icon: calendar)*
  4. **Avoid expensive hotel mistakes** — "Spot dated rooms, weak locations, hidden costs and inflated ratings early." *(icon: alert triangle)*
  5. **Look beyond obvious luxury hotels** — "Find heritage stays, boutiques and local five-stars, not just the big names." *(icon: eye)*
  6. **Find stays that feel better than the price** — "Rooms, locations and hotel experiences that punch above what you paid." *(icon: sparkle/star)*

### 3 · Why we built 50 Five-Star Hotels (origin)
- Two-column flex (`align-items:flex-start`). Text `flex:1 1 460px`; quote card `flex:0 1 360px`.
- Eyebrow "The origin"; **H2** "Why we built 50 Five-Star Hotels".
- **Prose** (Source Serif `1.1875rem`, line-height 1.7), four paragraphs:
  1. "It started with a simple habit: whenever we stayed somewhere that felt much better than the price, we kept a note."
  2. "Over time, those notes became a pattern. In some places, a standard room costs more than a luxury suite elsewhere. In other places, a heritage hotel, spa resort, stylish city hotel or locally classified five-star property can be surprisingly affordable."
  3. "We became interested in the question behind the bargain: why does this hotel cost what it does, and what is the traveller really getting for the money?"
  4. "50 Five-Star Hotels grew out of that question."
- **Quote card** ("notebook clipping"): ruled-paper background via `repeating-linear-gradient(#fffdf7, #fffdf7 30px, #efe8d7 30px, #efe8d7 31px)`, border `#ddd6c4`, radius 12px, rotated `1.3deg`, padding `30px 28px 26px`. Forest pill badge top-left "From the notes". Blockquote (Playfair italic 500, 23px): "I didn't realise I could stay somewhere like this for that price." Caption (Inter 12.5px): "The line we kept hearing ourselves say."

### 4 · How we judge hotel value (methodology) — `id="how-we-judge-value"`
- Eyebrow "How we choose"; **H2** "How we judge hotel value"; intro: "A cheap five-star is not automatically a good hotel. We look for the point where hotel quality, price, place and timing come together — then we ask what the catch might be." (`scroll-margin-top:88px` for the hero anchor jump.)
- **Grid:** `repeat(auto-fit, minmax(250px, 1fr))`, gap 16px. **Five** numbered cards (white, radius 16px, padding 26px, subtle shadow). Numerals in Playfair 600, 2rem. Numerals 01–03 clay `#b85832`; **card 05 "The catch"** uses forest accents (numeral `#1f4c3b` + `border-top:3px solid #1f4c3b`).
  - **01 The hotel** — "Does it have comfort, character, service, design, facilities or atmosphere that makes the stay feel special?"
  - **02 The price** — "Is the rate unusually low for what the traveller receives, especially compared with the local five-star or near-luxury market?"
  - **03 The place** — "Does the hotel make sense as part of a real trip, with worthwhile sights, food, neighbourhood interest or practical access nearby?"
  - **04 The timing** — "Is there a better month, season or weekday pattern when the same hotel becomes much better value?"
  - **05 The catch** — "What should travellers check before booking — location, dated rooms, taxes, breakfast, reviews, seasonality, transport, noise or inflated five-star labels?"
- **"The standard" box** below cards (margin-top 16px): panel-cream `#f5f0e6`, border, radius 14px, padding `26px clamp(24px,3vw,34px)`, flex row (label + paragraph). Label "The standard" (eyebrow style). Body: "We are not trying to prove that every hotel is perfect. We are trying to help travellers decide whether the value is real."

### 4b · Where hotel value hides (value patterns)
- Eyebrow "Value patterns"; **H2** "Where hotel value hides"; intro (max-width 720px): "Good hotel value is rarely random. It often appears when place, timing, classification and traveller expectations do not line up neatly."
- **Grid:** `repeat(auto-fit, minmax(260px, 1fr))`, gap 16px. Five cards (white, radius 14px, padding 24px). Each has a small forest numeral (Inter 800, 13px, `#1f4c3b`), title (Playfair 18px), body (Source Serif 15px, `#4f5a55`).
  1. **Heritage hotels outside the obvious capitals** — "Older grand hotels can offer atmosphere and space for less than newer luxury brands."
  2. **Low-season five-star bargains** — "Some cities and resorts become dramatically better value outside peak dates."
  3. **Local five-stars with honest expectations** — "Not every five-star is international luxury, but some still offer excellent comfort for the price."
  4. **Business hotels in underrated cities** — "Strong facilities, good service and weak leisure demand can create excellent rates."
  5. **Destinations people overlook** — "Sometimes the best value is not in the hotel alone, but in the combination of hotel, city, food and timing."

### 5 · How we travel (who's behind it) — `id="how-we-travel"`
- Two-column flex (`align-items:center`). Text `flex:1 1 460px`; image card `flex:0 1 320px`.
- Eyebrow "Who's behind it"; **H2** "How we travel".
- **Prose** (two paragraphs):
  1. "We are independent travellers who like beautiful places, difficult places, historic cities, mountains, islands, food, archaeology and the occasional hotel that makes a trip feel special."
  2. "Most of our trips are not luxury trips. That is exactly why good hotel value matters. A hotel does not need to be the grandest in the city to be worth remembering. It needs to make the trip better for a price that still feels sensible."
- **Credibility line** (Source Serif 16px, `#4f5a55`, `border-left:2px solid #b85832`, padding-left 18px): "Gary has visited 154 of the world's 193 UN member states and has spent years working on systems to find good hotels — especially places where the price, location, timing and hotel quality line up unusually well."
- **Chips** (flex-wrap, gap 9px; cream pill, border, clay text, Inter 13px/600, padding `7px 15px`): "154 countries visited", "Independent travel style", "Hotel-value research systems", "Beautiful and difficult places", "Travel notes, not generic lists".
- **Image card:** white frame rotated `1.4deg`, max-width 320px, gold pill badge top-right "On the road", image `assets/couple-walking.png`.

### 6 · The story behind the search (full illustration) — *toggleable*
- Eyebrow "From the notebooks"; **H2** "The story behind the search"; intro (max-width 680px): "The site grew out of years of travel notes: places we stayed, places we almost booked, hotels that looked better than their price, and hotels where the catch only became clear after closer research."
- **Figure** (centered column): white frame (padding `clamp(14px,2vw,22px)`, border, radius 14px, shadow `0 16px 48px rgba(21,32,29,0.14)`, max-width 640px) wrapping `assets/about-infographic-full.png`. The frame is a link opening the image full-size in a new tab.
  - **"Tap to view large" pill** overlaid bottom-center of the image: `rgba(21,32,29,0.82)` bg, cream text, Inter 12px/600, pill, slight blur. (Do not rely on the text inside the illustration for comprehension — it's decorative at page scale.)
  - **Caption** (Inter 13px, centered, max-width 52ch): "Gary's original about-page illustration — the full travel scrapbook behind the hotel-value search."
  - **Button** "Open full illustration ↗" (clay outline, radius 10px) — also opens the full image.

### 7 · The promise (full-bleed band) — *theme-toggleable*
- Full-width band. **Default theme = dark:** background `#15201d`. Inner content max-width 880px, centered, padding `clamp(56px,8vw,104px) clamp(20px,4vw,48px)`.
- Eyebrow "The promise" (gold on dark).
- **Lead** (Source Serif `clamp(1.15rem,1.7vw,1.4rem)`, on-dark text, max-width 60ch): "We are not trying to find the cheapest hotels. We are trying to find hotels where ordinary travellers can enjoy comfort, character and a sense of occasion without paying normal luxury prices."
- Clay rule (46×2px), centered.
- Small label "The question behind every recommendation".
- **Pull-quote** (Playfair italic 500, `clamp(1.7rem,3.4vw,2.6rem)`, cream, max-width 20ch): "Would a reasonably experienced traveller be pleasantly surprised by what they get for the money?"

### 8 · Final conversion CTA
- **Warm gradient panel:** `linear-gradient(150deg, #fbf4e4 0%, #f6ecd6 52%, #efe3c7 100%)`, border `1px #e4d9bd`, radius 22px, shadow `0 22px 60px rgba(21,32,29,0.12)`, padding `clamp(40px,6vw,72px) clamp(26px,5vw,72px)`, centered text. Decorative soft gold radial glow top-right (`220px` circle, `radial-gradient(circle, rgba(196,154,58,0.22), transparent 70%)`, behind content).
- Eyebrow "Start your search".
- **H2** "Ready to search smarter?"
- **Body** (max-width 58ch): "Start with a destination, budget and travel style. The Hotel Finder will help you build a better research prompt — one that looks beyond cheap rooms and checks whether the value is real."
- **Buttons (centered, flex):** Primary "Build your hotel search →" (clay fill → `/hotel-finder/`); Secondary "Find your best month →" (clay outline → `/best-time-to-go/`).
- **Microcopy:** "No account needed. No booking pressure. Just better prompts for smarter travel research."

### Footer
- Full-width, background `#15201d`, on-dark text. Inner max-width 1200px, padding `clamp(44px,5vw,64px) clamp(20px,4vw,48px)`.
- **Left:** logo + wordmark, then tagline (Source Serif 15px): "Fifty stays under €250 a night, in places worth the trip."
- **Right:** three link columns (gold uppercase headings):
  - **Browse:** The Collection (`/all-hotels/`), Under €100 (`/under-100/`), Under €250 (`/under-250/`)
  - **Plan:** Hotel Finder (`/hotel-finder/`), Best Time to Go (`/best-time-to-go/`), Pre-travel Checklist (`/pre-travel-checklist/`)
  - **More:** About (`/about/`), How we choose (`#how-we-judge-value`), Affiliate disclosure (`/affiliate-disclosure/`)
- **Bottom bar** (top border `rgba(244,239,228,0.15)`): "© 2026 50 Five-Star Hotels. Every price is a guide, not a quote." + right-aligned uppercase microtag "Helping ordinary travellers find exceptional hotel value".

---

## Interactions & Behavior
- **Buttons & links:** color/background transitions `160ms ease`.
  - Primary button hover: background `#b85832 → #a64c29`.
  - Secondary (outline) hover: fill `#b85832`, text → cream `#fdfaf3`.
- **In-page anchors:** hero "See how we choose hotels" and footer "How we choose" scroll to `#how-we-judge-value` (which sets `scroll-margin-top:88px` to clear the sticky 72px header). Use smooth scroll if the codebase does elsewhere.
- **Sticky header:** stays pinned with translucent blurred background.
- **Illustration:** the framed image + "Open full illustration" button + "Tap to view large" pill all open `about-infographic-full.png` in a new tab (`target="_blank" rel="noopener"`). On mobile the full image is intentionally *not* primary content — show it framed with the "tap to view large" affordance.
- No data fetching, no form logic, no loading/error states — this is a static marketing page.

## Responsive Behavior
- All measurements use `clamp()` for fluid scaling; no fixed breakpoints are required, but verify behavior down to ~360px.
- Two-column sections (hero, origin, how-we-travel) use `flex-wrap:wrap` with `flex-basis` minimums (≈440–460px text, 320–460px image) so they collapse to a single stacked column on narrow screens.
- Card grids use `auto-fit, minmax(...)` so column count reduces gracefully (6→/5→ down to 1).
- Keep `text-wrap:pretty` on lead paragraphs to avoid awkward ragged lines.

## State Management
None required. If implemented in a component framework, the three "tweak" options below were design-time props in the prototype — implement them only if useful, otherwise hard-code the defaults (hero image right, story section shown, dark promise band):
- `heroImageSide`: `'right' | 'left'` (default `right`) — which side the hero image card sits on.
- `showStorySection`: `boolean` (default `true`) — show/hide §6 the full illustration.
- `promiseTheme`: `'dark' | 'light'` (default `dark`) — §7 band on ink vs. panel-cream. Light theme: background `#f5f0e6`, eyebrow `#8d3f1f`, body `#5c6762`, quote `#15201d`.

## Assets
All in `assets/` in this bundle:
- `logo-star.svg` — star logo mark (from the 50 Difficult Places design system). Used in header + footer.
- `hero-gary-isabel.png` — cropped illustration of Gary & Isabel trekking (hero card). Cropped from the source infographic.
- `couple-walking.png` — cropped illustration of the couple walking (how-we-travel card). Cropped from the source infographic.
- `about-infographic-full.png` — the complete original about-page scrapbook illustration (§6, full-size link target).

> The two cropped images are derived from `about-infographic-full.png`. In production, prefer real, separately-exported illustration assets if available rather than the crops.

## Design System Notes
The visual language comes from the **50 Difficult Places** editorial design system: warm cream canvas, Playfair Display display serif + Source Serif 4 body + Inter UI, clay/forest/gold accents, hairline borders, subtle shadows, "postcard"/"notebook" framing for imagery. If the target codebase already implements this system, use its tokens and components and map the values above onto them.

## Files
- `About - 50 Five-Star Hotels.dc.html` — the full design prototype (all sections; inline styles). Primary reference.
- `support.js` — prototype runtime only; **do not port**.
- `assets/` — images + logo listed above.
