import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
	loader: glob({ base: './src/content', pattern: 'about.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		heroImage: z.string().optional(),
		heroImageAlt: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.enum(['live', 'wip', 'archived']),
		storeUrl: z.string().url().optional(),
		repoUrl: z.string().url().optional(),
		websiteUrl: z.string().url().optional(),
		platforms: z.array(z.enum(['chrome', 'firefox', 'safari', 'edge'])).default([]),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

export const collections = { pages, blog, projects };
