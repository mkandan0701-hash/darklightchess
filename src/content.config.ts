import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    category: z.string(),
    readTime: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Darklight Chess Academy"),
    // Draft posts are excluded from routing, the blog listing, and the
    // sitemap — they exist in the repo as implementation-ready content
    // waiting for the owner's review before going live (see
    // docs/content-calendar-coimbatore.md for the planned publish order).
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog };
