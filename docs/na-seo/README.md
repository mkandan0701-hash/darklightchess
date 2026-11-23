# USA & Canada SEO / AEO / GEO: Stage 1 research pack

**Prepared:** 2026-11-13 · **Goal:** 10+ paying students from the US and Canada through organic search, AI answers and earned mentions.
**Status (23 Nov 2026):** Stage 2 implementation is under way. See `brief-coverage.md` for what is done, what is drafted and what still needs owner input.

## Data honesty
| Data | Status |
|---|---|
| Search volume, keyword difficulty, CPC, competition | **Unavailable.** No Keyword Planner, Ahrefs or Semrush in this session. Every row says `unavailable`. Fill these from your exports. |
| SERP features & ranking competitors | **Observed** in live searches on 2026-11-13 for the queries marked; the rest say `not checked`. The search tool is **US-located**, so Canada SERPs need confirming with GSC (Country = Canada) or Keyword Planner (location = Canada). |
| Relevance / conversion / winnability (1–5) | **Judgement** based on the business offer and observed SERPs |
| Priority score | Conversion × relevance × winnability (max 125). **Calculated before volume data, so re-rank once exports arrive.** Some top-scored phrases (time-zone and rating-band terms) may have very low volume; their value is conversion, not traffic. |
| Competitor prices & claims | As published on their sites (cited in `competitors.md`) |
| Authority metrics / backlink counts | Unavailable |
| Funnel rates | Assumptions, labelled as such |

## Files
| # | Deliverable | File |
|---|---|---|
| 1 | USA keyword research (295 rows) | `keywords-usa.csv` |
| 2 | Canada keyword research (264 rows) | `keywords-canada.csv` |
| 3 | Top 100 priority keywords | `top-100.csv` |
| 4 | Competitor intelligence (17 profiles) | `competitors.md` |
| 4b | Deep dive: ChessKid, Chess4Life, Silver Knights/Magnus, iChessU | `competitors-deep-dive.md` |
| 5 | Keyword gap analysis | `keyword-gap.md` |
| 6 | Topical authority map (5 pillars) | `topical-map.md` |
| 7 | 90-day content calendar | `content-calendar.csv` |
| 8 | AEO question database (20 questions) | `aeo-questions.csv` |
| 9 | GEO strategy + monthly tracking template | `geo-strategy.md`, `geo-tracking.csv` (copy the 20 rows for each of the 5 engines) |
| 10 | Technical SEO audit (by severity) | `technical-audit.md` |
| 11 | Landing-page architecture & conversion flow | `landing-architecture.md` |
| 12 | Backlink & mention prospects (35) + outreach templates | `backlink-prospects.csv`, `outreach-templates.md` |
| 13 | 90-day execution roadmap (weekly) | `roadmap-90d.md` |
| 14–15 | Funnel model + monthly dashboard | `funnel-dashboard.md` |

## The five findings that matter most
1. **Nothing is measured.** There's no GA4 and no conversion tracking, and the CRM webhook secret is public. Fix these first, or nobody will know whether the goal is met.
2. **Prices read as a currency conversion** (≈US$11, which "varies with exchange rate"). Publish deliberate USD/CAD tiers: still about half the US average, but credible.
3. **Trust claims can't be verified.** "FIDE-rated coaches" appears without IDs, and the site's own facts conflict. Competitors publish ratings and named results. Darklight *has* real NA results (USA Chess Festival, Silver Knights event, a state title, a Canadian win) but under-uses them.
4. **The NA content gap is specific and fillable:** cost guides (US, CA), rating explainers (US Chess, CFC), young-kids and homeschool pages. The UK versions of these posts already show the format works.
5. **The fastest students come from off-site:** Outschool and homeschool directories, diaspora associations, and reviews from current NA families. Organic rankings compound, but likely need 4–9 months to deliver 10 students on their own.

## Owner inputs needed to start Stage 2
- [ ] FIDE IDs for each coach
- [ ] USD and CAD price tiers (group, 1:1, sibling discount)
- [ ] Written permissions + event details: Harinandan, Aayush, Harinanthan, the Canadian winner
- [ ] Real US/CA class slots (ET/PT)
- [ ] GSC + GA4 access or exports; Keyword Planner / Semrush exports for `keywords-*.csv`
- [ ] One age policy (does Beginner start at 3, 4 or 5?)
- [ ] One set of facts: students taught, active students, countries

Related earlier docs: `../seo-report-2026-10.md` (Oct rebuild), `../editorial-calendar-international.md` (outlines reused here), `../geo-offsite-checklist.md` (UK/Gulf off-site; NA items are in this folder).
