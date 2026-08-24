import { getAbout, getPublishedExtensions, getPublishedPosts } from './content';
import { SITE, absoluteUrl } from './site';

function mdLink(title: string, path: string, description: string) {
	return `- [${title}](${absoluteUrl(path)}): ${description}`;
}

export async function buildLlmsIndex() {
	const about = await getAbout();
	const extensions = await getPublishedExtensions();
	const posts = await getPublishedPosts();

	return [
		`# ${SITE.author}`,
		'',
		`> ${SITE.description}`,
		'',
		`Personal site of ${SITE.author}, ${SITE.jobTitle}.`,
		'',
		'## readme',
		'',
		mdLink(about.data.title, 'about/', about.data.description),
		'',
		'## builds',
		'',
		extensions.length > 0
			? extensions.map((entry) => mdLink(entry.data.title, `projects/${entry.id}/`, entry.data.description)).join('\n')
			: '_No builds published yet._',
		'',
		'## changelog',
		'',
		posts.length > 0
			? posts.map((entry) => mdLink(entry.data.title, `blog/${entry.id}/`, entry.data.description)).join('\n')
			: '_Changelog is empty._',
		'',
	].join('\n');
}

export async function buildLlmsFull() {
	const about = await getAbout();
	const extensions = await getPublishedExtensions();
	const posts = await getPublishedPosts();

	const sections = [
		`# ${SITE.author}`,
		'',
		`> ${SITE.description}`,
		'',
		'## readme',
		'',
		`### ${about.data.title}`,
		'',
		`URL: ${absoluteUrl('about/')}`,
		'',
		about.body?.trim() ?? about.data.description,
	];

	if (extensions.length > 0) {
		sections.push('', '## builds');
		for (const entry of extensions) {
			sections.push(
				'',
				`### ${entry.data.title}`,
				'',
				`URL: ${absoluteUrl(`projects/${entry.id}/`)}`,
				'',
				entry.body?.trim() ?? entry.data.description,
			);
		}
	}

	if (posts.length > 0) {
		sections.push('', '## changelog');
		for (const entry of posts) {
			sections.push(
				'',
				`### ${entry.data.title}`,
				'',
				`URL: ${absoluteUrl(`blog/${entry.id}/`)}`,
				'',
				entry.body?.trim() ?? entry.data.description,
			);
		}
	}

	return `${sections.join('\n')}\n`;
}
