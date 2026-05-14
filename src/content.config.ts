import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: () =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      teaser: z.string(),
      year: z.string(),
      kind: z.string(),
      status: z.enum(['in development', 'shipped', 'archived', 'concept']),
      order: z.number(),
      cover: z.string().optional(),
      coverAlt: z.string().optional(),
      tldr: z.string(),
      links: z
        .array(z.object({ label: z.string(), href: z.string().url() }))
        .default([]),
      faq: z
        .array(z.object({ q: z.string(), a: z.string() }))
        .default([]),
    }),
});

export const collections = { projects };
