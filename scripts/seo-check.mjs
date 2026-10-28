// Post-build SEO checks over dist/. No dependencies — regex-based HTML
// inspection is enough for the markup Astro emits here. Exits non-zero on any
// error so `npm test` fails the build. Run after `astro build`.
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const DIST = join(process.cwd(), "dist");
const ORIGIN = "https://www.darklightchess.com";

const errors = [];
const warnings = [];
const err = (page, msg) => errors.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

if (!existsSync(DIST)) {
  console.error("dist/ not found — run `astro build` first.");
  process.exit(1);
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const htmlFiles = walk(DIST).filter((f) => f.endsWith(".html"));

// dist/foo/index.html -> /foo/ ; dist/404.html -> /404.html
const toPath = (file) => {
  const rel = "/" + relative(DIST, file).split(sep).join("/");
  return rel.endsWith("/index.html") ? rel.slice(0, -"index.html".length) : rel;
};

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i"));
  return m ? (m[2] ?? m[3]) : null;
};
const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const pages = new Map();
for (const file of htmlFiles) {
  const path = toPath(file);
  const html = readFileSync(file, "utf8");
  const head = html.split(/<\/head>/i)[0];
  const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
  const links = [...head.matchAll(/<link\b[^>]*>/gi)].map((m) => m[0]);
  const metaContent = (key, val) => {
    const tag = metas.find((t) => (attr(t, key) || "").toLowerCase() === val);
    return tag ? decode(attr(tag, "content") || "") : null;
  };
  const robots = (metaContent("name", "robots") || "").toLowerCase();
  pages.set(path, {
    file,
    html,
    title: decode((head.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "").trim(),
    description: metaContent("name", "description"),
    canonical: (links.find((t) => attr(t, "rel") === "canonical") && attr(links.find((t) => attr(t, "rel") === "canonical"), "href")) || null,
    alternates: links
      .filter((t) => attr(t, "rel") === "alternate" && attr(t, "hreflang"))
      .map((t) => ({ lang: attr(t, "hreflang"), href: attr(t, "href") })),
    noindex: robots.includes("noindex"),
    ids: new Set([...html.matchAll(/\sid\s*=\s*"([^"]+)"/g)].map((m) => m[1])),
  });
}

const isErrorPage = (path) => path === "/404.html";
const indexable = [...pages.entries()].filter(([p, d]) => !d.noindex && !isErrorPage(p));

// ---------- per-page checks ----------
for (const [path, d] of pages) {
  if (isErrorPage(path)) continue;
  if (!d.title) err(path, "missing <title>");
  else if (d.title.length > 65) warn(path, `title is ${d.title.length} chars (may truncate): "${d.title}"`);
  if (!d.description) err(path, "missing meta description");
  else if (d.description.length > 165) warn(path, `description is ${d.description.length} chars`);

  if (!d.canonical) err(path, "missing canonical");
  else {
    if (!d.canonical.startsWith(ORIGIN + "/")) err(path, `canonical not on ${ORIGIN}: ${d.canonical}`);
    if (!d.noindex && d.canonical !== ORIGIN + path) err(path, `canonical not self-referencing: ${d.canonical}`);
  }

  const h1s = (d.html.match(/<h1\b/gi) || []).length;
  if (h1s !== 1) err(path, `expected exactly 1 <h1>, found ${h1s}`);

  for (const m of d.html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = m[0];
    const src = attr(tag, "src") || "";
    if (src === "") continue; // lightbox placeholder, filled by JS
    if (attr(tag, "alt") === null) err(path, `<img> without alt: ${src}`);
    if (!attr(tag, "width") || !attr(tag, "height")) err(path, `<img> without width/height: ${src}`);
  }

  // JSON-LD
  for (const m of d.html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(m[1]);
      const nodes = Array.isArray(data["@graph"]) ? data["@graph"] : [data];
      if (!data["@context"]) err(path, "JSON-LD without @context");
      for (const n of nodes) if (!n["@type"]) err(path, "JSON-LD node without @type");
    } catch (e) {
      err(path, `invalid JSON-LD: ${e.message}`);
    }
  }

  // Internal links resolve
  for (const m of d.html.matchAll(/<a\b[^>]*\shref\s*=\s*"([^"]*)"/gi)) {
    let href = decode(m[1]);
    if (/^(mailto:|tel:|javascript:)/i.test(href)) continue;
    if (/^https?:\/\//i.test(href)) {
      if (!href.startsWith(ORIGIN)) continue;
      href = href.slice(ORIGIN.length) || "/";
    }
    const [rawPath, hash] = href.split("#");
    const targetPath = (rawPath || path).split("?")[0];
    if (!targetPath.startsWith("/")) continue;
    const target = pages.get(targetPath);
    if (!target) {
      // Static asset?
      if (/\.[a-z0-9]+$/i.test(targetPath) && existsSync(join(DIST, targetPath))) continue;
      err(path, `broken internal link: ${href}`);
      continue;
    }
    if (hash && !target.ids.has(hash)) err(path, `link to missing anchor: ${href}`);
    if (target.noindex && !d.noindex) warn(path, `links to noindex page: ${href}`);
  }
}

// ---------- uniqueness across indexable pages ----------
for (const field of ["title", "description"]) {
  const seen = new Map();
  for (const [path, d] of indexable) {
    if (!d[field]) continue;
    if (seen.has(d[field])) err(path, `duplicate ${field} with ${seen.get(d[field])}`);
    else seen.set(d[field], path);
  }
}

// ---------- hreflang ----------
for (const [path, d] of pages) {
  if (!d.alternates.length) continue;
  const self = ORIGIN + path;
  if (d.noindex) err(path, "noindex page carries hreflang");
  if (!d.alternates.some((a) => a.href === self)) err(path, "hreflang set does not include self");
  if (!d.alternates.some((a) => a.lang === "x-default")) err(path, "hreflang set has no x-default");
  const langs = d.alternates.map((a) => a.lang);
  if (new Set(langs).size !== langs.length) err(path, "duplicate hreflang codes");
  for (const a of d.alternates) {
    if (!/^(x-default|[a-z]{2}(-[A-Z]{2})?)$/.test(a.lang)) err(path, `invalid hreflang code: ${a.lang}`);
    const tp = a.href.startsWith(ORIGIN) ? a.href.slice(ORIGIN.length) : null;
    const target = tp && pages.get(tp);
    if (!target) { err(path, `hreflang target missing: ${a.href}`); continue; }
    if (target.noindex) err(path, `hreflang target is noindex: ${a.href}`);
    if (target.canonical !== a.href) err(path, `hreflang target not canonical: ${a.href}`);
    if (!target.alternates.some((b) => b.href === self)) err(path, `hreflang not reciprocal from ${a.href}`);
  }
}

// ---------- sitemap ----------
const sitemapFiles = readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f));
if (!existsSync(join(DIST, "sitemap-index.xml")) || !sitemapFiles.length) err("sitemap", "sitemap-index.xml / sitemap-N.xml missing");
const sitemapUrls = new Set(
  sitemapFiles.flatMap((f) => [...readFileSync(join(DIST, f), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]))
);
for (const url of sitemapUrls) {
  const p = url.startsWith(ORIGIN) ? url.slice(ORIGIN.length) : null;
  const d = p && pages.get(p);
  if (!d) err("sitemap", `URL has no page: ${url}`);
  else if (d.noindex) err("sitemap", `noindex URL in sitemap: ${url}`);
  else if (d.canonical !== url) err("sitemap", `non-canonical URL in sitemap: ${url}`);
}
for (const [path] of indexable) {
  if (!sitemapUrls.has(ORIGIN + path)) err("sitemap", `indexable page missing from sitemap: ${path}`);
}

// ---------- robots.txt ----------
const robotsTxt = existsSync(join(DIST, "robots.txt")) ? readFileSync(join(DIST, "robots.txt"), "utf8") : "";
if (!robotsTxt) err("robots.txt", "missing");
else {
  if (!robotsTxt.includes(`Sitemap: ${ORIGIN}/sitemap-index.xml`)) err("robots.txt", "Sitemap line missing or wrong");
  if (/^Disallow:\s*\/\s*$/m.test(robotsTxt)) err("robots.txt", "blocks the whole site");
}

// ---------- report ----------
console.log(`Checked ${pages.size} HTML pages (${indexable.length} indexable), ${sitemapUrls.size} sitemap URLs.`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log("  ⚠ " + w);
}
if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  for (const e of errors) console.log("  ✖ " + e);
  process.exit(1);
}
console.log("\n✔ SEO checks passed.");
