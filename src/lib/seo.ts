// Shared SEO helpers: absolute URLs, the hreflang cluster for the online-classes
// pages, and the list of paths kept out of the index (also used by the sitemap
// filter in astro.config.mjs, so the two can never disagree).
import { SITE_URL } from "../consts";
import { markets } from "../data/markets";

export const HUB_PATH = "/online-chess-classes/";

export interface Alternate {
  hreflang: string;
  href: string;
}

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

// The international hub is the x-default and generic-English version; each
// published country page is its regional alternate. Unpublished markets are
// left out entirely — hreflang must only point at indexable, canonical URLs.
export const HREFLANG_CLUSTER: Alternate[] = [
  { hreflang: "x-default", href: absoluteUrl(HUB_PATH) },
  { hreflang: "en", href: absoluteUrl(HUB_PATH) },
  ...markets
    .filter((m) => m.published)
    .map((m) => ({ hreflang: m.hreflang, href: absoluteUrl(m.path) })),
];

const clusterPaths = new Set([HUB_PATH, ...markets.filter((m) => m.published).map((m) => m.path)]);

export const alternatesFor = (path: string): Alternate[] =>
  clusterPaths.has(path) ? HREFLANG_CLUSTER : [];

// Built but intentionally not indexed (e.g. a market page awaiting verified
// local details). Rendered with "noindex, follow" and excluded from the sitemap.
export const NOINDEX_PATHS: string[] = markets.filter((m) => !m.published).map((m) => m.path);

export const isNoindexPath = (path: string) => NOINDEX_PATHS.includes(path);
