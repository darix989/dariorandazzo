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

export async function getPublishedPostsByTag(tag: string) {
	const posts = await getPublishedPosts();
	return posts.filter((post) => post.data.tags.includes(tag));
}

export async function getPublishedTags() {
	const posts = await getPublishedPosts();
	const counts = new Map<string, number>();
	for (const post of posts) {
		for (const tag of post.data.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}
	return [...counts.entries()]
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export async function getPublishedProjects() {
	const projects = await getCollection('projects', ({ data }) => !data.draft);
	return projects.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export async function getFeaturedProjects() {
	const projects = await getPublishedProjects();
	const featured = projects.filter((entry) => entry.data.featured);
	return featured.length > 0 ? featured : projects;
}
