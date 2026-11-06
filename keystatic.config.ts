import { collection, config, fields } from '@keystatic/core';
import { creativeCategories } from './src/data/creative-categories';

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Marek Stojka — obsah webu' } },
  collections: {
    articles: collection({
      label: 'Články magazínu',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { data: 'json' },
      columns: ['title', 'status', 'category'],
      previewUrl: '/nahled-clanku/{slug}',
      schema: {
        title: fields.slug({ name: { label: 'Název článku', validation: { isRequired: true } }, slug: { label: 'Adresa článku', description: 'Malá písmena bez diakritiky, slova oddělte pomlčkami.', validation: { pattern: { regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/, message: 'Použijte malá písmena bez diakritiky a pomlčky.' } } } }),
        status: fields.select({ label: 'Stav článku', description: 'Koncept je jen v náhledu. Publikovaný článek se zobrazí v rubrice; na veřejný web se dostane až při nasazení webu.', options: [{ label: 'Koncept', value: 'draft' }, { label: 'Publikováno', value: 'published' }, { label: 'Ukázkový návrh — pouze lokálně', value: 'demo' }], defaultValue: 'draft' }),
        category: fields.select({ label: 'Rubrika', options: creativeCategories.map(c => ({ label: c.title, value: c.id })), defaultValue: 'obecne' }),
        publishedOn: fields.date({ label: 'Datum publikování', description: 'Volitelné datum pro řazení. Nejde o automatické naplánování publikace.' }),
        intro: fields.text({ label: 'Úvodní odstavec', multiline: true, validation: { isRequired: true } }),
        image: fields.image({ label: 'Hlavní fotografie', directory: 'public/media/articles', publicPath: '/media/articles/' }),
        imageAlt: fields.text({ label: 'Popis fotografie pro čtečky', description: 'Krátce popište, co fotografie zachycuje.' }),
        cover: fields.select({ label: 'Zástupný obrázek, pokud nenahrajete vlastní', options: [{ label: 'Papír příslušné rubriky', value: 'none' }, { label: 'Marek u stolu', value: 'candid' }, { label: 'Vlastní kresba', value: 'drawing' }], defaultValue: 'none' }),
        sections: fields.array(fields.object({
          title: fields.text({ label: 'Nadpis bloku', validation: { isRequired: true } }),
          layout: fields.select({ label: 'Rozložení', options: [{ label: 'Souvislý text', value: 'text' }, { label: 'Dva sloupce', value: 'columns' }, { label: 'Tři sloupce', value: 'columns-3' }, { label: 'Zvýrazněný barevný proužek', value: 'highlight' }, { label: 'Blok s ikonou', value: 'icon' }], defaultValue: 'text' }),
          paragraphs: fields.array(fields.text({ label: 'Odstavec', multiline: true, validation: { isRequired: true } }), { label: 'Odstavce', itemLabel: props => props.value.slice(0, 70), validation: { length: { min: 1 } } }),
        }), { label: 'Obsahové bloky', itemLabel: props => props.fields.title.value || 'Nový blok', validation: { length: { min: 1 } } }),
      },
    }),
  },
});
