# SEO-to-enrolment funnel & monthly dashboard

## Funnel
```
Google / Bing / AI answer / directory (Outschool, homeschool lists)
  ↓ organic session on a NA-relevant landing page        [GA4: session, country, landing page, source]
Parent reads course, price, coaches, results, times
  ↓ demo form or WhatsApp click                          [GA4: generate_lead, whatsapp_click]
Lead in CRM (source, country, time zone, child age, level, "how did you hear")
  ↓ confirmation ≤1 h, reminders 24 h + 1 h              [CRM: demo_booked]
Demo class (assessment)                                   [CRM: attended / no-show]
  ↓ same-day level note + offer; follow-ups day 2, day 7  [CRM: offer_sent]
Paid enrolment                                            [CRM: paid, plan, monthly value]
```

## Working backward from 10 paying students
All rates are **assumptions** for planning. Replace them with real CRM rates after the first 20 demos. Assumptions:
- **Demo→paid:** a free demo with a coach's assessment converts warm leads well. Academies commonly report 25–50% (E).
- **Attendance:** cross-time-zone scheduling raises no-show risk, which is why reminders are in the parent's time zone.
- **Booking rate:** applies to *qualified* sessions, meaning US/CA visitors landing on commercial or high-intent pages. It doesn't apply to all traffic: blog readers in other countries don't count.

| Step | Conservative | Realistic | Optimistic |
|---|---|---|---|
| Paid students target | 10 | 10 | 10 |
| Demo → paid rate | 25% | 35% | 45% |
| **Demos attended needed** | **40** | **29** | **22** |
| Attendance rate | 60% | 70% | 80% |
| **Demo bookings needed** | **67** | **41** | **28** |
| Booking rate of qualified NA sessions | 1.0% | 2.0% | 3.0% |
| **Qualified NA sessions needed** | **~6,700** | **~2,050** | **~930** |
| Share of NA organic sessions that are "qualified" (E) | 30% | 40% | 50% |
| **Total NA organic sessions needed** | **~22,000** | **~5,100** | **~1,900** |

**What this means:**
- In the realistic case, ~5,000 NA organic sessions over the period is a lot for a site with almost no NA visibility today. Pure organic rankings likely reach that over **4–9 months**, not 90 days.
- That is why the plan leans on **channels with higher booking rates**:
  - directory and marketplace listings
  - diaspora and homeschool communities
  - referrals and reviews from current NA families
- Each of those converts closer to the optimistic column. Every lead is tagged by source, so organic (search), organic (AI) and listing/referral can be reported separately and honestly.
- **Traffic is not students.** The primary KPI is **paid NA enrolments**, followed by attended demos.

## Monthly performance dashboard (one row per month; Google Sheet or `docs/na-seo/dashboard.csv`)
| Group | Metric | Source |
|---|---|---|
| Visibility | GSC impressions & clicks, filtered to United States and to Canada separately | GSC Performance → Country filter |
| Visibility | Average position for the top-100 keywords (from GSC queries that match) | GSC export joined to `top-100.csv` |
| Visibility | Number of top-100 keywords in positions 1–10 / 11–20 | GSC |
| Visibility | AI mention rate & citation rate (20 prompts × 5 engines) | `geo-tracking.csv` |
| Traffic | Organic sessions: US, CA | GA4 (Session default channel = Organic Search; Country) |
| Traffic | AI-referral sessions | GA4 (source matches chatgpt / perplexity / copilot / gemini) |
| Traffic | Listing/referral sessions (Outschool, directories) | GA4 Referral |
| Conversion | Landing-page conversion rate (`generate_lead` ÷ sessions) per commercial page | GA4 Explorations |
| Conversion | WhatsApp clicks | GA4 `whatsapp_click` |
| Pipeline | Demo bookings (US / CA), by source | CRM |
| Pipeline | Demo attendance % | CRM |
| Pipeline | Demo → paid % | CRM |
| Outcome | **Paid NA enrolments** (by source) | CRM |
| Outcome | Organic revenue (monthly fee × paid organic students) | CRM |
| Outcome | Cost per organic enrolment = (content + dev + outreach hours × rate + listing fees) ÷ organic enrolments | Manual |
| Trust | New Google reviews; new NA testimonials; new referring domains | GBP; manual; GSC Links |

**Review rhythm:**
- Weekly: demos and attendance during the January window.
- Monthly: the full dashboard plus the GEO panel.
- Quarterly: strategy reset.
