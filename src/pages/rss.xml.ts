import rss from '@astrojs/rss';
import { getPublishedPosts } from '../lib/content';
import { SITE, absoluteUrl } from '../lib/site';

export async function GET() {
	const posts = await getPublishedPosts();

	const latest = posts[0]?.data.updatedDate ?? posts[0]?.data.pubDate;

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
			categories: post.data.tags,
		})),
		customData: [
			`<language>en</language>`,
			latest ? `<lastBuildDate>${latest.toUTCString()}</lastBuildDate>` : '',
			`<atom:link href="${absoluteUrl('rss.xml')}" rel="self" type="application/rss+xml"/>`,
		]
			.filter(Boolean)
			.join(''),
		xmlns: { atom: 'http://www.w3.org/2005/Atom' },
	});
}
