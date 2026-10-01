import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Prose pages, one Markdown file per language: src/content/pages/<lang>/<slug>.md */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    lead: z.string().optional(),
    seoTitle: z.string(),
    description: z.string().max(160),
  }),
});

export const collections = { pages };
