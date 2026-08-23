import rss from '@astrojs/rss';
import { getPublishedPosts } from '../lib/content';
import { SITE, absoluteUrl } from '../lib/site';

export async function GET() {
	const posts = await getPublishedPosts();

	return rss({
		title: SITE.title,
		description: SITE.description,
		site: absoluteUrl(),
		trailingSlash: true,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `blog/${post.id}/`,
		})),
		customData: `<language>en</language>`,
	});
}
