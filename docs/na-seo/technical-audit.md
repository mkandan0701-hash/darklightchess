# Technical SEO audit: darklightchess.com (North America focus)

**Audited:** 2026-11-13. Live HTTP checks were done with curl, and the source code with a build-output review (`dist/`, 46 HTML files, built 2026-11-07).
**Not measured:**
- Core Web Vitals. There's no CrUX data for a low-traffic site, and PageSpeed Insights wasn't run in this session. Run PSI on `/`, `/online-chess-classes-usa/` and `/pricing/`, and use GSC's CWV report once traffic exists.
- Google index coverage. This needs GSC; `site:` returned nothing in the research tool, which isn't conclusive.

## What is already good (verified)
- HTTPS. Apex → www with a single 308 (`https://darklightchess.com/` → `https://www.darklightchess.com/`).
- `robots.txt` allows all crawlers, including the AI ones, and points to `https://www.darklightchess.com/sitemap-index.xml` (200, `application/xml`). `/sitemap.xml` returns 404. That's harmless as long as GSC is given `sitemap-index.xml`.
- 44 URLs in the sitemap; noindexed pages excluded.
- Static HTML (Astro). Content is in the HTML, so there's no JS-rendering risk for crawlers.
- One H1 per page; unique titles and descriptions (98–165 characters); self-referencing canonicals; full OG/Twitter tags.
- hreflang cluster (en-US, en-CA, en-GB, en-IN, …, x-default → hub) is reciprocal on 12 pages.
- All 232 `<img>` tags have alt text, width and height, and lazy-loading. No broken internal links in the build.

## Issues by severity

### CRITICAL
**C1. CRM webhook secret exposed in public JavaScript**
- **What:** `public/assets/js/main.js:317` ships the lead-capture webhook secret to every visitor, and it's also in git history.
- **Why it matters:** anyone can post fake leads. That corrupts the demo-booking data the whole NA programme is measured on, and it can be abused.
- **Fix:**
  1. Create a Vercel function `api/lead.ts` that reads the secret from `process.env.CRM_WEBHOOK_SECRET`, validates fields and the honeypot, rate-limits per IP, and forwards to the CRM.
  2. Point `main.js` at `/api/lead`.
  3. Rotate the secret in the CRM.
  4. Set the env var in Vercel.
- **Benefit:** trustworthy funnel data (not a ranking factor).

**C2. No analytics or conversion tracking**
- **What:** no GA4 or GTM. `generate_lead` is pushed only if `dataLayer` exists (`main.js:471-475`), so it never fires. The GSC meta tag renders only if `PUBLIC_GSC_VERIFICATION` is set.
- **Why it matters:** you can't count US/CA visitors, demo bookings by landing page, or organic enrolments, so you can't tell whether the 10-student goal is on track.
- **Fix:**
  1. Load gtag in `src/layouts/BaseLayout.astro` when `import.meta.env.PUBLIC_GA4_ID` is set (the same pattern as `Seo.astro:44`).
  2. Mark `generate_lead` as a key event, with params `country`, `timezone`, `course`, `landing_page`.
  3. Add a `whatsapp_click` event on `wa.me` links.
  4. Verify GSC (Domain property via DNS, preferred) and submit `sitemap-index.xml`.
  5. Update `src/pages/privacy-policy.astro:66`.
  6. Show a short consent notice to Quebec visitors (Law 25), or to all visitors for simplicity.
- **Benefit:** measurement for every later decision.

### HIGH
**H1. Unverifiable "FIDE-rated" claims in titles and H1s**
- **What:** the `/coaches/` H1, the homepage and the hub claim "FIDE-rated coaches", but `src/data/coaches.ts` has no ratings or IDs.
- **Why it matters:** E-E-A-T and trust. Parents and AI engines can't verify it; competitors (Kingdom of Chess) publish ratings.
- **Fix:** add `fideId` and `fideRating` fields to the coach data; render a link to `https://ratings.fide.com/profile/{id}`; add Person `sameAs`. For any coach without an ID, drop the claim.
- **Benefit:** trust, conversion and citation likelihood.

**H2. Pricing presented as a currency conversion**
- **What:** `src/data/pricing.ts` shows ≈US$11 / CA$15 as rounded conversions of ₹1,000.
- **Why it matters:** "about $11, varies with exchange rate" reads as cheap and uncertain to NA parents. It also can't go into `offers` schema.
- **Fix:** owner-set USD and CAD tiers (group / 1:1 / sibling) as their own fields. Render them on `/pricing/`, the USA/Canada pages and `/one-to-one-chess-coaching/`. Add Course `offers`.
- **Benefit:** conversion, price-query AEO, rich-result eligibility.

**H3. Inconsistent facts across the site**
- **What:** student counts (`src/data/stats.ts` 70 active / `about.astro:151` 500+), countries (30 vs 24 listed in `countries.ts`) and the starting age (Beginner 3+ in `levels.ts`, "from age 5" on the beginners page, 4–6 in the home FAQ, form bands from 4–7) don't agree.
- **Why it matters:** AI engines and parents notice contradictions. It weakens entity trust.
- **Fix:** one source of truth per fact; reference it from every page and from `llms.txt`.

**H4. USA/Canada pages are thin on local proof and have mismatched links**
- **What:**
  - The Canada page repeats one unnamed win 3×.
  - Its blog cards are UK posts (ECF, UK costs, UK Chess Challenge).
  - Its time-zone table labels Newfoundland "NT" (should be NL).
  - USA and Canada have no `lastUpdated`, so no sitemap `lastmod`.
- **Fix:** edit the `markets.ts` USA/Canada entries (details in `landing-architecture.md`).
- **Benefit:** relevance for US/CA queries, freshness signal, conversion.

**H5. Time-zone field has no selectable options**
- **What:** the form autofills the time zone (`main.js:385-392`), but a parent can't pick one.
- **Fix:** add a select with the US zones (ET/CT/MT/PT/AKT/HT) and the Canadian ones (PT/MT/CT/ET/AT/NT), plus "Other".
- **Benefit:** fewer scheduling errors and no-shows.

### MEDIUM
| # | Issue | Location | Fix | Benefit |
|---|---|---|---|---|
| M1 | No Review/AggregateRating markup despite testimonials | `src/components/schema/` | Add `Review` to Course pages, **only for real, on-page reviews**. Self-serving Organization stars aren't eligible in Google. | Possible review snippets |
| M2 | Heading skips h1→h3 (enquiry form, blog cards); h2→h4 on privacy | `EnquiryForm.astro:41`, blog card component, `privacy-policy.astro` | Use h2, or style a `<p>` | Accessibility and clean outline |
| M3 | `areaServed` uses ISO codes as Country names | `OrganizationSchema.astro` | `{"@type":"Country","name":"United States"}` | Clearer entity |
| M4 | Images are 6.6 MB of JPG/PNG with no WebP/AVIF or srcset | `public/assets/images`, `src/components/Img.astro` | Move to `src/assets` + Astro `<Image>`/`<Picture>`, or batch-convert to WebP | LCP on mobile |
| M5 | `.reveal` sections start at `opacity:0` and rely on JS | `style.css:510`, `main.js:114-125` | `<noscript><style>.reveal{opacity:1}</style></noscript>`, and respect `prefers-reduced-motion` | Robustness; no CLS/LCP surprises |
| M6 | Full-screen page-loader overlay | `main.js:20-60` | Remove it, or skip it on first paint | It can delay LCP and INP perception |
| M7 | Blog author is the organisation | `src/content.config.ts`, BlogPosting schema | Add `author` (coach) + `reviewedBy` | E-E-A-T |
| M8 | Draft `best-age-for-a-child-to-learn-chess` duplicates the live what-age post | `src/content/blog/` | Merge it in and delete the draft | Avoids cannibalisation |

### LOW
- Render-blocking Google Fonts. Add `display=swap` and preconnect, or self-host.
- FAQPage on 25 pages with repeated questions. Keep it on the pages where the FAQ is the main content; Google shows FAQ rich results for few sites anyway.
- `gallery-new2.jpg` is missing (commented out).
- Optional: add `/sitemap.xml` as a redirect to `/sitemap-index.xml` for tools that assume the default path.

## International targeting decision
- **Keep the current model:** one English site, a global hub as x-default, and **one** page per country (USA and Canada already exist).
- **No** subfolders or ccTLDs per country. There's no unique offer per country beyond price and time slots, and those fit on one page.
- **hreflang is justified** for en-US and en-CA because those pages genuinely differ (currency, time zones, rating bodies, local proof). Keep it.
- **No city pages.** City intent is served through time-zone and local-tournament sections on the country pages.
