# Rozšíření webu

Web generuje homepage, samostatný svět `/temnota` a vlastní 404. Žádný backend, CMS, databáze nebo služba pro měření nejsou potřeba.

## Mapa budoucích cest

| Cesta | Budoucí soubor |
| --- | --- |
| `/temnota` | `src/pages/temnota.astro` |
| `/absurdita` | `src/pages/absurdita.astro` |
| `/napady` | `src/pages/napady.astro` |
| `/experimenty` | `src/pages/experimenty.astro` |
| `/knihy/moonika` | `src/pages/knihy/moonika.astro` |
| `/kampane/[slug]` | `src/pages/kampane/[slug].astro` + `getStaticPaths()` |

Přidejte skutečnou stránku až s obsahem. Potom změňte `target` v `src/data/worlds.ts` z kotvy na její URL. Temnota už má vlastní stránku; ostatní CTA do té doby vedou k reálným blokům homepage.

## Obsah a vzhled

- `src/data/worlds.ts`: názvy, popisky, CTA a cíle harmoniky.
- `src/components/AshScene.tsx`: procedurální úvodní scéna s popelem. Reakce na ukazatel/dotyk, vlastní víření, pauza, `prefers-reduced-motion`; pozastavení mimo viewport a na skryté kartě. Omezené rozlišení Canvasu a počet částic pro mobil.
- `src/components/WorldAccordion.tsx`: hydratovaný React ostrov s typografickými panely a jemnou reakcí na ukazatel. Aktivní volbu předává i portrétní části bez ukládání do cookies nebo localStorage.
- `src/components/WorldArt.tsx`: čistá autorská CSS/SVG grafika.
- `src/components/WordExperiment.tsx`: zachovaný dřívější mikroexperiment, aktuálně se na homepage nepoužívá.
- `src/layouts/BaseLayout.astro`: jazyk, title, description, canonical a OG. Každá nová stránka předá vlastní metadata, případně rozšíří rozhraní o vlastní OG obrázek.
- `src/styles/global.css`: designový systém a animace pomocí nativních CSS přechodů; nevyžaduje další animační knihovnu.

Sitemap ve `src/pages/sitemap.xml.ts` obsahuje homepage a `/temnota`. Každou novou veřejnou cestu doplňte do seznamu. 404 ani budoucí prázdné cesty neindexujte.

## Kampaně a marketing

Každá statická kampaň může používat společný layout nebo vlastní bez hlavní navigace. Obsah lze později přesunout do Astro Content Collections. Začněte soubory s typovanými metadaty, nikoliv databází.

`src/lib/marketing.ts` definuje typy budoucích událostí a adaptérů i čistou funkci pro UTM parametry. Není importován do stránky. Žádný pixel, request, cookie ani localStorage se kvůli marketingu nespouští. Před zapojením GA4, GTM nebo Meta Pixelu implementujte explicitní souhlas podle kategorií, odvolání souhlasu, likvidaci adaptérů a zásady soukromí. Nenačítejte poskytovatele před potřebným souhlasem. Pouhé přidání identifikátoru do prostředí měření nezapne.

Budoucí formulář potřebuje skutečný serverový endpoint nebo prověřenou externí službu, validaci, ochranu proti spamu a odpovídající informace o zpracování údajů. Soukromé API klíče patří pouze do serverového prostředí; statický frontend je neumí utajit.

## Ovládání harmoniky

Myš panel otevře najetím, dotyk klepnutím na název, klávesnice zaměřením. Enter/mezerník přepínají panel, šipky/Home/End přesouvají zaměření, Escape vrací rovné rozložení. CTA je samostatný odkaz. Skryté CTA má `inert`, takže nevstupuje do pořadí tabulátoru. Animace respektují `prefers-reduced-motion`.

## Temný úvod

Nový směr používá téměř černé pozadí, serifový titulek a lokálně generovaný popel. Reference kompozice: https://dribbble.com/shots/5984315-Photography-Website. Žádná média z reference nejsou použita. Scéna s popelem je na samostatné cestě `/temnota`, dostupné z CTA úvodní harmoniky. Homepage načítá pouze harmoniku, popel se stáhne až při vstupu do Temnoty. Projekty používají nativní `details`/`summary`; odkazy na projekt jej před posunem otevřou. Vzhled sdílecího obrázku a favicon odpovídá novému směru.

## Přehled pro revizi

`src/pages/navrhy/[board].astro` vrací cestu `prehled` pouze ve vývojovém prostředí. Produkční `getStaticPaths()` je prázdné; pracovní přehled nemá veřejnou cestu v `dist`. Uchovává pouze náhledy veřejných návrhů, nikoliv citlivé poznámky. Shared chování kotvení, odhalování a magnetického prvku je v `src/components/PageInteractions.astro`. Layout přijímá vlastní `ogImage` a `ogAlt` pro každou stránku.

## Neutrální autorská homepage

`BaseLayout` má volitelný `theme="neutral"`; výchozí motiv zůstává tmavý pro zachovanou stránku Temnoty. Homepage importuje `src/styles/home.css` se styly omezenými na `.homepage-neutral`. Hero začíná hned pod úzkou navigací a zabírá zbytek první obrazovky. Hlavní nadpis pro čtečky je vizuálně skrytý, portrétní část s popisy navazuje až pod dlaždicemi. Každá dlaždice má vlastní proměnné pozadí, textu a vedlejšího textu. Náhled popela je lehké lokální SVG; plná simulace stále patří jen na `/temnota`. SVG souřadnice se před serializací zaokrouhlují kvůli shodě serverového a klientského vykreslení.

## Čtyři tváře autora

`AuthorFaces.tsx` je React ostrov hydratovaný při zobrazení. Přepíná taby a vrstvy portrétu, reaguje na hash i událost z harmoniky. Při pozdější hydrataci převezme poslední volbu z DOM datasetu; nic neukládá mezi návštěvami. Jednotlivé hash kotvy leží nahoře portrétní sekce, aby se při vstupu zobrazila fotografie spolu s popisem. `src/data/author.ts` je jediným zdrojem pro texty a fotografické vstupy. Astro připravuje WebP varianty šířek 480, 800 a 1024 px. Popisné panely jsou při vypnutém JavaScriptu zobrazeny všechny. Vlastní příprava, zkušenosti a e-mail stále čekají na podklady autora.


### Obsah knih pod harmonikou

DarkWorks posílá událost book:select s ID knihy. temnota.astro přepíná hidden na statických data-book-panel sekcích, uklízí posluchače při Astro navigaci a podporuje hash kotvy. MoonikaPresentation.astro používá optimalizované Astro Image, data/moonika.ts pro skutečný text a moonika.css pro fotografický layout. Původní AshScene zůstává jediná v horním hero.
