import { withBase } from '../lib/site-path';
import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(`User-agent: *\nAllow: /\n${site ? `Sitemap: ${new URL(withBase('/sitemap.xml'), site)}\n` : ''}`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
