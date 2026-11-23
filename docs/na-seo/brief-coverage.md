# Master brief coverage: USA SEO + AEO + GEO

**Updated:** 2026-11-23. This maps each deliverable in the "USA SEO + AEO + GEO domination" brief to where it lives, and what's still open.

**Data honesty (unchanged):** no Keyword Planner, Semrush, Ahrefs, GSC or GA4 exports have been supplied. Search volume, keyword difficulty, CPC, backlink counts and traffic stay **unavailable** in every file. Nothing has been estimated to fill those columns.

| # | Deliverable | Where | Status |
|---|---|---|---|
| 1 | Website SEO audit | `technical-audit.md` | Done (13 Nov). C1, C2, H1, H2, H4 fixed in `2bc0532`/`03f6cce`. **M5, M7, M8 and the blog-index heading skip fixed 23 Nov.** Open: H3 (student/country counts), M1 (reviews, needs real reviews), M4 (WebP images), M6 (loader), Core Web Vitals (run PageSpeed Insights). |
| 2 | Competitor analysis | `competitors.md`, `competitors-deep-dive.md` | Done. Silver Knights / Magnus not verified (see notes there). |
| 3 | 100+ US keyword sheet | `keywords-usa.csv` (295 rows), `top-100.csv` | Done, **volumes unavailable**. Re-rank when exports arrive. |
| 4 | Keyword clustering | `topical-map.md`, `keyword-gap.md` | Done. Brief's 8 clusters map onto the 5 pillars plus the age, homeschool and tournament pages. |
| 5 | URL architecture | `landing-architecture.md` | Done. **Decision (23 Nov): keep existing URLs** rather than create the brief's six slugs, to avoid cannibalisation (mapping below). |
| 6 | US landing page content | Live pages, see mapping below | **Strengthened 23 Nov**: answer-first block, US section, FAQs, titles and H1s on 4 pages. |
| 7 | AEO question database | `aeo-questions.csv` | **40 questions** (20 added 23 Nov), each with a 40–60-word answer and target page. |
| 8 | GEO entity strategy | `geo-strategy.md`, `geo-tracking.csv`, `public/llms.txt`, `public/llms-full.txt` | Done. **llms files updated 23 Nov**: India-based statement, founders' FIDE IDs, age 4+, five levels, Beginner syllabus, USD/CAD fees. |
| 9 | Technical SEO checklist | `technical-audit.md` | Done (see #1). |
| 10 | Schema markup | `src/components/schema/*` | Live: EducationalOrganization, WebSite, BreadcrumbList, Course, FAQPage, BlogPosting, Person, LocalBusiness. **New:** WebPage `reviewedBy` (renders only once a post names a coach who actually reviewed it). No ratings, reviews or offers without real data. |
| 11 | 90-day content calendar | `content-calendar.csv` | Weeks 1–7 published. **Weeks 8–11 written as drafts 23 Nov** (below). |
| 12 | Backlink outreach | `backlink-prospects.csv`, `outreach-templates.md` | Done. Execution is owner-led (3–5 emails a week). |
| 13 | Conversion recommendations | `landing-architecture.md` | Done. **Primary CTA is now "Book a Free Chess Assessment" sitewide (23 Nov).** |
| 14 | Analytics & tracking | `funnel-dashboard.md`; GA4 in `BaseLayout.astro` | Built. Owner: set `PUBLIC_GA4_ID`, verify GSC + Bing Webmaster Tools, submit `sitemap-index.xml`. |
| 15 | 90-day roadmap | `roadmap-90d.md` | Done; progress noted at the top. |
| 16 | 6-month roadmap | This file, "Months 4–6" below | Drafted 23 Nov. |

## Brief slug → live URL
| Brief slug | Live URL (kept) | Primary keyword now targeted |
|---|---|---|
| /online-chess-classes-usa/ | `/online-chess-classes-usa/` | online chess classes for kids usa |
| /online-chess-classes-for-kids/ | `/online-chess-classes/` | online chess classes for kids |
| /private-chess-lessons-online/ | `/one-to-one-chess-coaching/` | private chess lessons online |
| /beginner-chess-classes-for-kids/ | `/chess-classes-for-beginners/` | beginner chess classes for kids |
| /online-chess-classes-for-beginners/ | `/chess-classes-for-beginners/` (same page) | online chess classes for beginners |
| /chess-coaching-for-tournament-players/ | `/tournament-chess-coaching/` | chess coaching for tournament players |

## Drafts waiting for coach review (`draft: true`)
Publish by setting `draft: false` after a coach has read each one. Once a named coach has actually reviewed a post, also add `reviewedBy: "<coach name>"`.
- `how-many-chess-lessons-does-a-beginner-need.md`
- `first-30-days-of-learning-chess.md`
- `scholastic-chess-tournaments-us-parents-guide.md`
- `how-to-teach-a-child-chess.md`
- `how-to-compare-online-chess-classes-for-kids-us.md` (prices quoted from competitors' sites in Nov 2026; re-check before publishing)
- `how-to-prepare-for-your-first-chess-tournament.md` (US/Canada section added)

Some drafts link to other drafts (for example `how-often-should-kids-practice-chess`). Publish those together, or the build's link check will flag them.

## Months 4–6 (Feb–May 2027)
1. Re-rank keywords with GSC queries (US, positions 8–20) and expand those pages.
2. Publish two posts a week from the remaining calendar and GSC-led gaps; one original resource a month (e.g. a printable beginner checklist or a level-finder quiz mapped to the five levels).
3. Marketplace and directory listings (Outschool, homeschool directories), with consistent name, description and links.
4. Collect real parent reviews from North American families; only then consider Review markup.
5. Monthly GEO panel (`geo-tracking.csv`): 20 questions × 5 engines; log mention and citation.
6. Funnel review monthly: assessments booked → attended → enrolled, by landing page and country.

## Owner inputs still needed
- Keyword exports (Keyword Planner / Semrush) and GSC + GA4 access.
- Real reviews and written permission for named student results.
- One set of student and country counts (H3).
- Young-kids lesson length and free-assessment length (used in two AEO answers).
- A coach to review and approve the six drafts.
