# kreativno — pracovní název autorského webu / V1

## Aktuální export a GitHub Pages (6. 11. 2026)

Web se dál upravuje ve zdrojích Astro. `npm run build` už vytváří hotové HTML, CSS, JavaScript, obrázky a písma ve složce `dist/`; na hostingu nepotřebuje Node ani databázi. Animace i interakce zůstávají součástí exportu. Samotné otevření HTML dvojklikem není náhled hostingu — používejte `npm run preview` nebo webový server.

- **Běžný hosting / vlastní doména:** otevřete `Exportovat web.command` (na Macu) nebo spusťte `SITE_BASE=/ npm run build`. Exportovací soubor vytvoří `exports/web-html.zip`. Na hosting patří celý obsah ZIPu, s `index.html` přímo v kořeni webu. Pro správné sdílení a sitemap nastavte před exportem `SITE_URL` na skutečnou doménu. ZIP bez domény stále funguje, pouze nevytváří absolutní metadata.
- **GitHub Pages:** připravený `.github/workflows/deploy.yml` sestaví Astro a nahraje `dist/`. V [Settings → Pages](https://github.com/MarekStojka/marek-stojka-web/settings/pages) musí být **Source: GitHub Actions**, nikoli sestavování větve přes Jekyll. Po nahrání tohoto workflow do `main` se web sestaví a zveřejní při každém dalším pushi. Adresa projektu je `https://marekstojka.github.io/marek-stojka-web/`; workflow bere doménu i podadresář z nastavení Pages, takže podporuje i pozdější vlastní doménu. Odkaz se po úspěchu objeví u prostředí `github-pages` a v Settings → Pages.
- **Živý stav (6. 11. 2026):** oprava `0e57508` je nahraná do `main` a workflow Publish website úspěšně nasadilo web na https://marekstojka.github.io/marek-stojka-web/. Úspěšná je i kontrola Check and build. Ověřena veřejná homepage a vstup do Kreativity v prohlížeči. Původní automatický Jekyll běh stále selhává; slouží jinému způsobu sestavení a nové nasazení neblokuje. Pro odstranění tohoto souběžného běhu přepněte Source v Settings → Pages na GitHub Actions. Starší poznámky o soukromém repozitáři nebo nepřipojeném hostingu níže jsou historické.

Při úpravách přes chat zůstávají rozhodující zdroje, ne vygenerované soubory v `dist/`. Po dokončení změn stačí nový export nebo push do GitHubu po jednorázovém zapojení Pages. Lokální editor Keystatic, koncepty a demo články nejsou součástí veřejného exportu; články se zařazují až se stavem `published`.

Build kontroluje lokální odkazy, obrázky a skripty i nepřítomnost lokální administrace. Pro kontrolu stejného podadresáře jako na GitHubu:

```sh
SITE_URL=https://marekstojka.github.io SITE_BASE=/marek-stojka-web/ npm run build
SITE_BASE=/marek-stojka-web/ npm run preview
```

Responzivní statický web: Astro, React, TypeScript a Tailwind CSS 4. Neutrální autorská homepage s vysokou harmonikou jako jedinou dominantou hero sekce, vlastní interaktivní kresbou s odhalováním barev a představením pod ní a samostatná stránka `/temnota` s interaktivním popelem na Canvasu. Čitelné představení autora, místo pro skutečné zkušenosti a jednoduchý kontakt. Nativní CSS přechody, postupné odhalování při posouvání a Canvas nahrazují další animační knihovnu. Popel reaguje na ukazatel i dotyk a má tlačítko pro víření a pozastavení. Při omezeném pohybu zůstane statický. Žádné externí obrázky, runtime fontové služby, měření, backend ani databáze.

## Lokální spuštění

Potřebujete Node.js **22.23.4 nebo novější verzi 22** a npm. Doporučená verze je v `.node-version`.

```sh
npm ci
cp .env.example .env
npm run dev
```

Výchozí adresa je `http://127.0.0.1:4321`. Skutečnou adresu vypíše Astro. Prostředí je volitelné pro lokální vývoj.

```sh
npm run check   # Astro + TypeScript
npm run build   # kontrola a produkční statický build do dist/
npm run preview # lokální náhled hotového buildu
```

## Prostředí

| Proměnná | Význam |
| --- | --- |
| `SITE_URL` | Skutečná veřejná HTTPS adresa, bez cesty, například adresa přidělená Cloudflare. Používá canonical, OG, robots a sitemap. **Nastavte před veřejným nasazením.** |
| `PUBLIC_CONTACT_EMAIL` | Volitelný skutečný veřejný e-mail. Bez něj web poctivě uvádí, že kontakt bude doplněn. |

Bez `SITE_URL` build funguje, nevymýšlí doménu a nevytváří canonical ani absolutní OG URL. Sitemap je v takovém případě prázdná. Po nastavení adresy proveďte nový build. Proměnné jsou čteny při buildu, nikoliv při každém otevření stránky. Nikdy nevkládejte tajemství do `PUBLIC_*`.

## GitHub a automatická kontrola

Veřejný repozitář: [MarekStojka/marek-stojka-web](https://github.com/MarekStojka/marek-stojka-web). Větev `main` obsahuje zdroje, obrázky a dokumentaci. Aktuální příprava GitHub Pages je popsaná výše.

Pro nahrání dalších změn z tohoto adresáře:

```sh
git add .
git commit -m "Popis změny"
git push
```

`.gitignore` vylučuje prostředí, závislosti a generované soubory. `package-lock.json` naopak patří do repozitáře. GitHub Actions provede `npm ci` a `npm run build` na změnách větve `main` a pull requestech. V Settings → Secrets and variables → Actions → Variables nastavte `SITE_URL` (a volitelně veřejný kontakt), pokud chcete kontrolovat produkční metadata i v CI.

## Cloudflare Pages — doporučené nasazení

Projekt je čistě statický, proto nepotřebuje Cloudflare adaptér ani vlastní server.

1. V Cloudflare otevřete **Workers & Pages → Create application → Pages → Connect to Git** a autorizujte konkrétní GitHub repozitář.
2. Vyberte produkční větev **main**. Root directory je kořen repozitáře.
3. Framework preset: **Astro**. Build command: **`npm run build`**. Output directory: **`dist`**.
4. V nastavení prostředí nastavte **`NODE_VERSION=22.23.4`**. Nastavte `SITE_URL` na skutečnou produkční adresu a podle potřeby `PUBLIC_CONTACT_EMAIL`.
5. Pokud přidělenou adresu ještě neznáte, první deploy získá adresu `*.pages.dev`. Doplňte ji do `SITE_URL` a spusťte nový deploy. Při připojení vlastní domény použijte jako `SITE_URL` tuto doménu a build zopakujte.
6. V **Custom domains** můžete následně připojit doménu. Zkontrolujte HTTPS, `/robots.txt`, `/sitemap.xml`, sdílení homepage a neexistující URL (musí zobrazit vlastní 404).

Po propojení každý push do `main` automaticky nasadí novou verzi. Cloudflare může vytvářet preview pro pull requesty. Pro preview nastavte odpovídající prostředí; případné indexování preview zakažte v nastavení platformy. Workflow `ci.yml` pouze kontroluje; nové `deploy.yml` je určené pro GitHub Pages, viz aktuální postup nahoře.

Volitelný přímý deploy po přihlášení k Cloudflare CLI:

```sh
npm run build
npx wrangler pages deploy dist --project-name <NÁZEV-PAGES-PROJEKTU>
```

Přímý deploy sám nepropojí GitHub. Pro automatické nasazování použijte Git integraci výše. Cloudflare Workers static assets je možná budoucí alternativa; pro tuto V1 nepřináší potřebnou výhodu.

Oficiální podklady: [Astro na Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/), [Astro styling a Tailwind](https://docs.astro.build/en/guides/styling/).

## Obsah před ostrým spuštěním

- Doplňte skutečnou doménu a případně veřejný e-mail.
- Potvrďte texty; Moonika je označená jako připravovaná a obálka jako pracovní vizuál.
- Reklamní ukázka je volná konceptová studie bez klienta a bez vymyšlených výsledků.
- Dřívější mikroexperiment zůstává ve zdrojích pro pozdější použití; na aktuální homepage se místo něj zobrazují popisy čtyř tváří.

Podrobná mapa budoucích stránek, metadat a marketingu je v [docs/ARCHITEKTURA.md](docs/ARCHITEKTURA.md).

## Ruční kontrola interakcí

Na desktopu otevřete každý panel myší; aktivní má přibližně 60 % šířky. Tabulátorem otevřete názvy, šipkami přejděte mezi nimi, tabulátorem na aktivní CTA, Escape rozložení vrátí. Na mobilu klepněte na název a potom na samostatné CTA. Vyzkoušejte přepínač tváří, návaznost z harmoniky, kontakt, interní kotvy a režim omezeného pohybu. Fonty jsou součástí buildu a jejich licence je přibalena v balíčku `@fontsource-variable/manrope`.

## Pracovní přehled návrhů

Při `npm run dev` otevřete `/navrhy/prehled`. Vedle sebe jsou skutečné snímky úvodu a Temnoty, stav jednotlivých směrů a odkazy na živé stránky. Velikost pláten jde měnit posuvníkem. Tento přehled se negeneruje do produkčního buildu. Snímky v `docs/nahled-rozcestnik.jpg` a `docs/nahled-temnota.jpg` je po změně designu potřeba aktualizovat. Vybraný směr a budoucí práci zaznamenává `docs/DESIGN.md`.

## Fotografie a obsah autora

`src/data/author.ts` obsahuje čtyři vlastní portréty Marka Stojky, popisy světů, úvod, biografii a seznam skutečných zkušeností. Portréty jsou retušované z jeho dodané fotografie, s černým tričkem, černobílým ateliérovým světlem a výraznější změnou výrazu v sadě V2. Zdroje jsou v `src/assets/portraits/`, originál je zachovaný. Postup a přesná zadání popisují `docs/PORTRAIT.md` a `docs/PORTRAIT-EDITS-V2.md`. Praxi a veřejný kontakt dodá Marek později.

## Nabídka pomoci

Autor: Marek Stojka. „kreativno“ je pracovní značka, ne potvrzený finální název. Šest nabídek je v `authorServices` v `src/data/author.ts`. `AuthorServices.astro` je zobrazuje jako minimalistický seznam s nativním rozbalením bez dalšího JavaScriptu. Následují představení a kontakt. Aktuální snímek: `docs/nahled-sluzby.jpg`.

Vlastní kresby Marka Stojky jsou v `src/assets/artwork/`, původ a zadání samostatné AI studie v `docs/ARTWORK.md`. Nová patička obsahuje kontakt; představení a zkušenosti jsou u portrétu. Příslušné snímky: `docs/nahled-autor.jpg`, `docs/nahled-paticka.jpg`, `docs/nahled-rozcestnik.jpg`.

Aktuální úvodní harmonika používá sjednocené ateliérové fotografie na bílém pozadí. Originály jsou v `src/assets/piles/`, původ a přesné prompty vestavěného ImageGen v `docs/PILE-PHOTOS.md`. Kresby zůstávají uložené pro další využití.

## Aktuální autorská sekce a přechod do tmy

`AuthorArtwork.tsx` používá dvě vlastní kresby Marka, odhalování původních barev a přístupná tlačítka. Fotografie V1/V2 jsou pouze archivní. `AshTransition.astro` propojuje bílou kupičku s `/temnota`; Canvas přetrvává přes Astro ClientRouter. Sdílené textury jsou v `src/lib/ashTexture.ts`. Globální interakce se inicializují i po `astro:page-load`. Aktuální podklady a snímky jsou v `docs/DESIGN.md`, `docs/nahled-autor.jpg`, `docs/nahled-temnota.jpg` a `docs/nahled-prechod-popel.jpg`.

## Statická kategorie Umím děsit

Aktuální /temnota používá dvě lokální optimalizované fotografie knihy a popela, bez nepřetržité animace AshScene. Přechod je rozdělen na rozvíření → celoplošné zakrytí → navigaci pod krytem → odhalení dekódované fotografie. Prompty a původ v docs/ASH-PHOTOS.md, snímky docs/nahled-temnota.jpg a docs/nahled-flatlay.jpg. Předchozí zmínky o interaktivní scéně zachycují historii projektu.

## Aktuální návrat k interaktivnímu popelu

Fotografická kategorie byla na nový pokyn odmítnutá a /temnota znovu používá původní AshScene a typografický projekt Moonika. Aktuální přechod je krátký závan částic a přechod bílé do tmy, bez velkého šedého oblaku. Během navigace se nekreslí částice a cílová scéna čeká na odhalení. Snímky a nejnovější rozhodnutí viz docs/DESIGN.md.

## Dvě práce uvnitř temného hero

Nové DarkWorks.tsx tvoří dvoudílnou harmoniku Moonika / Mistrovství smíchu uvnitř /temnota, pod stručným osobním úvodem. Hlavní homepage má stále čtyři polohy. Moonika odkazuje na vlastní prezentaci #moonika s pracovním typografickým vizuálem. Konkrétní anotaci a obálku doplní autor; formát Mistrovství smíchu zatím nebyl potvrzený. Styly: src/styles/dark-library.css. Snímky: docs/nahled-temnota.jpg a docs/nahled-moonika-mobile.jpg.

## Nejnovější homepage a rozšíření knihovny

SiteIntroduction.astro nahrazuje kresbu blokem „Tohle je můj svět.“ o smyslu webu, tvorbě, nabídce a budoucím portfoliu/blogu. Obsahový vstup je #o-webu; pod hero není samostatný odkaz. Spáru řídí sdílená --sheet-gap (6/5 px). Kresby zůstávají archivně. DarkWorks.tsx má pět titulů: Moonika, Mistrovství smíchu, Armelie, Pohovor a Sraz zítra. Na desktopu zúžené hřbety, na mobilu řádky. Žádné vymyšlené anotace ani stavy nových knih.

## Slovní interakce na homepage

`/#jedno-slovo` je mezi představením webu a nabídkou. Podtržené slovo ve větě mění šest předem připravených mikropříběhů; jde o pracovní texty návrhu. Komponenta `src/components/WordStory.tsx` a styl `src/styles/word-story.css`. Klávesnice Enter/mezerník, šipky a Home, aria-live, CSS reduced motion. Snímek `docs/nahled-jedno-slovo.jpg`, lokální přehled `/navrhy/prehled`.

## Aktuální zjednodušení homepage

Na poslední pokyn je na homepage pouze hlavička a fotografický rozcestník čtyř poloh. Pod ním není další obsah ani patička; komponenty zůstávají archivně. Aktivní odkaz vede do /temnota, ostatní tři světy jsou označené jako připravované. Fotografický ateliér vleže byl odmítnut. Aktuální snímek: docs/nahled-rozcestnik.jpg.

## Nejnovější obsah pod rozcestníkem

Na nový pokyn přidává HomeContent.astro samostatný proměnlivý slogan, původní Markův portrét složený z 25 čtverců, čtyři nabídky se štětcovými ikonami a bílý kontakt. Dva dílky obličeje jsou prohozené; kliknutí je srovná. Slogan je pracovní, mění barvu i písmo, lze jej zastavit. Veřejný e-mail stále čeká na dodání (PUBLIC_CONTACT_EMAIL). Hero i /temnota zůstávají. Aktuální snímky: docs/nahled-slogan.jpg, docs/nahled-autor.jpg, docs/nahled-sluzby.jpg, docs/nahled-paticka.jpg; návrhy /navrhy/prehled pouze ve vývoji. Starší pasáže výše popisují předchozí iterace.

### Aktuální revize barev a ikon

Slogan má osm barevných kompozic přes celou plochu, včetně proměn sazby, fontu a barev obou řádků. Drobné rohové popisky jsou odstraněné. Portrét doprovází „Stačí málo. A každý může být viděn jinak.“ Nabídka má dvanáct stejně vysokých ikonových dlaždic bez viditelných textů a bez rozklikávání; názvy zůstávají přístupné čtečkám. Jedenáct oblastí dodal autor, navíc je psaní sloganů z dřívějšího zadání. Snímky nahled-slogan.jpg / nahled-autor.jpg / nahled-sluzby.jpg / nahled-paticka.jpg.

Ikonový přehled je nyní rozšířený na 24 položek podle přijatého seznamu; nadpis „Tohle všechno dělám“. Aktuální snímek docs/nahled-sluzby.jpg.

### Objevování karet a tmavý režim

Ikony nyní fungují jako tlačítka: kliknutí odhalí černou kartu s krátkým vysvětlením, další kliknutí ji zavře. Po navštívení všech 24 různých karet se celá homepage přepne do tmavé palety. SessionStorage pamatuje postup v aktuální kartě prohlížeče; tlačítko pod dokončenou mřížkou vrátí světlý režim a vynuluje hru. /temnota zůstává samostatná. Snímky docs/nahled-karty-dark.jpg a docs/nahled-home-dark.jpg.

## Kontaktní otázky a druhá harmonika

ContactSection.astro obsahuje 13 otázek, barevná klíčová slova z palety sloganu a plynulou čtecí vlnu ztučnění písmen. Ikonová pauza, statická varianta pro reduced motion a jednoznačný text pro čtečky. Výzva napsat/zavolat používá po doplnění PUBLIC_CONTACT_EMAIL a nového PUBLIC_CONTACT_PHONE odkazy mailto/tel. Zatím oba kontakty čekají na autora.

Hned pod kontaktem je opakovaná hlavní harmonika s nadpisem „Prohlédněte si mé světy“. Horní a spodní instance mají oddělená ID panelů a vlastní stav; přechod s popelem používá konkrétní kliknutou fotografii. Snímky docs/nahled-kontakty.jpg / docs/nahled-rozcestnik-dole.jpg. Starší popisy patičky jsou historické.

Aktuální ikonová sekce má 30 karet v pěti sloupcích (mobil dva). Přidané oblasti: bannery, tisková grafika, hlas značky, uživatelské cesty, ověřování nápadů, obraz a slovo. Dark mode se odemkne po všech třiceti.

Stavy knih v /temnota nyní vycházejí z údajů Marka: Moonika vydání 2027, Mistrovství smíchu hotovo 70 %, Armelie vydání 2027–2028, Pohovor hotovo 10 %, Sraz zítra hotovo 40 %. Ikony mají responzivně 5 / 3 / 2 sloupce (desktop / tablet / mobil).


### Prezentace Mooniky

Na `/temnota` kliknutí na knihu mění prezentaci pod harmonikou; odkaz O knize k ní posune. Moonika: `src/components/MoonikaPresentation.astro`, texty `src/data/moonika.ts`, vzhled `src/styles/moonika.css`. Anotace a ukázka čekají na autora, fotografie jsou pracovní studie. Náhledy: `docs/nahled-moonika.jpg`, `docs/nahled-moonika-detail.jpg`, `docs/nahled-moonika-mobile.jpg`.


Rozšíření Mooniky: krátký úvod z potvrzené nálady tvorby, prostor Mezi řádky pro skutečné citace, Očima čtenářů pro skutečné recenze a pátá fotografie (hrana knihy v popelu). Autor potvrdil, že anotaci/citace/recenze zatím nemá. Pole quotes a reviews v src/data/moonika.ts jsou proto prázdná a návštěvník vidí zprávu o budoucím doplnění, nikoli falešný výrok či recenzenta. Skutečná dějová anotace zůstává null. Zachovat centrovaný kontejner max. 1200 px.


### Aktuální kontaktní blok

Výběr 13 témat a skutečné kontakty tvoří jeden list s přelivem bílé do černé. Údaje jsou v `src/data/contact.ts` (lze přepsat PUBLIC_CONTACT_EMAIL / PUBLIC_CONTACT_PHONE). Výběr tématu upravuje předmět e-mailu. Zdroj `ContactSection.astro`, styl `contact-studio.css`; aktuální snímky `docs/nahled-kontakty.jpg` a `docs/nahled-paticka.jpg`.

Mobilní harmonika po otevření vyplní téměř celý viewport a sama se zarovná do záběru. Náhled `docs/nahled-harmonika-mobile.jpg`.


### Fotografie autora

Aktuálně dvě stejně velké černobílé fotografie s vlastními kreslenými SVG tahy. Zdroj AuthorPhotoStory.astro, originály zachované, AI retuše a úplná zadání v docs/AUTHOR-PHOTO-PAIR.md. Náhled docs/nahled-autor.jpg. Kontaktní přechod je nově scrollované inkoustové odhalení; původní vlna se nepoužívá.

Aktuální slogan: Prý jsem kreativní..., výška 620/440 px a střídání 950 ms, náhled docs/nahled-slogan.jpg. V nabídce Tvořím prezentace nahrazuje vedení týmu. Kontakt používá jednorázový široký tah štětce namísto inkoustového rozlévání či špendlíků.


## Aktuální humor, stálý kontaktní spoj a právě vznikající projekt

Nová /humor zachovává rozložení knižní harmoniky /temnota. Čtyři tituly dodal autor: Autokatastrofa, All Demente, Hospovídky, (S)Rande. DarkWorks přijímá data; kliknutí vybírá prezentaci přímo pod harmonikou. Barevné pastelkové tahy jsou vlastní SVG, reálně působící odřezky a bílá kniha jsou fotografické AI studie. Žádné domyšlené děje, termíny ani stavy knih. Pracovní copy a stejný prototyp knihy pro všechny čtyři tituly nejsou finální obálky. Podklady v docs/HUMOR-PHOTOS.md. Obě homepage harmoniky nyní otevírají také /humor, přechod s popelem zůstává pouze pro /temnota.

Na výslovné upřesnění autora kontakt už nemá jednorázovou vstupní animaci. Jeho horní hrana se pohybuje nepřetržitě ve výhledu, doplněná pohybující se šipkou k e-mailu a telefonu. Kontakty jsou stále viditelné. Pauza, uspání mimo výhled/neaktivní kartu a reduced motion zachované. Špendlíky ani předchozí odkrývání nevracet.

Autor chce v úvodu nenápadně upozornit na nejbližší tvorbu. Uprostřed hlavičky homepage je odkaz Právě vzniká: Moonika → /temnota#moonika, na mobilu vlastní druhý řádek. Moonika je pracovní výběr, nikoli potvrzené pořadí dokončení všech projektů. Jediné místo pro výměnu je src/data/current-project.ts. Bez dalšího rotátoru, odpočtu nebo nové sekce pod hero. Náhled docs/nahled-rozcestnik.jpg.

Aktuální snímky humoru: docs/nahled-humor.jpg a docs/nahled-humor-kniha.jpg.


## Nalepovací poznámky v humoru — pracovní návrh

Autor upřesnil štítky jako barevné lepící papírky na poznámky. /humor nyní obsahuje pět nepravidelně natočených lístečků se stínem, lehce odchlíplým rohem a rukopisným systémovým písmem. Tři v hero, další mezi hero/prezentací a před patičkou; na mobilu papírky před harmonikou v samostatném řádku, aby nezakrývaly knihy. Komponenta StickyNote.astro používá nativní button: kliknutí/Enter/mezerník přepne krátkou pointu a natočení. Reduced motion vypíná přechody, posluchače se uklízí při navigaci. Pět hlášek a jejich pokračování jsou pracovní autorské texty návrhu, nikoli citace z knih. Obsah jednotlivých knih nebyl upraven. Původní rozložení harmoniky a fotografické motivy zůstávají. Snímek docs/nahled-humor.jpg.


## Kreativec, automatické kontaktní otázky a ovládání pohybu

Nová /kreativec je samostatné osobní portfolio, záměrně bez knižní harmoniky a lepících papírků. Teplá bílá, černá a oranžová, velký sans serif; přepínání Kampaně / Texty / Grafika / Weby / Značky. Autor potvrdil tvorbu pro agentury a omezené možnosti veřejného zveřejnění. Je to výslovně uvedené; konkrétní práce a autorovu roli doplní později. Nevymýšlet klienty, ukázky ani výsledky. Běsoháj je vlastní projekt s odkazem https://www.besohaj.cz/ (ověřená funkční doména bez diakritiky). Zmínka o příbězích, folklóru a dřevu vychází z veřejného webu https://www.besohaj.cz/produkty/. Letokruhy jsou vlastní dekorativní SVG, nikoli logo nebo produktová fotografie. Použita již retušovaná původní momentka Marka, nové AI assety nevznikly.

Vzdělávání má oddíl o kreativním myšlení, ručně přepínané krátké cvičení a dvě jasně označené připravované oblasti: semináře/workshopy a edukativní videa. Bez vymyšlených termínů, rezervací nebo existujících videí. Zájem jde vyjádřit skutečným mailto odkazem, nikoli falešným newsletterem. Pracovní copy není finálně schválená. Obě homepage harmoniky nově otevírají /kreativec; původní /temnota a /humor zachované.

Kontaktní témata na homepage se automaticky střídají po 6,5 s. Pod aktivním názvem nabíhá barevná linka. Kliknutí vybere téma a restartuje čas; focus nebo hover nad tématy čtení podrží. Mimo výhled, v neaktivní kartě a při reduced motion je automatika pozastavená. Automatické změny nehlásit neustále přes aria-live; ruční výběr ano.

Autor výslovně nechce NIKDE viditelnou možnost stopnutí. Odstraněna tlačítka pauzy ze sloganu, kontaktní hrany, střídání témat i AshScene. Nevracet je podle starších pokynů. Automatické uspání/reduced motion zůstává. Tlačítko Rozvířit popel není pauza a zůstává.


## Kreativní rozcestník a tekutá barva v humoru

Marek výslovně opravil záměnu názvu: nový obsahový rozcestník patří na JSEM KREATIVEC, nikoli do humoru. Hero /kreativec zachované. Pod ním je 12 dlaždic s vlastními štětcovými ikonami: Blog, Školení, Reference, Edukace, Kreativní hry, Psaní, Grafika, Web design, AI tvorba, Ilustrace, Reklama, Brand a vizuální identita. Data src/data/creative-topics.ts; každý odkaz vede na připravenou /kreativec/[oblast], viditelně označenou jako připravovanou, do doplnění obsahu noindex a mimo sitemap. Není zde falešný článek, reference ani kurz. Předchozí přepínání pěti disciplín nahrazeno touto mřížkou. Agenturní spolupráce, Běsoháj a vzdělávací část níže zachované.

Nový přechod homepage → /humor zalije obrazovku žlutou a růžovou barvou se zaoblenými stékajícími okraji a odteče dolů, až je pod krytem načtená kategorie. PaintTransition.astro přetrvává přes ClientRouter; aktivní na obou CTA humoru přes data-paint-entry, modifikované kliknutí se nechává nativní. Reduced motion přeskočí přechod, Escape jej před navigací zruší. Žádná pauza. Popel a jeho přechod se nemění.

V hero /humor navazuje velká barevná plocha a Canvas pro malování pohybem myši. Tři přístupná tlačítka mění barvu a rozlijí ji také bez myši, včetně dotyku/klávesnice. Canvas pouze na interakci, bez trvalé smyčky, poměr pixelů max. 1,5, cleanup při navigaci, reduced motion vypíná stopu ukazatele. Původní odřezky jsou zmenšené na doplňkový motiv; papírky i knižní harmonika zachované. Nejde o fyzikální simulaci tekutiny, ale lehkou SVG/Canvas stylizaci. Náhled docs/nahled-humor.jpg.


## Stékající CMYK vrstvy — aktuální humor

Podle nové reference používá humor vlastní vektorové stékající vrstvy: černá, azurová, růžová a žlutá s dlouhými oblými kapkami. Referenční stock obrázek nebyl kopírován ani použit jako asset. Sdílená geometrie src/lib/paint.ts a PaintDrips.astro propojují horní hranu hero, části knižní prezentace a patičku. Kapky se jemně protahují pouze ve výhledu, reduced motion je statický. Papírky, paleta a interaktivní stopa myši zůstávají.

PaintTransition už neposouvá hotovou clonu. Po CTA humoru mění tvar tří vrstev v krátkém rAF cyklu: barva roste z horní hrany dolů, po úplném zakrytí proběhne navigate a následně 550 ms prolnutí do kategorie. Horní část je neprůhledně vyplněná, základna přesahuje spodní hranu viewportu. Escape, modifikované kliknutí a reduced motion zachované; pauzu nepřidávat. Aktuální snímky docs/nahled-humor.jpg a docs/nahled-humor-kniha.jpg.


## Bez oranžové; přechod humoru přímo z dlaždice

Marek výslovně nechce oranžovou nikde v designu. Oranžové UI akcenty byly nahrazeny fialovou, růžovou a magentou: /kreativec včetně vzdělávací plochy a všech 12 podsekcí, homepage slogan, kontaktní otázky a humor. Fotografie a autorské originály nebyly přebarvované. Nový hlavní creative-accent #7433c7.

Předchozí opakované CMYK kapající pásy byly nepochopením reference a odstraněny z /humor. PaintDrips a geometrie zůstávají pouze archivně. Papírky, knihy a interaktivní malování zachované. Autor chce především ANIMOVANÝ VSTUP při kliknutí na úvodní dlaždici humoru, nikoli převzatý vzhled referenčního obrázku.

PaintTransition nyní používá dvě vlastní organické plochy s fialovým a magentovým přechodem. Přeliv roste od horní hrany, po úplném zakrytí naviguje a odhalí kategorii. data-paint-entry nově přímo na celé humorové dlaždici v obou homepage harmonikách, takže funguje i fotografie a název. Desktop hover může dál rozšířit panel; kliknutí naviguje. Mobilní kliknutí před přechodem nespouští rozšíření a automatické posouvání. Reduced motion naviguje přímo i z tlačítka názvu. Escape před navigací zruší přechod, žádná viditelná pauza. Snímky nahled-prechod-barva.jpg, nahled-humor.jpg a nahled-kreativec.jpg aktualizované.


## Sjednocené prokliky a samovolná barva

Celé dlaždice Umím děsit i Mám rád humor mají vlastní data-entry a cílovou URL v obou instancích rozcestníku. Fotografii, název, volnou plochu i CTA zachytává odpovídající přechod na document v capture fázi, aby Astro nepředběhlo animaci nativního odkazu. U popela se zdroj bere z nejbližší konkrétní dlaždice; při studeném obrázku se před přípravou čeká na decode, fallback zachovává navigaci. Reduced motion přejde rovnou. Mobil před přechodem nerozšiřuje ani neposouvá tyto dvě dlaždice; na desktopu fokus dál zpřístupňuje CTA. Ostatní světy bez nových přechodů.

Marek nově odmítl kreslení při pohybu myši. HumorPaint.astro už neobsahuje Canvas, sledování pointermove ani paletu tlačítek. Nahrazuje je vlastní SVG s jemnou fialovou/růžovou barvou stékající od horní části hero přes plochu knižních dlaždic, pod texty a papírky. Dvě nestejnoměrné vrstvy se v 7,5–9s cyklech mírně protahují. Bez opakovaných CMYK pruhů, bez ovládání stop. Mimo výhled/neaktivní kartu se pohyb uspí a reduced motion je statický. Texty knih zůstávají pracovní a nezměněné.


## Bílé listy kreativity a aktuální humor

/kreativec navazuje na homepage: jemně šedý rámec, bílé dlaždice a obsahové listy, spára 6 px / 5 px mobil, okraje 20 / 12 px. Původní obrácené béžové dlaždice a velké barevné plochy odstraněné. Dvanáct témat rozcestníku nyní vede na odpovídající sekce přímo pod ním; jednotlivé podstránky jsou dál přístupné odkazem Prozkoumat téma. CreativeFeed.astro připravuje přehled všech témat, nativní rozbalení, odkaz na skutečný Běsoháj, zájem o školení a kreativní cvičení. Článek, datum kurzu a agenturní ukázky nebyly dodané, proto nejsou vymyšlené. Copy je pracovní.

Nadpis nabídky na homepage (Tohle všechno dělám, uživatelem označený Co umím) a Co spolu vymyslíme? jsou vycentrované. Kontakt má vlastní specifičtější styly, aby je starý home-content.css nepřepisoval.

Humor: velká světlá barva, samostatná fotografie kupičky a kreslené čáry z pozadí odstraněné. Z linek decentně vytékají malé animované kapky; na nový výslovný pokyn navíc dva delší tenké proudy z horní hrany hero přes knižní dlaždice. Samostatné fotografické odřezky lze přetáhnout nebo posouvat šipkami, Home resetuje. Čtyři viditelné kusy. AI asset a přesný prompt v docs/LOOSE-SHAVINGS.md; originální autorské kresby neměněné. Pohyb barvy mimo výhled uspává, reduced motion statický.


## Různorodá skladba kreativity

Předchozí stejně vysázené řádky CreativeFeed byly odmítnuté. Aktuálně blog tvoří velká černobílá momentka + text, školení tři bílé bloky (popis / připravovaný termín / portrét), reference vlastní web s náhledem a Běsoháj. Další témata jsou kompaktní trojice, ilustrace velká Markova originální kresba s přepnutím dvou motivů, kreativní hra mění slovo ve větě vedle AI fotografické studie baňky. Bílá, šedé spáry a fialové drobné akcenty zachované. Všechny kotvy 12 témat zůstávají. Žádný článek, termín ani agenturní práce nebyly vymyšlené; pracovní texty čekají na obsah. Nové bitmapy negenerované, použity existující podklady.


## Otevřená dílna a knižní podklady z Freela

/kreativec je nově prostorem pro práci a psaní o kreativitě, nikoli katalogem služeb. Předchozí CreativeFeed i jeho mozaika byly odmítnuté a zůstávají archivně. Nová stránka a creative-studio.css: Kreativita. V procesu. → ručně měněná aktuální otázka → Otevřený zápisník s viditelně pracovním textem → Zkus to jinak (dvojice pojmů, soukromé neodesílané textové pole, nápověda) → Nápad pod lupou (originální kresba Celek/Detail) → Běsoháj a agenturní zmínka → připravovaná setkání/videa → kontakt. Navigace Zápisník / Vyzkoušet / Z tvorby / Setkání. Bílá, šedé spáry a střídmá fialová, žádné nové obrázky ani malé dekorativní rohové texty. Poznámka není vydaná autorova publikace; copy je návrh.

Podklady knih načteny pouze z konkrétního projektu Freelo 555974 / Knihy. Doplněny pracovní webové anotace všech pěti temných a čtyř humorových položek. Autor výslovně potvrdil: Autokatastrofa = Freelo Myslím, že ještě žiju; Sraz zítra = Probuzení; (S)Rande je divadelní hra o absurdním rande a ve Freelu zatím není. All Demente obsahuje dva náměty P(i)lot a Provázka. Mistrovství smíchu je dystopie; Armelie děsivé příběhy holčičky ve verších; Moonika vypráví o dívce s nadpřirozenými schopnostmi přímo ke čtenáři. Hospovídky mají pohádkovou formu a plánovaného ilustrátora Vojtěcha Dolanu. Zachována autorova dříve dodaná data vydání/procenta. Konce příběhů, interní betačtenářské poznámky a hodnocení nejsou zveřejněné. Ukázkové citace/recenze Mooniky zůstávají jasně demonstrační; pravé nebyly dodané. Zdroje viz docs/BOOK-SOURCES.md. Freelo nebylo upravováno.


## Aktuálně: kruh v hero a magazín o kreativitě

Autor znovu zadal přepracovat kreativitu, nejprve hero: otázka Co se vám vybaví, když vidíte kruh? CircleHero.astro používá velkou typografii, čistou bílou, kruh a pole pro asociaci. Následně požádal o automatické dokreslení podle textu. Prototyp rozpoznává 14 motivů/synonym (oko, planeta, slunce, hodiny, pizza, míč, obličej, donut, květina, terč, kolo, talíř, měsíc, prsten), po 450 ms klidu dokreslí SVG tahy. Enter kreslí okamžitě, pole zůstává upravitelné. Neznámý námět je výslovně přiznaný, není nahrazen nesouvisejícím obrázkem. Vymazání vrací kruh; vše pouze v prohlížeči, žádná AI služba, přenos ani ukládání. Libovolný námět by vyžadoval budoucí AI integraci. Reduced motion vypíná tahy/transformace, cleanup ruší časovač i posluchače.

Další pokyn mění obsah pod hero na BLOG/MAGAZÍN O KREATIVITĚ. CreativityMagazine.astro a src/data/creative-articles.ts: hlavní doporučený pracovní článek a tři další, filtry Přemýšlení / Tvůrčí cvičení / Obraz a slovo, krátké perexy a skutečné odkazy na celé čtení /kreativec/zapisnik/[slug].astro. Čtyři originální texty jsou viditelně PRACOVNÍ NÁVRHY, nikoli dříve vydané Markovy články. Bez vymyšlených dat publikace nebo výsledků. Detail má noindex a do sitemap se nepřidává. Fotografie Marka a originální kresba jsou existující assety; další náhledy vlastní typografie. Cvičení, Z tvorby, plánovaná setkání i kontakt níže zachované. Bílý rámec a střídmé fialové akcenty. Nový snímek docs/nahled-magazin.jpg; hero docs/nahled-kruh-kresleni.jpg.


## Sedm barevných rubrik magazínu

Autor chce budovat široký magazín o kreativitě a výslovně dovolil pestré oddělení sekcí pro přehlednost. Nová data creative-categories.ts: Obecně o kreativitě / O kreativitě odborně / O kreativitě úplně svobodně / Kreativní cvičení / Moje kreativní okénko / Recenze knih / Spolupráce. Každá rubrika má vlastní světlou barvu, tmavý čitelný nadpis, úvod a obsah; barva není jediným rozlišením. Paleta fialová, zelená, růžová, žlutá, levandulová, modrá, mauve; bez oranžové. Filtr nabízí všech sedm + Všechno, funguje i pro dosud prázdné rubriky. Čtyři pracovní články jsou přiřazeny do čtyř odpovídajících rubrik. Odborná část i knižní recenze jsou přiznaně připravované; žádné vymyšlené zdroje nebo hodnocení. Spolupráce má skutečné mailto a agenturní zmínku. Hero kruh zachované. Autorova ambice stát se předním hlasem kreativity v ČR je budoucí směr, ne dosažená reputace ani odborná kvalifikace. Další navržené budoucí směry: rozhovory s tvůrci a nástroje/inspirace. Bez nových falešných článků.


## Aktuální struktura magazínu: úvod a samostatné rubriky

Sedm barevných pásů na jedné stránce bylo výslovně odmítnutých. /kreativec nyní začíná čistým rozcestníkem sedmi rubrik (bez velkých barevných ploch). Sdílené MagazineHeader.astro má Úvod, nativní rozbalovací Rubriky a O magazínu; rubriky vedou na /kreativec/magazin/[rubrika].astro. Pod rozcestníkem: představení smyslu magazínu → obecné pojetí kreativity → osobní cesta Marka s momentkou → kontakt. Vlastní creative-editorial.css, minimální fialový akcent, žádné malé dekorativní rohové štítky.

Každá rubrika má vlastní nadpis, hlavní aktuální článek jako hero (obrázek/typografie + perex) a pod ním blogový přehled dalších článků. První položka dat je zatím ručně vybraná hlavní pracovní verze; data vydání se nevymýšlejí. Pro čtyři naplněné rubriky jsou nyní dva původní pracovní návrhy textů na rubriku, celkem osm. Odborná rubrika, recenze a spolupráce mají přípravu/pravdivé CTA bez fingovaných příspěvků. Detaily článků mají návrat do správné rubriky a funkční další čtení. Nové rubriky i drafty zůstávají noindex a mimo sitemap. CircleHero zůstává na /kreativec/experiment/kruh a je přístupný z Kreativních cvičení i z článků; z úvodu byl přesunut v souladu s novým rozcestníkem. Předchozí stránka archivně docs/archive/kreativec-dilna-v1.astro.txt.

Autor dodal osobní příběh: vnímá se jako kreativní od narození, oba rodiče jsou tvořiví; vědomě začal kreativitu využívat na vysoké škole; viděl, že nápadité zpracování pomůže vyniknout vedle silné konkurence; jako grafik pracoval s kreativitou denně a hledal, jak ji probudit; nyní chce své drobné objevy předávat dál. Z toho vznikl osobní text v úvodu, bez vymyšleného oboru, data, zaměstnavatelů nebo úspěchů. Formulace je pracovní redakční adaptace autorových slov.


## Fotografické dlaždice rubrik — aktuální revize

Autor chce rozcestník /kreativec ve stejném fotografickém jazyce jako homepage, každé téma odlišené barvou pozadí. Nahrazen textový seznam: sedm vysokých klikacích dlaždic, čtyři v prvním řádku a tři ve druhém; tablet dvě, mobil jedna. Spáry 6/5 px a okraje 20/12 px, velká vzdušná fotografie, název dole, jemné přiblížení při hover/focus (reduced motion bez pohybu). Úvodní velký typografický titulek odstraněný, přístupné h1 zachované. Vlastní fotografie témat Marek teprve vytvoří: zatím se výslovně používají opakované existující AI studie kupiček jako pracovní zástupné snímky, nikoli nové autorovy fotografie. Mapování topicPhotos v kreativec.astro lze vyměnit; fotografie jsou dekorativní, název tématu tvoří přístupný název odkazu. Barevná paleta sedmi rubrik bez oranžové navazuje i do hlavičky a hlavního článku/přípravy dané rubriky. Zachováno navazující představení, obecná kreativita, skutečný osobní příběh a kontakt. Články a termíny se nemění.


## Magazín, čtení a workshopy


Pod rozcestníkem je rozšířené představení MagazineIntroduction.astro: úvod, tři sloupce s BrushIcon (číst / zkoušet / sdílet), osobní pojetí kreativity a dlaždice s odkazem na cvičení s kruhem. Osobní příběh je na nový požadavek kompaktní medailonek: fotografie 420 px, menší nadpis, širší text; mobil fotografie 280 px. Osobní fakta zůstávají.

Rubriky používají MagazineArticleTile.astro: hlavní velká fotografická dlaždice a menší článkové dlaždice s názvem, perexem a označením draftu. Zástupné kupičky jsou centrálně v creative-photos.ts. První pracovní návrh je hlavní, nevymýšlet chronologii či data. Detaily mají postranní navigaci (obsah, rubriky, další ze stejné rubriky, předchozí/další); mobil nativní rozbalení. Sekce článků mají layout v creative-articles.ts: text, columns, columns-3, highlight a icon. První článek ukazuje tři bloky a barevný proužek s ikonou. Jsou to pracovní ukázky sazby.

Na výslovný pokyn načten chat codex://threads/01a1993e-8345-7cd3-a0c3-5ed5492f9ed6 (Navrhnout kurz kreativity). Čtyři samostatná živá školení: Odblokuj svou kreativitu / Nauč se vidět jinak / Nápady na povel / Proměň nápad ve skutečnost. WorkshopOffer.astro na #workshopy má čtyři barevné ikonové dlaždice. Detail /kreativec/workshopy/[slug] obsahuje pro koho/cíl, plánovanou podobu (3 h včetně přestávky, 6–12 dospělých), rozbalovací program, ukázku cvičení, výstupy a mailto zájem o konkrétní téma. Program prvního je adaptace podrobného návrhu; programy 2–4 jsou výslovně označená pracovní rozpracování stejné struktury. Všechny mají plán 180 minut, nikoli vypsaný kurz. Termíny, místo, cena ani rezervace nebyly dodané. Zájem pouze e-mailem, bez ukládání nebo falešného formuláře. Detaily noindex a mimo sitemap. Sdílené menu obsahuje Workshopy. Data a původ: src/data/creative-workshops.ts.

Aktuální doplňující náhledy: docs/nahled-medailonek.jpg (kompaktní osobní blok), docs/nahled-workshopy.jpg (čtyři témata), docs/nahled-clanek-navigace.jpg (sazba a postranní navigace), docs/nahled-magazin-rubrika.jpg (fotografické článkové dlaždice).


## Výraznější rozlišení barev rubrik

Původní pastelové rubriky splývaly. Nová paleta v creative-categories.ts: fialová #c3a3f5, zelená #9dd9c0, růžová #f1a0ca, žlutá #f2df75, tyrkysová #92d9e5, modrá #9eafe9 a limetková #d2e88b. Vyšší sytost a rozdílné odstíny; žádná oranžová. Název tématu je stále hlavní orientační informace. Sdílená data automaticky přebírají rubriky i proužky článků. Jde o úpravu rubrik kreativity, nikoli homepage nebo workshopové palety.


## Medailonek na širokém monitoru — tři dlaždice

Kompaktní řádek s velkou mezerou byl odmítnut. Aktuálně fotografie / barevná dlaždice s větou vytaženou z pracovního popisu / osobní text. Citace „Někdy přišla snadno. Jindy jsem hledal, jak ji probudit.“ je pull quote z aktuálního redakčního textu, ne recenze nebo výrok třetí osoby. Shodné spáry s rozcestníkem; fotka nemá omezenou šířku 440 px, vyplňuje svůj list. Tablet dvě dlaždice a příběh přes celou šířku, mobil jedna pod druhou. Barva citace odvozená z Obecně o kreativitě. Osobní fakta nezměněná.


Rubriky mají výrazný bílý návratový odkaz s levou šipkou „Zpět na přehled magazínu“ přímo na /kreativec#zapisnik. Barevné přebarvení provizorních fotografií je známý důsledek mix-blend-mode:multiply; autor jej odmítá pro finální fotografie. Budoucí podklady připravit jako oddělený motiv se stínem a odstranit multiply, aby barva zůstala pouze na podkladu. Současné zástupné obrázky zatím neměněné.


Na další požadavek mají všechny navazující bloky /kreativec společnou obsahovou hranu: odsazení 6 % desktop a 7 % mobil uvnitř hlavního rámce. Medailonek i blok obecné kreativity mají nově stejný vnitřní okraj jako úvod, workshopy a kontakt. Pouze hero rozcestník zůstává bez tohoto odsazení.


## Potkejme se nahrazuje čtvrtý svět

Autor výslovně zadal připravit Potkejme se místo Rád experimentuji. Obě homepage harmoniky mají nový název, CTA a cestu /potkejme-se. Technické id experimenty zůstává kvůli existujícím stylům a archivním komponentám. Baňka je zachovaná v assetech; experiment s kruhem zůstává v kreativních cvičeních. Fotografie dvou šálků byla před zařazením odmítnutá. Nová AI studie kupičky kávových zrnek vychází přímo z popela: stejný vertikální formát, poloha, záběr a velikost. Asset src/assets/piles/kava-v1.png, původ a prompt v PILE-PHOTOS.md.

/potkejme-se obsahuje hero s kávou, kartu nejbližší akce, nabídku čtyř připravovaných workshopů, tři témata konzultací, knihy a skutečný kontakt. Žádný termín, cena ani dostupné vydání nejsou domyšlené; Moonika plánované vydání 2027 pochází od autora. Objednávky knih ještě nejsou spuštěné; CTA je zájem e-mailem a prohlížení knih. Zájem o konzultaci je mailto s konkrétním tématem, bez falešného rezervačního systému.

Autor chce odpočet s datem/místem/volnými místy, ale potvrdil, že první akce ještě není určená. meetingConfig.event v src/data/next-meeting.ts je null. NextMeeting.astro proto zobrazuje Termín připravuji a pomlčky bez fiktivního odpočtu či kapacity. Po dodání skutečné akce se aktivuje časovač, datum v Europe/Prague, místo, volná místa a registrace. Počty míst jsou ručně aktualizované, ne automatické rezervace. Časovač se uspává při skrytí karty a uklízí při navigaci. Nula míst znamená naplněnou kapacitu; po začátku se skryje registrace a ukáže odpovídající časový stav.


# Papírová série a přechod do kreativity

Aktuální pokyn autora: sedm rubrik kreativity používá jednotné fotografie papíru. Vzniklo sedm samostatných AI studií se stejným výchozím snímkem, světlem a kompozicí: zmačkaný papír / schéma na papíru / magenta-fialové čmárání / vlaštovka / prostřižené okénko / otevřená papírová knížka / roztržené části spojené fialovou sponkou. Původ a přesné prompty v PAPER-PHOTOS.md; soubory src/assets/creative-paper a mapování creative-photos.ts.

Všechny mají skutečnou alfu a již se nezobrazují přes multiply: papír zůstává bílý. Na následný požadavek zmenšené na width:min(65%,300px) v rozcestníku i článkových dlaždicích. Větší volný prostor navazuje na kupičky hlavní stránky.

PaperTransition.astro přidává vstup přes celou dlaždici Jsem kreativec v obou homepage harmonikách: fotografie, název i CTA. Od kliknutí se rozšiřuje černá díra s potrhaným světlým okrajem a vlákny. Po plném zakrytí naviguje na /kreativec a 600 ms odhaluje obsah. Původní stránka zůstává pod trhlinou do zakrytí. Lehká SVG/rAF geometrie, nikoli fotografie či fyzikální simulace. Zachovat ClientRouter/persist, modifikované kliknutí, Escape před navigací a přímý vstup při reduced motion. Bez pauzy, beze změn popela a humoru.

Náhled nové čtvrté stránky: docs/nahled-potkejme-se.jpg. Papírová série a přesné prompty: docs/PAPER-PHOTOS.md.

## Správa článků (lokálně)

Při běžícím `npm run dev` otevřete [administraci](http://127.0.0.1:4321/administrace), případně [editor Keystatic](http://127.0.0.1:4321/keystatic). Správa běží pouze na počítači s projektem; nevystavujte vývojový server veřejně. Nevyžaduje účet ani databázi.

1. Zvolte **Napsat nový článek**. Vyplňte název, adresu, rubriku a úvod.
2. Přidejte fotografii, její popis pro čtečky a obsahové bloky. U bloků lze vybrat text, dva/tři sloupce, barevný proužek nebo ikonu. Bloky a odstavce lze přesouvat.
3. **Create / Save** uloží změny do projektu. **Preview** otevře vzhled uložené verze; neuložené změny v náhledu nejsou.
4. Stav **Koncept** není v magazínu. **Publikováno** zařadí článek do rubriky a veřejného sestavení. Datum slouží k řazení, není to plánovač. Skutečné zveřejnění na internetu vyžaduje nasazení webu, zatím není připojené.
5. Původních osm pracovních textů má stav **Ukázkový návrh**, zůstávají viditelné pouze lokálně. Nejde o schválené články autora.

Data: `src/content/articles/*.json`; fotografie: `public/media/articles/`; schéma: `keystatic.config.ts`. Zálohujte celý projekt včetně fotografií. Administrace, API, náhledy, koncepty i demo texty se do veřejného buildu negenerují; build odstraní z dist také fotografie, na které neodkazuje publikovaný článek. Před nasazením zapojíme přihlášení a vzdálené ukládání. Správa knih, akcí nebo rezervací bude další krok.

Snímky: `docs/nahled-administrace.jpg`, `docs/nahled-ikony-hover.jpg`. Ikony na homepage mají krátké tematické animace při hoveru/focusu, při omezení pohybu zůstává pouze zvýraznění karty.

## Obnovení náhledu po restartu počítače

Node.js pro tento počítač je nově v ignorované složce `.runtime/node`, nikoli v dočasném `/tmp`. V kořeni projektu lze dvojklikem spustit `Spustit náhled.command`; Astro 7 spustí server na pozadí a vypíše jeho adresu. Pokud už port 4321 obsluhuje jiný proces, skript další server nespustí. Lokální náhled po vypnutí počítače neběží automaticky — nejde o veřejný hosting.

Aktuální kreativita (5. 11. 2026): bílé rubriky se zachovanou papírovou sérií a zjemněnou typografií. Obsah doplňují AI fotografická zátiší banán se zátkami a lahev s vlaštovkou; původ, cesty a přesné prompty v `docs/CREATIVE-STILL-LIFE.md`. Aktuální snímky `docs/nahled-kreativec.jpg` a `docs/nahled-kreativec-zatisi.jpg`.

Kreativita má osm rovnocenných rubrik (včetně Nástroje a inspirace), větší fotografie a animované štětcové ikony v navazujícím obsahu. Experiment s kruhem zatím nemá veřejné vstupní odkazy. Společný kontakt všech veřejných stránek je `SiteFooter.astro`, vložený v `BaseLayout.astro`; na homepage vynechává Moje světy. Mailto předmět stále přebírá z kontaktních témat. Aktuální snímky: `docs/nahled-kreativec.jpg`, `docs/nahled-kreativec-zatisi.jpg`, `docs/nahled-paticka.jpg`.

Revize (6. 11. 2026): pod rozcestníkem je banán přes celou šířku bílého listu s větou „I divný věci můžou být dobrým nápadem.“. Následuje „Co je vlastně ta kreativita?“ a šest dlaždic s pracovními krátkými odpověďmi; původní úvod a tři pilíře odstraněné. Workshopy jsou nově přehledem čtyř odkazových řádků. Velká lahev pod workshopy odstraněná, její horní dlaždice na výslovné přání zatím zůstává. Zdroj `MagazineIntroduction.astro` / `WorkshopOffer.astro`. Náhledy: `docs/nahled-kreativec-zatisi.jpg`, `docs/nahled-kreativec-odpovedi.jpg`, `docs/nahled-kreativec-mobile.jpg`, `docs/nahled-workshopy.jpg`. Revize bfa0830 je nahraná na GitHub a úspěšně nasazená.

Autor následně potvrdil zachování VELKÝCH dlaždic; zkoušíme oživit jejich motivy. `CreativeDirectory.astro` zachovává fotografie i mřížku a přidává jednotlivá krátká gesta při vstupu do výhledu, hoveru a focusu. Žádná trvalá smyčka; mimo výhled/neaktivní kartu pohyb končí, reduced motion je statický. Návrat přes Astro navigaci znovu správně inicializuje sekci. Aktuální náhledy: `docs/nahled-kreativec.jpg` a `docs/nahled-kreativec-dlazdice-mobile.jpg`.

Nejnovější revize (6. 11. 2026): na požadavek autora jsou dlaždice kompaktnější, vysoké 320–440 px na desktopu / 360 px na tabletu / 300 px na mobilu, s menšími motivy. Všech osm obrázků nyní drží tvar téže zmačkané papírové koule, jednou čisté, jindy počmárané, natržené, s okénkem, potiskem, sponkou nebo páskami. Nových šest fotografických AI studií a přesná zadání: `docs/PAPER-PHOTOS-V2.md`; soubory `src/assets/creative-paper/*-v2.png`. Mapování `creative-photos.ts` používají i rubriky. Letadlo, knížka a lahev zůstávají pouze archivně. Aktuální snímky výše zachycují menší podobu.

Upřesnění (7. 11. 2026): motivy mají stejné optické měřítko, ale každý NOVĚ jiný tvar a zmačkání. Výraznější schémata, trhliny, potisk, sponky a pásky se dají rozlišit i v malé dlaždici. Čistá koule V1 zůstává, sedm nových AI fotografických studií je v `src/assets/creative-paper/*-v3.png`; původ a přesná zadání `docs/PAPER-PHOTOS-V3.md`. Drobné CSS korekce srovnávají velikost jednotlivých siluet bez deformace. Výšky dlaždic i pohyb zachované. Ověřeno na desktopu a mobilu, aktualizované `docs/nahled-kreativec.jpg` a `docs/nahled-kreativec-dlazdice-mobile.jpg`.
