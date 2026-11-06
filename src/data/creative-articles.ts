import { creativeCategories } from './creative-categories';

export type ArticleCategory = (typeof creativeCategories)[number]['id'];
export interface CreativeArticle {
 slug: string;
 title: string;
 topic: string;
 category: ArticleCategory;
 status: 'draft' | 'published' | 'demo';
 publishedOn: string | null;
 image: string | null;
 imageAlt: string;
 cover: 'none' | 'candid' | 'drawing';
 intro: string;
 sections: { layout: 'text' | 'columns' | 'columns-3' | 'highlight' | 'icon'; title: string; paragraphs: string[] }[];
}
const files = import.meta.glob('../content/articles/*.json', { eager: true, import: 'default' });
function readArticle(path: string, value: unknown): CreativeArticle {
 const data = value as CreativeArticle;
 const slug = path.split('/').pop()!.replace(/\.json$/, '');
 const category = creativeCategories.find(c => c.id === data.category);
 const invalid = !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
  || !category || !data.title?.trim() || !data.intro?.trim()
  || !['draft', 'published', 'demo'].includes(data.status)
  || !['none', 'candid', 'drawing'].includes(data.cover)
  || (data.publishedOn && (!/^\d{4}-\d{2}-\d{2}$/.test(data.publishedOn) || !Number.isFinite(Date.parse(data.publishedOn))))
  || (data.image && (!data.image.startsWith('/media/articles/') || data.image.includes('..') || (data.status === 'published' && !data.imageAlt?.trim())))
  || !Array.isArray(data.sections) || !data.sections.length
  || data.sections.some(s => !['text', 'columns', 'columns-3', 'highlight', 'icon'].includes(s.layout)
   || !s.title?.trim() || !Array.isArray(s.paragraphs) || !s.paragraphs.length || s.paragraphs.some(p => typeof p !== 'string' || !p.trim()));
 if (invalid) throw new Error(`Invalid article content: ${path}. Check required text, image description and block structure.`);
 return { ...data, slug, topic: category!.title };
}
export const allCreativeArticles: CreativeArticle[] = Object.entries(files)
 .map(([path, value]) => readArticle(path, value))
 .sort((a, b) => (b.publishedOn || '').localeCompare(a.publishedOn || '') || a.slug.localeCompare(b.slug));
// Demonstration copy is visible only in development, never in the public build.
export const creativeArticles = allCreativeArticles.filter(a => a.status === 'published' || (import.meta.env.DEV && a.status === 'demo'));
export function articleStatusLabel(article: CreativeArticle): string {
 return article.status === 'demo' ? 'Pracovní návrh článku — text k doladění.'
  : article.status === 'draft' ? 'Soukromý náhled konceptu — článek není zveřejněný.' : '';
}
