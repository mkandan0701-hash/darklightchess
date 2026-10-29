// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { NOINDEX_PATHS } from './src/lib/seo.ts';

const SITE = 'https://www.darklightchess.com';
const excluded = new Set(NOINDEX_PATHS.map((p) => SITE + p));

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Built-but-noindexed pages must never appear in the sitemap.
      filter: (page) => !excluded.has(page),
    }),
  ],
});
