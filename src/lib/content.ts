import { getCollection, getEntry } from 'astro:content';

export async function getAbout() {
	const about = await getEntry('pages', 'about');
	if (!about) {
		throw new Error('Missing about content at src/content/about.md');
	}
	return about;
}

export async function getPublishedPosts() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPublishedExtensions() {
	const extensions = await getCollection('extensions', ({ data }) => !data.draft);
	return extensions.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export async function getFeaturedExtensions() {
	const extensions = await getPublishedExtensions();
	const featured = extensions.filter((entry) => entry.data.featured);
	return featured.length > 0 ? featured : extensions;
}
