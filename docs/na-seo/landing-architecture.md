# Landing-page architecture & conversion design (USA & Canada)

**Principle:** reuse existing URLs and add only pages with a genuinely distinct intent. No per-city or per-age doorway pages.

## Page map
| Brief page | URL | Status | Primary keyword | Key changes |
|---|---|---|---|---|
| Online Chess Classes for Kids | `/online-chess-classes/` | live (x-default hub) | online chess classes for kids | NA proof strip; USD/CAD price anchor; links to the USA/Canada pages; sibling section |
| Beginner Chess Classes for Kids + Chess Classes for Beginners | `/chess-classes-for-beginners/` | live | beginner chess classes for kids | One commercial page for both (avoids cannibalising). Align the age policy. Link the syllabus on `/courses/beginner/` |
| Private Online Chess Lessons | `/one-to-one-chess-coaching/` | live | private online chess lessons for kids | USD/CAD 1:1 price; coach cards with FIDE links; "who 1:1 suits" |
| Online Chess Coaching in the USA | `/online-chess-classes-usa/` | live | online chess classes for kids usa | See the USA spec below |
| Online Chess Coaching in Canada | `/online-chess-classes-canada/` | live | online chess classes for kids canada | See the Canada spec below |
| **Young kids (4–7)** | `/chess-classes-for-young-kids/` | **new** | chess classes for 5 year olds online | Session length, parent role, story/game method, Beginner syllabus excerpt |
| **Homeschool** | `/homeschool-chess-classes/` | **new** | chess classes for homeschoolers | Daytime US slots (IST evening), progress reports for portfolios, co-op groups |

Implementation pattern: the two new pages follow `src/components/CountryLandingPage.astro` + `src/data/markets.ts`. A small data file plus a component reuses `EnquiryForm.astro`, `CourseSchema.astro`, the FAQ schema and the breadcrumbs. Add the new pages to the hub's links and the footer.

## Section order (all commercial pages)
1. **Hero:** H1 with the keyword; one-line value proposition; primary CTA **"Book a free demo class"**; secondary "See prices"; trust micro-line: *FIDE-rated coaches · US/Canada after-school times · from $X/class*
2. **Parent benefits** (3 cards): structured levels, live coach feedback, a schedule that fits your time zone
3. **Price anchor:** USD/CAD tiers and the sibling discount; "about half the typical US rate" with a link to the cost guide
4. **Age groups & levels:** the 5 levels from `src/data/levels.ts`, with one consistent age policy
5. **Curriculum:** Beginner syllabus summary → full syllabus link
6. **Coaches:** cards with FIDE rating + link, years teaching children, languages
7. **Teaching method:** assessment → level plan → live class → homework → game review → monthly parent update
8. **Results:** named NA results (with permission), then international results
9. **Parent reviews:** real, with country and child's age
10. **Class format & times:** group size, length, platform; a local-time slot table
11. **FAQ:** 4–6 page-specific questions from `aeo-questions.csv`
12. **Final CTA + form + WhatsApp**

**CTA placement:**
- hero
- after the price block
- after the results
- a sticky mobile bar ("Free demo" + WhatsApp)
- the final form

## USA page spec (`markets.ts` USA entry)
- Hero line: "FIDE-rated coaches, live after school in your time zone, from $X a class."
- Results block: Harinandan (1st, USA Chess Festival), Aayush (1st, Silver Knights event; states champion), Harinanthan (California), each with **event name, year and month**. Get written parent permission (`seo-report-2026-10.md` M lists this as open).
- **Real slot table:** weekday 4–8 pm ET / CT / MT / PT plus weekend mornings, showing the matching IST time.
- Tournament section: US Chess-rated and scholastic event prep; link the new US Chess ratings post.
- Replace the generic blog cards with: US cost guide, US Chess ratings, scholastic tournaments guide.
- Add `lastUpdated`.

## Canada page spec (`markets.ts` Canada entry)
- Replace the 3× repeated unnamed win with **one** named case study: student (name or initials), province, event, date, rating before and after, coach.
- Fix "NT" → "NL" (Newfoundland and Labrador time).
- CAD tiers; CFC section linking the new CFC post; provincial-body mention.
- Replace the UK blog cards with: Canada cost guide, CFC ratings, junior chess in Canada.
- Add `lastUpdated`.

## Demo booking & follow-up flow
| Step | Mechanism | Timing |
|---|---|---|
| Form submit | Existing `EnquiryForm.astro` → `/api/lead` proxy → email + CRM | Instant |
| Add "How did you hear about us?" field | Google / ChatGPT or AI assistant / Outschool / friend / social / other | — |
| Thank-you state | Shows the WhatsApp deep link pre-filled (already built), plus "what happens next" | Instant |
| Confirmation | WhatsApp + email, with the demo time **in the parent's time zone** and the calendar invite | ≤1 hour (US evening = IST morning; make sure someone is on shift) |
| Reminders | WhatsApp/email | 24 h and 1 h before |
| Demo | Coach assessment; parent joins for the last 5–10 min | — |
| Assessment note | Level, strengths, recommended format, price | Same day |
| Follow-up | Day 2 (answer questions), day 7 (offer a start date). Then stop; no pressure sequences. | — |
| Enrolment | Payment link in USD/CAD (check that the payment provider supports international cards) | — |
| CRM stages | lead → demo booked → attended → offer sent → paid / lost (with reason) | — |

**International contact checks:**
- WhatsApp is common in Canada and less universal in the US. Always offer email, plus a calendar booking link (e.g. Cal.com) as an alternative.
- The +91 phone number can deter calls. Consider a VoIP US/CA number only if it's answered, and never present it as a local office.
