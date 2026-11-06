import { withBase } from '../lib/site-path';
import { creativeExercises } from '../data/creative-exercises';
import type { APIRoute } from 'astro';
import { creativeArticles } from '../data/creative-articles';
export const GET: APIRoute = ({ site }) => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${site ? ['/', '/temnota', '/humor', '/kreativec', '/potkejme-se', '/kreativec/magazin/cviceni', ...creativeExercises.map(exercise=>`/kreativec/cviceni/${exercise.slug}`), ...creativeArticles.filter(a=>a.status==='published').map(a=>`/kreativec/zapisnik/${a.slug}`)].map((path) => `<url><loc>${new URL(withBase(path), site).href.replaceAll('&', '&amp;')}</loc></url>`).join('') : ''}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
