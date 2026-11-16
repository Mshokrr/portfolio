import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const schema = z.object({
  title: z.string(),
  bigTitle: z.string().default(''),
  subtitle: z.string().default(''),
  emphasis: z.string().optional(),
  headline: z.string().default(''),
  excerpt: z.string().default(''),
  summary: z.string().default(''),
  author: z.string().default('Mohamed'),
  // Short free-text note shown beside the author (read time, location, ...)
  annotation: z.string().default(''),
  date: z.coerce.date().default(new Date()),
  // Optional period label ("2021", "2019 - 2022"); falls back to the date when absent
  year: z.string().optional(),
  cover: z.string().url().optional(),
  featured: z.boolean().default(false),
  type: z.enum(['work/career', 'work/freelance', 'post']).default('post'),
  pageNumber: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  order: z.number().default(0),
  hidden: z.boolean().default(false),
  url: z.string().url().optional(),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content' }),
  schema: schema,
});

const featured = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: schema,
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: schema,
});

export const collections = { posts, featured, work };
