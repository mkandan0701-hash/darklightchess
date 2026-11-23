# 90-day execution roadmap: 16 Nov 2026 to 14 Feb 2027

**Progress (23 Nov 2026):** weeks 1–7 are complete (tracking, prices, FIDE IDs, NA pages, young-kids and homeschool pages, seven parent guides). The week 8–11 posts are written as drafts waiting for coach review. Details are in `brief-coverage.md`.

**Timing:**
- North American families often start new activities in **early January** (new-year activities and the second school semester). The proof, pricing and tracking work must be live before 4 January.
- Spring scholastic tournament season gives tournament content extra relevance from January.

**Owner input** is needed in weeks 1–2: FIDE IDs, USD/CAD prices, named results with permissions, real slot times, and the GSC/GA4/Keyword Planner exports.

| Wk | Dates | Exact tasks | Target pages | Keywords | Content deliverables | Technical tasks | Expected output | Measured by |
|---|---|---|---|---|---|---|---|---|
| 1 | 16–22 Nov | Review Stage 1 docs. Owner gathers FIDE IDs, prices, permissions, slots. Run the Keyword Planner and Semrush exports (US, CA) on `keywords-*.csv`. | — | All | — | **C1** webhook proxy + secret rotation. **C2** GA4 + key events + GSC Domain property + sitemap submit. | Tracking live; data exports in | GA4 DebugView shows `generate_lead`; GSC verified |
| 2 | 23–29 Nov | Re-rank `top-100.csv` with real volumes. Capture the GSC baseline (US/CA impressions, clicks, positions). Run the first GEO panel (baseline). | `/pricing/`, `/coaches/` | how much do online chess classes cost; fide rated chess coach online | — | **H1** FIDE fields; **H2** USD/CAD pricing; **H3** fact reconciliation | Verifiable coaches + real prices live | Rich Results test passes; baseline sheet filled |
| 3 | 30 Nov–6 Dec | Upgrade the USA & Canada pages. Submit Outschool, TheHomeschoolMom, Apprentus and Superprof applications. | `/online-chess-classes-usa/`, `/online-chess-classes-canada/` | online chess classes for kids usa/canada; time-zone variants | US cost guide; Canada cost guide | **H4**, **H5** (time-zone select); `lastUpdated` | NA pages with named proof and slot tables | Pages re-indexed (GSC URL inspection) |
| 4 | 7–13 Dec | Build the young-kids page. Ask current US/CA families for reviews and testimonials (template 5). | `/chess-classes-for-young-kids/` | chess classes for 5/6/7 year olds online | US Chess ratings post | Course `offers` schema | 1 new page; 2 posts | ≥3 review requests sent |
| 5 | 14–20 Dec | Build the homeschool page and submit it to the homeschool directory. Outreach wave 1: ChessBase India, tournament organisers. | `/homeschool-chess-classes/` | chess classes for homeschoolers | CFC ratings post | Add "How did you hear" field to the form | Homeschool page live; 4 outreach emails | Listings accepted / pending |
| 6 | 21–27 Dec | Publish (pre-scheduled) before the January window. | `/coaches/`, hub | are online chess lessons effective; how to choose a chess coach | Effectiveness post; choosing-a-coach post | **M7** author field on posts | 2 posts with coach bylines | Indexed within 7 days |
| 7 | 28 Dec–3 Jan | Diaspora association outreach (template 3), starting with associations where current families are members. | `/one-to-one-chess-coaching/` | private vs group chess lessons | Private vs group post; First 30 days post | **M2** heading fixes; **M3** areaServed | 2 posts; 3–5 association contacts | Replies logged |
| 8 | 4–10 Jan | **Enrolment window.** Watch the demo pipeline daily. Publish the beginner syllabus. | `/courses/beginner/` | complete beginner chess curriculum; how many chess lessons | Syllabus section; how-many-lessons post | **M4** WebP images; **M5** noscript | Highest-intent content live | Demo bookings / week; attendance rate |
| 9 | 11–17 Jan | First GSC optimisation pass. | `/tournament-chess-coaching/` | scholastic chess tournaments; US Chess rated prep | First-tournament post (NA edit); scholastic guide | **M8** merge the duplicate draft | Titles rewritten where CTR <1% & >100 impressions | CTR change on edited pages |
| 10 | 18–24 Jan | Outreach wave 2: parenting blogs and podcasts, co-ops. Second GEO panel. | hub, Canada page | how often should kids take chess lessons; junior chess canada | Practice post; junior chess Canada guide | **M6** loader review | Second GEO data point | Mention rate vs baseline |
| 11 | 25–31 Jan | Funnel review: no-show and conversion reasons from the CRM. | `/chess-classes-for-beginners/` | how to teach kids chess; chess tactics for beginners | Teach-a-child post; tactics post | Low-priority fixes | Funnel fixes (reminder timing, slot changes) | Attendance %; demo→paid % |
| 12 | 1–7 Feb | Expand pages ranking 8–20 (add sections and FAQs where queries show unmet intent). | Pages from GSC | GSC positions 8–20 | Milestones post; benefits rewrite | — | Content refreshes | Position change |
| 13 | 8–14 Feb | 90-day review: dashboard, re-plan next quarter, double down on the channels producing demos. | — | — | Tournament checklist post | — | Q2 plan | All KPIs in `funnel-dashboard.md` |

**Outreach cadence:**
- Throughout: 3–5 personalised emails per week.
- Directory submissions in weeks 3–5.
- Reviews requested from every satisfied NA family after their 4th class.

**Effort estimate (E):**
- About 8–10 hours a week for content and outreach.
- About 12–16 hours of development in weeks 1–3, then 2–4 hours a week.
