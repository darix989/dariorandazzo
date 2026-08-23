import type { APIRoute } from 'astro';
import { buildLlmsIndex } from '../lib/llms';

export const GET: APIRoute = async () => {
	return new Response(await buildLlmsIndex(), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
