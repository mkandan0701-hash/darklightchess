# SEO Audit — Darklight Chess Academy (darklightchess.com)

**Audited:** 2026-09-05
**Scope:** Full codebase audit before any SEO implementation, per the project brief.

## What the site was before this project

The live site was a **single hand-written `index.html` file** — no framework, no build step, no CMS, no server-side routing. Everything (nav, hero, courses, coaches, gallery, testimonials, blog, FAQ, contact form) was one long page navigated by in-page anchor links (`#about`, `#courses`, etc.), deployed as static files to Vercel.

### Framework & architecture
- No `package.json`, no JS framework, no bundler. Plain HTML + one CSS file (`assets/css/style.css`) + one vanilla-JS file (`assets/js/main.js`).
- **Zero routing** — the only crawlable URL was `/`. There was no `/about`, no `/blog/<post>`, no service pages.

### Blog
- Three articles existed, but only as `hidden` `<div>` elements opened via JavaScript into a modal (`openArticle()` in `main.js`). They had **no real URL**, no per-article `<title>`/meta description, and were not independently indexable or shareable.

### Technical SEO — all absent
- No `robots.txt`, no `sitemap.xml`, no `<link rel="canonical">`, no Open Graph tags, no Twitter Card tags, no JSON-LD structured data anywhere (confirmed via full-project search — zero matches for `schema.org`, `application/ld+json`, `og:`, `canonical`).
- Exactly one `<h1>` on the whole site, and it was a pure tagline ("BECAUSE EVERY MOVE MATTERS") with no keyword relevance.
- No analytics (GA4/GTM/Meta Pixel) installed at all — no way to measure organic traffic, clicks, or conversions.
- No custom 404 page.
- Images had good, descriptive `alt` text and correct `loading="lazy"` usage on below-the-fold images — this was already done well — but no `width`/`height` attributes anywhere, so there was no CLS protection.

### NAP (Name/Address/Phone) — one real inconsistency found and fixed
- Phone, email, and WhatsApp number were consistent everywhere.
- **Branch 1 (Saibaba Colony) had a postal-code mismatch**: the printed address read `641011`, but both "Get Directions" Google Maps links pointed to `641038`. Confirmed with the business owner: **641011 is correct** — both links have been fixed to match.
- Footer copyright read "© DarkLight" (missing "Chess Academy") while every other brand mention on the site used the full name "Darklight Chess Academy" — fixed for consistency.
- Footer "Terms & Conditions | Privacy Policy" text was unlinked plain text with no corresponding pages anywhere in the project — this has been removed rather than left as dead/fake links (see "Remaining issues" below; real policy pages need the owner's actual policy text before they can be added honestly).

### Contact form & integrations
- The enquiry form posts to FormSubmit (email delivery) and to a separate Darklight CRM webhook (`lead-capture`), both unchanged by this project. Note: the CRM's shared secret is hardcoded in client-side JS and visible to anyone viewing page source — this is a pre-existing security consideration outside SEO scope, flagged here for awareness only.
- Two Google Maps `<iframe>` embeds exist (legacy `maps.google.com/maps?q=...&output=embed` format, no API key needed) — both lazy-loaded, both kept.

### A latent bug this project had to fix
`main.js` was one large IIFE that assumed every homepage element (testimonial slider, gallery/lightbox, contact form) always exists — calling `document.getElementById(...)` on elements and immediately using them with no null check. Turning the site into a multi-page site meant most new pages don't have those elements, which would have thrown a JavaScript error partway through the script and **broken navigation, the WhatsApp button, and the back-to-top button on every new page**. Every such block is now guarded (`if (element) { ... }`) so the shared script works safely across the whole site.

## What this project changed

The site was migrated to **Astro**, a static-site generator that outputs the same kind of plain HTML/CSS/JS the site already used — no client-side framework runtime was added. This gave the project a shared header/footer/NAP/schema (one source of truth instead of copy-pasted markup across many files — which is exactly how the postal-code bug above happened), a real Markdown-based blog, and auto-generated sitemap/canonicals.

See the main conversation summary (or ask for it again) for the full list of pages created, metadata added, and schema implemented. In short:
- 7 new keyword-targeted service pages, each with one clear primary search intent.
- A real blog at `/blog/` with individual post URLs, replacing the JS-modal system. The 3 existing articles were migrated as real, indexable pages with no content changes. 23 new draft posts were written from the brief's content plan and saved with `draft: true` — nothing was auto-published (see `docs/content-calendar-coimbatore.md`).
- `robots.txt`, auto-generated `sitemap.xml`, canonical tags, Open Graph + Twitter Card tags, and JSON-LD (`Organization`, `WebSite`, `LocalBusiness`, `BreadcrumbList`, `FAQPage`, `Article`) added site-wide via shared components.
- A custom 404 page.

## Remaining issues / information still needed from the business owner

1. **Google Analytics 4** was deliberately not wired up this round (owner's decision) — see `docs/seo-tracking-plan.md`. This should be the very next step; without it, none of this SEO work can be measured.
2. **LocalBusiness `openingHours`** and **geo coordinates (latitude/longitude)** are intentionally left out of the structured data — they aren't published anywhere on the current site and the brief forbids inventing them. Provide real hours and the owner can add them to `src/consts.ts`.
3. **Terms & Conditions / Privacy Policy pages** don't exist. The footer previously showed this as unlinked plain text; it's been removed rather than left as fake/dead links. If the business has real policy text, it should be added as real pages and linked from the footer.
4. **Pricing** is not published anywhere on the site. The new "How Much Do Chess Classes Cost in Coimbatore?" blog draft deliberately does not state any figure, per the brief's rule against inventing prices — it explains what affects pricing and points readers to enquire directly. If the owner wants to publish real prices, that's a content decision for them to make.
5. **Google Business Profile** is not something this codebase change can verify — the owner should confirm the Saibaba Colony address/phone on the Business Profile listing exactly matches what's now in `src/consts.ts` (641011 postal code).
6. The Vercel project's build settings should be checked after this change (Astro needs `astro build` as the build command and `dist/` as the output directory) — most Vercel projects auto-detect this from `package.json`/`astro.config.mjs`, but it's worth confirming in the dashboard before the next deploy.
