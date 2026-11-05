// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { NOINDEX_PATHS } from './src/lib/seo.ts';
import { markets } from './src/data/markets.ts';

const SITE = 'https://www.darklightchess.com';
// lastmod only where we track a real update date (country pages).
const lastmods = new Map(markets.filter((m) => m.lastUpdated).map((m) => [SITE + m.path, m.lastUpdated]));
const excluded = new Set(NOINDEX_PATHS.map((p) => SITE + p));

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Built-but-noindexed pages must never appear in the sitemap.
      filter: (page) => !excluded.has(page),
      serialize(item) {
        const lm = lastmods.get(item.url);
        if (lm) item.lastmod = new Date(lm).toISOString();
        return item;
      },
    }),
  ],
});
