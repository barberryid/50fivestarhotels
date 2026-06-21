# Handoff: 50 Five-Star Hotels — Homepage + Collection

## Overview
A redesign of **50fivestarhotels.com**, an editorial travel site whose core function is helping
travellers **find good-value five-star (or near-five-star) hotels** — stays under €250 a night in
destinations worth the trip.

The site's primary action is an **AI prompt builder**: the visitor picks a destination, budget and
travel style, and the page generates a ready-to-paste prompt for ChatGPT / Claude / Gemini designed
to surface good-value luxury rather than just cheap rooms. Browsing a curated example collection is a
secondary path.

This package covers two screens (Home and The Collection / All Hotels), a sticky header with a
full-screen overlay menu, and a footer — all sharing one warm, hand-drawn editorial design language
inspired by *The Best Dog in the World* book cover and the navigation model of dontboardme.com.

> **Note:** This is an **independent design** — it deliberately does **not** use the "50 Difficult
> Places" design system. Do not pull in that system's tokens or components.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype that shows
the intended look and behaviour. They are **not production code to copy directly**.

The prototype is authored as a "Design Component" (`.dc.html`) that depends on a small proprietary
runtime (`support.js`) for templating/streaming. **Do not ship `support.js` or the `.dc.html` format.**
Treat them as a faithful spec.

Your task is to **recreate these designs in the target codebase's environment** using its established
patterns and libraries. The original production site is an **Astro** project, so React/Astro
components with plain CSS (or Tailwind) are a natural target — but use whatever the codebase already
uses. If there is no existing environment, Astro + React or Next.js + React are both good fits.

## Fidelity
**High-fidelity (hifi).** Final colours, typography, spacing, copy and interactions are all specified
below and should be reproduced pixel-faithfully. The hotel illustration is a hand-built inline SVG
(see "Assets") — reuse it as-is rather than redrawing.

---

## Design Tokens

### Colours
| Token | Hex | Use |
|---|---|---|
| Cream (page ground) | `#F7EFD7` | Body background, header (with blur) |
| Cream gradient bottom | `#F1E7CB` | Featured section gradient end |
| Cream gradient (builder) | `#F4EACD` | Tool 01 section gradient end |
| Paper / card | `#FFFDF6` | Cards, builder panel, input chips on dark |
| Paper inset | `#FBF6E9` | Input field, prompt box, dashed inset |
| Ink (primary text) | `#2A2622` | Headlines, body emphasis, dark buttons, dark section bg |
| Ink (darker bg) | `#211E1A` | Footer background |
| Ink panel (on dark) | `#33302A` | Tool cards inside the dark method section |
| Ink border (on dark) | `#45413A` | Borders inside dark section |
| Muted text | `#5C544A` | Subtitles, secondary copy |
| Muted text 2 | `#6B6256` / `#3A352F` | Card price text / prompt text |
| Soft label | `#8E847A` | Form labels, card eyebrows |
| Faint label | `#B6A98A` / `#A99A78` | "pick any" hint, marginalia text |
| Accent — clay/rust (`--accent`) | `#B0492B` | Script words ("dream", "hotel search"), link hovers, arrows accents. **Tweakable.** |
| Rust eyebrow | `#A0682E` | UPPERCASE eyebrows on cream |
| Gold | `#EAB92B` | Star glyphs, illustration fills, accent arrows in dark UI, footer top rule |
| Gold (illustration mass) | `#F0C23A` | Palazzo body / tree fills |
| Green (value/positive) | `#5C7355` / `#5C7355` | Hotel "place" line, verdict labels |
| Sand border | `#E6DBBE` | Card hairline borders |
| Sand border 2 | `#E0D3B0` | Chip / button outlines, input borders |
| Sand border 3 | `#ECE0C2` | Section top borders, card dividers |
| Dashed border | `#D8C79A` | Prompt box dashed border |

`--accent` is a CSS variable set on the root wrapper (default `#B0492B`). Curated alternatives offered
as a tweak: `#B0492B` (clay), `#8E2C3B` (berry), `#5C7355` (green), `#C99700` (ochre).

### Typography
Four Google Font families:
- **Bodoni Moda** (weights 400–700; italic 500) — display: H1 flank words, H2/H3 headings, wordmark,
  card titles, budget numbers. Tight tracking (`-0.01em` to `-0.022em`), leading ~0.86–1.16.
- **Dancing Script** (600/700) — the single handwritten "signature" accent word in coloured `--accent`
  ("dream", "hotel search", "five-star bargains"). Used sparingly, one word/phrase per heading.
- **Source Serif 4** (400/500/600; italic 400) — all reading copy, subtitles, card body, prompt text,
  input text. Leading ~1.5–1.65.
- **Archivo** (500–800) — all UI: UPPERCASE eyebrows, nav, labels, chips, buttons, badges. Eyebrows
  are 700–800 weight, `letter-spacing` `.12em`–`.24em`, `text-transform:uppercase`.

Key sizes (clamp = responsive `clamp(min, vw, max)`):
- Hero flank words (`.hw-word`): `clamp(44px, 7vw, 104px)` Bodoni 600.
- Hero script word (`.hw-script`): `clamp(52px, 8.2vw, 118px)` Dancing Script 700, accent.
- Eyebrows: 11–12.5px Archivo 700.
- H2 section headings: `clamp(28px, 3.6vw, 42px)` Bodoni 600.
- Card title (H3): 21–24px Bodoni 600.
- Body / subtitle: `clamp(16px, 1.6vw, 19px)` Source Serif 4.
- Collection H1: `clamp(36px, 6vw, 70px)`.

### Spacing, radius, shadow
- Section padding: `clamp(36–44px, 5–6vw, 64–80px)` vertical, `clamp(18px, 4vw, 40px)` horizontal.
- Max content width: header/footer `1280px`; featured/collection `1180px`; builder `680px`; hero `1120px`.
- Radius: cards `16–18px`; buttons/inputs/inset tiles `8–11px`; chips/badges/pills `999px`; small label tags `6px`.
- Shadows (all warm ink-tinted, never grey):
  - Card resting: `0 12px 28px -20px rgba(42,38,34,.34)`
  - Builder panel: `0 18px 44px -26px rgba(42,38,34,.42)`
  - Card hover: `0 22px 40px -22px rgba(42,38,34,.4)` + lift `translateY(-5px)`

### Motion
Restrained, 150–250ms ease. Cards lift + image `scale(1.05)` on hover; buttons darken to `#000` and
lift `-2px`; overlay-menu links shift `translateX(18px)` and reveal an arrow; budget tiles invert to
ink on hover. No parallax, no entrance animations on scroll. Grid cards use a one-shot `card-rise`
fade-up on the Collection page.

---

## Screens / Views

### 1. Header (persistent, both screens)
- **Layout:** sticky top, 72px tall, `rgba(247,239,215,.86)` + `backdrop-filter:blur(10px)`, 1px
  bottom border `#E6DBBE`. Max 1280px, space-between.
- **Left:** star logo (30px, `assets/star-logo.svg`) + wordmark "50 Five-Star Hotels" (Bodoni 600,
  18px). Clicking returns Home.
- **Right (desktop ≥ ~900px):** inline text nav pills — "The Collection", "Hotel Finder", "Best Time",
  "About" (Archivo 600, 13px, `#5C544A`; hover → `#2A2622` on `#F1E7CB`). *(These pills are set to
  `display:none` with a `data-desk="1"` flag in the prototype — wire them to show at desktop widths.)*
- **CTA:** "Browse all 50 →" ink button (`#2A2622` bg, cream text, gold arrow).
- **Menu trigger:** outlined "≡ MENU" button → opens full-screen overlay.

### 2. Overlay Menu (full-screen, dontboardme-style)
- Fixed, `inset:0`, `z-index:90`, cream bg with two faint radial glows (gold top-right, clay
  bottom-left). Fades in (`ov-fade` 0.3s).
- Top bar: logo lockup + outlined "Close ✕" button.
- Centre: eyebrow "WHERE WOULD YOU LIKE TO GO", then 6 large numbered links (`01`–`06`): Home, The
  Collection, Hotel Finder, Best Time to Go, Guides, About. Each: small Archivo number `#B6A98A` +
  big Bodoni 600 label `clamp(34px, 6.4vw, 72px)` + right-aligned arrow. Hover: label → accent and
  shifts right 18px, arrow fades in. Rows divided by hairlines.
- Footer of overlay: italic tagline + Instagram / Newsletter / email links.

### 3. Home

**3a. Hero** (`<section>`, cream, `position:relative; overflow:hidden`)
- **Marginalia:** vertical UPPERCASE destination names running up both side margins (Archivo 700,
  `letter-spacing:.34em`, `#A99A78`), separated by gold ✦. Left: PALERMO · MARRAKECH · TBILISI ·
  BANGKOK · HUE. Right: RAGUSA · YEREVAN · ROUEN · STRASBOURG · SOLO. (`writing-mode:vertical-rl`.)
  Toggleable via `showMarginalia` prop.
- **Eyebrow** (centered): "BUILD YOUR OWN HOTEL SEARCH" (Archivo 700, rust `#A0682E`).
- **Headline stage** (`.hero-stage`): CSS grid `1fr minmax(260px,440px) 1fr`, `align-items:center`.
  This is the signature composition — the headline **wraps the hotel illustration**:
  - **Left column** (`.hw-l`, right-aligned, pinned to top, nudged right `-0.12em`): "Find" / "your"
    stacked, Bodoni 600 ink, `clamp(44px,7vw,104px)`, leading 0.86.
  - **Centre column** (`.hero-illus`): the hand-drawn golden palazzo SVG (see Assets).
  - **Right column** (`.hw-r`, left-aligned, pinned to bottom, nudged left `-0.12em`): "dream"
    (Dancing Script, accent, `clamp(52px,8.2vw,118px)`) / "hotel" (Bodoni 600 ink) stacked.
  - **Responsive (≤760px):** grid collapses to one column, centered, order = words top → illustration
    → words bottom.
- **Subtitle** (centered, max 60ch): "Tell us where you're dreaming of, your budget and your style —
  we'll write you an AI prompt built to uncover good-value luxury, not just cheap rooms."
- **CTAs** (centered): "Build my search ↓" (ink button, scrolls to `#tools`) + "Browse 50 examples →"
  (ghost button → Collection).

**3b. Tool 01 — Prompt Builder** (`<section id="tools">`, cream→`#F4EACD` gradient, top border)
The core interactive feature. Centered, max 680px.
- Heading block: eyebrow "TOOL 01 · THE PROMPT BUILDER"; H2 "Build your *hotel search*" (script accent
  on "hotel search"); sub "Choose a destination, budget and travel style. Get a prompt designed to
  uncover good-value luxury hotels, not just cheap rooms."
- **Builder card** (paper, 18px radius, panel shadow):
  - **Destination** — text input (`#FBF6E9` bg, 1.5px `#E0D3B0` border), placeholder "Palermo,
    Marrakech, anywhere warm…".
  - **Budget** — 4 single-select chips: €50 / €100 / €200 / €250 (default €200 active).
  - **Travel style** — 6 multi-select chips: Heritage & history · Boutique design · Food & markets ·
    Beach & resort · City base · Wellness & spa.
  - **Prompt output** — dashed-border inset (`#D8C79A`) on `#FBF6E9`: eyebrow "YOUR AI PROMPT" + a
    "Copy prompt" ink button (→ "Copied ✓" for 1.8s) + the live-generated prompt text (Source Serif 4,
    `white-space:pre-wrap`).
  - Footnote (italic): "Paste it into ChatGPT, Claude or Gemini — then check live prices and reviews
    before booking."
- **Chip styling** (`.fltchip`): pill, 1.5px `#E0D3B0` border, transparent, Archivo 700 12px
  UPPERCASE `#5C544A`. Hover: border `#C9B98C`, text ink. **Active (`.on`):** ink `#2A2622` fill,
  cream text. (See "Interactions" for the active-state implementation caveat.)

**3c. Featured / Example hotels** (`<section>`, cream→`#F1E7CB` gradient, top border, max 1180px)
- Header row: eyebrow "EXAMPLE HOTEL IDEAS"; H2 "Need inspiration? Browse example *five-star bargains*"
  (script accent); sub paragraph; "Browse example hotels →" ghost button (right, wraps below on
  narrow).
- **Grid:** `repeat(auto-fit, minmax(300px, 1fr))`, 24px gap. Shows first 3 hotels (see Data).
- **Hotel card** (paper, 16px radius, hairline, card shadow, hover-lift):
  - Image area `aspect-ratio:16/11`, `object-fit:cover`; top-left pill = budget tier (e.g. "UNDER €250").
  - Body: type eyebrow (e.g. "HERITAGE GRAND HOTEL") · H3 title · green place line · hairline divider ·
    price sentence · score circle (ink bg, gold number) + verdict label (green).

**3d. Browse-by-budget band** (`<section>`, cream, max 1180px)
- Eyebrow "BROWSE BY WHAT YOU'LL SPEND A NIGHT". 4 tiles in `repeat(auto-fit, minmax(160px,1fr))`:
  €50 & under / €100 & under / €200 & under / €250 the ceiling. Tile: paper, 1.5px border, big Bodoni
  number. Hover inverts to ink bg + gold number + lift. Each → Collection.

**3e. Method + Tools** (`<section id="method">`, **dark ink `#2A2622`**, cream text, max 1180px)
- Two columns (`repeat(auto-fit, minmax(280px,1fr))`).
  - Left: eyebrow "HOW WE CHOOSE" (gold); H2 "One test, honestly applied." (cream `#FBF6E9`);
    explanatory paragraph with an italic emphasis clause; 3 outlined pill tags (Price vs local 5★ ·
    Real character · Worth the trip).
  - Right (`id="tools"` anchor target also lives in builder; here two cards): "Tool 01 ↑ Build your
    hotel search" (→ scrolls back up to the builder) and "Tool 02 → Find your best month" (weather,
    value, crowds, risk). Cards: `#33302A` bg, `#45413A` border, gold labels/arrows.

**3f. Footer** — see Footer below.

### 4. The Collection / All Hotels
- **Header section** (cream, bottom border): eyebrow "THE COLLECTION"; H1 "Every *five-star* stay"
  (script accent); sub with live count "Showing **N** published stays."; filter chip row.
- **Filter chips:** All / Under €50 / Under €100 / Under €200 / Under €250 — single-select, same
  `.fltchip`/`.on` styling. Filtering updates the grid and the count immediately.
- **Grid:** `repeat(auto-fill, minmax(290px, 1fr))`, 24px gap, cards as above but with a score circle
  top-right of the image and a one-shot `card-rise` animation. 12 hotels total (the prototype ships 12
  of the eventual 50).
- **Footer.**

### 5. Footer (`SiteFooter`, persistent)
- Dark `#211E1A`, cream-muted text, 3px gold top rule.
- Brand lockup (logo + wordmark) + italic tagline.
- Three link columns: **Browse** (The Collection, Under €50/€100/€250) · **Plan** (Hotel Finder, Best
  Time to Go, Pre-travel Checklist, Guides) · **More** (How we choose, About, Affiliate disclosure,
  Contact). Link hover → gold.
- Bottom bar: "© 2026 50 Five-Star Hotels. Every price is a guide, not a quote." + Instagram /
  Newsletter / RSS.

---

## Interactions & Behavior

### Prompt builder (the key logic)
State: `destination` (string), `budget` (number, default 200), `styles` (string[]), `copied` (bool).

`buildPrompt()` composes this template string (reproduce verbatim, interpolating state):

> Act as an expert travel editor specialising in affordable luxury. Find me 5 genuinely good-value
> five-star (or near-five-star) hotels in **{destination or "a destination of your choice"}** for under
> **€{budget}** a night in shoulder season. Prioritise real character — heritage properties, boutique
> and design hotels — over generic chains. I'm especially interested in **{styles joined by ", ",
> lower-cased, or "genuine character and atmosphere" if none}**. For each hotel give the typical
> shoulder-season price range, why it's good value, the honest drawbacks, and the best nearby food and
> sights. Reject anything that's cheap because quality has slipped, and skip aspirational filler.

- The prompt text re-renders live on every input/chip change.
- **Copy prompt:** `navigator.clipboard.writeText(prompt)` with a hidden-`<textarea>` +
  `document.execCommand('copy')` fallback (handles unfocused-document / insecure-context cases). On
  success show "Copied ✓" for 1800ms, then revert.
- Budget chips: single-select. Style chips: toggle in/out of the array.

### Navigation
- SPA-style screen switch between Home and Collection (`page` state); reset scroll to top on switch.
- Header logo / footer logo → Home. "Browse all 50" / budget tiles / "Browse example hotels" →
  Collection. "Hotel Finder" / "Best Time" / builder CTA → smooth-scroll to `#tools`; "About" /
  "How we choose" → smooth-scroll to `#method` (with ~80px header offset).
- In a real Astro/React app these should become **real routes** (`/`, `/hotel-finder`,
  `/best-time-to-go`, `/all-hotels` or `/collection`, `/about`, `/guides`) rather than state toggles —
  the prototype only fakes routing because it's a single file.
- Overlay menu opens/closes via `menuOpen` state; closes on any link.

### Collection filtering
`filter` state (`'All'` or a max-price number). Grid = all hotels, or those with `tierMax <= filter`.
Active chip reflects the current filter; count updates.

> **Implementation caveat (learned in the prototype):** the chip active state is rendered by swapping
> between two markup variants (`.fltchip` vs `.fltchip.on`) rather than interpolating a class string,
> because the prototype runtime doesn't reactively update an interpolated `class` attribute. In a
> normal React/Vue/Astro app just bind the class conditionally (`class={active ? 'fltchip on' :
> 'fltchip'}`) — no variant-swapping needed.

### Image loading caveat
In the prototype, card `<img>` uses `data-src` + a post-render hook that promotes it to `src`, purely
to avoid the streaming runtime firing a request for an unresolved template literal. **In your codebase
just use a normal `src`** (or your framework's `<Image>`); ignore the `data-src`/`lazy-img` mechanism.

### Responsive
- Hero stage: 3-col flank → single centered column at ≤760px.
- All card grids are auto-fit/auto-fill and reflow naturally.
- Header inline nav pills should appear at desktop widths and collapse to just the MENU overlay on
  mobile (the overlay is the primary nav on small screens).

---

## State Management
| State | Type | Default | Drives |
|---|---|---|---|
| `page` | `'home' \| 'all-hotels'` | `home` | Which screen renders (→ real routes in prod) |
| `menuOpen` | boolean | false | Overlay menu visibility |
| `filter` | `'All' \| 50 \| 100 \| 200 \| 250` | `All` | Collection grid + count |
| `destination` | string | `''` | Prompt text |
| `budget` | `50 \| 100 \| 200 \| 250` | `200` | Prompt text + active budget chip |
| `styles` | string[] | `[]` | Prompt text + active style chips |
| `copied` | boolean | false | "Copy prompt" → "Copied ✓" feedback |

No data fetching in the prototype — hotel data is a static array. In production it maps to the Astro
content collection (`src/content/hotels/*.md`); see the live repo
`github.com/barberryid/50fivestarhotels`.

## Data (the 12 example hotels)
Each card needs: `img`, `title`, `place`, `type`, `tier` (label), `tierMax` (number for filtering),
`price` (sentence), `score` (number badge), `verdict` (label). The prototype's array, in order:

1. Grand Hotel Wagner — Palermo, Italy — Heritage grand hotel — Under €250 — "Often €110–€220 on good shoulder dates" — 94 — Exceptional value
2. Hôtel de la Cité — Carcassonne, France — Medieval citadel hotel — Under €250 — "Often €187–€245 in shoulder season" — 94 — Exceptional value
3. Relais Antica Badia — Ragusa, Italy — Sicilian baroque relais — Under €200 — "Often €120–€190 in shoulder season" — 92 — Exceptional value
4. Hotel Majapahit — Surabaya, Indonesia — Heritage hotel · MGallery — Under €100 — "Often €70–€120 outside peak dates" — 91 — Exceptional value
5. Royal Surakarta Heritage — Solo, Indonesia — Palace heritage hotel — Under €50 — "Snapshot rates seen €25–€35; recheck dates" — 91 — Exceptional value
6. Régent Petite France — Strasbourg, France — Canalside five-star & spa — Under €250 — "From about €249 on the right dates" — 90 — Exceptional value
7. Hôtel de Bourgtheroulde — Rouen, France — Renaissance mansion hotel — Under €250 — "Often €172–€246 in shoulder season" — 89 — Exceptional value
8. The Raweekanlaya — Bangkok, Thailand — Wellness resort — Under €200 — "Often €90–€160 outside peak dates" — 85 — Exceptional value
9. Stamba Hotel — Tbilisi, Georgia — Design hotel — Under €250 — "Often €130–€220 outside peak dates" — 84 — Strong value
10. Silk Path Grand Hue — Hue, Vietnam — City hotel & spa — Under €100 — "Often €55–€90 outside peak dates" — 80 — Strong value
11. Sofitel Marrakech — Marrakech, Morocco — Palace resort & spa — Under €250 — "Often €130–€220 outside peak dates" — 78 — Strong value
12. Grand Hotel Yerevan — Yerevan, Armenia — Classic grand hotel — Under €200 — "Often €85–€145 outside peak dates" — 78 — Strong value

The featured section uses items 1–3. Prices are illustrative guides, not quotes — keep that framing.

## Assets
In `assets/`:
- `star-logo.svg` — brand mark (yellow star on black star), used at 28–30px in header/footer.
- `hotels/*.webp` — 12 editorial dusk photographs, one per hotel (filenames match the slugs above,
  e.g. `grand-hotel-wagner-palermo.webp`). These came from the original project's generated imagery.
- **The hero hotel illustration is not a file** — it's an inline SVG built into the hero (`viewBox
  0 0 640 470`): a flat golden palazzo (`#F0C23A`) with ink linework (`#2A2622`), arched windows,
  pennant, lamps, trees, sun and gold stars. Lift the `<svg>` block directly from
  `50 Five-Star Hotels.dc.html` (search "HAND-DRAWN GOLDEN PALAZZO") — do not redraw it.

Fonts: Bodoni Moda, Dancing Script, Source Serif 4, Archivo (Google Fonts).

## Files
- `50 Five-Star Hotels.dc.html` — the full prototype (header, overlay menu, Home, Collection;
  template markup + a logic class with all builder/filter/nav behaviour). **Primary reference.**
- `SiteFooter.dc.html` — the footer component.
- `support.js` — proprietary prototype runtime. **Reference only — do not ship.**
- `assets/` — logo + hotel photography.

### How to read the `.dc.html` files
Each file has a template section (HTML with `{{ value }}` holes and `<sc-for>` / `<sc-if>` control
flow) and a `class Component` logic section (plain JS: `state`, methods, and a `renderVals()` that
returns the values the template binds). Translate the template to your framework's JSX/markup and the
logic class to your component's state/handlers. Inline `style="…"` attributes hold the exact values —
copy them. Ignore the `data-src`/`lazy-img` image trick and the chip variant-swapping; use idiomatic
conditional class + `src` binding in your stack.
