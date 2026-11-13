# GEO strategy: being found and cited by AI search (ChatGPT, Perplexity, Gemini, Copilot, Google AI Overviews)

## What the research showed (2026-11-13)
- A brand search for "Darklight Chess Academy" returned only a lyfskills directory listing. **The brand has almost no independent footprint**, so AI engines have little to corroborate.
- AI-style summaries for North American chess queries repeatedly cited **Outschool's guide, Kingdom of Chess, Chess Gaja, Chess Max's cost page and MM Chess's price guide**. They also labelled self-published "best of" listicles as promotional. Engines discount self-ranking; **corroboration from third parties is what gets a brand cited.**
- On-site foundations are already in place: robots.txt allows GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot and Google-Extended; `llms.txt` and `llms-full.txt` exist; Organization, Course, FAQ and Person schema are present.

## The 13 levers, with current state and actions
| # | Lever | State today | Action |
|---|---|---|---|
| 1 | Clear brand entity | `EducationalOrganization` schema with founders | Add `foundingDate`, `knowsAbout`, `numberOfEmployees` (coaches), and `sameAs` for every new profile. Change `areaServed` codes to full country names. |
| 2 | Consistent business info | Counts conflict (70 vs 500+ students; 30 vs 24 countries) | One source of truth in `src/data/stats.ts`, used everywhere: site, llms.txt, directories, LinkedIn |
| 3 | Detailed About page | Slogan H1 | Factual About: founded year, founders, two Coimbatore centres, online since X, students taught, countries (verified list), teaching method |
| 4 | Founder & coach profiles | 6 coaches, no ratings | FIDE ID + rating + titles + years coaching + languages per coach; one page each later (`/coaches/[slug]/`) |
| 5 | Verifiable credentials | "FIDE-rated" claimed but not shown | Link every claim to ratings.fide.com. Remove the claim for any coach without an ID. |
| 6 | Student success stories | Names in captions only | Short case studies (permission): starting level → training → result → rating change, with event names and dates |
| 7 | Genuine parent testimonials | 5, none from US/CA | Collect 3–5 US/CA testimonials and Google reviews (no incentives). Show country and child age. |
| 8 | Original resources | — | Published 24-class beginner syllabus; level quiz; US/CA cost guides with sourced tables. These are the most citable assets. |
| 9 | Expert-authored articles | Author = organisation | Add an `author` field (coach) to the blog schema, with a byline and reviewer linked to the coach profile |
| 10 | Authoritative backlinks | Very few (E) | See `backlink-prospects.csv` |
| 11 | Mentions on education platforms | lyfskills only | Outschool, TheHomeschoolMom, ActivityHero, Apprentus, Superprof, OurKids, Lichess/Chess.com coach pages |
| 12 | Structured data | Strong base | Add Course `offers` (USD/CAD), `Review` on course pages (real reviews only), Person `sameAs` (FIDE). Don't spread FAQPage duplicates further. |
| 13 | Consistent positioning | Varies by page | One sentence used everywhere: *"Darklight Chess Academy is an online chess academy based in Coimbatore, India, whose FIDE-rated coaches teach children in the US, Canada and 20+ countries in live classes scheduled for their time zone."* |

## `llms.txt` update (Stage 2)
Add a North America section: USD/CAD prices, the US/CA time slots, named NA results (with permission), links to the USA/Canada pages and the cost guides.

## Off-site mention targets
See `backlink-prospects.csv`, column `geo_value`. The highest-value targets for AI corroboration:
1. **Outschool** class listing (its pages are cited constantly)
2. **TheHomeschoolMom** online chess classes directory
3. **ChessBase India** news feature (Indian chess press that covers academies and international results)
4. **Lichess / Chess.com coach profiles** (entity corroboration on chess-native domains)
5. **Diaspora community associations** in NJ, the Bay Area, Texas and the GTA: event sponsorships or workshops get real mentions
6. **LinkedIn company page + founder profile** (Copilot and Bing weight LinkedIn)
7. **Reddit/Quora answers** from a coach account, with disclosed affiliation, answering genuine parent questions. Links only where they help; no spam.

## Monthly AI-visibility tracking
Run the 20 prompts in `geo-tracking.csv` in each engine on the first Monday of every month, in a logged-out or incognito session, with US or Canada location where the engine allows. For each prompt and engine, record:
- whether Darklight is mentioned (Y/N)
- whether a darklightchess.com URL is cited (URL)
- position in the answer (1st, 2nd…; blank if absent)
- which competitors are mentioned
- which sources are cited (domains)

Monthly KPIs:
- **Mention rate** = prompts with a mention ÷ (20 × 5)
- **Citation rate** = prompts citing a darklightchess.com URL ÷ 100
- **AI referral sessions**: GA4 sessions where the source contains chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com
- **AI-attributed demos**: a "How did you hear about us?" field on the demo form (add "ChatGPT/AI assistant" as an option)

**Not promised:** AI citations can't be guaranteed. These actions raise the probability by giving engines consistent, verifiable and corroborated facts.
