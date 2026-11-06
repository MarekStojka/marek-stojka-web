# Ověření V1 — 31. 10. 2026

- `npm run build`: Astro kontrola bez chyb, varování a hintů; statický produkční build úspěšný.
- `npm audit` po aktualizaci: 0 nalezených zranitelností.
- Prohlížeč: vyzkoušeno desktopové rozložení při šířce 1440 px a mobilní při 390 px. Bez vodorovného přetékání stránky.
- Harmonika: panel otevřen kliknutím, přesun klávesovou šipkou, tabulátor přešel na CTA otevřeného panelu. Skryté odkazy nejsou v pořadí tabulátoru.
- Mobil: otevření panelu Nápady a jeho CTA přesunulo na skutečnou kotvu `#koncept`.
- Digitální experiment: po kliknutí se změnil výsledek a pořadí z 01/06 na 02/06. Opraveno české skloňování podle podmětu.
- Interní odkazy homepage: všechny kotvy existují.
- Konzole prohlížeče: při testovaném průchodu bez chyb a varování.
- Neexistující URL: server vrátil HTTP 404 a vlastní stránku.
- Samostatný build s testovací doménou a testovacím kontaktem: ověřeny canonical, absolutní OG PNG URL, mailto, robots.txt a platný XML sitemap. Testovací hodnoty nejsou uložené v projektu ani ve finálním `dist`.
- `prefers-reduced-motion`: pravidlo vypíná přechody, animace a plynulé posouvání. Ověřeno ve zdroji, nikoliv přepnutím nastavení skutečného zařízení.

Jde o funkční a vizuální ověření v desktopovém prohlížeči včetně simulované mobilní šířky. Nebyl proveden audit skutečnou čtečkou obrazovky, test na fyzickém telefonu ani měření reálných Core Web Vitals. Cloudflare nasazení nebylo provedeno.

## Temná varianta podle nové reference

Původní barevnou kompozici nahradil temný typografický úvod s částicemi popela. U nové varianty byly ověřeny: desktop 1440 px, mobilní šířka 390 px, žádné vodorovné přetékání, žádné neexistující kotvy, tlačítko rozvíření, změna stavu pauzy, otevření Mooniky z úvodního CTA a rozbalení digitálního experimentu s funkční změnou otázky. Prohlížeč při tomto průchodu nehlásil chyby ani varování. `prefers-reduced-motion` navíc řídí samotný Canvas a ne jen CSS; jeho fyzické přepnutí nebylo v prohlížeči simulováno. Mobil byl testován změnou viewportu, nikoliv na fyzickém telefonu. Nový vizuál má také vlastní favicon a OG obrázek. Aktuální snímky jsou `nahled-desktop.jpg` a `nahled-mobile.jpg`.

## Oddělení rozcestníku a Temnoty

- Homepage začíná harmonikovým rozcestníkem. Temnota má vlastní statickou cestu `/temnota` a další obsah Mooniky pod `/temnota#moonika`.
- Ověřen desktopový i mobilní průchod: rozbalení panelu → samostatné CTA → Temnota → odkaz Všechny světy → homepage.
- Tlačítko panelu zůstává při expanzi na bezpečné pozici; animace nepodsouvá CTA pod původní kliknutí. V mobilní šířce panel přetrvá i po ztrátě focusu.
- Ověřena šířka 390 px bez vodorovného přetékání Temnoty. Fyzické dotykové zařízení nebylo testováno.
- Pracovní přehled `/navrhy/prehled` zobrazuje skutečné snímky dvou stránek, jejich stav a odkazy na živé náhledy. Ověřeno zmenšení pláten klávesovou šipkou ze 100 % na 95 %.
- Produkční `dist` neobsahuje cestu `navrhy`. Homepage neobsahuje ostrov AshScene, Temnota jej obsahuje.
- U obou veřejných stránek zkontrolovány jedinečné identifikátory a všechny vnitřní kotvy. Sitemap uvádí obě veřejné stránky. Obsah je nadále pracovní.

## Hero tvořené pouze čtyřmi dlaždicemi

- Neutrální rámec homepage; rozpracovaná Temnota, její AshScene a její OG PNG zůstaly bitově shodné podle SHA-256. Další samostatné světy nevznikly.
- Desktop 1440 × 1000: harmonika má výšku 874 px; autorský titulek začíná na pozici 1206 px, tedy až pod hero. Žádné vodorovné přetékání.
- Mobilní kontrola při šířkách 390 a 320 px. Na nejmenší výšce má harmonika minimální výšku 620 px, aby se obsah a ovládání vešly; celá stránka se může přirozeně posouvat. Při rozbalení byla změřena výška aktivního panelu 317 px a ostatních 96 px.
- Ověřen tabulátor na samostatné CTA, šipky, Home, Escape a průchod do Temnoty i zpět. Skrytá náhledová typografie nezasahuje do aktivního textu.
- Při kontrole nalezen a opraven rozdíl v posledních desetinných místech SVG souřadnic mezi serverem a prohlížečem. Po opravě a novém načtení nebyly zaznamenány nové chyby nebo varování v konzoli.
- Přehled používá aktuální desktopový snímek `nahled-rozcestnik.jpg`. Mobilní snímek je `nahled-rozcestnik-mobile.jpg`.

## Velký portrét a čtyři tváře autora

- Nový obsah pod harmonikou: velká modelová portrétní fotografie, čtyři volby s popisem jednotlivých autorských poloh, souvislé představení, místo pro skutečnou praxi a jednoduchý kontakt.
- Modelový portrét je výslovně označen jako dočasný; všechny čtyři zdroje jsou podle zadání zatím stejné. Uživatel potvrdil, že praxi a e-mail dodá později.
- Ověřeny všechny čtyři volby kliknutím a klávesami ArrowRight/End. Současně je aktivní vždy jen jedna portrétní vrstva a jeden popisný panel.
- Ověřena návaznost Nápady v harmonice → CTA → `#koncept` → správný popis a portrétní pozice Nápady. Předání volby funguje i při pozdější hydrataci portrétní části.
- Desktop 1440 × 1000 a mobilní šířka 390 px: bez vodorovného přetékání, čitelné popisy a dostupné volby. Mobil byl testován změnou viewportu, nikoli na fyzickém telefonu.
- Prohlížeč po novém načtení a průchodu interakcemi nehlásil nové chyby ani varování. Kontrola kotev nenašla chybějící cíle. Navigace Zkušenosti vede ke skutečně prázdné, označené části a kontakt nemá vymyšlenou adresu.
- Astro vytvořilo tři lokální WebP varianty portrétu (480/800/1024 px); při prvním buildu měly přibližně 11/29/45 kB oproti 2 MB originálu.
- Aktuální portrétní náhled pro pracovní plátna je `docs/nahled-autor.jpg`. Postup výměny fotografií a přesné zadání generátoru jsou v `docs/PORTRAIT.md`.

## Interaktivní výřez portrétu

- Portrét má skutečný alfa kanál; nové lokální WebP varianty 480/800/1024 px mají přibližně 26/61/91 kB. Originál zůstal uložený.
- Na desktopu 1440 × 1000 ověřeny volby, ArrowRight a vodorovné tažení portrétu z Experimentů na Temnotu. Při mobilní šířce 390 px ověřeno přepnutí Absurdita → Nápady tažením, kliknutí na Experimenty a čitelnost názvů přes tmavé tričko. Nešlo o fyzický telefon.
- V obou šířkách není vodorovné přetékání a zobrazuje se jeden aktivní popis. Omezený pohyb kontrolován v kódu; nebyl přepnut systémový režim.
- SHA-256 potvrzuje nezměněné `temnota.astro`, `AshScene.tsx` a `WorldArt.tsx`. Produkční build projde bez chyb a varování.
- Aktualizován `nahled-autor.jpg` pro pracovní plátna; doplněn `nahled-autor-mobile.jpg`.

## Osobní názvy a pracovní značka kreativno

- Čtyři nové formulace jsou shodné v harmonice i u portrétu. Drobná pořadová čísla voleb i nadpisu popisu odstraněna.
- Ověřeny šířky 1440 a 390 px; delší názvy se vejdou nebo čitelně zalomí. Mobilní výběr „Rád experimentuji“ zobrazí správný popis, bez vodorovného přetékání.
- „kreativno“ je pracovní značka v hlavičkách, titulcích, metadatech a sdílecích náhledech. Finální název bude autor teprve vybírat.
- Produkční sestavení: 0 chyb, 0 varování. Scéna s popelem zůstává, změnily se jen její značkové texty.

## Moderní minimalistická nabídka a jméno autora

- Autor je Marek Stojka. Šest konkrétních nabídek je od uživatele. Pracovní značka zůstává kreativno.
- Odmítnutý návrh papírového sešitu byl odstraněn. Nabídka je nyní statická Astro komponenta s nativními detaily; nevyžaduje další React ostrov.
- Ověřeno rozbalení reklamy a přepnutí na slogan: otevřený zůstává pouze jeden detail. Desktop 1440 px i mobilní šířka 390 px kontrolovány bez vodorovného přetékání.
- Odkaz Zkušenosti má cílem nativní rozbalovací část; kontakt má vlastní viditelnou kotvu. E-mail a skutečná praxe zůstávají nedoplněné podle pokynu autora.
- Build prošel bez chyb a varování. Pracovní přehled má nový snímek `nahled-sluzby.jpg`; papírový koncept se v přehledu nepoužívá.

## Kresby, sjednocené představení a patička

- Originální kresby Marka použity v dlaždici „Mám rád humor“. Desktop 1440 px a mobilní viewport 390 px: otevření dlaždice mění původní kresbu na druhý originál a zachovává CTA. WebP varianty mají asi 292/313 kB oproti cca 9 MB originálům.
- Samostatný opakovaný blok představení odstraněn. `#zkusenosti` je uvnitř portrétní části a při přímém vstupu se otevře. Nejsou duplicitní ID ani vodorovné přetékání.
- Patička s kontaktem ověřena v obou šířkách, šipka „Zpátky na začátek“ vede na `#obsah`. Mobilní footer má šířku viewportu a jméno nepřetéká. Omezený pohyb kontrolován v kódu.
- AI studie je pouze v lokálním přehledu, jasně odlišená od Markových originálů. Soubor a přesný prompt jsou v ARTWORK.md.
- Finální build bez chyb a varování, lokální přehled se do produkčního buildu negeneruje.

## Bílá ateliérová série ve čtyřech dlaždicích

- Čtyři nové snímky vytvořené vestavěným ImageGen a uložené v projektu mají shodně 1086 × 1448 px. Motivy jsou v podobné pozici a velikosti, bez individuálního ořezu; všechny používají stejné CSS. Fotografie popela posloužila jako reference pro zbytek série.
- Desktop 1440 × 1000: bílá harmonika, společná základna motivů, čitelná typografie. Ověřeno otevření „Jsem kreativec“. Mobilní viewport 390 px: všechny obrázky načtené, bez vodorovného přetékání, otevření „Rád experimentuji“ a čitelný detail. Mobilní fotografie má oddělené místo mezi názvem a detailem.
- WebP 1000 px mají cca 19–48 kB; malé varianty 7–18 kB. Temná samostatná stránka nebyla upravována. Nový hlavní OG obrázek odpovídá bílé sérii. Přesné prompty v PILE-PHOTOS.md.

## Minimalistický portrét navazující na bílé dlaždice

- Velká fotografie vlevo, vpravo bezpatkové jméno, stručné představení a čtyři svislé volby s podtržením aktivní položky. Kresby a události pro tažení odstraněné.
- Desktop 1440 × 1000: ověřeno kliknutí na humor a ArrowDown na kreativce. V DOM je právě jeden viditelný popis a žádné kreslené překryvy. Bez vodorovného přetékání.
- Mobilní viewport 390 px: správné skládání, funkční volba experimentu a přímá kotva na zkušenosti s otevřeným detailem, bez přetékání.
- Produkční sestavení prošlo bez chyb a varování. Snímek `nahled-autor.jpg` aktualizován. Modelový snímek je nadále výslovně označený.

## Centrální portrét a odstraněné drobné popisky

- Na přání Marka vrácen centrální portrét se čtyřmi prostorově rozmístěnými volbami, v bílé a šedé. Ověřeny kliknutí, ArrowRight a tažení: kreativní poloha → experiment.
- Celý `.world-top` odstraněn z harmoniky: žádné horní drobné kategorie ani šipky. Hlavní názvy a funkční ovládání zůstává.
- Desktop 1440 px a mobilní viewport 390 px: bez vodorovného přetékání. Produkční sestavení prošlo bez chyb a varování.

## Vlastní portréty Marka Stojky

- Z originálu DSC05772.jpeg vytvořené přes vestavěný ImageGen čtyři retuše: černé tričko bez potisku, měkké černobílé studio a jemné změny výrazu. Originál je uložený beze změny mimo importy stránky.
- Všechny výstupy mají 1024 × 1536 px a alfa kanál. Kontrola obálky neprůhledné postavy: rozdíl mezi variantami v řádu jednotek pixelů (horní okraj 56–57 px). Žádné individuální posouvání vrstev v CSS.
- V prohlížeči ověřeno porovnání čtyř fotografií na bílém pozadí a přepínání humor → kreativec kliknutím/šipkou. Každá tvář má jiný zdroj, modelový placeholder se již nezobrazuje.
- Původ a přesné prompty v PORTRAIT-EDITS.md. Web používá responzivní WebP, přibližně 27–88 kB dle velikosti. Vývojový přehled nabízí plné PNG a porovnání vedle sebe.
- Produkční build prošel bez chyb a varování.

## Výraznější sada portrétů V2

- Čtyři nové PNG 1024 × 1536 s pravým alfa kanálem; vizuálně ověřené na bílém pozadí webu i vedle sebe na pracovních plátnech. Smích a překvapení mají otevřená ústa, kreativní poloha pohled vzhůru, děsivá intenzivní zamračení.
- Homepage načítá všechny čtyři soubory V2, vždy jedinou aktivní vrstvu. Ověřeno kliknutí na humor a experiment a přepnutí humor → kreativec klávesou ArrowRight; žádné vodorovné přetékání v aktuálním desktopovém náhledu. Layout se neměnil.
- npm run build: 20 souborů, 0 chyb, 0 varování; tři veřejné stránky, pracovní plátna mimo produkční build. Jemná V1 a originál zachovány.
- Aktualizované snímky: nahled-autor.jpg a nahled-portrety-ctyri.jpg. Přesná zadání: PORTRAIT-EDITS-V2.md.

## Interaktivní vlastní kresba a přechod do tmy

- Portréty jsou odstraněné z homepage; zachované originály a sady V1/V2 nejsou do veřejné stránky importované. Použité kresby jsou vlastní díla Marka, nikoli AI studie. Vizuálně ověřena černá linka a barevná stopa po kliknutí, přepnutí druhé kresby a tlačítko celé barevnosti.
- Desktopový průchod CTA Vstoupit do tmy → částečky z fotografie → temná stránka proběhl opakovaně. Overlay po navigaci zmizí, fokus přejde na hlavní nadpis. Zkontrolované víření, pauza a návrat na rozcestník; bez chyb v konzoli.
- Escape před navigací vrací viditelnost kupičky a skryje overlay bez změny stránky. Modifikované kliknutí ani reduced motion nejsou zachycené; preference omezeného pohybu je řešená v kódu, v testovacím prohlížeči nebyla emulovaná.
- Na viewportu 390 × 844 ověřené zobrazení kresby, tlačítko všech barev a mobilní přechod až na /temnota; bez horizontálního přetékání. Nejde o test fyzického telefonu. Override viewportu vrácený.
- Nalezená návaznost hash odkazů s ClientRouter opravena přes datové cíle nativních detailů. Ověřen přímý /#koncept i rozcestník → Podívat se na nápad → otevřený správný text. Kontrolované opakované navigace a reinitializace skriptů.
- npm run build: 23 souborů, 0 chyb a 0 varování. Pracovní plátna nejsou v produkčním buildu. Nové snímky nahled-autor.jpg, nahled-temnota.jpg a nahled-prechod-popel.jpg.

## Celoplošný přechod a statické fotografie

- Ověřen průchod Vstoupit do tmy → rozpínající se oblak → /temnota na desktopu i viewportu 390 × 844. Přechod se po odhalení skryje, fokus míří na nadpis. Escape před navigací skryje oblak a vrátí viditelnost kupičky; lze znovu vstoupit.
- Canvas pro rozvíření je omezený na nejvýš 280 částic v 1× rozlišení. Po úvodní fázi se zastaví; výměna dokumentu a decode fotografie běží pod plně neprůhledným krytem. Závěr animuje pouze opacity celé vrstvy. Nebyl proveden číselný FPS benchmark ani test na fyzickém telefonu.
- /temnota už nemá AshScene ani .ash-canvas. Statické fotografie jsou optimalizované lokální WebP se srcset. Ověřené dokončené načtení hero i flatlay, čitelnost mobilního úvodu, žádné horizontální přetékání. Override viewportu resetovaný. Konzole při desktopovém průchodu bez chyb.
- Dva pracovní fotografické motivy z vestavěného ImageGen jsou v src/assets/dark/, prompty v ASH-PHOTOS.md. Prázdná obálka není finální obálkou knihy. Předchozí komponenta poletujícího popela je uložená, ale neimportovaná do stránky.
- npm run build: 23 kontrolovaných souborů, 0 chyb a 0 varování; statický build úspěšný. Fotografie hero má varianty přibližně 28/74/171 kB. Aktualizovaný snímek nahled-temnota.jpg.

## Obnovená interaktivní kategorie a přechod jedním závanem

- /temnota je vrácená k původnímu AshScene, serifovému úvodu a typografické Moonice. Nové fotografie se do ní neimportují. Ověřené rozvíření, pauza i opětovné spuštění.
- Přechod z hero ověřen na desktopu i 390 × 844. Jeden krátký závan částic v perspektivě, bez velkých šedých cloudů; poté 650 ms odhalení. Canvas přechodu nekreslí během navigace a AshScene čeká do ukončení odhalení.
- Po dokončení ověřeno: overlay hidden=true, jedna ash-scene, data-ash-arrived=true a computed animationName nadpisu je none. Tím se po přechodu znovu nerozjíždí blur/posun nadpisu. Přímý vstup si ponechává původní animaci.
- Escape vrací viditelnost kupičky a umožňuje další vstup. Po zrušení i novém vstupu žádné horizontální přetékání, viewport vrácený. Desktopová konzole při kontrole bez chyb. Číselný FPS benchmark a fyzický telefon netestovány.
- Rozostřené vločky používají atlas předkreslený jednou, nikoli canvas filter u každého úlomku v každém snímku. Zachované původní rozmístění i ovládání popela.
- npm run build: 23 souborů, 0 chyb a 0 varování. Snímek nahled-temnota.jpg aktualizovaný na interaktivní scénu.

## Dvě projektové dlaždice v temném hero

- Na výslovné upřesnění autora zůstává hlavní homepage čtyřdílná. Ověřen návrat na její čtyři polohy a CTA Vstoupit do tmy → nový temný úvod s osobním textem a Moonikou / Mistrovstvím smíchu.
- Dlaždice ověřené kliknutím a klávesou ArrowRight; vždy jediná aktivní. O knize scrolluje na #moonika. Vizuálně ověřen samostatný typografický vizuál s označením pracovní obálky a krátkým textem bez vymyšlené anotace.
- Viewport 390 × 844: oba názvy jsou čitelné, bez horizontálního přetékání; odkaz k prezentaci knihy funkční. Override resetovaný. Nejde o fyzický telefon.
- Zachovaný jeden AshScene; pohyb poslouchá celé hero včetně dlaždic. Žádná další animační smyčka rotátoru, CSS transitions respektují reduced motion. Desktopová konzole bez chyb při kontrole.
- npm run build: 24 souborů, 0 chyb a 0 varování. Aktualizované nahled-temnota.jpg a nahled-moonika-mobile.jpg.

## Pět knih, představení smyslu webu a sjednocená spára

- Temná harmonika nyní obsahuje Mooniku, Mistrovství smíchu, Armelie, Pohovor a Sraz zítra. Ověřeno kliknutí na Armelie, End → Sraz zítra a ArrowLeft → Pohovor; vždy jedna aktivní dlaždice. Nové tituly nemají vymyšlené anotace, stav vydání ani obálky.
- Desktop má jeden otevřený panel a svislé hřbety. Na 390 × 844 jsou tituly pod sebou v čitelných řádcích, žádné horizontální přetékání. Hlavní rozcestník homepage má stále čtyři polohy.
- Homepage už neimportuje kresbu. Statický blok „Tohle je můj svět.“ vysvětluje tvorbu, nabídku, budoucí portfolio/blog a komunikaci; ambice je napsaná jako budoucí cíl. Ověřené O webu → #o-webu, Moje tvorba → #svety a Jsem kreativec → Podívat se na nápad → #koncept s otevřeným nativním přehledem.
- Odstraněný celý řádek O tomhle webu a šipka. V prohlížeči naměřeno: mezera dlaždic 6 px a odstup následující sekce 6 px na desktopu; na mobilu obě 5 px. Kresba i odkaz v DOM nepřítomné. Mobil bez přetékání, viewport resetovaný.
- npm run build: 25 souborů, 0 chyb a 0 varování. Aktualizované nahled-temnota.jpg (pět knih) a nahled-autor.jpg (nové představení webu).

## Změna jediného slova

- Nová sekce #jedno-slovo je v DOM i vizuálně mezi představením webu a nabídkou. Ověřené kliknutí stín → kurýr → dvojník, ArrowRight → včerejšek, kliknutí → strach, Space → nápad a Enter → stín. Text pokračování i aria-live se mění se slovem, tlačítko zůstává stejné a drží fokus.
- Na viewportu 390 × 844 ověřené nejdelší slovo včerejšek, čitelnost, žádné horizontální přetékání. Nativní tlačítko umožňuje klepnutí. Override viewportu resetovaný. Nešlo o fyzický telefon ani skutečný test odečítačem; aria-live a keyboard byly ověřené přes DOM/AX.
- Animace jsou pouze krátké CSS opacity/translate při změně, reduced motion je vypíná. Bez nové knihovny, serveru či nepřetržitého vykreslování. V desktopové konzoli bez chyb.
- npm run build: 26 souborů, 0 chyb a 0 varování. Náhled docs/nahled-jedno-slovo.jpg a aktualizovaná pracovní plátna. Texty jsou pracovní mikropróza, nikoli doložené ukázky knih.

## Slogan, skládaný portrét a štětcové ikony

- npm run build: 31 souborů, 0 chyb, 0 varování, statický build úspěšný. /navrhy/prehled není ve veřejném výstupu.
- Živý náhled: původní čtyři fotografické dlaždice, nový slogan, původní vlastní portrét, čtyři nabídky a kontakt přítomné.
- Portrét: kliknutí srovná dva dílky; opětovné spuštění pomocí Enter je prohodí zpět, aria-pressed i oznamovaný stav odpovídají.
- Slogan: při příchodu do výhledu střídá styl (pozorována také monospace zelená varianta), tlačítko zastaví automatiku a změní stav i popis. Mimo výhled a v neaktivní kartě se interval zastavuje; reduced motion nastaví statický výchozí stav.
- Nativní nabídka: reklama a slogany se rozbalí a opět zavřou; skutečný text je čitelný.
- Mobil 390 × 844: dvě nabídky vedle sebe, portrét nad textem, slogan se vejde; scrollWidth nepřesahuje viewport. Ověřeny i navigační kotvy O mně / nabídka / kontakt.
- Konzole: bez chyb a varování. Veřejný e-mail zatím nedodán, proto zobrazený stav k doplnění bez falešného mailto.
- Snímky aktualizované v docs/nahled-autor.jpg, nahled-sluzby.jpg, nahled-paticka.jpg, nahled-slogan.jpg a celkový nahled-homepage-current.jpg. Ověřeno v místním náhledu, bez veřejného nasazení.

## Revize 1. 11. 2026 — barevná plocha a 12 ikon

- Build: 31 souborů, 0 chyb a varování, produkční výstup úspěšný.
- Živý desktop: barevný podklad přes celou sekci, proměny fontu a obou barev textu, rozhozené řádky. Pauza přepíná přístupný název a aria-pressed.
- Všech 12 dlaždic má 240 px, nulový viditelný text a žádné details. Ikony jsou vycentrované; role img nese autorovy popisy.
- Mobil 390 × 844: všechny dlaždice 180 px, žádné vodorovné přetékání. Zkontrolovaná i barevná typografie a nový nadpis portrétu.
- Konzole bez chyb a varování. Drobné rohové popisky odstraněné ze sloganu, portrétu, nabídky a kontaktu. Texty pro asistivní technologie zachované.

## Rozšíření na 24 ikon

Build prošel: 31 souborů, 0 chyb a varování. Živý náhled potvrzuje nadpis „Tohle všechno dělám“ a 24 ikon. Všechny mají shodnou výšku 240 px na desktopu, 180 px na mobilu 390 × 844, bez vodorovného přetékání. Přístupné názvy zahrnují všech 12 nově přijatých oblastí. Aktuální snímek docs/nahled-sluzby.jpg.

## Odhalování a odemknutí dark mode

- npm run build: 31 souborů, 0 chyb, 0 varování, produkční výstup hotový.
- Skutečné UI kliknutí: první karta zčerná, místo ikony zobrazí název a vysvětlení. Tlačítka mění aria-expanded a přístupný název.
- Po otevření 23 různých karet zůstává homepage světlá. Poslední, 24. karta aktivovaná Enterem přepne data-home-mode na dark, odhalí reset a oznámí změnu.
- Obnovení stránky zachová dark mode i 24 otevřených karet. Reset přes skutečné tlačítko vrátí light a zavře všech 24. Opakované kliknutí na tutéž kartu změnu režimu nespouští.
- Mobil 390 × 844 při všech otevřených kartách: bez vodorovného přetékání a bez textu přetékajícího z kterékoli karty.
- Tmavá paleta zkontrolována i na hlavním fotografickém rozcestníku. Fotografie mají invertovaný podklad a barevně kompenzované zobrazení na černé; původní soubory jsou nedotčené.

## Kontakty, druhá harmonika a čtecí zvýraznění

- Build: 32 souborů, 0 chyb, 0 varování; produkční sestavení úspěšné.
- Kontakt obsahuje všech 13 přijatých otázek a výzvu napsat/zavolat; e-mail a telefon zatím autor nedodal, proto nejsou vytvořené falešné kontaktní odkazy.
- Dvě nezávislé harmoniky, žádná duplicitní ID. Spodní tlačítko ovládá bottom-panel-temnota a rozbalí jen spodní harmoniku; horní zůstává is-resting.
- Kliknutí spodního CTA skutečně spustilo gust a skrylo pouze spodní zdrojovou fotografii (svety-znovu), horní zdroj zůstal viditelný. Následně dorazila /temnota; návrat obnovil obě harmoniky a kontaktní čtecí ovládání.
- Čtecí vlna: pozorovány průběžné hodnoty váhy písma mezi 487 a 760. Pouze jedna otázka má is-reading; pauza odstraní aktivní otázku a nastaví aria-pressed=true.
- Barevné výrazy odpovídají potvrzeným slovům a paletě sloganu; čtečky dostávají souvislé věty.
- Mobil 390 × 844: otázky v jednom sloupci, 13 položek, bez vodorovného přetékání. Kontrola sestavení i konzole bez chyb.

## Pět sloupců, 30 ikon a stavy knih

Build prošel pro 32 souborů bez chyb a varování. UI má 30 ikon v pěti desktopových sloupcích; ověřeno odemknutí tmavého režimu po třicáté kartě a správné oznámení „30 oblastí“. Na 1024 px se žádný otevřený popis neořezává; 900 px používá tři sloupce, 390 px dva, bez přetékání. Reset vrací světlou stránku. DarkWorks zobrazuje přesně Vydání 2027 / Hotovo 70 % / Vydání 2027–2028 / Hotovo 10 % / Hotovo 40 %. Na mobilu se všechny stavy vejdou. Snímky docs/nahled-sluzby.jpg a docs/nahled-temnota.jpg aktualizované.


## Moonika pod harmonikou a Temná strana — 1. 11. 2026

Ověřeno v prohlížeči: výběr Armelie skryje Mooniku a ukáže stav Armelie, návrat na Mooniku a O knize posune ve stejné stránce na #moonika. Původní AshScene nahoře zachovaná. Centrovaný obsah max. 1200 px. Mobil 390 a 320 px bez vodorovného přetečení. Pět fotografií, skutečný úvod bez vymyšleného děje, tři výslovně demonstrační citace a dvě výslovně demonstrační recenze. Nový hlavní nadpis Temná strana. Snímky nahled-temna-strana.jpg, nahled-moonika.jpg, nahled-moonika-citace.jpg a nahled-moonika-recenze.jpg. Build bez chyb.


## Spojený kontakt — 1. 11. 2026

V prohlížeči ověřena změna tématu na Nápad, velká otázka a mailto se subject=Rozvinutí nápadu. Skutečná adresa Marka.st@seznam.cz, tel:+420739455437. Bez odeslání e-mailu či volání. Mobil 390 px bez vodorovného přetečení, všechny kontakty čitelné. Jednorázový přeliv, odstraněné CTA. Produkční build zkontrolován.


Mobilní harmonika ověřena na 390×844: otevřená 820 px, horní odsazení 12 px, ostatní 128 px. Přepnutí popel → humor → popel správně přenáší výšku a posun. Spodní kopie ověřena na 320×568: experiment otevřený 560 px, žádné vodorovné přetečení. Náhled nahled-harmonika-mobile.jpg.


## Dvojice fotografií a inkoustové odhalení — 1. 11. 2026

Kontrola desktopu a mobilu 390×844: dvě stejné fotografie vedle sebe, žádné přetečení, čitelné texty, tváře bez kreseb. Doprovodný portrét má ořez od horního okraje, aby zůstala hlava celá. Vizuály zkontrolované, obě AI úpravy uložené v projektu a zdokumentované.

Kontakt: ověřen nenulový polygon clip-path v průběhu scrollu, změna otázky zůstává. Klávesnicový focus do kontaktů okamžitě vrací clip-path none (ověřeno tabulátorem), mailto/tel nezměněné. Reduced motion má statické zobrazení v kódu. Snímky nahled-autor.jpg, nahled-kontakty.jpg, nahled-paticka.jpg a nahled-inkoust-mobile.jpg. Build bez chyb.


## Slogan, tah štětce a prezentace — 1. 11. 2026

Ověřen nový nadpis Prý jsem kreativní..., pauza/spuštění v prohlížeči, výška 440 px na 390px mobilu bez horizontálního přetečení. Kliknutím ověřeno rozbalení Tvořím prezentace s novým popisem. Kontakt bez špendlíků používá jednorázovou animaci; skutečné kontakty a výběr témat zachované.


## 1. 11. 2026 — humor, kontakt a aktuální tvorba

V prohlížeči ověřen odkaz Právě vzniká: Moonika z desktopové hlavičky přímo na /temnota#moonika, zachované stavy pěti temných knih. Hlavička na 390 px má vlastní druhý řádek. Humor: výběr All Demente a Hospovídek přepne jediný viditelný panel pod harmonikou; na 390 px bez horizontálního přetečení. Kontakt: CSS smyčky mají infinite/running ve výhledu, pauza mění stav na paused a lze ji opět spustit. E-mail a telefon viditelné, desktop bez přetečení. Aktualizované snímky rozcestníku, humoru, knihy a kontaktů.


## 1. 11. 2026 — lepící papírky v humoru

Ověřeno kliknutí i Enter na papírek: text a aria-pressed se přepnou, opakovaná aktivace vrátí původní znění. Pět instancí. Na mobilu 390 px bez horizontálního přetečení, poznámky nezasahují do názvů knih. Snímek hero aktualizovaný.


## 1. 11. 2026 — kreativec a automatická témata

Ověřena /kreativec: přepnutí Weby mění jediný obsahový panel, Další úhel pohledu mění cvičení. Skutečné kontakty a Běsoháj mají správné href. Při kontrole 390 px bez horizontálního přetečení. Homepage: při zobrazeném kontaktu se aktivní téma samo změnilo z Texty na Web včetně otázky a předmětu e-mailu. Ve veřejných komponentech nejsou tlačítka pauzy sloganu, kontaktu ani AshScene. Produkční kontrola bez chyb a varování. Náhledy nahled-kreativec.jpg / nahled-kontakty.jpg.


## 1. 11. 2026 — obsahový rozcestník a malování

Kreativec: 12 odkazů, ověřen proklik AI tvorba na vlastní připravovanou stránku a zpětný cíl. Humor: z hlavní harmoniky otevřen CTA přes novou přechodovou vrstvu; výsledkem /humor, kryt po příchodu skrytý. Tlačítko modré barvy přepne aria-pressed a vykreslí barevnou stopu. Na 390 px bez horizontálního přetečení. Aktualizované snímky kreativce a humoru.


## 1. 11. 2026 — stékající vrstvy

Ověřen vstup hlavním CTA do /humor a proklik O knize. Kapky viditelné v hero i nad/pod fotografií knihy. Aktualizované dva snímky. Mobil 390 px bez horizontálního přetečení.


## 1. 11. 2026 — fialová paleta a přímý vstup humoru

Ověřeno kliknutí přímo na název Mám rád humor v hlavním rozcestníku → /humor. Zachycen skutečný fialový přeliv nad homepage. Uvnitř kategorie odstraněny CMYK pásy, obsah zachován. Zkontrolována fialová vzdělávací plocha kreativce. Audit sytých oranžových hex barev ve zdrojových stylech a datech bez nálezů.


## 1. 11. 2026 — celoplošné prokliky a samovolné stékání

Kliknutí na fotografii hlavní dlaždice děsu spouští ash-passage (hidden odstraněn). CTA hlavního humoru spouští paint-passage (hidden odstraněn) a následně /humor. Kliknutí na název děsu ve spodní harmonice spouští spodní popel. Zkontrolován náhled samovolně stékající barvy v humoru, odstraněny ovládací barvy a Canvas. Snímek nahled-humor.jpg aktualizovaný.


Aktuální revize: desktop i mobil 390 px — oba homepage nadpisy mají text-align:center. Kreativní Blog kotva funguje a detail se nativně rozbalí. Humor bez .humor-pencil-lines; přesouvání odřezku myší i šipkou a Home ověřené, mobil bez horizontálního přesahu. Aktualizované snímky nahled-humor.jpg, nahled-kreativec.jpg, nahled-kontakt.jpg, nahled-sluzby.jpg.

Kreativní mozaika: přepnutí na Hudebníka zobrazí správný originál, hra změní oknem na po špičkách. Mobil 390 px bez vodorovného přesahu. Náhled nahled-kreativec.jpg aktualizován.

Otevřená dílna: Jiná otázka mění aktuální otázku; Nová dvojice mění Deštník/Paměť na Výtah/Les, textarea se neodesílá, nativní nápověda se rozbalí, Detail přiblíží kresbu. Mobil 390 px jednosloupcový bez přesahu. Sraz zítra z hash odkazu zobrazuje novou anotaci; All Demente obsahuje oba příběhy. Freelo pouze čtení, žádné úpravy.

Magazín: filtr Obraz a slovo zobrazí 2 články, proklik Stejný obraz otevře celé čtení a návrat vede k magazínu. Mobilní detail 390 px bez přesahu. Hero: pizza se automaticky dokreslí, žádný síťový generátor. Sestavení musí projít po poslední úpravě.

Sedm barevných rubrik: filtr Recenze knih ponechá pouze recenze, Všechno obnoví 7 rubrik. Mobil 390 px bez vodorovného přesahu; dlouhý název O kreativitě úplně svobodně se správně zalamuje. Aktualizován nahled-magazin.jpg.

Nový magazín: desktop rozcestník → Obecně → další článek → menu Rubriky → Kreativní cvičení → experiment kruhu → Úvod funguje. Mobil 390 px menu ukazuje všech sedm odkazů, rubrika jednosloupcová a bez přesahu (scrollWidth 375). Osobní text zobrazuje nově dodané informace o rodičích, vysoké škole a grafické práci. Náhledy nahled-kreativec.jpg a nahled-magazin-rubrika.jpg aktualizované.

Fotografické rubriky: ověřen proklik celé dlaždice O kreativitě odborně a zpět. Mobil 390 px: sedm dlaždic po 607,7 px výšky, bez horizontálního přesahu (scrollWidth 390), čitelné názvy. Snímek docs/nahled-kreativec.jpg aktualizovaný.

Rozšířený magazín: ověřeny rubrika → fotografická karta → článek, kotvy obsahu, postranní panel zůstává při čtení 20 px od horní hrany. Mobil 390 px: rozbalení navigace funkční, článek bez přesahu; workshopy → detail a program fungují, mailto obsahuje konkrétní téma, detail má 8 položek programu a scrollWidth 390. Osobní fotografie na mobilu 280 px. Náhledy medailonku, workshopů, článku a rubriky aktualizované. Programy všech čtyř školení jsou plánované a označené.

2. 11. 2026: všech sedm papírových assetů má skutečnou alfu, všechny snímky vizuálně prohlédnuté. Menší fotografie nasazené v rozcestníku i článkových kartách. Na šířce 2400 px začíná fotka medailonku, workshopy i kontakt shodně na x=161,59 px. Na mobilu 390 px stejné hrany x=36,56 px a žádný přesah. Návratový odkaz z rubriky vede na /kreativec#zapisnik.

Potkejme se: čtvrtá dlaždice v obou harmonikách používá kávová zrnka, horní CTA ověřené do /potkejme-se. Nová stránka má na mobilu 390 px scrollWidth 375; odpočet bez akce ukazuje čtyři pomlčky a nemá data-starts-at. Ruční zájem vede na skutečný mailto. Časový výpočet ověřen na hranici dne, jedné milisekundy před začátkem, začátku, konce a shodném okamžiku v různých UTC zápisech. Papírový přechod: zachycená trhlina, úspěšný vstup na /kreativec, zrušení Escape ponechá homepage a skryje vrstvu. Reduced motion a modifikátory ověřené v kódu, nikoli změnou systémového nastavení.
