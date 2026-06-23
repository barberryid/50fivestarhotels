# 50 Five-Star Hotels Project Brief

Last updated: 2026-06-23

## Project

50 Five-Star Hotels is a traveller-facing Astro site about affordable five-star and near-five-star hotels: five-star hotels without five-star prices.

- Production domain: https://50fivestarhotels.com/
- Canonical domain: `https://50fivestarhotels.com`
- Cloudflare Pages preview/domain: https://50fivestarhotels.pages.dev/
- GitHub: https://github.com/barberryid/50fivestarhotels
- Production branch: `main`
- Build command: `npm run build`
- Build output: `dist`

## Current SEO Update - 2026-06-23

SEO was reviewed and updated across the central Astro templates rather than one page at a time.

Implemented:

- Added canonical host redirects in `public/_redirects`:
  - `www.50fivestarhotels.com/*` -> `50fivestarhotels.com/:splat`
  - `50fivestarhotels.pages.dev/*` -> `50fivestarhotels.com/:splat`
- Expanded shared head metadata in `src/components/SeoHead.astro`:
  - crawler directive now allows large image previews
  - author, theme color and format-detection tags
  - Open Graph locale, secure image URL and image alt metadata
  - Twitter image alt metadata
  - article published/modified metadata support
- Expanded central SEO utilities in `src/lib/seo.ts`:
  - stronger WebSite and Organization JSON-LD
  - reusable WebPage JSON-LD
  - reusable Article JSON-LD
  - enriched ItemList JSON-LD with `numberOfItems`
- Wired richer structured data into:
  - hotel pages (`src/layouts/HotelLayout.astro`)
  - guide articles (`src/components/GuideArticle.astro`)
  - SEO landing pages (`src/components/SeoLandingPage.astro`)
  - regional collection pages (`src/components/RegionPage.astro`)
  - generic utility pages (`src/layouts/PageLayout.astro`)
  - homepage, Hotel Finder, Best Time to Go, All Hotels and budget-tier pages
- Added canonical URLs and collection/list schema to `/under-100/`, `/under-200/` and `/under-250/`.
- Refreshed `public/llms.txt` so AI crawlers see the current tool, collection, region and core guide pages.

## Current Content Shape

- Published hotel profile files: 57
- Core tool pages:
  - `/hotel-finder/`
  - `/best-time-to-go/`
  - `/pre-travel-checklist/`
- Core collection pages:
  - `/all-hotels/`
  - `/under-50/`
  - `/under-100/`
  - `/under-200/`
  - `/under-250/`
- Core SEO landing pages:
  - `/cheap-five-star-hotels/`
  - `/affordable-luxury-hotels/`
  - `/luxury-hotels-on-a-budget/`
  - `/affordable-five-star-hotels-asia/`
  - `/affordable-five-star-hotels-europe/`
- Region pages:
  - `/regions/americas/`
  - `/regions/asia/`
  - `/regions/europe/`
  - `/regions/middle-east-north-africa/`
  - `/regions/caucasus-central-asia/`

## SEO Rules To Preserve

- Keep `https://50fivestarhotels.com` as the canonical URL in Astro config and generated tags.
- Keep `www` and `pages.dev` redirected to the apex domain to avoid duplicate indexing.
- Hotel frontmatter should keep clean canonical Booking.com URLs only; affiliate wrapping is handled at render time.
- New hotel pages should include:
  - `seoTitle`
  - `seoDescription`
  - `focusKeyword`
  - `secondaryKeywords`
  - `lastUpdated`
  - useful image alt text
- New collection pages should include:
  - canonical path
  - breadcrumb schema
  - CollectionPage schema
  - ItemList schema when showing hotels

## Verification

After SEO changes, run:

```bash
npm run build
```

Recommended spot checks:

- generated `dist/index.html` contains canonical, OG/Twitter image tags and WebPage/WebSite/Organization JSON-LD
- generated hotel pages contain Article, Hotel, WebPage and Breadcrumb JSON-LD
- generated `/under-100/`, `/under-200/`, `/under-250/` pages contain canonical URLs and ItemList JSON-LD
- after deployment, check:
  - `https://www.50fivestarhotels.com/` redirects to the apex domain
  - `https://50fivestarhotels.pages.dev/` redirects to the apex domain

## Useful Folders

- Hotel content: `src/content/hotels`
- Source hotel images: `public/images/hotels`
- Research: `research`
- Scripts: `scripts`
- Generated/social images: `public/images/social`

## Follow-Ups

- Add `lastUpdated` to the remaining hotel Markdown files that do not yet have it.
- Consider richer page-specific FAQ schema only where the visible page includes real FAQ-style Q&A content.
- Keep `public/llms.txt` synced whenever major routes or positioning change.
