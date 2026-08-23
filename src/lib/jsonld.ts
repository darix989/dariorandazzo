import { SITE, absoluteUrl } from './site';

export function personJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: SITE.author,
		jobTitle: SITE.jobTitle,
		url: absoluteUrl(),
	};
}

export function websiteJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: SITE.title,
		url: absoluteUrl(),
		description: SITE.description,
		author: {
			'@type': 'Person',
			name: SITE.author,
			jobTitle: SITE.jobTitle,
		},
	};
}

export function blogPostingJsonLd(input: {
	title: string;
	description: string;
	path: string;
	pubDate: Date;
	updatedDate?: Date;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: input.title,
		description: input.description,
		datePublished: input.pubDate.toISOString(),
		dateModified: (input.updatedDate ?? input.pubDate).toISOString(),
		author: {
			'@type': 'Person',
			name: SITE.author,
			jobTitle: SITE.jobTitle,
		},
		mainEntityOfPage: absoluteUrl(input.path),
		url: absoluteUrl(input.path),
	};
}

export function softwareApplicationJsonLd(input: {
	title: string;
	description: string;
	path: string;
	platforms: string[];
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: input.title,
		description: input.description,
		applicationCategory: 'BrowserApplication',
		operatingSystem: input.platforms.join(', ') || undefined,
		url: absoluteUrl(input.path),
		author: {
			'@type': 'Person',
			name: SITE.author,
			jobTitle: SITE.jobTitle,
		},
	};
}
