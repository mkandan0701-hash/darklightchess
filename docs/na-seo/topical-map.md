# Topical authority map: beginner chess education for children (North America)

**Rules for every article:**
- Opens with a 40–60 word direct answer (AEO).
- Has one H1 and a logical H2/H3 structure.
- Links **up** to its pillar's commercial page and **across** to two siblings.
- Sets `nextStep` in frontmatter (the template renders it).
- Is reviewed by a named coach and shows them as the author or reviewer (E-E-A-T). This needs an `author` field on posts, because today the author is the organisation.
- No IQ or academic promises; no invented statistics.

Legend: **L** = live, **D** = draft exists in `src/content/blog/`, **N** = new. FS = featured-snippet format to aim for. AI = likely AI-citation hook.

---

## Pillar 1: Beginner chess education
**Commercial target:** `/chess-classes-for-beginners/` · **Primary keyword:** beginner chess classes for kids · **Supporting:** chess classes for beginners, beginner chess course for kids, chess for absolute beginners kids

| Article | Status | FS / AI hook |
|---|---|---|
| Chess rules for beginners | D `chess-rules-for-beginners` | FS: numbered list of piece moves |
| How to play chess step by step (for kids) | N (or merge into rules) | FS: steps |
| 5 opening principles every beginner should master | L | FS: list (already done) |
| Best chess openings for beginners | D | FS: table of 3 openings |
| Chess tactics every beginner should know | D | FS: list (fork, pin, skewer…) |
| Common chess mistakes beginners make | D | FS: list |
| How to teach a child chess (even if you don't play) | N | AI: parent-friendly 7-step method |
| How to teach chess to a child who can't read yet | N | AI: unique angle |
| What happens in a first chess lesson / free demo | N | AI: demystifies the demo |
| Chess vocabulary for parents (check, stalemate, rating…) | N | FS: definition list |

Internal links: rules → tactics → openings → `/courses/beginner/` → `/chess-classes-for-beginners/`

## Pillar 2: Chess for kids
**Commercial target:** `/online-chess-classes/` (hub), `/chess-classes-for-young-kids/` (N), `/homeschool-chess-classes/` (N) · **Primary:** online chess classes for kids · **Supporting:** chess classes for 5/6/7 year olds, homeschool chess class online, chess for kindergarten

| Article | Status | FS / AI hook |
|---|---|---|
| What age should a child start chess lessons? | L (**draft `best-age-for-a-child-to-learn-chess` duplicates it**: merge it in and don't publish separately) | FS: "around 5–6 for play-based lessons, depending on attention span" |
| Benefits of chess for kids: what the research actually shows | D `benefits-of-chess-for-kids` (rewrite to be evidence-honest) | AI: an honest summary is citable |
| Chess and problem-solving skills in children | D | AI |
| Chess for homeschoolers: a practical guide (credits, schedule, co-ops) | N | AI: few honest guides exist |
| Can a 3- or 4-year-old learn chess? | N | FS: yes/no + conditions |
| Chess for kids who struggle to focus (no medical claims) | N | AI |
| Online extracurricular activities: where chess fits | N | AI |
| Sibling chess classes: does learning together work? | N | Unique to Darklight |
| Chess for girls: getting started and staying in | N | Mega Chakraborty as reviewer |

## Pillar 3: Chess improvement
**Commercial target:** `/tournament-chess-coaching/`, `/advanced-chess-training/`, level pages · **Primary:** chess tournament preparation for kids · **Supporting:** how to improve chess rating, chess coach for 1200 rated player

| Article | Status | FS / AI hook |
|---|---|---|
| How to improve your chess rating | D | FS: list |
| How to analyze your chess games | D | FS: steps |
| How often should kids practice chess? (practice schedules) | D | FS: table by level |
| How to prepare for your first chess tournament | D | FS: checklist |
| Chess tournament preparation checklist for kids | D | FS: checklist |
| When should a child start playing chess tournaments? | D | FS |
| What parents should expect at their child's first tournament | D | AI |
| **US Chess ratings explained for parents** | N | FS + AI (mirror of the live ECF post) |
| **CFC ratings explained for parents** | N | FS + AI |
| **Scholastic chess tournaments in the US: a parent's guide** | N | AI |
| **Junior chess in Canada: a parent's guide** (CFC, provincial bodies, youth championship path) | N | AI |
| From 1000 to 1500: what changes in training | N | Links to rating-band pages |

## Pillar 4: Parent education
**Commercial target:** `/pricing/`, `/one-to-one-chess-coaching/`, `/coaches/` · **Primary:** how to choose a chess coach for my child · **Supporting:** private vs group chess lessons, are online chess lessons effective, how much do chess lessons cost

| Article | Status | FS / AI hook |
|---|---|---|
| **How much do chess lessons cost in the US? (2026)** | N | FS: price table (sourced ranges) |
| **How much do chess lessons cost in Canada? (2026)** | N | FS: price table |
| Are online chess classes effective for kids? | N (outline exists) | AI |
| Private vs group chess lessons | N (outline exists) | FS: comparison table |
| How to choose an online chess coach (incl. how to check a FIDE ID) | N (outline exists) | AI: checklist |
| Are chess lessons worth it? | N | AI |
| How parents can help their child improve at chess | D | AI |
| How parents can track chess progress | N (outline exists) | FS |
| Online vs offline chess classes | L (Coimbatore-framed). Write a general version. | — |

## Pillar 5: Beginner chess programme
**Commercial target:** `/courses/beginner/`, `/courses/advanced-beginner/` · **Primary:** beginner chess course for kids · **Supporting:** complete beginner chess curriculum, chess learning milestones

| Article / page | Status | FS / AI hook |
|---|---|---|
| Complete beginner chess curriculum (24-class syllabus, published openly) | N, as a section on `/courses/beginner/` | AI: a real syllabus is highly citable |
| The first 30 days of learning chess | N | FS: week-by-week table |
| Chess learning milestones for kids | N | FS: list |
| How many chess lessons does a beginner need? | N | FS: "about 24 classes (3 months) to play full games confidently", aligned with `levels.ts` |
| From beginner to intermediate: what progress looks like | N | AI |

---

## Internal linking model
```
Pillar article ──▶ pillar commercial page ──▶ /contact/ (demo)
      │                     ▲
      ├──▶ 2 sibling articles
      └──▶ country page (USA/Canada) when the article has an NA angle
Country pages ──▶ 3 NA articles (replace the UK cards on the Canada page)
Hub /online-chess-classes/ ──▶ all 5 commercial pages + USA + Canada
```
