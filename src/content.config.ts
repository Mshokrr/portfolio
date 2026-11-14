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
  readTime: z.string().default('5 Min Read'),
  date: z.coerce.date().default(new Date()),
  year: z.string().default('2026'),
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
