# 50 Five-Star Hotels — Claude Code Instructions

## What this project is

An editorial website at **50fivestarhotels.com** that curates affordable luxury travel ideas. The site is not a hotel directory. The editorial test for every candidate is:

> "Does this make a reasonably seasoned traveller think: I didn't know I could have that kind of stay at that price?"

Destination quality and hotel quality carry equal weight. A compelling hotel in a dull city fails the test. A slightly imperfect hotel beside Angkor Wat or the Nile temples can pass it.

---

## Design system & styling (ACTIVE — use this for all new/updated UI)

The site's current design language is the **warm editorial "dream hotel"** design,
recreated from `design_handoff_50fivestarhotels/` (see its `README.md` for the full
spec). It is an **independent** design — do **not** pull in the "50 Difficult Places"
system, and do **not** revert to the older Fraunces/Inter "toolkit" look.

**When building or editing any page/component, match this design.** The global header
and footer already use it, so every page must visually agree with them.

### Fonts (loaded in `src/components/SeoHead.astro`)
- **Bodoni Moda** — display: H1/H2/H3, wordmark, card titles, budget numbers. Tight
  tracking (`-0.01em`…`-0.022em`).
- **Dancing Script** — the single handwritten accent word per heading, in `--accent`
  (e.g. *dream*, *hotel search*, *five-star bargains*). Use sparingly.
- **Source Serif 4** — all reading copy, subtitles, card body, inputs, prompt text.
- **Archivo** — all UI chrome: UPPERCASE eyebrows (700–800, wide letter-spacing),
  nav, labels, chips, buttons, badges.

Fraunces/Inter are still loaded for legacy pages — don't rely on them for new work.

### Colour tokens (apply as literal hex inline, matching the handoff)
Cream ground `#F7EFD7` · paper/card `#FFFDF6` · paper inset `#FBF6E9` · ink text/dark bg
`#2A2622` · footer ink `#211E1A` · dark panel `#33302A` · muted `#5C544A` · soft label
`#8E847A` · faint marginalia `#A99A78` · **accent (clay) `#B0492B`** (the `--accent` CSS
var) · rust eyebrow `#A0682E` · gold `#EAB92B` (illustration mass `#F0C23A`) · green
(value/positive) `#5C7355` · sand borders `#E6DBBE` / `#E0D3B0` / `#ECE0C2` · dashed
`#D8C79A`. Shadows are warm ink-tinted, never grey.

### Conventions
- Wrap each page/section root in a `class="fs"` element and set `--accent:#B0492B`
  inline on it (the script-word colour, link hovers, overlay arrows read from it).
- **Apply colours/sizes as inline `style="…"`** on the markup, copying the handoff
  values — this is the established pattern here and beats `global.css` for headings
  (which globally forces Fraunces on `h1/h2`). Inline styles win, so headings get
  Bodoni via inline `font-family`.
- Reusable hover/keyframe/responsive rules live in `src/styles/global.css` under the
  "Warm editorial redesign" block: `.fltchip`(+`.on`), `.htl-card`, `.btn-ink`,
  `.btn-ghost`, `.budget-tile`, `.hero-stage`/`.hw*`, `.ov-link`, `.nav-pill`,
  `.foot-link`, and `.fs-*` helpers. Reuse these; don't duplicate them.
  - Gotcha: an inline `display:…` beats a stylesheet class, so responsive show/hide
    helpers (e.g. `.fs-cta-browse`) use `!important`.
- Active/selected states = conditional class (`class={on ? 'fltchip on' : 'fltchip'}`),
  not markup swapping.
- Interactivity (prompt builder, collection filter, overlay menu) is plain vanilla
  `<script>` — the site is static Astro, no client framework.
- Use real routes, never SPA screen-switching.

### Key files
- Chrome: `src/components/Header.astro` (sticky cream bar + full-screen overlay menu),
  `src/components/Footer.astro` (dark, gold top rule). Both global via `BaseLayout`.
- Home `src/pages/index.astro`; Collection `src/pages/all-hotels.astro`.
- Card / featured / collection data: `src/data/exampleHotels.ts` (fixed 12-item
  editorial set with exact scores/copy/dusk imagery — kept separate from the `hotels`
  content collection so the marketing screens stay pixel-faithful). Cards link to
  `/hotels/<slug>/`. Homepage "Example hotel ideas" shows **one hotel per budget tier**
  (under €50 / €100 / €250); the €100 slot is The Brown Hotel (`brownHotelLouisville`,
  pulled from the content collection). The hero palazzo is an inline SVG — reuse as-is.
- Assets: `public/images/example-hotels/*.webp`, `public/images/star-logo.svg`.

**Migration note:** older pages (guides, region pages, `/under-*`, hotel detail, etc.)
still use the legacy toolkit/global.css classes. They keep working under the new global
header/footer, but when you touch one substantially, bring it into this design.

---

## Research workflow

IMPORTANT: Always follow this sequence. Do not skip steps or reorder them.

**Step 1 — Identify destinations first**
Find 5–8 cities in the target region where luxury is structurally underpriced. For each, assess destination appeal and assign a safety risk level: Low / Moderate / High. Exclude High-risk destinations unless flagged with a specific editorial justification.

**Step 2 — Find hotel candidates within those destinations**
For each destination that passes Step 1, identify 1–3 hotel candidates. Prioritise hotels with genuine character: heritage properties, boutique hotels, design hotels, unusual independents. Generic chain towers score lower.

**Step 3 — Score each candidate**
Apply the scoring framework below. Be decisive. Do not hedge scores.

**Step 4 — Apply disqualification rules**
Remove any hotel that fails a hard rule before proceeding to shortlist.

**Step 5 — Produce a ranked shortlist of 8–12 candidates**

**Step 6 — Flag top 3 recommendations**
Justify each against the replacement test: is this candidate more compelling than the weakest currently published hotel?

**Step 7 — List all rejected candidates with the primary rejection reason**

---

## Scoring framework

Score each candidate out of 100 across these six factors:

| Factor | Weight |
|---|---|
| Price/value versus local five-star market | 25% |
| Hotel character or luxury feel | 20% |
| Review strength and consistency | 15% |
| Location usefulness | 15% |
| Nearby sights, food and experiences | 15% |
| Risk level and hidden drawbacks | 10% |

**Then apply adjustments before finalising:**
- Exceptional heritage hotel: +5
- Exceptional boutique or design hotel: +5
- Interesting independent hotel: +3
- Generic chain hotel: 0
- Visual/photography appeal (score 0–10, multiply by 0.1, add to total)

**Verdict labels — use these exact strings:**
- 85–100: Exceptional value
- 75–84: Strong value
- 65–74: Good value
- 55–64: Conditional value
- Below 55: Reject

---

## Hard disqualification rules

YOU MUST reject any candidate that meets one or more of these conditions:

- Booking.com review score below 8.0
- Regularly prices above €250 per night in shoulder season
- Value is driven by a temporary promotion or flash pricing
- Hotel is cheap primarily because quality or maintenance has declined
- Destination has no independent travel interest
- High safety/political risk flag

---

## Five-star categories

Assign exactly one of these to every candidate:

- `True international five-star` — meets international luxury chain standards reliably
- `Local / booking-site five-star` — rated five-star by local authority or booking platform
- `Heritage-value five-star` — character and atmosphere are the primary draw
- `Business five-star bargain` — international brand in a business market with lower leisure pricing
- `Near-luxury exception` — not technically five-star but value and quality are exceptional
- `Questionable five-star` — star label requires heavy qualification

Cap: no more than 20% of the total site (maximum 10 of 50 hotels) may be `Near-luxury exception`.

---

## Price ceiling

€250 per night in shoulder season is the hard upper limit. Hotels that regularly exceed this are disqualified regardless of quality.

---

## Output format

Produce output in this order:

1. Destination assessment table (city, destination appeal note, safety risk level)
2. Scored longlist (all candidates before disqualification)
3. Disqualification log (rejected hotels and the rule that applies)
4. Final shortlist table: Rank | Hotel | City | Category | Price range (€) | Score | Verdict
5. Extended summaries for top 5 (editorial case, nearby attractions, honest drawbacks, SEO note)
6. Top 3 recommendations with replacement test justification
7. Full rejected candidates list

Do not pad output with disclaimers, caveats or meta-commentary. Score confidently. Recommend clearly.

---

## Currently published hotels (update this list before each session)

Paste the current published list here, ranked by score weakest first, before starting a research session. Every new candidate must be more compelling than the weakest entry to qualify for consideration.

```
[PASTE CURRENT PUBLISHED HOTEL LIST HERE — weakest first]
```

---

## Regional research phases

Research regions in this order. Each region is one session.

- Phase 1a: North America exceptions (Mexico City, Oaxaca, Guadalajara, Mérida)
- Phase 1: Southeast Asia — Indonesia, Thailand, Vietnam, Cambodia, Malaysia, Philippines
- Phase 2: Middle East and North Africa — Egypt, Morocco, UAE, Jordan
- Phase 3: Eastern Europe — Romania, Bulgaria, Bosnia, Albania, Georgia, Armenia
- Phase 4: Central Asia and Caucasus — Uzbekistan, Kazakhstan, Azerbaijan
- Phase 5: Latin America — Colombia, Mexico, Peru

---

## What not to do

- Do not recommend the same hotel twice across sessions
- Do not keep candidates that fail a hard disqualification rule
- Do not produce a flat list — rank candidates by score
- Do not score everything high — reject aggressively (expect to reject 60–70% of candidates)
- Do not favour a hotel simply because it is well-known or easy to find information about
- Do not write aspirational filler ("great for travellers who love luxury") — be specific and editorial
