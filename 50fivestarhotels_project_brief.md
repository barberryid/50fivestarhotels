# 50 Five-Star Hotels — Project Brief

## Header star logo + /all-hotels/ trim (16 June 2026)

- **Header logo:** a star logo was added to the left of the "50 Five-Star Hotels" brand text in `src/components/Header.astro` (mirroring the logo-left-of-name pattern on the sister site). The asset is `public/images/hotels/yellow-star-on-black-star.svg` — a composite built from the supplied yellow sparkle (`public/images/hotels/yellow-star-sparkle-17540.svg`, fill `rgb(247,191,11)`): a **full-size black 4-point star backing** with the yellow sparkle scaled to 60% and centred on top. Rendered at 40×40 (`h-10 w-10 object-contain`). This logo is **specific to 50fivestarhotels.com** and was intentionally not applied to the sister sites. Note: the "black star on 50beautifulplaces.com" referenced in the request does not exist — that site uses a sun-with-face logo (`/sun-with-face-svgrepo-com.svg`); the black star here is original, made from the same sparkle shape.
- **/all-hotels/ trim:** removed the two intro paragraphs ("These hotels are examples…" and "Ranked by editorial value score…") and the first `FinderCta` block from `src/pages/all-hotels.astro`. The page now goes straight from the H1 into the comparison table. The second CTA ("Research your own destination") and the `FinderCta` import are retained.

## Best Time to Go page (16 June 2026)

The "When to go" travel-timing prompt was **moved off the Hotel Finder onto its own page** at `/best-time-to-go/` (`src/pages/best-time-to-go.astro`).

- **New standalone component:** `src/components/WhenToGoTool.astro` bundles a focused destination → prompt flow with its own trimmed client script (no dependency on the larger `HotelFinder`/`CountryPromptTool` wiring). Card 1 "Country or territory" is the renumbered copy of the finder's step 3 — country combobox (accent-insensitive search, keyboard nav) plus optional city/town only; the other step-3 fields (dates, nights, scenario, deal-breakers) were intentionally left out. Card 2 "When to go" is the moved prompt card, built by the shared `buildWhenToGoPrompt()` with all four default price levels (€50/€100/€200/€250). Supports `?country=…&city=…` prefill.
- **Hotel Finder change:** the second "When to go" prompt card was removed from `src/components/CountryPromptTool.astro` and its shared script cleanly rewired (all `whenToGo` variables, the copy handler, and the `buildWhenToGoPrompt` import removed). The page's "Already know the destination?" promo box on `/hotel-finder/` now links to `/best-time-to-go/` instead of the old in-page anchor.
- **Linking:** "Best Time to Go" added to the header nav (`src/components/Header.astro`) and the HTML sitemap (`src/pages/sitemap.astro`); the XML sitemap picks it up automatically.
- **Analytics:** reuses `when_to_go_prompt_copied`; adds `when_to_go_country_selected`.
- Local build check: `npm run build` completed successfully on 16 June 2026 (88 pages). Browser verification confirmed both pages work with zero console errors.

## About page sister-site windows (15 June 2026)

The `/about/` page has been simplified. The previous long Hotel Finder/story/methodology copy was removed from `src/pages/about.astro` and replaced with two framed live website windows, matching the sister-site preview pattern used on `50difficultplaces.com/about/`:

- `https://50beautifulplaces.com/`
- `https://50difficultplaces.com/`

The original Gary Wilson/about-story graphic (`/images/about/about-gary-wilson-50-five-star-hotels.png`) is retained below the website windows.

The methodology content now lives at `/hotel-finder/#methodology`, and internal "How We Choose Hotels" links plus `/methodology/` redirects point there instead of `/about/#methodology`.

## Finder-first pivot (15 June 2026)

The site pivoted from a list-first editorial catalogue to a **finder-first hotel research assistant** (Model A: prompt-first; no in-page LLM). The Hotel Finder is now the product; the curated hotel collection is recast as **examples / proof** that the method works.

Key changes:

- **Canonical tool page:** new `/hotel-finder/` (`src/pages/hotel-finder.astro`) is the primary navigation target. The full finder lives in one reusable component, `src/components/HotelFinder.astro` (price-level selector + `PersonalisePreferences` + `CountryPromptTool` + before-booking checklist), used by both `/hotel-finder/` and the homepage. Its root carries `id="hotel-finder"`.
- **Homepage is tool-led:** outcome-driven hero ("Find five-star hotels without five-star prices — anywhere you're going") with a primary CTA to `/hotel-finder/`, a three-step "How it works" strip (`id="how-it-works"`), a "Built on 50+ hand-scored hotel examples" proof band, and example destination chips. The same `HotelFinder` is embedded below.
- **Finder-first navigation:** Header = Find Hotels / How It Works / Examples / Destinations / Guides / About. Budget-tier links removed from primary nav and kept in a regrouped footer (Find Hotels, Examples, Budget examples, Destination examples, Guides, About) with updated brand copy.
- **Budget ladder unified to €50 / €100 / €200 / €250** everywhere (the finder previously used €150). See `src/data/researchPriceLevels.ts`.
- **"50" vs "57" reconciled:** user-facing headings use **50+ hotel examples** wording (brand, not a literal count). `/all-hotels/` reframed as the "Example Hotel Library"; `/destinations/` rebuilt as a grouped regional index; the four `under-*` pages reframed as examples with disclaimers. Finder CTAs (`src/components/FinderCta.astro`) added to every hotel profile and guide.
- **Copy hand-off + analytics:** after copying, a success panel shows Open ChatGPT / Open Claude buttons. `window.ffshTrack(name, props)` (provider-agnostic, safe no-op) added in `BaseLayout.astro`; events: finder_viewed, finder_country_selected, finder_price_level_changed, hotel_prompt_copied, when_to_go_prompt_copied, open_chatgpt_clicked, open_claude_clicked, finder_example_clicked, affiliate_booking_clicked. No analytics provider token is wired yet. Raw prompt sections marked `data-nosnippet`.
- **SEO/redirects:** `webApplicationJsonLd()` added (`src/lib/seo.ts`), used on the homepage and `/hotel-finder/`; `public/_redirects` now sends `/research-hotels` and `/find-hotels` → `/hotel-finder/`; sitemap surfaces the finder; all internal `/#hotel-finder` links repointed to `/hotel-finder/`.
- **Not done (deferred):** in-page LLM (Model B) and the P3 tool-intent SEO pages.

Local build check: `npm run build` completed successfully on 15 June 2026 (139 pages).

## Current implementation status

Last updated: 13 June 2026

Latest homepage design update:

- The homepage hero keeps the full-width palm-free Steigenberger Luxor image background, but the hero text is now contained in one restrained dark frosted-glass panel.
- The panel uses a translucent dark surface, backdrop blur where supported, a subtle soft-gold border, and a graceful solid-background fallback where `backdrop-filter` is unavailable.
- The lower homepage sections (`Browse by price`, `Browse by feeling`, featured hotel cards, destination mood, comparison table, and supporting sections) were intentionally left unchanged.
- Local build check: `npm.cmd run build` completed successfully on 13 June 2026.

The live Astro project is in `C:\Users\Gary\code\50fivestarhotels` and deploys from the `main` branch to Cloudflare Pages.

Current published collection after the Italy update:

| Metric | Count |
|---|---:|
| Total hotel profiles | 40 |
| New Italy profiles | 3 |
| New Italy destinations | Palermo, Genoa, Ragusa |
| New Italy image assets | 6 AI-generated WebP hotel images plus responsive derivatives |

Italy update added:

| Rank | Hotel | Destination | Score | Tier | Editorial role |
|---:|---|---|---:|---|---|
| 3 | Grand Hotel Wagner | Palermo, Italy | 94 | Under €250 | Classic Palermo grand hotel near the theatre district |
| 4 | Hotel Bristol Palace | Genoa, Italy | 93 | Under €250 | Central Genoa palace hotel and heritage-value five-star |
| 5 | Relais Antica Badia - San Maurizio 1619 | Ragusa, Italy | 92 | Under €200 | Small Sicilian baroque five-star for the Val di Noto circuit |

Italy research source:

- `research/50fivestarhotels-italy-session.md`

Italy image assets:

- Originals copied to `images generated/`
- WebP masters in `public/images/hotels/`
- Responsive derivatives in `public/images/hotels/responsive/`
- Image credits recorded in `src/data/imageAttributions.json`

Previous France update summary:

| Metric | Count |
|---|---:|
| Total hotel profiles | 37 |
| New France profiles | 3 |
| New France destinations | Carcassonne, Strasbourg, Rouen |
| New France image assets | 6 AI-generated WebP hotel images plus responsive derivatives |

France update added:

| Rank | Hotel | Destination | Score | Tier | Editorial role |
|---:|---|---|---:|---|---|
| 2 | Hotel de la Cite Carcassonne MGallery | Carcassonne, France | 94 | Under â‚¬250 | Heritage-value five-star inside the medieval cite |
| 6 | Hotel & Spa Regent Petite France | Strasbourg, France | 90 | Under â‚¬250 | True five-star canal hotel in Petite France |
| 8 | Hotel de Bourgtheroulde, Autograph Collection | Rouen, France | 89 | Under â‚¬250 | Heritage-value five-star Gothic-Renaissance mansion |

France research source:

- `research/50fivestarhotels-france-session.md`

France image assets:

- Originals copied to `images generated/`
- WebP masters in `public/images/hotels/`
- Responsive derivatives in `public/images/hotels/responsive/`
- Image credits recorded in `src/data/imageAttributions.json`

## Working project name

**50 Five-Star Hotels**

## Core positioning

**Five-star hotels without five-star prices.**

The project is a travel website focused on affordable five-star and near-five-star hotels around the world. The site should help travellers discover luxury or luxury-adjacent hotels that are unusually good value, especially properties that often fall into one of three accessible budget tiers:

| Budget Tier | Meaning |
|---|---|
| **Under €100** | Exceptional budget luxury / “impossible luxury” |
| **Under €200** | Affordable indulgence |
| **Under €250** | Smart splurge |

The site should not feel like a generic hotel affiliate list. It should feel like an intelligent, honest guide to where luxury is mispriced.

---

## Hotel Finder assistant pivot

The site now includes a practical Hotel Finder assistant. The assistant is for ordinary travellers planning real trips, not only for editorial site research.

It should help users create a hotel-finding brief based on:

- destination
- city or region focus
- travel dates or month
- number of nights
- price level
- trip scenario
- traveller priorities
- deal-breakers

The assistant should return both:

1. **Value score** — how good the hotel is according to the site’s general value method.
2. **Trip-fit score** — how well the hotel fits this traveller’s specific trip.

The assistant should keep the same honesty standards as the editorial site: clear star-rating reality, recent-review checks, location cautions, price uncertainty, fallback results when no credible low-budget option exists, and visible warnings before booking.

The site should avoid language that makes the tool feel like internal editorial research. Use traveller-facing wording such as “hotel options,” “hotel-finding brief,” “trip-fit score,” “compare realistic hotel options,” and “find hotels for my trip.”

---

## Product pivot: practical hotel-finding assistant

The site is evolving from a purely editorial guide into a practical hotel-finding assistant for travellers.

The core promise remains "five-star hotels without five-star prices", but the site should increasingly help users build a realistic shortlist for a specific trip: destination, budget, travel style, priorities and tolerance for trade-offs.

The Hotel Finder should help travellers compare hotel options by:

- price/value
- five-star reality
- location usefulness
- recent review strength
- nearby things to see, eat and do
- hidden drawbacks
- traveller-specific fit

The default user is an ordinary traveller planning a real stay, not an editor compiling a hotel database. Deep research functionality may remain available for content creation and power users, but the visible framing should be practical and traveller-first.

---

## Core idea

Many travellers assume five-star hotels are always expensive. In reality, genuine or locally classified five-star hotels can often be found at surprisingly low prices in parts of Southeast Asia, the Middle East, North Africa, the Balkans, the Caucasus, Eastern Europe, Central Asia, and selected business cities.

The website should answer this question:

> **Where in the world can ordinary travellers stay in five-star hotels without paying normal five-star prices?**

The project should combine:

- hotel value research
- practical destination context
- honest warnings
- nearby sights and food recommendations
- Booking.com affiliate monetisation
- useful SEO-focused travel content

---

## Target audience

The site is for travellers who want a luxury experience but remain price-conscious.

Primary readers include:

- travellers who normally stay in mid-range hotels but would like an occasional luxury upgrade
- couples planning affordable romantic or special-occasion stays
- solo travellers who want comfort and safety without excessive cost
- remote workers or business travellers looking for good-value comfort
- experienced travellers who enjoy finding “mispriced” luxury
- people searching for five-star hotels under €100, €200, or €250
- travellers who are open to less obvious destinations if the hotel value is excellent

The reader is not looking for the cheapest possible accommodation. They are looking for the best luxury-to-price ratio.

---

## Editorial promise

The site should be useful, honest, and practical.

It should help readers understand:

1. Whether the hotel is genuinely worth considering.
2. Whether the hotel is truly five-star or only “booking-site five-star.”
3. Why the price is unusually low.
4. What the destination offers around the hotel.
5. What drawbacks or compromises to watch for.
6. When the hotel is most likely to be affordable.
7. Whether the hotel belongs in the under-€100, under-€200, or under-€250 tier.

The site should not exaggerate. It should build trust by being clear about trade-offs.

---

## What counts as a suitable hotel?

A suitable hotel is not necessarily the cheapest hotel. It is a hotel where the reader thinks:

> **“I did not realise I could have this kind of hotel experience at that price.”**

Suitable hotels may include:

- official five-star hotels
- hotels sold as five-star on Booking.com or major booking platforms
- heritage hotels with strong atmosphere and character
- business hotels with excellent facilities at unusually low prices
- spa or resort hotels that are affordable in low season
- luxury-adjacent hotels that feel more special than their price suggests

However, the site should be careful with hotels that are technically five-star but poor in quality, badly located, tired, or not interesting enough for travellers.

---

## Five-star classification system

Each researched hotel should be classified using one of the following editorial labels:

| Classification | Meaning |
|---|---|
| **True international five-star** | Comparable to what travellers expect from luxury hotels globally |
| **Local/booking-site five-star** | Marketed or classified as five-star, but closer to upper-upscale |
| **Heritage-value five-star** | May be imperfect but has history, atmosphere, or distinctive character |
| **Business five-star bargain** | Good facilities and service, but more practical than romantic or aspirational |
| **Near-luxury exception** | Not clearly five-star, but possibly worth including if the experience is exceptional |
| **Questionable five-star** | Technically listed as five-star but weak for the website |

The project should be transparent about this distinction. A “five-star” label alone is not enough.

---

## Budget tiers

Hotels should be grouped into three price tiers.

### Under €100

This is the most distinctive and clickable category. These are hotels that may seem almost impossibly cheap for a five-star or near-five-star experience.

Use careful wording such as:

- “often available under €100 outside peak dates”
- “regularly seen around €70–€100”
- “strong candidate for the under-€100 tier”

Avoid promising that the hotel is always under €100.

### Under €200

This tier captures many of the best affordable luxury hotels worldwide. It allows stronger hotels, better locations, and more reliable quality.

Use for hotels that may be too expensive for the under-€100 category but still represent excellent five-star value.

### Under €250

This is the “smart splurge” category. It can include hotels in more expensive markets, special destinations, or higher-quality properties that still feel affordable compared with normal luxury pricing.

---

## Price language and accuracy

Hotel prices change constantly due to season, events, occupancy, currency, taxes, room type, and cancellation policy.

Do not write fixed claims such as:

> “This hotel costs €87.”

Use flexible wording instead:

- “often available from around…”
- “regularly appears in the…”
- “commonly seen around…”
- “best checked midweek”
- “usually cheapest outside peak season”
- “can rise sharply during holidays or events”
- “prices vary by date, room type, taxes, and cancellation policy”

Every page should encourage users to check the current live rate before booking.

---

## Affiliate model

The primary monetisation model is Booking.com affiliate links.

The site should use affiliate links naturally and transparently. The content should provide enough editorial value that the affiliate link feels like a useful next step, not the only purpose of the page.

Each page containing affiliate links should include a clear disclosure, for example:

> This page contains affiliate links. If you book through them, I may earn a commission at no extra cost to you. Prices change constantly, so always check the final rate, taxes, cancellation policy, and room type before booking.

### Booking.com affiliate implementation rule

Future hotel profiles must store only a clean canonical Booking.com hotel URL in the hotel Markdown frontmatter `bookingUrl` field. Do not store CJ affiliate URLs in content files.

Use URLs like:

```yaml
bookingUrl: "https://www.booking.com/hotel/do/sublime-samana.en-gb.html"
```

Do not use search-result URLs, temporary challenge/referrer URLs, or URLs with parameters such as `chal_t`, `force_referer`, `aid`, `label`, or other tracking query strings. For Booking.com hotel pages, the stored URL should normally end at `.html` or `.en-gb.html`.

The site generates Booking.com CJ affiliate links dynamically from `bookingUrl` using `src/utils/affiliateLinks.ts` and `getBookingAffiliateUrl()`. Hotel pages and hotel cards render the affiliate CTA automatically when `bookingUrl` exists, with `rel="sponsored nofollow noopener"` and `target="_blank"`. When adding future hotels, make sure the clean `bookingUrl` field is present so the affiliate CTA appears automatically.

The project may later expand into secondary affiliate opportunities such as:

- airport transfers
- travel insurance
- eSIMs
- luggage or travel gear
- local tours and activities
- restaurant or food experience bookings where appropriate

---

## Destination strategy

The first phase should focus on cities and regions where five-star value is believable and interesting.

Initial target destinations:

| City | Reason for inclusion |
|---|---|
| **Kuala Lumpur** | One of the world’s best luxury-value cities |
| **Bangkok** | Deep five-star inventory |
| **Istanbul** | Strong value and high search demand |
| **Dubai** | Expensive image, but summer bargains |
| **Doha** | High-quality hotels, often discounted |
| **Cairo** | Many five-star options at lower prices |
| **Tbilisi** | Strong emerging luxury-value angle |
| **Yerevan** | Often overlooked |
| **Tirana** | Budget-friendly European angle |
| **Sofia** | Affordable Europe angle |
| **Warsaw** | Practical European luxury value |
| **Bucharest** | Often underrated |
| **Marrakech** | Strong aspirational appeal |
| **Jakarta** | Luxury hotels can be surprisingly affordable, with a strong food angle |
| **Hanoi** | Good value and strong travel interest |
| **Da Nang** | Beach/luxury value |
| **Tashkent** | Unusual, distinctive, lower competition |
| **Sarajevo** | Include Malak Regency Hotel as a specific candidate |
| **Siem Reap** | Include Angkor Aurora as a specific candidate |
| **Yangon** | Include Meliá Yangon as a specific candidate |

Destinations removed from the initial list:

- Belgrade
- Sharm El Sheikh
- Hurghada

---

## Required hotel options from existing notes

The first research phase should include or evaluate the following hotels from the existing project notes:

| Hotel | City | Country | Priority |
|---|---|---|---|
| **Angkor Aurora** | Siem Reap | Cambodia | Must evaluate |
| **Malak Regency Hotel** | Sarajevo | Bosnia and Herzegovina | Must evaluate |
| **Meliá Yangon** | Yangon | Myanmar | Must evaluate |
| **The Raweekanlaya Bangkok Wellness Cuisine Resort** | Bangkok | Thailand | Strong candidate |
| **Hotel Majapahit Surabaya – MGallery** | Surabaya | Indonesia | Strong candidate |
| **The Phoenix Hotel Yogyakarta – Handwritten Collection** | Yogyakarta | Indonesia | Strong candidate |
| **The Royal Surakarta Heritage – Handwritten Collection** | Solo | Indonesia | Strong candidate |
| **Pleiada Boutique Hotel & Spa** | Iași | Romania | Strong candidate |
| **Boton Blue Hotel & Spa** | Nha Trang | Vietnam | Possible candidate |
| **Grand Mercure Medan Angkasa** | Medan | Indonesia | Possible candidate |
| **NH Collection Bogotá WTC Royal** | Bogotá | Colombia | Possible candidate |
| **I’M Hotel** | Makati | Philippines | Possible candidate |
| **Novotel Ahmedabad** | Ahmedabad | India | Possible candidate |
| **Steigenberger Resort Achti** | Luxor | Egypt | Possible candidate |
| **Silk Path Hotel** | Hue | Vietnam | Possible candidate |
| **Mandarin Colombo** | Colombo | Sri Lanka | Possible candidate |
| **Millennium Downtown** | Abu Dhabi | UAE | Possible candidate |
| **Real Marina Hotel & Spa** | Olhão | Portugal | Possible candidate |
| **Graffit Gallery Design Hotel** | Varna | Bulgaria | Possible candidate |

The existing notes suggest that some of these are more “local/booking-site five-star” than true international luxury. That distinction should be preserved and made explicit in the research.

---

## Importance of nearby sights and food

The website should not only tell readers where to sleep. It should make the hotel feel like part of an appealing trip.

Each hotel profile should include nearby or city-level reasons to visit, such as:

- historic sites
- old towns
- temples
- museums
- beaches
- viewpoints
- markets
- restaurants
- cafes
- rooftop bars
- food streets
- day trips
- local experiences

This makes the content more useful and more engaging than a standard hotel affiliate list.

For example, Jakarta should not simply be described as a cheap luxury-hotel city. Research should also cover why Jakarta can be interesting for food, restaurants, street food, and urban exploration.

For Jakarta specifically, use the following video as inspiration for the restaurant and food angle:

`https://www.youtube.com/watch?v=3lkFVSrVhGk`

The aim is to show why someone might actively want to book the hotel as part of a food-focused or city-exploration trip.

---

## Hotel profile structure

Each hotel profile should follow this structure:

```markdown
## Hotel Name

**City, Country**  
**Budget tier:** Under €100 / Under €200 / Under €250  
**Hotel type:** Heritage / business / resort / boutique / spa / beach / city luxury  
**Five-star status:** True five-star / local five-star / booking-site five-star / heritage-value five-star / near-luxury exception  
**Best for:** couples / solo travellers / food trip / city break / stopover / spa weekend / history trip

### Why it is interesting

2–4 sentences explaining why this hotel is worth considering.

### Why it is good value

Explain why the price is unusually low compared with the experience, destination, facilities, or location.

### Price notes

Use flexible wording. Mention typical observed range, low-season potential, and peak-season risk.

### Location and nearby sights

Explain the neighbourhood, major sights nearby, walkability, transport needs, and any useful location cautions.

### Food and things to do nearby

Mention specific restaurants, food areas, local dishes, cafes, bars, markets, cultural activities, or day trips.

### Best time to book

Mention seasonality, weekday/weekend patterns, climate, major events, or shoulder seasons.

### Watch out for

Give honest drawbacks, such as dated rooms, distant location, noise, weak service, expensive breakfast, political context, poor walkability, taxes, or inconsistent five-star standards.

### Verdict

Use one of these labels: Exceptional value / Strong value / Good value / Conditional value / Reject for now.

Write a one-sentence conclusion.
```

---

## Required research fields

For each hotel, collect the following:

| Field | Notes |
|---|---|
| Exact hotel name | Use current official or booking-platform name |
| City and country | Include district/neighbourhood where useful |
| Hotel type | Heritage, business, resort, spa, beach, city luxury, etc. |
| Chain or ownership | Independent, Accor, Meliá, Marriott, Hilton, etc. |
| Claimed star rating | Booking.com, Google, hotel site, official classification where possible |
| Review scores | Booking.com, Google, Tripadvisor, Agoda where useful |
| Typical price range | Use indicative, flexible pricing only |
| Budget tier | Under €100, under €200, or under €250 |
| Best booking season | Low season, shoulder season, summer, winter, weekdays, weekends, etc. |
| Breakfast details | Included, optional, expensive, unclear |
| Cancellation notes | Free cancellation commonly available or not |
| Taxes and fees | Included or added later where visible |
| Main nearby sights | Specific attractions or neighbourhoods |
| Food/restaurant angle | Specific restaurants, food streets, dishes, cafes, bars, or markets |
| Main caution | The key drawback readers should know |
| Affiliate suitability | Good, moderate, weak |
| Final verdict | Include, maybe include, reject |

---

## Scoring system

Each hotel should receive a score out of 100.

| Factor | Weight |
|---|---:|
| Price/value versus local five-star market | 25 |
| Hotel character or luxury feel | 20 |
| Review strength and consistency | 15 |
| Location usefulness | 15 |
| Nearby sights, food, and experiences | 15 |
| Risk level / hidden drawbacks | 10 |

Final label:

| Score | Label |
|---:|---|
| 85–100 | Exceptional value |
| 75–84 | Strong value |
| 65–74 | Good value |
| 55–64 | Conditional value |
| Under 55 | Reject for now |

---

## Trust and caution principles

Every hotel profile should include a “Watch out for” section.

Common issues to check:

- dated rooms
- inconsistent service
- poor maintenance
- weak breakfast
- remote or inconvenient location
- traffic problems
- safety or political context
- poor walkability
- expensive taxis or transfers
- resort fees
- taxes added late in the booking flow
- misleading five-star classification
- bad recent reviews
- noisy rooms
- weak air conditioning
- poor Wi-Fi

The tone should be honest but fair.

Example wording:

> “This is more of a polished business hotel than a grand luxury escape, but it can still be excellent value if the rate is low.”

---

## Site structure proposal

The site should eventually include the following sections:

- Homepage
- Under €50
- Under €100
- Under €200
- Under €250
- By Destination
- Hotel Finder
- Luxury Travel Tips
- About
- Affiliate Disclosure
- How We Choose Hotels section on `/research-hotels/`

---

## Initial content priorities

The first major content phase should produce:

1. Homepage concept and hotel teaser cards
2. “Best Five-Star Hotels Under €100 Worldwide”
3. “Best Five-Star Hotels Under €200 Worldwide”
4. “Best Five-Star Hotels Under €250 Worldwide”
5. Hotel Finder / practical trip-planning tool
6. First 20 hotel profiles
7. City pages for the strongest destinations
8. Editorial methodology section: “How We Choose Hotels” at the bottom of `/research-hotels/`
9. Affiliate disclosure page

---

## Recommended first research output

The first research phase should produce:

### 1. Master comparison table

Columns:

| Column |
|---|
| Rank |
| Hotel |
| City |
| Country |
| Region |
| Budget tier |
| Typical price range |
| Claimed star rating |
| Review score |
| Hotel type |
| Best nearby attraction |
| Best food/restaurant angle |
| Main caution |
| Value score |
| Verdict |
| Recommended for first website batch? |

### 2. Individual hotel profiles

Each hotel should use the standard hotel profile format.

### 3. Final recommendations

At the end of the research, provide:

- Top 20 hotels to include
- 5 backup hotels
- Hotels rejected and why
- Best 5 hotels for the homepage
- Best 5 hotels for social media posts
- Best 5 hotels for SEO city pages

---

## SEO strategy

The site should target practical, high-intent search queries such as:

- five-star hotels under €100
- five-star hotels under €200
- cheap five-star hotels
- affordable luxury hotels
- best-value five-star hotels
- how to find elite stays by country
- best five-star hotels under €100 in [city]
- best five-star hotels under €200 in [country]
- luxury hotels on a budget
- affordable five-star hotels in Europe
- affordable five-star hotels in Asia

The strongest SEO pattern is:

> **Best five-star hotels under €X in [destination]**

This combines budget intent, destination intent, and booking intent.

---

## Tone and writing style

The tone should be:

- practical
- elegant
- honest
- specific
- useful
- travel-focused
- not salesy
- not generic
- not exaggerated

Preferred phrases:

- “affordable five-star hotel”
- “five-star hotel without five-star prices”
- “surprisingly affordable”
- “strong value”
- “worth considering”
- “excellent if the price is right”
- “more practical than glamorous”
- “not flawless, but interesting”
- “better as a base than a destination hotel”

Avoid overused or exaggerated phrases:

- “hidden gem”
- “luxury at its finest”
- “perfect for everyone”
- “unbeatable deal”
- “guaranteed cheap”
- “once-in-a-lifetime stay” unless truly justified

---

## Visual and brand direction

The design should feel affordable-luxury rather than budget-travel.

Suggested visual qualities:

- elegant but not snobbish
- fast and readable
- strong hotel photography
- clean cards
- subtle price-tier badges
- clear comparison tables
- soft luxury colours
- visible affiliate disclosure
- strong “check current price” buttons

Current colour direction (warm affordable-luxury editorial palette, live as of 2026-05-31):

| Use | Colour |
|---|---|
| Background (warm ivory) | `#F8F2E8` |
| Background soft (sand) | `#EFE4D3` |
| Card background (warm white) | `#FFFDF8` |
| Text (warm charcoal) | `#1F2428` |
| Muted text | `#6F685F` |
| Accent gold | `#B88A44` |
| Gold soft | `#D8BD8A` |
| Value green | `#4F6547` |
| Green dark | `#344532` |
| Terracotta accent | `#A86645` |
| Warm border | `#E2D4BF` |
| Warning surface | `#F4EADC` |

Typography: headings use **Fraunces** (warm editorial serif, loaded via `SeoHead.astro`); body/UI uses **Inter**. The earlier functional palette (`#F8F5EF`, `#1D2433`, `#58745A`, `#6B7280`, pure white) was swept onto these warm values in commit `cfb0e79`; new components should use the warm hex values above or the `--color-*` tokens in `src/styles/global.css`.

Homepage hero note, 2026-06-13: the current hero uses the same full-bleed palm-free Steigenberger Luxor image, but places the editorial copy, CTAs, and price caution inside a single controlled-width dark glass panel. This treatment is scoped to the homepage hero only and should not be applied to the lower budget, feeling, destination, or hotel-card sections.

---

## Success criteria

The project is successful if each hotel profile makes the reader understand:

1. Why this hotel is unusually good value.
2. Whether it is truly luxurious or only technically five-star.
3. What they could do nearby.
4. What the main caution is.
5. When to look for the best price.
6. Whether it is worth clicking through to check current rates.

The website should become a trusted guide to affordable luxury hotels, not a collection of generic affiliate links.

---

## Core editorial standard

The best hotels are not simply the cheapest. They are the hotels where price, place, and experience combine into a compelling travel idea.

The guiding question for every inclusion should be:

> **Would this hotel make someone excited to visit the destination because the value feels unusually good?**

If the answer is yes, the hotel is a strong candidate for 50 Five-Star Hotels.

---

## Build status — as of 2026-05-31

### SEO expansion status - 2026-05-31

The site has now had a major SEO architecture expansion committed and pushed to `main`.

**Latest SEO commit:**

- `8f25e0a` - `Improve SEO structure and landing pages`

**What changed in that SEO expansion:**

- `src/components/SeoHead.astro` now supports page title, description, canonical URL, absolute Open Graph/Twitter image URLs, robots/noindex handling, Google Search Console verification via `PUBLIC_GOOGLE_SITE_VERIFICATION`, and JSON-LD output.
- `src/lib/seo.ts` centralises `SITE_URL`, canonical URL generation, absolute image URLs, site/publisher JSON-LD, BreadcrumbList JSON-LD, ItemList JSON-LD, and basic hotel image alt helpers.
- `src/lib/regions.ts` maps hotel countries into broad SEO regions and region guide routes.
- `astro.config.mjs` now sets `site: "https://50fivestarhotels.com"` and uses `@astrojs/sitemap`.
- `public/robots.txt` points to `https://50fivestarhotels.com/sitemap-index.xml`.
- `public/llms.txt` describes the site positioning and important pages for LLM/crawler discovery.
- `public/images/social/default-og.webp` is a 1200 x 630 default Open Graph image generated from the palm-free Steigenberger Luxor hero.
- Hotel pages now output conservative Hotel, Article, and Breadcrumb JSON-LD, use production canonicals, show a last-updated signal, add an "On this page" anchor nav, include price accuracy copy near booking CTAs, and link to related guides.
- The homepage now includes WebSite, Organization, and ItemList JSON-LD and uses the production canonical.
- The HTML sitemap lives at `/sitemap/`.
- README now documents the Search Console verification env var and an SEO checklist before deploy.
- `research/seo-content-roadmap.md` documents the next SEO content expansion path toward 50 hotels.

**New SEO landing pages now built:**

- `/cheap-five-star-hotels/`
- `/affordable-luxury-hotels/`
- `/under-50/` live under-?50 tier page
- `/research-hotels/`
- `/cheapest-cities-five-star-hotels/` redirects to `/research-hotels/`
- `/methodology/` redirects to `/research-hotels/#methodology`
- `/affordable-five-star-hotels-europe/`
- `/affordable-five-star-hotels-asia/`
- `/luxury-hotels-on-a-budget/`

**New destination pages now built:**

- `/destinations/kuala-lumpur/`
- `/destinations/bangkok/`
- `/destinations/jakarta/`
- `/destinations/marrakech/`
- `/destinations/tashkent/`
- `/destinations/yogyakarta/`
- `/destinations/surabaya/`
- `/destinations/luxor/`
- `/destinations/siem-reap/`
- `/destinations/tbilisi/`
- `/destinations/hue/`
- `/destinations/nha-trang/`
- `/destinations/abu-dhabi/`
- `/destinations/sarajevo/`
- `/destinations/yerevan/`
- `/destinations/iasi/`
- `/destinations/varna/`
- `/destinations/olhao/`
- `/destinations/makati/`
- `/destinations/solo/`

**New regional pages now built:**

- `/regions/asia/`
- `/regions/europe/`
- `/regions/middle-east-north-africa/`
- `/regions/caucasus-central-asia/`

**New supporting guide pages now built:**

- `/guides/how-to-find-cheap-five-star-hotels/`
- `/guides/when-are-five-star-hotels-cheapest/`
- `/guides/five-star-hotel-ratings-explained/`
- `/guides/heritage-hotels-under-200/`
- `/guides/business-hotels-luxury-value/`

**Latest validation after SEO expansion:**

- `npm.cmd run build` completed successfully on 2026-05-31.
- Build output: 65 pages, zero errors.
- `dist/sitemap-index.xml`, `dist/robots.txt`, and `dist/llms.txt` exist.
- Required SEO landing page outputs exist in `dist`.
- No `50fivestarhotels.pages.dev` references were found in `dist`.
- Spot checks confirmed one H1 plus title, description, canonical, Open Graph metadata, and JSON-LD on key pages.

**Important limitation:** this confirms the commit was pushed to GitHub. Do not describe the SEO expansion as live until the relevant Cloudflare Pages deployment has completed successfully.

### Destination-card AI image completion - 2026-05-31

Historical note: the `/destinations/` page previously used AI-generated editorial destination-card images for all 20 launch destination cards. The images are destination/trip-idea assets rather than hotel photos: landmarks, old towns, gardens, cultural districts, coastlines, bazaars, and city atmospheres.

**Committed and pushed destination-image updates:**

- `e99ca38` - `Add AI destination images to destinations page`
- `308b44d` - `Add remaining AI destination images`

**Implementation details:**

- Final WebP assets live in `public/images/destinations/`.
- Source PNGs are retained in `public/images/destinations/source/`, matching the convention established by the first destination-image batch.
- `src/data/destinationImages.ts` maps each destination slug to `src`, `alt`, `credit`, and `subject` metadata.
- `src/pages/destinations.astro` formerly used the manifest to render image destination cards. As of 2026-06-14 it instead renders the homepage-style "The full list" hotel comparison table.
- `scripts/generate_destination_ai_images.js` contains the repeatable OpenAI Images API workflow for the full destination-image set, with skip-existing behaviour unless `--force` is passed.
- Research, prompts, and audit records are kept in:
  - `research/destination-ai-image-reference-research.md`
  - `research/destination-ai-image-prompts.md`
  - `research/destination-image-audit.md`

**Destination-card image subjects now complete:**

| Destination | Image subject |
|---|---|
| Siem Reap | Angkor Wat sunrise |
| Yogyakarta | Borobudur sunrise |
| Surabaya | Surabaya Old Town / House of Sampoerna heritage atmosphere |
| Kuala Lumpur | Merdeka Square / Sultan Abdul Samad Building |
| Bangkok | Wat Pho / old Bangkok temple district |
| Solo | Javanese palace courtyard |
| Hue | Imperial City / Citadel gate |
| Nha Trang | Po Nagar Cham Towers |
| Makati | Intramuros colonial street |
| Varna | Sea Garden / Black Sea promenade |
| Tashkent | Tashkent Metro mosaics |
| Yerevan | Cascade Complex / Mount Ararat atmosphere |
| Luxor | Hot air balloons over the Nile / West Bank |
| Marrakech | Jardin Majorelle-inspired Moroccan garden |
| Abu Dhabi | Sheikh Zayed Grand Mosque |
| Jakarta | Historic Kota Tua restaurant atmosphere |
| Sarajevo | Bascarsija Ottoman bazaar street |
| Olhao | Ria Formosa boats and lagoon islands |
| Tbilisi | Old Tbilisi sulfur baths / Narikala hillside |
| Iasi | Palace of Culture |

**Validation after destination-image completion:**

- `npm.cmd run build` completed successfully on 2026-05-31.
- Build output remained 65 pages, zero errors.
- Browser-side checks found 20 destination cards and 20 destination image tags on `/destinations/`.
- Direct local asset checks returned HTTP 200 for all 20 manifest image paths.
- Mobile check showed no horizontal overflow (`clientWidth` and `scrollWidth` both 390).
- Online reference pages were used only for visual research; no online/source photos were downloaded or used as website assets.

### Current local review status

The project has been reviewed against the current Git working tree on 2026-05-31. The latest committed site state is on `main` / `origin/main`. After this brief update, this file itself is the only expected local edit unless additional work has been requested.

Homepage hero update reviewed on 2026-06-13: `src/pages/index.astro` now uses the scoped frosted-glass hero copy panel described above, and `npm.cmd run build` completed successfully.

**Latest committed/pushed state:**

- **Current branch:** `main`
- **Latest pushed commit before this brief update:** `308b44d` - `Add remaining AI destination images`
- **Recent committed updates after the AI image rollout:**
  - `308b44d` - added the remaining 10 AI destination-card images so all 20 launch destination cards on `/destinations/` now have optimized WebP images and retained source PNGs
  - `e99ca38` - added the first 10 AI destination-card images, destination image manifest, research/prompt/audit docs, generator script, and image card rendering on `/destinations/`
  - `8ed9e96` - updated this project brief for the SEO expansion
  - `8f25e0a` - added SEO helpers, sitemap integration, robots/llms files, JSON-LD, SEO landing pages, destination pages, regional pages, supporting guides, HTML sitemap, related guide links, and SEO deployment docs
  - `52f27fc` - updated this project brief for the palm-free homepage hero and daytime image usage
  - `330d077` - `HotelCard.astro` now prefers each hotel's brighter realistic-daylight render (falling back to editorial-dusk), so cards across the homepage, tier pages and destinations read lighter
  - `6217f5b` - switched the homepage "Browse by feeling" and "Destination mood" tiles to the realistic-daylight image variant and lightened the hero overlay tint
  - `279ed1c` - replaced the favicon artwork with a simple black circular badge and centered bright yellow star whose points touch the circle edge; files are `Favicon.png` and `public/Favicon.png`
  - `d4efc93` - added a retouched palm-free version of the Steigenberger Luxor editorial-dusk image (central foreground palm removed) plus 1200/800 derivatives, and pointed the homepage hero at it (the hotel page keeps the original)
  - `1ce3ac6` - updated the project brief for overlay softening and card cleanup
  - `30cad4d` - softened the shared `editorial-overlay` gradient so photos read brighter, and removed the dark overlay from hotel card images (moved the city/country label into the card body)
  - `fa3e3c9` - updated the project brief for the warm redesign and `whyCheap` rollout
  - `bd06059` - populated `whyCheap` for all 20 hotels and rebuilt the homepage hero as a single full-bleed image (Steigenberger Resort Achti Luxor editorial dusk view)
  - `cfb0e79` - warm affordable-luxury visual redesign (palette sweep, Fraunces typography, editorial hero, image-led cards, "Browse by feeling" and "Destination mood" sections, upgraded comparison table, reusable trust components)
  - `7bfa10b` - updated project brief and local image workflow
  - `f9ab64f` - updated favicon artwork in `Favicon.png` and `public/Favicon.png` to use a black circular background while preserving the gold `5*` mark
  - `0e54288` - enriched hotel seasonality/weather data and expanded `SeasonalityCards.astro`
  - `fb0d008` - updated the hotel page sidebar: Quick Facts now scrolls normally with the page, and Related Hotels cards were removed from hotel detail pages
  - `8d6f699` - added the site favicon and connected it through `SeoHead.astro`
  - `c2fecf9` - added the remaining featured-hotel AI image assets

**Current uncommitted local changes reviewed:**

- None before editing this file; `git status --short` was clean immediately after pushing `308b44d`.

**Deployment caution:** only committed files on `main` are reflected by Cloudflare Pages. Any future local edits should not be described as live until they are intentionally committed and pushed.

### Site is live

The full launch site has been built, committed and pushed to GitHub. Cloudflare Pages deploys automatically from the `main` branch.

- **Live URL:** https://50fivestarhotels.com / https://50fivestarhotels.pages.dev/
- **GitHub:** https://github.com/barberryid/50fivestarhotels
- **Latest live URL check:** both production URLs returned HTTP 200 on 2026-05-31
- **Latest local build check:** `npm.cmd run build` completed successfully on 2026-05-31 after all 20 destination-card images were completed
- **Build output at latest build check:** 65 pages, zero errors
- **Latest pushed commit before this brief update:** `308b44d` - `Add remaining AI destination images`
- **Latest local image expansion:** all 20 `/destinations/` cards now have AI-generated editorial destination images, documented in `research/destination-image-audit.md`
- **Latest favicon state:** black circular badge with transparent outside corners and a centered bright yellow star whose points touch the circle edge

### Visual redesign and trust system — 2026-05-31

The site was redesigned toward a warm, image-rich affordable-luxury editorial look (commits `cfb0e79` and `bd06059`, both live on `main`). Key changes:

- **Palette and typography:** the functional palette was swept onto the warm palette documented under "Visual and brand direction" above; headings now use Fraunces, body uses Inter. New colour tokens (sand, terracotta, warm border, warning surface) live in `src/styles/global.css`. A one-off sweep script is kept at `scripts/warm-palette-sweep.mjs`.
- **Homepage (`src/pages/index.astro`):** the hero is a single full-bleed image with centered overlaid copy, styled after the editorial inspiration site. The hero image is a **retouched, palm-free version** of the Steigenberger Resort Achti Luxor editorial-dusk render (`…-editorial-dusk-no-center-palm.webp`, with 1200/800 derivatives), referenced via a dedicated `heroImage` object — the Steigenberger hotel page itself still uses the original image. New sections added: "Browse by feeling" (mood tiles) and "Destination mood" (cities with a one-line atmosphere).
- **Daytime imagery:** to keep the homepage feeling bright, the "Browse by feeling" and "Destination mood" tiles, and **all hotel cards** (`HotelCard.astro`), now prefer each hotel's brighter **realistic-daylight** AI render (from `generatedGallery`, `type: realistic-daylight`) instead of the darker editorial-dusk image, falling back to the dusk image where a daylight variant is missing. Index tiles use a `dayImg()` helper; cards compute `cardImage` the same way.
- **Cards and table:** `HotelCard.astro` is more image-led and less dense (tier badge and score pill on the photo, single primary CTA). Card photos are left clean — the city/country label sits in the card body, not over the image. `HotelComparisonTable.astro` gained circular score pills, verdict badges, country, and more spacing.
- **Image overlay:** the shared `.editorial-overlay` gradient in `global.css` is deliberately soft (transparent across the top, fading to ~60% at the bottom) so overlaid white text (hero copy, feeling/mood tile labels) stays legible without darkening the photos. It is applied to the hero and the feeling/mood tiles only — not to hotel cards. The full-bleed hero additionally uses a light flat tint (~28%) plus a soft bottom gradient.
- **Trust components (`src/components/trust/`):** `WhyItsCheap`, `FiveStarReality`, `WatchOutFor`, `BestMonths` render as a "before you book" grid on every hotel page via `HotelLayout.astro`. FiveStarReality, WatchOutFor and BestMonths derive from existing data (fiveStarStatus, cautions, `hotelSeasonality`).
- **`whyCheap` field:** an optional `whyCheap: string[]` frontmatter field was added to `content.config.ts` and **populated for all 20 hotels**, so the "Why it is cheap" panel renders site-wide. When adding a new hotel Markdown file, include a `whyCheap` value (2–3 concise, honest reasons grounded in the hotel's real value story) to keep this consistent.

- **Hotel detail sidebar:** the Quick Facts card in `HotelLayout.astro` is no longer sticky; it scrolls with the rest of the page so it cannot cover lower content on long hotel pages. The Related Hotels sidebar card was removed entirely from hotel detail pages, and `src/pages/hotels/[slug].astro` no longer computes or passes related hotel data.
- **Favicon:** the site favicon is served from `/Favicon.png` via `SeoHead.astro`, with the published asset in `public/Favicon.png` and a root source copy at `Favicon.png`. The current favicon is a black circular badge with transparent outside corners and a centered bright yellow five-point star whose points touch the circle edge.

### Tech stack confirmed

| Layer | Technology |
|---|---|
| Framework | Astro 6.x (static output) |
| CSS | Tailwind CSS v4 via `@tailwindcss/vite`, with `@tailwindcss/typography` installed |
| Content | Astro Content Layer API (glob loader), Markdown |
| Hosting | Cloudflare Pages |
| Build command | `npm run build` |
| Output directory | `dist` |

**Astro 6 notes:**
- Content collections use `import { glob } from 'astro/loaders'` in `src/content.config.ts`
- Rendering Markdown entries uses `import { render } from 'astro:content'` then `await render(entry)` — not `entry.render()`
- Content files live in `src/content/hotels/`

### Live hotel list (57 hotels)

All 57 hotels are live as individual pages at `/hotels/[slug]`. The under-?50 tier joined the collection on 2026-06-14 with the strongest candidates from the under-?50 research block.

**Maintenance instruction:** when a new hotel Markdown file is added under `src/content/hotels/`, update this live hotel list in the same change. This brief should always list every live hotel currently present in `src/content/hotels/`, using the hotel frontmatter as the source of truth for exact title, city, country, tier, score, and verdict.

**Affiliate instruction for new hotels:** every new hotel Markdown file should include a clean canonical Booking.com hotel URL in `bookingUrl` when one is available. Keep the stored URL free of affiliate wrappers and tracking/query parameters. The site will generate the CJ affiliate link automatically from that clean value.

| Rank | Hotel | City | Country | Tier | Score | Verdict |
|---|---|---|---|---|---|---|
| 1 | Hotel Suitess | Dresden | Germany | Under €250 | 100 | Exceptional value |
| 2 | Steigenberger Icon Grandhotel Handelshof Leipzig | Leipzig | Germany | Under €250 | 99 | Exceptional value |
| 3 | Hotel Elephant Weimar, Autograph Collection | Weimar | Germany | Under €250 | 99 | Exceptional value |
| 4 | Mansion Merida Boutique Hotel | Merida | Mexico | Under €250 | 97 | Exceptional value |
| 5 | Cartesiano Boutique & Wellness Hotel | Puebla | Mexico | Under €200 | 96 | Exceptional value |
| 6 | Hodelpa Nicolas de Ovando | Santo Domingo | Dominican Republic | Under €250 | 96 | Exceptional value |
| 7 | The Grand, York | York | England | Under €250 | 94 | Exceptional value |
| 8 | Hotel de la Cite Carcassonne MGallery | Carcassonne | France | Under €250 | 94 | Exceptional value |
| 9 | Grand Hotel Wagner | Palermo | Italy | Under €250 | 94 | Exceptional value |
| 10 | Casa Don Gustavo Boutique Hotel | Campeche | Mexico | Under €200 | 94 | Exceptional value |
| 11 | Hotel Bristol Palace | Genoa | Italy | Under €250 | 93 | Exceptional value |
| 12 | Relais Antica Badia - San Maurizio 1619 | Ragusa | Italy | Under €200 | 92 | Exceptional value |
| 13 | Municipal Hotel Liverpool, MGallery | Liverpool | England | Under €200 | 91 | Exceptional value |
| 14 | Hotel Majapahit Surabaya – MGallery Collection | Surabaya | Indonesia | Under €100 | 91 | Exceptional value |
| 15 | The Royal Surakarta Heritage – Handwritten Collection | Solo | Indonesia | Under €50 | 91 | Exceptional value |
| 16 | Auberge Saint-Antoine | Quebec City | Canada | Under €200 | 90 | Exceptional value |
| 17 | Hotel & Spa Regent Petite France | Strasbourg | France | Under €250 | 90 | Exceptional value |
| 18 | The Phoenix Hotel Yogyakarta – Handwritten Collection | Yogyakarta | Indonesia | Under €50 | 89 | Exceptional value |
| 19 | Hotel de Bourgtheroulde, Autograph Collection | Rouen | France | Under €250 | 89 | Exceptional value |
| 20 | Sublime Samana Hotel & Residences | Las Terrenas | Dominican Republic | Under €250 | 89 | Exceptional value |
| 21 | Kimpton Blythswood Square Hotel & Spa | Glasgow | Scotland | Under €250 | 88 | Exceptional value |
| 22 | Natura Cabana Boutique Hotel & Spa | Cabarete | Dominican Republic | Under €250 | 88 | Exceptional value |
| 23 | Pandora Suite D’Angkor | Siem Reap | Cambodia | Under €50 | 88 | Exceptional value |
| 24 | The Majestic Hotel Kuala Lumpur, Autograph Collection | Kuala Lumpur | Malaysia | Under €200 | 87 | Exceptional value |
| 25 | The Brown Hotel | Louisville | United States | Under €100 | 86 | Exceptional value |
| 26 | The Pfister Hotel | Milwaukee | United States | Under €200 | 85 | Exceptional value |
| 27 | The Raweekanlaya Bangkok Wellness Cuisine Resort | Bangkok | Thailand | Under €200 | 85 | Exceptional value |
| 28 | Stamba Hotel | Tbilisi | Georgia | Under €250 | 84 | Strong value |
| 29 | Havana Nha Trang Hotel | Nha Trang | Vietnam | Under €50 | 84 | Strong value |
| 30 | Angkor Aurora | Siem Reap | Cambodia | Under €100 | 83 | Strong value |
| 31 | The Venetian Resort | Las Vegas | United States | Under €200 | 83 | Strong value |
| 32 | The Mayo Hotel | Tulsa | United States | Under €200 | 82 | Strong value |
| 33 | Pleiada Boutique Hotel & Spa | Iași | Romania | Under €200 | 81 | Strong value |
| 34 | Steigenberger Resort Achti Luxor | Luxor | Egypt | Under €200 | 81 | Strong value |
| 35 | The Central Station Memphis, Curio Collection by Hilton | Memphis | United States | Under €200 | 81 | Strong value |
| 36 | Silk Path Grand Hue Hotel & Spa | Hue | Vietnam | Under €100 | 80 | Strong value |
| 37 | The Hermitage, a Tribute Portfolio Hotel, Jakarta | Jakarta | Indonesia | Under €200 | 80 | Strong value |
| 38 | The Nines, a Luxury Collection Hotel | Portland | United States | Under €200 | 80 | Strong value |
| 39 | 21c Museum Hotel Louisville | Louisville | United States | Under €200 | 80 | Strong value |
| 40 | Grand Mercure Solo Baru | Solo Baru | Indonesia | Under €50 | 80 | Strong value |
| 41 | Hyatt Regency Tashkent | Tashkent | Uzbekistan | Under €200 | 79 | Strong value |
| 42 | Grand Hotel Yerevan | Yerevan | Armenia | Under €200 | 78 | Strong value |
| 43 | Kimpton Cottonwood Hotel | Omaha | United States | Under €200 | 78 | Strong value |
| 44 | Sofitel Marrakech Palais Imperial & Spa | Marrakech | Morocco | Under €250 | 78 | Strong value |
| 45 | Conrad Bangkok | Bangkok | Thailand | Under €50 | 78 | Strong value |
| 46 | Perry Lane Hotel, a Luxury Collection Hotel | Savannah | United States | Under €250 | 77 | Strong value |
| 47 | Boton Blue Hotel & Spa | Nha Trang | Vietnam | Under €100 | 76 | Strong value |
| 48 | Megapolis Hotel Panama | Panama City | Panama | Under €50 | 76 | Strong value |
| 49 | I'M Hotel Makati | Makati | Philippines | Under €200 | 75 | Strong value |
| 50 | Malak Regency Hotel | Sarajevo | Bosnia and Herzegovina | Under €200 | 73 | Good value |
| 51 | Bar Peepal Resort | Pokhara | Nepal | Under €100 | 73 | Good value |
| 52 | Real Marina Hotel & Spa | Olhão | Portugal | Under €200 | 72 | Good value |
| 53 | Graffit Gallery Design Hotel | Varna | Bulgaria | Under €200 | 71 | Good value |
| 54 | TTC Hotel Michelia | Nha Trang | Vietnam | Under €50 | 70 | Good value |
| 55 | Diamond Bay Hotel | Nha Trang | Vietnam | Under €50 | 69 | Good value |
| 56 | Millennium Downtown Abu Dhabi | Abu Dhabi | United Arab Emirates | Under €200 | 68 | Good value |
| 57 | Virgo Hotel | Nha Trang | Vietnam | Under €50 | 68 | Good value |
**Not in launch batch (future candidates):**
- Meliá Yangon
- NH Collection Bogotá WTC Royal
- Grand Mercure Medan Angkasa
- Novotel Ahmedabad
- Mandarina Colombo

### Site structure built

```
src/
  components/         - Header, Footer, HotelCard, HotelComparisonTable,
                        PriceTierCard, Badge, ValueScore, ImagePlaceholder,
                        Breadcrumbs, AffiliateDisclosure, SeoHead, SectionHeading,
                        SeasonalityCards, PhotoCarousel, RelatedGuides,
                        LastUpdated, PriceAccuracyNote, SeoLandingPage,
                        RegionPage, GuideArticle
  components/trust/   - FiveStarReality, WatchOutFor, WhyItsCheap, BestMonths
                        (reusable "before you book" trust panel on hotel pages)
  content/hotels/     - 57 Markdown hotel files
  content.config.ts   - Astro 6 Content Layer schema (glob loader);
                        includes optional whyCheap, seoTitle, seoDescription,
                        focusKeyword, secondaryKeywords and lastUpdated fields
  data/               - hotelSeasonality.ts, hotelAirQuality.ts,
                        imageAttributions.json/csv, destinationImages.ts
  lib/                - seo.ts and regions.ts helpers for canonicals, JSON-LD,
                        region routing and production URL consistency
  layouts/            - BaseLayout, PageLayout, HotelLayout
  pages/
    index.astro
    hotels/[slug].astro
    under-100.astro
    under-200.astro
    under-250.astro
    destinations.astro
    destinations/[slug].astro
    cheap-five-star-hotels.astro
    affordable-luxury-hotels.astro
    under-50.astro
    research-hotels.astro
    affordable-five-star-hotels-europe.astro
    affordable-five-star-hotels-asia.astro
    luxury-hotels-on-a-budget.astro
    sitemap.astro
    affiliate-disclosure.astro
    image-credits.astro
    about.astro
    guides/
      how-to-find-cheap-five-star-hotels.astro
      when-are-five-star-hotels-cheapest.astro
      five-star-hotel-ratings-explained.astro
      heritage-hotels-under-200.astro
      business-hotels-luxury-value.astro
    regions/
      asia.astro
      europe.astro
      middle-east-north-africa.astro
      caucasus-central-asia.astro
  styles/global.css   - Tailwind v4 + brand tokens
```

### Images

Hotel pages now use local image assets from `public/images/hotels/` rather than only placeholder blocks. Each live hotel has:

- a primary image referenced from frontmatter
- gallery image metadata in the hotel Markdown file
- original and web image files where available
- inline attribution where provided
- central image attribution data in `src/data/imageAttributions.json` and `src/data/imageAttributions.csv`
- a public image credits route at `/image-credits/`

AI-generated hotel image assets were added on 2026-05-31 for 25 hotel options in the AI image brief:

- **Master AI images:** 50 WebP files in `public/images/hotels/`
- **Master size:** 1600 x 1000 px, 16:10 landscape
- **Responsive derivatives:** 100 WebP files in `public/images/hotels/responsive/`
- **Derivative sizes:** 1200 x 750 and 800 x 500
- **Image types per hotel:** editorial dusk first, realistic daylight second
- **Research log:** `research/images/hotel-ai-image-reference-research.md`
- **Prompt file:** `research/images/hotel-ai-image-prompts.json`
- **Generation audit:** `research/images/hotel-ai-image-audit.md`
- **Generation script:** `scripts/generate-hotel-ai-images.js`
- **Reusable workflow doc:** `AI_HOTEL_IMAGE_GENERATION_WORKFLOW.md`

AI images are integrated into all 20 live hotel Markdown files. For those pages:

- the editorial dusk image is the primary card/hero image
- both AI images are listed in `generatedGallery`
- `PhotoCarousel.astro` renders the two-image carousel on the hotel detail page
- `HotelCard.astro`, `HotelLayout.astro`, and `PhotoCarousel.astro` use responsive image metadata where present

Five additional AI-image candidates currently have generated image assets but no live hotel profile Markdown file yet:

- Meliá Yangon
- Grand Mercure Medan Angkasa
- NH Collection Bogotá WTC Royal
- Novotel Ahmedabad
- Mandarin Colombo

- Placeholder SVG: `public/images/placeholders/luxury-hotel-placeholder.svg`
- Image brief for all 20 hotels: `research/image-needs.md`
- Image audit: `research/image-audit.md`
- Human-readable image attribution log: `image-attributions.md`
- Attribution workbook: `research/image-attributions.xlsx`
- Local raw PNG outputs currently exist for Hotel Majapahit Surabaya and The Phoenix Hotel Yogyakarta in `images generated/` and in hotel-specific `generated/` folders under `public/images/hotels/`. Treat these as local generation artifacts until they are reviewed and intentionally integrated.

Current AI image generation audit summary:

- Total AI-image hotels: 25
- Required AI images: 50
- AI images generated: 50
- AI images approved: 50
- AI images needing manual review: 0
- AI images pending: 0
- Model requested: `gpt-image-2`
- Quality requested: `high`

Current contextual/licensed image audit summary:

- Total hotels: 20
- Required images: 120
- Images downloaded: 120
- Images marked safe to use: 120
- Images needing review: 0
- Hotels still missing true licensed hotel-specific images: 20

The AI images are fully generated originals and should not be described as downloaded source images. Online hotel photos were used only as visual research references. The older contextual/licensed images remain useful for destination context and attribution-backed image credits, but many are destination, nearby-attraction, or contextual images rather than direct hotel press images.

Acceptable image sources: Wikimedia Commons (CC BY / CC BY-SA), Unsplash, Pexels, direct hotel press kits.

Destination-card AI image assets were completed on 2026-05-31 for all 20 launch destinations:

- **Final destination images:** 20 optimized WebP files in `public/images/destinations/`
- **Source files:** 20 PNG files in `public/images/destinations/source/`
- **Master size:** 1600 x 1000 px, 16:10 landscape
- **Image manifest:** `src/data/destinationImages.ts`
- **Page integration:** `src/pages/destinations.astro`
- **Research log:** `research/destination-ai-image-reference-research.md`
- **Prompt file:** `research/destination-ai-image-prompts.md`
- **Generation audit:** `research/destination-image-audit.md`
- **Generation script:** `scripts/generate_destination_ai_images.js`

The destination-card images are also fully generated originals. Online pages were reviewed only for visual research and landmark/destination cues; no online/source photos were used as final website assets.

### Booking.com links

Booking.com affiliate links are active. Hotel content files must store only clean canonical Booking.com hotel URLs in `bookingUrl`; do not store full CJ affiliate URLs in Markdown. The runtime helper `src/utils/affiliateLinks.ts` wraps each clean URL with the CJ base URL and `encodeURIComponent()` when rendering hotel-page and hotel-card CTAs.

When adding or updating hotels, remove temporary Booking.com parameters such as `chal_t` and `force_referer`, avoid search-result URLs such as `/searchresults.html?...`, and keep the hotel page path intact.

### Seasonality data

Hotel pages now support seasonality cards via:

- `src/components/SeasonalityCards.astro`
- `src/data/hotelSeasonality.ts`
- `src/data/hotelAirQuality.ts`
- `scripts/generate_hotel_seasonality.py`
- `research/hotel-seasonality-weather-price.xlsx`
- `research/hotel-air-quality-monthly.xlsx`

Seasonality appears on a hotel page when that hotel slug exists in `hotelSeasonality`.

Air-quality bars appear inside the same seasonality section when that hotel slug exists in `hotelAirQuality`.

Latest local seasonality/editorial review:

- `src/data/hotelSeasonality.ts` and `SeasonalityCards.astro` were enriched in committed work at `0e54288`.
- No seasonality files were changed as part of the latest destination-card image work.

Latest air-quality update:

- Monthly air-quality bars were added in commit `9f8d33c` and pushed to `main` on 2026-06-05.
- `SeasonalityCards.astro` now renders cards in this order on hotel pages with matching data: **Best time for weather**, **Air quality by month**, **Best time for price**.
- `src/data/hotelAirQuality.ts` stores workbook-derived PM2.5 estimates, US AQI estimates, labels, confidence levels, best months, cautions, and source URLs for 20 launch hotels.
- The card uses the workbook scale: Excellent, Good, Moderate, Poor, Avoid. Desktop displays one 12-month row; mobile wraps to two rows of six months with a compact legend and accessible PM2.5/AQI labels.
- Bar Peepal Resort, Pokhara currently has no matching row in `research/hotel-air-quality-monthly.xlsx`, so its air-quality card is hidden until data is added.
- Validation for the air-quality launch: `npm.cmd run build` passed; browser checks confirmed the required order, desktop one-row bar, mobile two-row wrap, and no page-level horizontal overflow.

### Prose styling

Hotel editorial body text uses Tailwind `prose` classes. `@tailwindcss/typography` is installed and enabled in `src/styles/global.css`:

```css
@plugin "@tailwindcss/typography";
```

### Next steps

Immediate next priority: add live profile pages for the AI-image candidates not yet present in `src/content/hotels/` - Meliá Yangon, Grand Mercure Medan Angkasa, NH Collection Bogotá WTC Royal, Novotel Ahmedabad, and Mandarin Colombo. Their AI image assets already exist. The main SEO scaffolding for landing pages, destination pages, regional pages, guide pages, sitemap, robots, llms and structured data is already in place.

1. **Replace contextual images with hotel-specific images where possible** — use `research/image-audit.md`, `image-attributions.md`, and the gallery frontmatter as the working source.
2. **Maintain Booking.com affiliate links** - every future hotel profile should include a clean canonical `bookingUrl` so the existing CJ helper can generate affiliate CTAs automatically.
3. **Maintain the post-50 collection** — future candidates listed above plus the destination strategy in this brief; use `research/seo-content-roadmap.md` as the working SEO roadmap and keep the live hotel table synced to frontmatter.
4. **Deepen existing city/destination pages** — the initial destination route is live for the 20 strongest cities, but individual pages should be enriched over time with more specific local sights, food, timing and hotel comparison detail.
5. **Keep this brief current** — whenever hotels, routes, image systems, data files, affiliate status, or build/deploy details change, update this Build status section in the same change.

## Maintenance note — 2026-05-31

Claude Code inspected the project for build errors, broken links, missing image references, data inconsistencies, SEO basics, accessibility issues, and safe usability improvements.

Implemented changes:
- Fixed two dead in-page links (`/destinations#city`) that pointed at non-existent anchors, repointing them to the real per-city destination pages (`/destinations/<city>/`) in `HotelLayout.astro` breadcrumbs and the homepage "Destination mood" tiles.
- Removed two stray LibreOffice lock files (`.~lock.*.xlsx#`) from git tracking and added the pattern to `.gitignore`.

Validation:
- All 405 image references in `src/` resolve to files in `public/`; no missing assets.
- robots.txt, sitemap, canonical/OG/Twitter metadata, and JSON-LD all present and correct.
- `npm run build` completed successfully (65 pages).
- Changes committed and pushed to `main`.

Recommended follow-ups (identified, not yet actioned):
- Add live profile pages for the 5 candidates that already have AI images but no content file: Meliá Yangon, Grand Mercure Medan Angkasa, NH Collection Bogotá WTC Royal, Novotel Ahmedabad, Mandarin Colombo. Their `public/images/hotels/*` assets are currently orphaned.
- `destinations.astro` cards link to hotel pages but not to the richer per-city destination pages (`/destinations/<city>/`) — worth surfacing those routes from the destinations index.
- Remove the unused `destinationSlugs` const in `src/pages/destinations/[slug].astro` (the route already defines its own `allowedSlugs`).
- Keep future hotel `bookingUrl` values clean canonical Booking.com hotel URLs so affiliate CTAs render automatically through the existing helper.

### Bar Peepal Resort, Pokhara added — 2026-06-05

- New hotel: **Bar Peepal Resort**, Pokhara, **Nepal** — `src/content/hotels/bar-peepal-resort-pokhara.md` (rank 18, score 73, Good value, Under €100, local five-star). First **Nepal** / **South Asia** entry on the site.
- `region` frontmatter set to `South Asia`; added `South Asia` to the `regionOrder` in `destinations.astro`; added `Nepal: 'Asia'` to `lib/regions.ts` so the hotel shows on the Asia region page and uses Asia regional links.
- Added `pokhara` to the destination route slug lists in `src/pages/destinations/[slug].astro` → `/destinations/pokhara/` is live.
- Re-ranked the tail of the list: Real Marina 18→19, Graffit Gallery 19→20, Millennium Downtown 20→21. Updated hardcoded "20 hotels" counts on `index.astro` and `about.astro` to 21.
- Seasonality added to `src/data/hotelSeasonality.ts` (Pokhara: clear Oct–Nov & Jan–Feb, Jun–Sep monsoon).
- Images: 6 Wikimedia Commons images sourced + converted to WebP under `public/images/hotels/bar-peepal-resort-pokhara/web/` (hero = Annapurna/Phewa view, CC BY 3.0). The page hero/og currently uses the sourced Wikimedia hero. The two ChatGPT AI heroes (editorial-dusk / realistic-daylight) are **pending from Gary** — prompts in `research/bar-peepal-resort-pokhara-image-prompts.md`; placeholder `.txt` markers and the exact frontmatter swap YAML are in place. Research note: `research/bar-peepal-resort-pokhara.md`.

---

### Mexico editorial profiles added — 2026-06-13

- Added three live Mexico profiles from the Mexico recommendations brief:
  - **Mansion Merida Boutique Hotel**, Merida — `src/content/hotels/mansion-merida-boutique-hotel.md` (rank 1, score 97, Exceptional value, Under €250, heritage-value five-star).
  - **Cartesiano Boutique & Wellness Hotel**, Puebla — `src/content/hotels/cartesiano-puebla.md` (rank 2, score 96, Exceptional value, Under €200 with Under €100 secondary tier, heritage-value five-star).
  - **Casa Don Gustavo Boutique Hotel**, Campeche — `src/content/hotels/casa-don-gustavo-campeche.md` (rank 6, score 94, Exceptional value, Under €200, heritage-value five-star).
- Re-ranked existing hotel Markdown files to fit the new global order: previous ranks 1-3 moved down by 2; previous ranks 4+ moved down by 3.
- Added **Mexico** to `src/lib/regions.ts` so Mexico profiles appear under the **Americas** regional guide.
- Added `merida`, `puebla` and `campeche` to the destination route allow-list in `src/pages/destinations/[slug].astro`.
- Added Mexico destination-card imagery to `src/data/destinationImages.ts`, using the new AI-generated daylight hotel images.
- Refreshed homepage featured picks to include the three Mexico profiles and updated homepage/Americas wording from a North America-only framing to an Americas framing.
- Added seasonality cards for Merida, Puebla and Campeche in `src/data/hotelSeasonality.ts`.
- Generated six new fully AI-generated hotel images with `gpt-image-2`, saved as masters in `public/images/hotels/` and responsive derivatives in `public/images/hotels/responsive/`:
  - `mansion-merida-boutique-hotel-editorial-dusk.webp`
  - `mansion-merida-boutique-hotel-realistic-daylight.webp`
  - `cartesiano-puebla-editorial-dusk.webp`
  - `cartesiano-puebla-realistic-daylight.webp`
  - `casa-don-gustavo-campeche-editorial-dusk.webp`
  - `casa-don-gustavo-campeche-realistic-daylight.webp`
- Updated AI image workflow files:
  - `scripts/hotel-ai-image-data.js`
  - `research/images/hotel-ai-image-reference-research.md`
  - `research/images/hotel-ai-image-prompts.json`
  - `research/images/hotel-ai-image-audit.md`
  - QA contact sheet: `research/images/mexico-ai-contact-sheet.jpg`
- Image audit now reports **28 hotels**, **56 required images**, **56 generated**, **0 needing manual review**, **0 pending**.

---

### Germany editorial profiles added — 2026-06-13

- Added three live Germany profiles from the Germany recommendations brief:
  - **Hotel Suitess**, Dresden — `src/content/hotels/hotel-suitess-dresden.md` (rank 1, score 100, Exceptional value, Under €250 with Under €200 secondary tier, heritage-value five-star).
  - **Steigenberger Icon Grandhotel Handelshof Leipzig**, Leipzig — `src/content/hotels/steigenberger-handelshof-leipzig.md` (rank 2, score 99, Exceptional value, Under €250 with Under €200 secondary tier, heritage-value five-star).
  - **Hotel Elephant Weimar, Autograph Collection**, Weimar — `src/content/hotels/hotel-elephant-weimar.md` (rank 3, score 99, Exceptional value, Under €250, heritage-value five-star).
- Re-ranked existing hotel Markdown files down by 3 to fit the new Germany leaders into the global order.
- Added **Germany** to `src/lib/regions.ts` so the new profiles appear under the **Europe** regional guide.
- Added `dresden`, `leipzig` and `weimar` to the destination route allow-list in `src/pages/destinations/[slug].astro`.
- Added Germany destination-card imagery to `src/data/destinationImages.ts`, using the new AI-generated daylight hotel images.
- Refreshed homepage featured picks to include the three Germany profiles and updated homepage/Europe wording to mention German cultural-city value.
- Added seasonality cards for Dresden, Leipzig and Weimar in `src/data/hotelSeasonality.ts`.
- Added six new fully AI-generated hotel images, saved as masters in `public/images/hotels/` and responsive derivatives in `public/images/hotels/responsive/`:
  - `hotel-suitess-dresden-editorial-dusk.webp`
  - `hotel-suitess-dresden-realistic-daylight.webp`
  - `steigenberger-handelshof-leipzig-editorial-dusk.webp`
  - `steigenberger-handelshof-leipzig-realistic-daylight.webp`
  - `hotel-elephant-weimar-editorial-dusk.webp`
  - `hotel-elephant-weimar-realistic-daylight.webp`
- The project API image generator hit an OpenAI billing hard limit, so Germany images were generated with the built-in image generation fallback and then converted to the site's standard WebP master/responsive sizes.
- Updated AI image workflow files:
  - `scripts/hotel-ai-image-data.js`
  - `research/images/hotel-ai-image-reference-research.md`
  - `research/images/hotel-ai-image-prompts.json`
  - `research/images/hotel-ai-image-audit.md`
  - QA contact sheet: `research/images/germany-ai-contact-sheet.jpg`
- Image audit now reports **31 hotels**, **62 required images**, **62 generated**, **0 needing manual review**, **0 pending**.

---

### Dominican Republic editorial profiles added â€” 2026-06-13

- Added three live Dominican Republic profiles from the Dominican Republic recommendations brief:
  - **Hodelpa Nicolas de Ovando**, Santo Domingo â€” `src/content/hotels/hodelpa-nicolas-de-ovando.md` (rank 6, score 96, Exceptional value, Under â‚¬250 with Under â‚¬200 secondary tier, heritage-value five-star).
  - **Sublime Samana Hotel & Residences**, Las Terrenas â€” `src/content/hotels/sublime-samana.md` (rank 19, score 89, Exceptional value, Under â‚¬250, local / booking-site five-star).
  - **Natura Cabana Boutique Hotel & Spa**, Cabarete â€” `src/content/hotels/natura-cabana-cabarete.md` (rank 21, score 88, Exceptional value, Under â‚¬250 with Under â‚¬200 secondary tier, near-luxury exception).
- Re-ranked existing hotel Markdown files around the Dominican Republic insertions while preserving score order.
- Added **Dominican Republic** to `src/lib/regions.ts` so the new profiles appear under the **Americas** regional guide.
- Added `santo-domingo`, `las-terrenas` and `cabarete` to the destination route allow-list in `src/pages/destinations/[slug].astro`.
- Added Dominican Republic destination-card imagery to `src/data/destinationImages.ts`, using the new AI-generated daylight hotel images.
- Refreshed homepage featured picks to include Hodelpa Nicolas de Ovando and updated homepage/Americas wording to mention Dominican Republic heritage and Caribbean value.
- Added seasonality cards for Santo Domingo, Las Terrenas and Cabarete in `src/data/hotelSeasonality.ts`.
- Added six new fully AI-generated hotel images, saved as masters in `public/images/hotels/` and responsive derivatives in `public/images/hotels/responsive/`.
- Updated AI image workflow files:
  - `scripts/hotel-ai-image-data.js`
  - `research/images/hotel-ai-image-reference-research.md`
  - `research/images/hotel-ai-image-prompts.json`
  - `research/images/hotel-ai-image-audit.md`
  - QA contact sheet: `research/images/dominican-republic-ai-contact-sheet.jpg`
- Image audit now reports **34 hotels**, **68 required images**, **68 generated**, **0 needing manual review**, **0 pending**.

---

The site includes a Hotel Finder page (`/research-hotels/`) with the public promise "Find the Right Hotel for Your Trip." It lets readers enter a destination, budget level, traveller priorities and optional trip scenario, then copy a practical hotel-finding brief for comparing good-value hotel options by value, five-star reality, location, recent reviews, nearby things to do and honest drawbacks. The prompt auto-injects the published hotels for the selected country and a site-wide coverage line, both derived at build time from the same source as the homepage hotel list. The "How We Choose Hotels" methodology text now lives at the bottom of this page as `/research-hotels/#methodology`. The retired `/cheapest-cities-five-star-hotels/` page redirects to `/research-hotels/`, and `/methodology/` redirects to `/research-hotels/#methodology`, via the Cloudflare Pages `_redirects` file. The `/under-50/` page is now a live tier page for carefully qualified under-€50 snapshot-rate candidates.

### Research prompt tool - "When to go" companion prompt

The `/research-hotels/` page should offer two separate generated prompts:

1. A hotel-finding prompt that compares credible affordable five-star, near-five-star and clearly marked near-luxury exception hotel options in the selected destination and price tier.
2. A "When to go" prompt that uses the same destination and price tier to research monthly seasonality.

The "When to go" prompt should not find hotels again. It should research:
- best months for weather
- air quality by month
- monthly hotel-price value
- best overall months for value travellers
- caveats around data quality, daily AQI variation and changing hotel prices

The output should be traveller-facing first, with a structured monthly JSON block underneath so the data can later be reused in visual seasonality cards.

The prompt should use cautious, evidence-based language and avoid promising exact prices or perfect weather.

As of 2026-06-14, `/destinations/` has been replaced with the homepage-style "The full list" section: "All {hotel count} hotels at a glance", ranked by value score, with every row linking to the full hotel editorial profile.

### Under €50 research block added — 2026-06-14

- Added a new `/research-hotels/` editorial section, **Best hotels found at €50 or below**, near the top of the page.
- Added the **Best 3 to develop first** row for The Royal Surakarta Heritage – Handwritten Collection, Pandora Suite D’Angkor, and Havana Nha Trang Hotel.
- Added the full 10-hotel under-€50 candidate table, with visible snapshot-rate caution language and Conrad Bangkok marked as a rate anomaly requiring recheck.
- Updated the visible fallback rule and generated country research prompt so empty under-€50 results display **No credible candidate found under €50** and use the label **Fallback above €50** for fallback results.

### Under €50 live profiles added — 2026-06-14

- Promoted the under-€50 research candidates into a live **Under €50** tier and replaced `/under-50/` with a real collection page.
- Updated **The Royal Surakarta Heritage – Handwritten Collection** and **The Phoenix Hotel Yogyakarta – Handwritten Collection** from `Under €100` to `Under €50`, with `Under €100` retained as the secondary tier.
- Added eight new hotel profiles:
  - **Pandora Suite D’Angkor**, Siem Reap, Cambodia.
  - **Havana Nha Trang Hotel**, Nha Trang, Vietnam.
  - **Conrad Bangkok**, Bangkok, Thailand.
  - **Megapolis Hotel Panama**, Panama City, Panama.
  - **Virgo Hotel**, Nha Trang, Vietnam.
  - **TTC Hotel Michelia**, Nha Trang, Vietnam.
  - **Diamond Bay Hotel**, Nha Trang, Vietnam.
  - **Grand Mercure Solo Baru**, Solo Baru, Indonesia.
- Generated and integrated one AI editorial hero plus 1200px and 800px WebP derivatives for each of the eight new profiles.
- Added Panama to the Americas region map, added `panama-city` and `solo-baru` destination routes, refreshed global ranks, and updated the project brief live hotel table to **57 hotels**.

### Homepage hero background lightened — 2026-06-14

- Brightened the homepage hero background image and reduced the dark overlay strength while leaving the floating hero copy panel unchanged.
