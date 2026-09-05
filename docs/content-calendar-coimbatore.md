# 90-Day Content Calendar — Coimbatore Chess Blog

This calendar sequences the 25 blog topics from the SEO brief. It prioritizes local commercial intent first (the searches most likely to convert into enquiries), then parent-education content, then general beginner and tournament education — matching how the brief clustered them.

**How to use this:** every row marked "Draft — awaiting review" already exists as a markdown file in `src/content/blog/` with `draft: true` in its frontmatter. Nothing goes live until a human reviews it and flips `draft` to `false` (this is deliberate — see `docs/seo-audit.md` for why we didn't auto-publish). The "Target Publish Date" is a planning date, not a deadline; reorder freely based on what's actually ready.

## Already live (migrated from the old single-page site)

| # | Title | Cluster | URL | Status |
|---|---|---|---|---|
| — | 5 Opening Principles Every Beginner Should Master | Beginner | `/blog/5-opening-principles-every-beginner-should-master/` | Published |
| — | How Tournaments Build Your Child's Confidence | Parent Education (bonus) | `/blog/how-tournaments-build-your-childs-confidence/` | Published |
| — | Online vs Offline Chess Classes: Which Is Right for You? | Local Commercial | `/blog/online-vs-offline-chess-classes-coimbatore/` | Published |

## Weeks 1–4: Local Commercial Cluster (highest priority — direct enquiry intent)

| # | Title | Target Publish Date | Slug |
|---|---|---|---|
| 1 | How to Choose the Right Chess Academy in Coimbatore | 2026-09-09 | `how-to-choose-the-right-chess-academy-in-coimbatore` |
| 2 | Chess Classes for Kids in Coimbatore: What Parents Should Know | 2026-09-13 | `chess-classes-for-kids-in-coimbatore-what-parents-should-know` |
| 3 | Chess Coaching for Beginners in Coimbatore | 2026-09-17 | `chess-coaching-for-beginners-in-coimbatore` |
| 4 | Best Chess Classes in Coimbatore: A Parent's Guide | 2026-09-21 | `best-chess-classes-in-coimbatore-a-parents-guide` |
| 5 | How Much Do Chess Classes Cost in Coimbatore? | 2026-09-25 | `how-much-do-chess-classes-cost-in-coimbatore` |
| 6 | How to Find a Good Chess Coach in Coimbatore | 2026-09-29 | `how-to-find-a-good-chess-coach-in-coimbatore` |
| 7 | Chess Tournament Coaching in Coimbatore (guide) | 2026-10-03 | `chess-tournament-coaching-in-coimbatore-guide` |

**Note on #5 (pricing):** no pricing is published anywhere on the site, and the brief explicitly forbids inventing prices. This post explains what typically affects chess-class pricing (group vs 1-to-1, online vs offline, frequency) and directs readers to enquire for current rates — it does not, and should not, state any number until the business owner supplies real pricing to publish.

## Weeks 5–8: Parent Education Cluster

| # | Title | Target Publish Date | Slug |
|---|---|---|---|
| 8 | What Is the Best Age for a Child to Learn Chess? | 2026-10-07 | `best-age-for-a-child-to-learn-chess` |
| 9 | Benefits of Chess for Kids | 2026-10-11 | `benefits-of-chess-for-kids` |
| 10 | How Chess Helps Children Improve Problem-Solving Skills | 2026-10-15 | `chess-and-problem-solving-skills-in-children` |
| 11 | How Parents Can Help Their Child Improve at Chess | 2026-10-19 | `how-parents-can-help-their-child-improve-at-chess` |
| 12 | How Often Should Kids Practice Chess? | 2026-10-23 | `how-often-should-kids-practice-chess` |
| 13 | When Should a Child Start Playing Chess Tournaments? | 2026-10-27 | `when-should-a-child-start-playing-chess-tournaments` |

## Weeks 9–11: Beginner Chess Cluster

| # | Title | Target Publish Date | Slug |
|---|---|---|---|
| 14 | Chess Rules for Beginners | 2026-10-31 | `chess-rules-for-beginners` |
| 15 | Best Chess Openings for Beginners | 2026-11-04 | `best-chess-openings-for-beginners` |
| 16 | Common Chess Mistakes Beginners Make | 2026-11-08 | `common-chess-mistakes-beginners-make` |
| 17 | Chess Tactics Every Beginner Should Know | 2026-11-12 | `chess-tactics-every-beginner-should-know` |
| 18 | How to Improve at Chess Faster | 2026-11-16 | `how-to-improve-at-chess-faster` |

## Weeks 12–13: Tournament Cluster

| # | Title | Target Publish Date | Slug |
|---|---|---|---|
| 19 | How to Prepare for Your First Chess Tournament | 2026-11-20 | `how-to-prepare-for-your-first-chess-tournament` |
| 20 | Chess Tournament Preparation Checklist for Kids | 2026-11-24 | `chess-tournament-preparation-checklist-for-kids` |
| 21 | How to Improve Your Chess Rating | 2026-11-28 | `how-to-improve-your-chess-rating` |
| 22 | How to Analyze Your Chess Games | 2026-12-02 | `how-to-analyze-your-chess-games` |
| 23 | What Parents Should Expect at Their Child's First Chess Tournament | 2026-12-06 | `what-parents-should-expect-at-their-childs-first-chess-tournament` |

## Publishing a draft

1. Open `src/content/blog/<slug>.md`, read it, and edit anything that doesn't sound right for the academy's voice.
2. Change `draft: true` to `draft: false` and set `publishDate` to the actual date you're publishing (it doesn't need to match the planning date above).
3. Run `npm run build` and check the post at `/blog/<slug>/` — it will now also appear in the sitemap and the `/blog/` listing automatically.
4. Consider sharing the post link on the academy's Instagram/Facebook (see `docs/local-seo-citations.md` for social profiles) to get early traffic and signal freshness to Google.
