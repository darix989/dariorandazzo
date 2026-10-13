import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
	loader: glob({ base: './src/content', pattern: 'about.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		/** Short homepage teaser. Keeps `/` and `/about/` from being the same page. */
		intro: z.string().optional(),
	}),
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		/** Lowercase hyphenated slugs. Each one becomes `/blog/tags/<tag>/`. */
		tags: z
			.array(
				z
					.string()
					.regex(
						/^[a-z0-9]+(?:-[a-z0-9]+)*$/,
						'Use a lowercase hyphenated slug (e.g. well-bookmarked).',
					),
			)
			.max(3)
			.default([]),
		draft: z.boolean().default(false),
		heroImage: z.string().optional(),
		heroImageAlt: z.string().optional(),
		/** Intrinsic size of heroImage. Set both to reserve space and avoid layout shift. */
		heroImageWidth: z.number().int().positive().optional(),
		heroImageHeight: z.number().int().positive().optional(),
		/**
		 * The build and version(s) a release post covers, oldest first. Rendered as a label on
		 * every listing and under the post title, so a reader always knows which version it is.
		 */
		release: z
			.object({
				project: reference('projects'),
				versions: z
					.array(z.string().regex(/^\d+(?:\.\d+){1,2}$/, 'Use a version like 2.7 or 2.7.0.'))
					.min(1),
			})
			.optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.enum(['live', 'wip', 'archived']),
		storeUrl: z.url().optional(),
		repoUrl: z.url().optional(),
		websiteUrl: z.url().optional(),
		platforms: z.array(z.enum(['chrome', 'firefox', 'safari', 'edge'])).default([]),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

export const collections = { pages, blog, projects };
