export const SITE = {
	title: 'Dario Randazzo',
	description: 'Personal site of Dario Randazzo, Computer Engineer. About, projects, and writing.',
	author: 'Dario Randazzo',
	jobTitle: 'Computer Engineer',
	origin: 'https://darix989.github.io',
	locale: 'en_US',
	/** Default social card. Regenerate with `npm run og` if the wording changes. */
	ogImage: 'og.png',
	ogImageWidth: 1200,
	ogImageHeight: 630,
	ogImageAlt: 'Dario Randazzo, Computer Engineer',
} as const;

function normalizeBase(): string {
	const base = import.meta.env.BASE_URL || '/';
	return base.endsWith('/') ? base : `${base}/`;
}

/** Site-root-relative path that includes the GitHub Pages project base. */
export function withBase(path = ''): string {
	const base = normalizeBase();
	const normalized = path.replace(/^\/+/, '');
	return normalized ? `${base}${normalized}` : base;
}

/** Absolute URL for canonical tags, JSON-LD, feeds, and agent indexes. */
export function absoluteUrl(path = ''): string {
	return new URL(withBase(path), SITE.origin).href;
}
