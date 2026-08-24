import type { APIRoute } from 'astro';
import { absoluteUrl } from '../lib/site';

// Crawlers only read robots.txt at the ORIGIN root, so while the site lives at
// the /dariorandazzo/ project subpath this file is never fetched. It is kept so
// it becomes correct the moment `base` becomes '/', and the sitemap is also
// advertised via <link rel="sitemap"> in Seo.astro. Submit the sitemap URL
// manually in Search Console until then.

export const GET: APIRoute = () => {
	const body = [
		'User-agent: *',
		'Allow: /',
		'',
		`Sitemap: ${absoluteUrl('sitemap-index.xml')}`,
		'',
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
