# Handoff: Scroll-Driven "Floating Cards" Process Section

## Overview
A scroll-driven section for **50fivestarhotels.com** that introduces the hotel-finder flow as five
cards that **float up and fan out one at a time** as the user scrolls (the same mechanic as the
process section on dontboardme.com). After the fifth card lands, a CTA fades in that directs the
user into the hotel finder (`/hotel-finder/`).

It sits on the home page **between the hero and the prompt-builder tool**.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype showing the
intended look and scroll behaviour, **not production code to copy directly**. The task is to
**recreate this design in the target codebase's environment** (the live site is an **Astro** project
with Tailwind) using its established patterns and tokens. The prototype is authored as a "Design
Component" (`.dc.html`) with a small runtime (`support.js`); ignore that runtime — only the markup,
styles, and the scroll logic described below are relevant.

## Fidelity
**High-fidelity.** Final colours, typography, spacing, copy, and motion are all specified below and
should be reproduced as-is. Map the values to the site's existing Tailwind tokens where they already
exist (`cream`, `ink`, `clay`/accent, `sand`, etc.).

## Screen / View

### Section: "The process · five steps" (`#how`)
- **Purpose:** Explain, with motion, how the hotel finder turns a vague idea into a bookable
  shortlist; funnel the user into the finder.
- **Placement:** Home page, directly after the hero `<section>`, before the prompt-builder section
  (`#tools`).
- **Structure (desktop ≥ 860px):**
  - Outer **track** `<section id="how">` with `height: 420vh` and a vertical cream gradient
    background (`linear-gradient(180deg,#F7EFD7 0%,#F4EACD 100%)`), `border-top: 1px solid #ECE0C2`.
  - Inside it a **sticky viewport** `.how-vp` — `position: sticky; top: 0; height: 100vh;
    overflow: hidden`. This is what stays pinned while the track scrolls.
  - Inside the viewport, three layers:
    1. `.how-head` — a centred heading block, absolutely positioned at `top: 96px`, `z-index: 42`,
       `pointer-events: none`. Fades out over the last ~20% of scroll.
    2. `.how-stage` — `position: absolute; inset: 0`; holds the five cards, each
       `position: absolute; left: 50%; top: 50%` and transformed by JS.
    3. `.how-cta` — centred CTA block, `position: absolute; bottom: 46px; z-index: 48`; starts at
       `opacity: 0`, fades in over the last 16% of scroll.
- **Structure (mobile < 860px):** the pinning is disabled. The track height becomes `auto`, the
  viewport becomes static with `padding: 78px 18px 44px`, and the cards become a normal vertical
  flex column (`display:flex; flex-direction:column; align-items:center; gap:26px`), all fully
  visible. The CTA sits statically below the stack. (See `_how()` in the file.)

### Heading block (`.how-head`)
- Eyebrow: `"The process · five steps"` — Archivo 700, 12px, `letter-spacing:.24em`, uppercase,
  colour `#A0682E`, margin-bottom 8px.
- Title: `"From a vague idea to a `*bookable shortlist*`"` — Bodoni Moda 600,
  `clamp(24px,3.2vw,38px)`, `letter-spacing:-0.01em`, colour `#2A2622`. The words
  *"bookable shortlist"* are set in **Dancing Script**, `font-size:1.12em`, colour = accent
  (`var(--accent)`, default `#B0492B`).

### Cards (`.pcard`, ×5)
All five share the same shell; only the kicker/title/number/description/icon differ.

- **Shell:** `width: min(86vw, 358px); height: 540px`; `display:flex; flex-direction:column`;
  background `#FFFDF6`; `border: 1px solid #E6DBBE`; `border-radius: 20px`;
  `box-shadow: 0 34px 64px -34px rgba(42,38,34,.5)`; `overflow:hidden`.
- **Top region:** `padding: 24px 26px 0; flex:1; display:flex; flex-direction:column`.
  - **Kicker row:** flex, space-between, align-items flex-start.
    - Kicker label — Archivo 800, 11px, `letter-spacing:.16em`, uppercase, colour `#A0682E`.
    - Number badge — 30×30 circle, `border:1.5px solid #E0D3B0; border-radius:999px`,
      Archivo 800, 12px, colour `#8E847A`, centred.
  - **Title** — Bodoni Moda 600, 25px, `line-height:1.08`, `letter-spacing:-0.01em`, colour
    `#2A2622`, `margin-top:18px`.
  - **Big numeral** (`01.`–`05.`) — Bodoni Moda 600, 62px, `line-height:1`, colour = accent,
    `margin-top:14px`.
  - **Description** — Source Serif 4, 14.5px, `line-height:1.55`, colour `#5C544A`,
    `margin:12px 0 18px`.
- **Lower panel:** 150px tall, `border-top:1px solid #E6DBBE`.
  - Cards 1–4: background `#F1E7CB`, centred 66×66 icon circle (`background:#FBF6E9;
    border:1px solid #E2D6B4; border-radius:999px`) holding a 28px **Lucide-style 2px stroke icon**
    in forest green `#5C7355`.
  - Card 5: background `#2A2622` (ink), `border-top:1px solid #45413A`, `cursor:pointer`, click →
    open hotel finder. Contains label `"Open the hotel finder"` (Archivo 800, 13px,
    `letter-spacing:.06em`, uppercase, colour `#F7EFD7`) + a `→` glyph in gold `#EAB92B`.

**Card content (exact copy & icons):**

| # | Kicker | Title | Numeral | Description | Icon |
|---|--------|-------|---------|-------------|------|
| 1 | Destination | Name the place you're dreaming of | 01. | A city, a region, or just "somewhere warm in May". We anchor everything to a real destination. | map-pin |
| 2 | Budget test | Set your nightly ceiling | 02. | Anything up to €250. We look for five-star value at that price — not rooms that are merely cheap. | banknote |
| 3 | Travel style | Tell us how you travel | 03. | Heritage, boutique design, food and markets, wellness. Pick the things that actually matter to you. | compass |
| 4 | Prompt style | Pick the AI you trust | 04. | We format the prompt for ChatGPT, Claude or Gemini, so the wording lands the way each model likes. | sparkles |
| 5 | Copy prompt | Copy it, paste it, book better | 05. | You get good-value luxury picks and the honest trade-offs to check before you commit. | (ink CTA panel) |

### CTA block (`.how-cta`)
- Caption: `"Five quick questions, one sharp prompt."` — Source Serif 4 *italic*, 15px, colour
  `#8E5A33`, margin-bottom 14px.
- Button: pill (`border-radius:999px`), background `#2A2622`, colour `#F7EFD7`,
  `padding:15px 28px`, Archivo 700, 14px, `letter-spacing:.04em`,
  `box-shadow:0 18px 36px -18px rgba(42,38,34,.55)`; label `"Open the hotel finder →"` with the `→`
  in gold `#EAB92B`. Hover: background `#000`, `translateY(-2px)`. Click → hotel finder.

## Interactions & Behavior

### Scroll mechanic (the core of this section)
Driven by a single scroll/resize handler. On each event, compute scroll **progress** `p` through the
track:

```
total   = section.offsetHeight - window.innerHeight        // = 320vh worth of scroll
p       = clamp( -section.getBoundingClientRect().top / total , 0, 1 )
```

Per card `i` (0-based, N = 5):
```
seg     = 0.84 / N                       // each card owns 16.8% of progress; last 16% reserved for CTA
local   = clamp( (p - i*seg) / seg , 0, 1 )
e       = 1 - (1 - local)^3              // easeOutCubic
```
Final fanned layout (relative to centre, `translate(-50%,-50%)` base):
- **x offset** `fx = (i/(N-1) - 0.5) * spread`, where `spread = min(viewportWidth*0.78, 1080)` →
  even horizontal fan from left to right.
- **settle y offsets** `fys = [22, -24, 26, -10, 32]` px (plus a constant `+24`) → slight vertical
  scatter so cards don't align.
- **rotations** `rots = [-9, -4, 3, -6, 4]` degrees, reached only at `local = 1`.

Animated values:
```
y       = fys[i] + 24 + (1 - e) * (innerHeight * 0.66)   // starts ~2/3 screen below, rises to rest
rot     = rots[i] * e                                     // starts at 0°, settles to its angle
scale   = 0.9 + 0.1 * e
opacity = clamp(local * 1.7, 0, 1)
zIndex  = 10 + i                                          // later cards stack above earlier ones
transform = translate(calc(-50% + {fx}px), calc(-50% + {y}px)) rotate({rot}deg) scale({scale})
```
CTA: `cp = clamp((p - 0.84) / 0.16, 0, 1)`; `opacity = cp`, `translateY((1-cp)*18px)`,
`pointer-events: cp > 0.5 ? auto : none`.
Heading: `opacity = 1 - clamp((p - 0.78)/0.22, 0, 1)`.

**Net effect:** cards rise from below and rotate into a scattered fan one-by-one; once all five have
landed, the heading fades and the CTA appears.

### Navigation
- Card 5's ink panel **and** the CTA button → go to the hotel finder. In the prototype this scrolls
  to the on-page finder (`#tools`). On the live site, link to **`/hotel-finder/`**.

### Implementation notes for the target codebase
- Prefer driving this with the **same maths** above. A clean React/Astro implementation: a tall
  wrapper with `height: 420vh`, an inner `position: sticky; top:0; height:100vh`, and an
  `IntersectionObserver`-gated `scroll` listener (passive) that writes `transform`/`opacity` to card
  refs via `requestAnimationFrame` (throttled). Avoid re-rendering React state per scroll frame —
  mutate refs directly.
- Respect `prefers-reduced-motion`: if set, skip the fan and render the cards as the static mobile
  column.
- The track length (`420vh`) controls how much scrolling the sequence takes — tune to taste.

## State Management
None required beyond ephemeral scroll progress (kept in DOM/refs, not application state). No data
fetching.

## Design Tokens
| Token | Value | Use |
|---|---|---|
| Cream (page) | `#F7EFD7` | section base |
| Cream gradient end | `#F4EACD` | section background bottom |
| Card surface | `#FFFDF6` | card background |
| Lower-panel tint | `#F1E7CB` | cards 1–4 lower panel |
| Icon circle | `#FBF6E9` / border `#E2D6B4` | icon chip |
| Ink | `#2A2622` | text, card 5 panel, CTA button |
| Ink border | `#45413A` | card 5 / dark dividers |
| Accent (clay) | `var(--accent)` default `#B0492B` | numerals, script word |
| Clay-text (rust) | `#A0682E` | kickers/eyebrows |
| Caption rust | `#8E5A33` | CTA caption |
| Forest | `#5C7355` | icons |
| Gold | `#EAB92B` | `→` glyphs |
| Sand border | `#E6DBBE`, `#E0D3B0`, `#ECE0C2` | hairlines/borders |
| Muted | `#5C544A`, `#8E847A` | body / badge text |
| Radius | 20px (card), 999px (badge/pill/icon) | |
| Card shadow | `0 34px 64px -34px rgba(42,38,34,.5)` | |
| CTA shadow | `0 18px 36px -18px rgba(42,38,34,.55)` | |
| Track height | `420vh` (sticky viewport `100vh`) | |
| Breakpoint | `860px` (fan ↔ stacked column) | |

**Fonts:** Bodoni Moda (display/headings/numerals), Dancing Script (accent script word),
Source Serif 4 (body), Archivo (UI labels/eyebrows). These match the existing site.

## Assets
- **Icons:** 2px-stroke, round-cap outline icons (map-pin, banknote, compass, sparkles) — drawn
  inline in the prototype; substitute the codebase's icon set (Lucide matches the style). The gold
  `→` is a plain glyph, not an icon.
- No photography or raster assets are used in this section.

## Screenshots
See `screenshots/`:
- `01-cards-fanned.png` — the end state: all five cards landed in their scattered fan, with the
  heading and the "Open the hotel finder" CTA. (Rendered slightly compressed to fit one frame; on a
  real ≥1280px viewport the cards are larger and more spread out.)
- `02-card-detail.png` — two cards at full size: a standard card (icon lower panel, card 1) and the
  final card with the ink "Open the hotel finder →" panel (card 5).

## Files
- `50 Five-Star Hotels.dc.html` — the full home page; the new section is the
  `<!-- HOW IT WORKS · FLOATING CARDS -->` block (markup) plus the `_how()` method, the
  `componentDidMount` scroll-listener wiring, and the `.pcard` / `.how-cta-btn` CSS in the
  `<style>` head. Search for `id="how"` and `_how(` to find everything.
- `SiteFooter.dc.html` — footer component used by the page (context only).
- `support.js` — prototype runtime (the Design-Component engine); **not** something to port.
