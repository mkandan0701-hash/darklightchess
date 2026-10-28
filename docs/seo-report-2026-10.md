# International SEO / AEO / GEO Report — Darklight Chess Academy

**Date:** 2026-10-28 · **Branch:** `seo/international` (not merged, not deployed)

Status labels:
- ✅ **Done & verified** — checked locally against the production build
- 🟡 **Implemented, not externally verified** — needs a deploy or a Google tool
- 🟠 **Partial**
- ⛔ **Blocked**

## A. Initial audit findings
- **Stack:** Astro 7 static output, hosted on Vercel. `www` is canonical (the apex domain 308-redirects to it). The previous round left a Coimbatore-local SEO base: 7 service pages, Markdown blog (3 published / 23 drafts), shared Seo/schema components and a sitemap.
- **P0 issues**
  - 165 header/footer links pointed to `#about`-style anchors that don't exist on sub-pages.
  - `/page` and `/page/` both returned 200, as did `/index.html`.
  - `http://darklightchess.com` takes 2 redirect hops to reach `www`.
  - There were no tests.
  - 68 images had no width/height.
  - `gallery-new2.jpg` is referenced but missing (it 404s live too).
- **P1 issues**
  - Every online page (including `/online-chess-classes/`) targeted "Coimbatore", so the international audience had no page and the online pages competed with the local ones.
  - No intermediate/advanced page.
  - No About, Coaches or Privacy pages.
  - The form lived only on the homepage, with no country, time zone or consent fields.
- **Facts:**
  - The homepage said "500+ Students Enrolled" and also "over 70+ active students".
  - A testimonial credits "Coach Vinoth", who isn't on the coach list.
- **Security (pre-existing):** the CRM webhook secret is hard-coded in `public/assets/js/main.js`.
- **Baseline checker run:** 233 errors. **After:** 0 errors, 1 warning (a Coimbatore page description is 174 characters; that page was left unchanged).

## B. Technical SEO
| Task | Status |
|---|---|
| `scripts/seo-check.mjs` + `npm test`. Checks titles/descriptions (present, unique), self-canonicals, single H1, img alt/width/height, JSON-LD parses, internal links/anchors resolve, hreflang reciprocity/x-default/targets, sitemap vs noindex/canonical, robots.txt | ✅ |
| Nav/footer anchors → crawlable `/#section` links; `main.js` scrolls in-page on `/` | ✅ (links). In-browser click behaviour 🟡 |
| `vercel.json` `trailingSlash: true` + Astro `trailingSlash: 'always'` | 🟡 needs deploy, then `curl -I /online-chess-classes` should return 308 |
| Sitemap excludes noindex pages (single list in `src/lib/seo.ts`) | ✅ |
| robots meta on every page (`index, follow, max-image-preview:large`; Australia `noindex, follow`; 404 `noindex, nofollow`) | ✅ |
| `Img` component: every content image gets intrinsic width/height (CLS) and lazy/async loading | ✅ |
| Homepage hero (CSS background, the LCP image) preloaded with `fetchpriority=high`; unused Poppins 300 dropped | ✅ build. Real CWV 🟡 |
| http→apex→www 2-hop chain | ⛔ Vercel domain setting (manual) |

## C. On-page SEO
| URL | New primary intent | Status |
|---|---|---|
| `/` | online chess academy (brand). Title "Darklight Chess Academy \| Online Chess Academy & Coaching" | ✅ |
| `/online-chess-classes/` | online chess classes for kids. Rewritten as the international hub: at-a-glance facts, how it works, levels, country links, 8 parent Q&As, embedded form | ✅ |
| `/chess-classes-for-beginners/` | beginners (online-first). Adds best-age and learn-online Q&As | ✅ |
| `/one-to-one-chess-coaching/` | private online chess lessons. Adds a private-vs-group answer | ✅ |
| `/tournament-chess-coaching/` | tournament preparation. Adds a first-tournament answer | ✅ |
| **new** `/advanced-chess-training/` | intermediate & advanced. Copy taken from the homepage course cards | ✅ |
| 3 Coimbatore pages | local intent, unchanged (one false "form on this page" sentence fixed) | ✅ |

Existing URLs were kept, so no redirects were needed. `/private-online-chess-lessons/` and `/chess-coaching-for-tournaments/` were **not** created: they would duplicate existing pages.

## D. International SEO
- **Country pages** `/online-chess-classes-{usa,uk,canada,india}/`. Each page has:
  - its own intro and federation/tournament context (US Chess, ECF, CFC, AICF/FIDE)
  - computed time-zone tables against IST, with DST dates
  - verified local proof only:
    - **USA:** Harinandan, Harinanthan, Aayush ×2
    - **Canada:** the online-coached win, and the Toronto chess-centre photo
    - **UK:** the London testimonial
    - **India:** the Trichy champion, two testimonials and the Coimbatore centres
  - market-specific FAQs and a form with the country preselected

  No prices, currencies or timetables were invented. Fees are "shared on enquiry" and slots are "confirmed on enquiry". ✅
- **Australia** is built but `noindex`. It's kept out of the sitemap, hreflang and nav until real AU evidence exists. ✅
- **hreflang cluster:** hub = `x-default` + `en`; en-US, en-GB, en-CA, en-IN. Reciprocal and self-referencing, consistent with the canonicals (the checker enforces this). No IP redirects. ✅ locally, 🟡 in GSC.

## E. AEO
- Question-led answers, each opening with a one-sentence direct answer, spread so that **no FAQ repeats across pages**:
  - **Hub:** how online classes work; are they effective; how often; tracking progress; choosing a coach; equipment; cost; time zones
  - **Beginners:** best age; learning online
  - **1-to-1:** private vs group
  - **Tournament:** first tournament
  - **Advanced:** readiness; improving rating; advanced vs tournament
  - **Country pages:** local scheduling and local tournaments

  ✅
- No academic or cognitive claims. FAQPage markup is kept only where the Q&A is visible. **FAQ rich results are not expected**: Google limits them to authoritative government and health sites.

## F. GEO
- One `SITE_DESCRIPTION` in `src/consts.ts`, reused by Organization schema, the About page and `llms.txt`. ✅
- `/about/`:
  - a verified-facts list (founders, centres, countries, students labelled "500+ taught to date; 70+ currently active", 25+ coaches, contact, socials), kept apart from the mission statement
  - the coaching method
  - ✅
- `/coaches/`: all 6 coaches from shared `src/data/coaches.ts` (the homepage uses the same data), achievements verbatim, anchor per coach. ✅
- `/privacy-policy/`: describes the actual data flows (FormSubmit, CRM, WhatsApp, localStorage copy, Google Maps/Fonts, Vercel logs). 🟠 **Needs owner/legal review.**
- `public/llms.txt`: a factual summary + URL map. It doesn't guarantee AI citations. ✅
- robots.txt: unchanged. It allows all crawlers, nothing was blocked, and nothing was opened up further. ✅

## G. Structured data
- **Organization** (EducationalOrganization) with `@id`, description, ImageObject logo, founders, sameAs.
- **WebSite** → `publisher` `@id`.
- **LocalBusiness:** own `@id` + `parentOrganization`, url = the Coimbatore page. Still on `/` and `/chess-academy-coimbatore/` only. No geo/hours (unconfirmed).
- **BlogPosting** with publisher/author `@id` and mainEntityOfPage.
- **Course** on the hub and 4 course pages, with only the modes each page states.
- **Person** ×6 on `/coaches/`.
- **BreadcrumbList** everywhere.
- No ratings or reviews markup.

JSON-LD syntax is validated by the checker ✅. Schema.org / Rich Results validation 🟡 (manual).

## H. Blog
- Visible published/updated dates, `og:type=article` + article times, BlogPosting schema.
- 3 related posts (same category first).
- A `nextStep` frontmatter link (set on the 3 published posts).
- Brand-length title fallback.

✅ **No drafts published.**

- `docs/editorial-calendar-international.md`: 12 articles. 8 map to existing drafts (to review), 4 are new outlines.
- `docs/keyword-map.csv`: 37 keywords → URL/intent/market. Volume/difficulty columns are left **empty on purpose**, to fill from Keyword Planner/GSC.

## I. Conversion
- **Shared `EnquiryForm`:**
  - It appears on `/`, the hub and every country page, in `section#contact`, so "Book a Free Demo" buttons scroll to the form on the same page.
  - New fields: Country, Time zone (auto-filled, editable), Chess experience, required consent checkbox → privacy policy, hidden landing `page`, honeypot.
  - New course option: "Private 1-to-1 Lessons".
  - The new fields go into the existing CRM `notes` and the FormSubmit email. **CRM payload shape unchanged.**

  ✅ code. 🟡 not submitted end-to-end, because a real submission emails the academy and creates a real CRM lead.
- A `generate_lead` dataLayer push is ready for future analytics. Nothing is loaded today.

## J. Files changed
52 files vs `main`.
- **New:**
  - `vercel.json`, `scripts/seo-check.mjs`, `public/llms.txt`
  - `src/lib/{seo,time,image-size}.ts`, `src/data/{markets,coaches}.ts`
  - `src/components/{CountryLandingPage,EnquiryForm,Img}.astro`, `schema/{Course,Person}Schema.astro`
  - pages: about, coaches, privacy-policy, advanced-chess-training, 5 country routes
  - docs: keyword-map.csv, editorial-calendar-international.md, this report
- **Modified:**
  - config: astro.config.mjs, package.json, src/consts.ts, src/content.config.ts
  - layout/components: BaseLayout, Seo, Header, Footer, PageHero, BlogCard, all schema components
  - pages: index, online-chess-classes, beginners, one-to-one, tournament, chess-academy-coimbatore, blog index/post
  - assets: main.js, style.css
  - content: 3 published posts (frontmatter only)
  - docs: seo-tracking-plan.md

## K. Tests and build
- `npm test` (astro build + seo-check): **22 pages built, 0 errors, 1 warning** ✅
- `node --check public/assets/js/main.js` ✅
- `astro preview`:
  - every sitemap URL + Australia + llms.txt + robots.txt → 200
  - an unknown URL → 404
  - the USA time-zone table was checked by hand against UTC offsets

  ✅
- **Mobile layout** 🟠: headless Edge on this machine enforces a minimum window width, so a true 390px render could not be captured. The live, unchanged site showed the same clipping, which confirms the tool, not the code, caused it. New CSS has 820px breakpoints, but please check on a real phone.
- The project has no lint config or unit-test framework. None was added, to avoid new dependencies.

## L. Needs manual access / external verification
1. Deploy the branch (Vercel preview first). Confirm the trailing-slash 308s, and that `/assets/*` still sends the 1-year immutable cache header.
2. Vercel domains: make `http://darklightchess.com` redirect straight to `https://www.darklightchess.com` (one hop).
3. Google Search Console: Domain property, submit the sitemap, URL-inspect the hub + 4 country pages, check the hreflang/International reports, and run the Rich Results test on `/coaches/` and a course page.
4. **Rotate the CRM webhook secret.** It is public in `main.js` and in git history. You chose to keep client-side submission; a server-side proxy (Vercel function) remains the recommended fix.
5. Do one real test submission of the form from a country page. Check the email, the CRM lead (`Country:`, `Time zone:`, `Page:` in notes) and the success message.
6. Google Business Profile: confirm the NAP matches `src/consts.ts`.

## M. Remaining issues and risks
- **Homepage retitle.** "Coimbatore" was removed from the homepage title. Local rankings should now come from the 3 Coimbatore pages + LocalBusiness schema. Watch Coimbatore queries in GSC for 4–6 weeks.
- **Header nav changed:** Online Classes, Coaches and About were added; Gallery and FAQ moved to the footer only.
- **Facts the owner should confirm:**
  - "Coach Vinoth" (testimonial; not on the coach list)
  - "80+ Clients" (meaning unclear)
  - "(VI)" in two coach achievements (kept verbatim)
  - permission for named students on the country pages (Harinandan, Harinanthan, Aayush; already public on the homepage gallery)
- **`gallery-new2.jpg` is missing.** It's commented out in `index.astro` with a TODO. Re-upload it to restore.
- **Australia:** needs real AU evidence, then set `published: true` in `src/data/markets.ts`. Its hreflang, sitemap entry and footer link then appear automatically.
- **Privacy policy:** owner/legal review. It describes the localStorage copy of enquiries; consider removing that feature.
- **Gallery images** are 150–360 KB JPEGs. Converting them to WebP/AVIF would cut page weight (they're lazy-loaded, so this isn't urgent).
- **Server-side form validation/spam protection** is limited to client checks + honeypot, because the CRM proxy was declined.

## N. Next 30 days
- **Week 1**
  - Review and merge, then deploy.
  - Do items L1–L5.
  - Fix any GSC coverage issues.
- **Week 2**
  - Publish calendar articles 1–2 (best age, how often) after coach review.
  - Ask 2–3 international families for permission-based testimonials, and use them on the country pages.
- **Week 3**
  - Write article 3 (are online classes effective).
  - Add the real AU proof, or leave Australia held back.
  - Start the server-side CRM proxy, or at least rotate the secret.
- **Week 4**
  - First GSC review: impressions by country and page vs `keyword-map.csv`.
  - Rewrite titles where CTR is under 1% and impressions are over 100.
  - Look for legitimate backlinks: local chess federations' club/coach directories (where the academy qualifies), school partner pages, tournament organisers that list sponsors or coaches, and interviews/podcasts on chess parenting.

**Not promised:** first-page rankings, traffic growth or AI citations. These changes make the site easier to crawl, understand and trust. Results depend on indexing, competition, content cadence and links.
