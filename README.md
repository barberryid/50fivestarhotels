# 50 Five-Star Hotels

Astro site for 50 Five-Star Hotels, an editorial guide to affordable five-star and near-five-star hotels.

## Development

```bash
npm install
npm run build
npm run preview
```

## Google Search Console verification

To add Google Search Console verification, set:

```bash
PUBLIC_GOOGLE_SITE_VERIFICATION=...
```

`SeoHead.astro` will emit the verification meta tag when the variable is present.

## SEO checklist before deploy

- [ ] `npm run build` passes
- [ ] Sitemap generated
- [ ] `robots.txt` points to production sitemap
- [ ] Canonicals use `https://50fivestarhotels.com`
- [ ] No canonical points to `.pages.dev`
- [ ] Every page has one H1
- [ ] Every indexable page has title and description
- [ ] Hotel pages have BreadcrumbList JSON-LD
- [ ] Hotel pages have conservative Hotel/Article JSON-LD
- [ ] Tier and destination pages have ItemList JSON-LD
- [ ] Images have useful alt text
- [ ] Hero/LCP images have dimensions and fetchpriority
- [ ] Affiliate disclosure visible where booking links appear
- [ ] Internal links added from new SEO pages to hotel pages
