# SEO, AEO and GEO tracking

## Target keywords per page
Search volumes have not been measured. Validate in Google Search Console and Keyword Planner.

| Page | Primary keywords |
|---|---|
| /online-chess-classes-uk/ | online chess classes UK, online chess lessons for kids UK, chess tutor online UK, 1-to-1 chess lessons UK, ECF rating coaching |
| /online-chess-classes-uae/ | online chess classes Dubai, chess classes for kids Dubai, chess coaching Abu Dhabi, online chess classes UAE |
| /online-chess-classes-qatar/ | online chess classes Doha, online chess coaching Qatar |
| /online-chess-classes-saudi-arabia/ | online chess classes Riyadh, Jeddah, Saudi Arabia |
| /online-chess-classes-kuwait-bahrain-oman/ | chess classes Kuwait, Bahrain, Muscat Oman |
| /online-chess-classes-ireland/ | online chess lessons Ireland, chess classes for kids Dublin |
| /online-chess-classes-germany/ | online chess lessons in English Germany, Tamil chess coach Germany |
| /online-chess-classes-netherlands/ | online chess lessons Netherlands in English, expat chess lessons Amsterdam |
| /online-chess-classes-europe/ | online chess coach Switzerland, Belgium, Norway (English) |
| /pricing/ | how much do chess lessons cost |
| /faq/, /class-timings/ | question-style long tail |

## Monthly AI prompt test
Run each in ChatGPT, Gemini, Perplexity and Google AI Overviews. Record whether Darklight is named, which URL is cited, and what the answer says about price and timings.
1. best online chess academy for kids in the UK
2. affordable online chess coach for my 8 year old in London
3. Indian online chess academy with FIDE coaches for kids in Dubai
4. online chess classes in English for kids in Germany
5. chess coaching that fits UK school hours
6. how much do online chess lessons cost in Dubai
7. online chess lessons for children in Ireland

## Search Console by country
1. Performance > Search results > add filter Country, then check GB, AE, QA, SA, IE, DE, NL one at a time.
2. Compare Queries and Pages for each country against the table above.
3. Check Indexing > Pages for the new URLs, and Enhancements for FAQ and breadcrumb reports.

## Lead attribution
Each enquiry now records `landing_url`, `utm_*` and `gclid` (in the CRM notes). Use UTM tags on any link you post (for example `?utm_source=youtube&utm_medium=video&utm_campaign=uk`). Read the CRM notes monthly to see which country pages convert.

## Submit-ready
- Sitemap: https://www.darklightchess.com/sitemap-index.xml (submit in Search Console and Bing Webmaster Tools).
- Request indexing for: /online-chess-classes-uk/, -uae/, -qatar/, -saudi-arabia/, -kuwait-bahrain-oman/, -ireland/, -germany/, -netherlands/, -europe/, /pricing/, /class-timings/, /faq/.
- IndexNow: not set up. It needs a key file in `public/` and a ping on deploy; ask before adding.

## GA4 (pending)
Waiting for the measurement ID. When provided: add the tag, update `privacy-policy.astro` (it currently says no analytics), and send `generate_lead` and `whatsapp_click` events with page and country.
