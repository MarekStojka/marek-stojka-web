# Práce na autorském webu Marka Stojky

Před změnou designu nebo struktury si přečti `docs/DESIGN.md`. Je tam aktuální směr, přijaté a odmítnuté návrhy, mapa webu a pracovní stav obsahu. Nové pokyny uživatele mají přednost.

- Homepage je rozcestník čtyř světů. `/temnota` je druhý krok otevřený přes CTA harmoniky; nevracej scénu s popelem na začátek homepage bez nového pokynu.
- Homepage má neutrální bílý/černý/šedý rámec. Hero tvoří pouze čtyři vysoké dlaždice harmoniky; pod nimi navazuje typografické představení smyslu webu a rozbalovací přehled tvorby. Nenavracíme rozptýlené drobné slogany ani obrovské prázdné typografické bloky. Vlastní barvy a nálady patří pouze do dlaždic.
- Zachovej minimalismus, výraznou typografii a přístupné interakce. Aktuální temný svět je opět původní interaktivní scéna s popelem a velkým serifem. Fotografická varianta byla odmítnutá; texty jsou pracovní.
- Po novém rozhodnutí aktualizuj `docs/DESIGN.md`, aby další chat mohl navázat. Neoznačuj pracovní obsah jako schválený.
- Pracovní plátna jsou `/navrhy/prehled` pouze při vývoji. Při změně designu aktualizuj snímky uvedené v README. Tuto cestu nezahrnuj do veřejného buildu.
- Pro spuštění, kontrolu a nasazení postupuj podle README. Ověř upravenou navigaci a relevantní šířku obrazovky; před předáním implementace spusť `npm run build`.
- Vytvoření vzdáleného repozitáře a veřejné nasazení čeká na výslovné potvrzení uživatele, jak stanoví původní zadání. Lokální editace, kontroly a náhled jsou součástí autorizované práce.

- Portréty i interaktivní kresba byly z homepage odložené. Originály a komponenty zachovat archivně. Aktuální blok „Tohle je můj svět.“ vysvětluje smysl webu: tvorba, nabídka, budoucí portfolio, blog a pravidelné sdílení s lidmi. Ambici kreativity a fascinující fantazie vyjadřuje jako budoucí směr, nikoli dosaženou reputaci. Nevymýšlet praxi, klienty, data, blogové články ani kontakt.

- Autor vystupuje jménem Marek Stojka; „kreativno“ je zatím pracovní značka. Spodní část tvoří šest konkrétních nabídek pomoci, kompaktní představení a kontakt. Návrh imitující papírový sešit a záložky byl odmítnut; nevracet ho.

- V „Mám rád humor“ jsou originální kresby dodané Markem, nikoli AI výstup. AI studie je oddělená a označená na lokálním přehledu; původ a prompt v `docs/ARTWORK.md`. Představení a zkušenosti jsou pouze u portrétu. Kontakt je součástí černobílé patičky.

- Nejnovější hero používá ve všech čtyřech dlaždicích ateliérové fotografie kupiček na bílém pozadí. Předchozí barevné směry a Markovy kresby v hero byly nahrazené; zdroje kreseb zachovat pro další využití. Podrobnosti v `docs/PILE-PHOTOS.md`.

- CTA „Vstoupit do tmy“ používá jediný krátký závan z kupičky směrem k návštěvníkovi a přechod bílé do tmy; velké šedé oblaky a fotografická kategorie byly odmítnuté. /temnota znovu používá AshScene. Během výměny je Canvas přechodu zastavený a nová scéna se rozběhne až po odhalení. Při tomto vstupu zůstává vstupní animace nadpisu vypnutá i po skončení přechodu, aby se znovu nespouštěla. Astro ClientRouter zachovat, inicializovat skripty na astro:page-load a uklízet posluchače. Reduced motion přeskočí přechod, Escape ho může před navigací zrušit. Hero jinak zachovat v bílé podobě bez drobných horních kategorií. Fotografie knihy a flatlay jsou pouze archivní experiment.

- Uvnitř /temnota je nyní krátký osobní úvod o smutné/depresivní stránce a nyní pětidílná hero harmonika Moonika / Mistrovství smíchu / Armelie / Pohovor / Sraz zítra. Hlavní rozcestník homepage zůstává čtyřdílný (autor výslovně upřesnil). Moonika má vlastní prezentaci níže; její obálka je pouze označený typografický návrh. Mistrovství smíchu je zatím připravovaný projekt bez dodaných podrobností. Neodvozovat žánr ani formát z názvu. Nepřidávat děj, datum vydání, cenu nebo ukázku bez podkladů.

- Aktuální homepage: pod hero není odkaz ani šipka „O tomhle webu“. Bílý blok O webu má stejnou spáru jako dlaždice (sdílená --sheet-gap: 6 px desktop, 5 px mobil), okraje 20/12 px. Staré #o-mne zůstává jen kompatibilní kotva. Obsahový vstup je #o-webu. Ostatní světy otevírají nativní přehled #world-overview.
- Pět knih je náhled škálování: na desktopu úzké svislé hřbety a jedna otevřená dlaždice, na mobilu svisle řazené vodorovné řádky. Nově dodané názvy Armelie, Pohovor a Sraz zítra mají jen štítek Kniha, bez odhadnutého stavu, děje či obálky.

- Na homepage je mezi představením webu a nabídkou experiment #jedno-slovo „Změň jednu věc.“ Kliknutí na podtržené slovo ve větě „Za dveřmi stál můj …“ mění slovo i pokračování. Šest variant v WordStory.tsx jsou pracovní texty pro interakci, nikoli výňatky z knih. Zachovat jediný stabilní button, klávesnici, aria-live a reduced motion; bez obrázků, automatického přehrávání nebo další částicové smyčky.

- Nejnovější pokyn: homepage nyní obsahuje POUZE hlavičku se značkou/jménem a čtyři původní fotografické dlaždice rozcestníku. Vše pod harmonikou je odložené, včetně patičky a služeb. Návrh ateliéru s postavou vleže byl odmítnut. Nevracet jej ani předchozí představení bez nového pokynu. /temnota zachovat; ostatní tři světy mají zatím jen stav přípravy, nikoli odkazy na odstraněné kotvy.

- Nejnovější zadání znovu přidává obsah POD zachovaný rozcestník: proměnlivý pracovní slogan → skládaná původní fotografie Marka (25 čtverců, dva prohozené, kliknutím srovnat) → čtyři dlaždice se štětcovými ikonami a seskupenou nabídkou → bílý kontakt. Zdroje HomeContent.astro / ChangingSlogan.astro / PuzzlePortrait.tsx / BrushIcon.astro / home-content.css. Nepoužívat odmítnutý ateliér vleže ani AI retušované výrazy. Pracovní slogan a texty nejsou finální, e-mail nebyl dodaný. Střídání sloganu 1,7 s, jen ve výhledu, pauza a reduced motion. Temnota a hero beze změny.

- Aktuální revize: slogan má celoplošně barevný podklad, osm záměrně výrazných/nesourodých kompozic, střih písma, barev i náklonu po 1,5 s. Žádné malé dekorativní rohové texty v obsahu. U portrétu text „Stačí málo. A každý může být viděn jinak.“ Nabídka nyní dvanáct statických ikon BEZ viditelného textu a bez rozklikávání, všechny stejné výšky, centrované. Jedenáct oblastí dodal Marek, doplněno dříve potvrzené psaní sloganů; čtyři sloupce desktop / dva mobil. Přístupné názvy zachovat. Kliknutí přímo na portrét dál srovná dílky; popisek a samostatné malé tlačítko byly odstraněny.

- Na další výslovný pokyn je ikon nyní 24 (přidáno všech 12 navržených oblastí); viditelný nadpis sekce je „Tohle všechno dělám“. Zachovat stejné výšky, ikony uprostřed, bez viditelných textů a bez rozklikávání.

- Nový výslovný pokyn mění dosud statické ikony na odhalovací tlačítka: po kliknutí černá karta s názvem a stručným textem, po dalším kliknutí zpět ikona. Po navštívení všech 24 různých karet se automaticky přepne celá homepage do dark mode. Stav zůstává v sessionStorage; po dokončení je pod mřížkou reset „Zpátky na světlou stranu“. Zachovat stejné výšky, klávesnici, reduced motion, návaznost ClientRouter a izolaci od /temnota. Texty vysvětlení jsou pracovní, nevracet drobné dekorativní popisky.

- Nová kontaktní sekce ContactSection.astro obsahuje 13 přijatých otázek, výzvu napsat/zavolat a volitelné skutečné odkazy PUBLIC_CONTACT_EMAIL / PUBLIC_CONTACT_PHONE (nedodané kontakty nevymýšlet). Klíčová slova mají barvy ze sloganu, písmena postupně ztučňuje vlna pro jednu viditelnou otázku; pausovatelná, mimo výhled vypnutá, reduced motion, souvislé věty pro čtečky.
- Pod kontaktem je schválně DRUHÁ harmonika pod nadpisem „Prohlédněte si mé světy“, stejné motivy. WorldAccordion instanceId=main/bottom zajišťuje unikátní ID a oddělený stav. AshTransition musí vždy vzít .pile-photo z nejbližšího .world kliknutého CTA, nikoli první na stránce. Obě harmoniky respektují dark mode.

- Aktuální ikonová mřížka má PĚT sloupců na desktopu, dva do 700 px. Starší pokyny ke čtyřem sloupcům jsou překonané.

- Ikon je nově TŘICET: přidány bannery, tisková grafika, hlas značky, uživatelské cesty, ověřování nápadů a propojení obrazu/slova. Pět sloupců desktop, dva mobil; dark mode po všech 30, počet odvozovat z dat.

- Autor dodal skutečné plánované stavy knih: Moonika Vydání 2027 / Mistrovství smíchu Hotovo 70 % / Armelie Vydání 2027–2028 / Pohovor Hotovo 10 % / Sraz zítra Hotovo 40 %. Popisky DarkWorks.tsx a detaily v temnota.astro sjednoceny. Nevymýšlet další data.
- Ikonová mřížka: 5 sloupců nad 1000 px, 3 pro 701–1000 px, 2 do 700 px, aby se otevřené popisy vešly.


Aktuální Moonika je prezentace PŘÍMO POD knižní harmonikou na /temnota, nikoli nová stránka. Kliknutí vybírá obsah (book:select), hover pouze rozšiřuje dlaždici; O knize posune k obsahu. MoonikaPresentation.astro obsahuje fotografické studie a připravené sloty pro anotaci/ukázku z data/moonika.ts. Ostatní čtyři knihy mají zatím název, autorův stav a přípravu. Původní AshScene v hero zůstává, v prezentaci se další Canvas nespouští. Vizuály nejsou skutečná finální obálka; podklady a kontakt nevymýšlet.


Prezentace vybrané knihy má na nový požadavek vycentrovaný kontejner max-width 1200 px, boční prostor 60 px desktop / 32 px tablet / 16 px mobil a odstup od harmoniky. Fotografie ani text knihy nejdou k okrajům obrazovky. Horní harmonika a interaktivní popel zůstávají původní.


Rozšíření Mooniky: krátký úvod z potvrzené nálady tvorby, prostor Mezi řádky pro skutečné citace, Očima čtenářů pro skutečné recenze a pátá fotografie (hrana knihy v popelu). Autor potvrdil, že anotaci/citace/recenze zatím nemá. Pole quotes a reviews v src/data/moonika.ts jsou proto prázdná a návštěvník vidí zprávu o budoucím doplnění, nikoli falešný výrok či recenzenta. Skutečná dějová anotace zůstává null. Zachovat centrovaný kontejner max. 1200 px.


Úvodní hlavní nadpis temné sekce je nově „Temná strana.“ (dva řádky, druhý kurzívou), nahrazuje Ne všechno dohoří. Ostatní názvy rozcestníku zůstávají.


Autor následně výslovně požádal vidět i vzorovou sazbu citací/recenzí. Data moonikaPreviewQuotes (3) a moonikaPreviewReviews (2) jsou DEMONSTRAČNÍ autorské texty návrhu, nikdy je nevydávat za rukopis ani skutečné hodnocení. U obou sekcí je viditelné označení, u recenzí žádná vymyšlená jména. Po dodání skutečných quotes/reviews se automaticky použijí skutečná data a demonstrační označení se skryje.


## Spojený výběr tématu a kontakt

Kontakt je nyní jediný list: Co spolu vymyslíme → 13 krátkých témat → jedna velká otázka → plynulá bílá hrana nad černou kontaktní plochou. Původní dvousloupcový seznam a automatické ztučňování písmen byly nahrazené. Není zde tlačítko Pojďme to probrat. Kliknutí/klávesnice na téma změní otázku a předmět skutečného mailto odkazu. Hrana přelivu se při prvním vstupu jednou jemně pohne (3,6 s), reduced motion pohyb vypíná; observer/listenery se při Astro navigaci uklidí. Spodní opakovaná harmonika zůstává.

Autor výslovně dodal veřejné kontakty: Marka.st@seznam.cz a +420 739 455 437. Centrální src/data/contact.ts poskytuje výchozí hodnoty, PUBLIC_CONTACT_EMAIL/PHONE je mohou přepsat. Kontakt používá i Moonika. Jde o veřejné údaje určené pro web, už nedávat zprávu, že chybí. Fotografie autora zatím zůstává původní skládačka: momentka byla pouze diskutovaná, žádná nová nebyla dodaná.


## Mobilní harmonika: otevřená dlaždice na výšku obrazovky

Na šířce do 700 px má otevřená dlaždice výšku calc(100svh - 24px), min. 560 px pro čitelnost obsahu; ostatní se stáhnou na 128 px. Při otevření se dlaždice posune 12 px od horního okraje obrazovky, reduced motion posouvá okamžitě. Obě harmoniky homepage mají totožné chování. Klidový stav zůstává čtyřdílný, zavřené dlaždice 24svh s mezemi 165–240 px. Výška se nemění dlouhou animací, aby současné rolování necukalo. U otevřené dlaždice je fotografie uprostřed a text/CTA dole, čitelnější mobilní písmo. Desktop beze změny.


## Dvě rovnocenné fotografie a inkoust u kontaktu — aktuální revize

Nově dodaná momentka je kombinovaná s původním portrétem: dvě stejně velké fotografie vedle sebe, černobíle, žádný malý vložený portrét. Text je nad dvojicí, pracovní nadpis Za nápady jsem já. Vlastní bílé SVG tahy a černý flek přes spoj nesmí zakrývat tváře. Obě fotografie jsou upravené vestavěným ImageGen, originály zachované; retuše a prompty v docs/AUTHOR-PHOTO-PAIR.md. Zobrazení AuthorPhotoStory.astro / author-photo-story.css. PuzzlePortrait je archivní. Na mobilu dvojice zůstává vedle sebe.

Předchozí vlna u kontaktu byla odmítnutá. Nyní se černá kontaktní plocha odkrývá nepravidelnou inkoustovou maskou řízenou scrollováním. rAF běží jen při změně/doběhu a ve výhledu; při reduced motion nebo focusu do kontaktů se vše zobrazí ihned. Bez Canvasu, blur filtrů či trvalé smyčky. Kontakty a výběr témat zachované.


Upřesnění autora: žádná malá fotografie, dvě rovnocenné velké fotografie vedle sebe. Aktuální AuthorPhotoStory má text nad dvojicí, oba záběry stejně vysoké a černobílé přes CSS. Ruční bílé tahy a nepravidelný černý flek jsou vlastní SVG překryvy mimo tváře. Žádný nakloněný rámeček, stín ani menší vložená fotografie.


## Novější revize: slogan, kontakt a nabídka

Slogan je nově přesně „Prý jsem kreativní...“. Minimální výška 620 px desktop / 440 px mobil. Osm kompozic střídá po 950 ms, každou změnu doplní krátký typografický pohyb 230 ms. Zachovat pauzu, běh pouze ve výhledu a reduced motion.

Zavírací špendlíky byly následně odmítnuté; nevracet je. Kontakt nyní odkrývá široký černý tah štětce zleva doprava, s nepravidelným šikmým okrajem (polygon), jednou při vstupu do výhledu (1,25 s). Text se jemně odhalí s krátkým zpožděním. Bez scroll masky, bez trvalého animačního cyklu. Focus a reduced motion okamžitě ukazují kontakty.

Na žádost odstranit tvrzení o vedení lidí byla položka Vedu tým nahrazená Tvořím prezentace, vlastní nová ikona presentation. Popis: Dávám myšlenkám jasnou strukturu a vizuální podobu, která pomůže sdělit to podstatné. Počet karet zůstává 30. Školení a propojování oborů nejsou tvrzení o manažerské roli a zůstávají.


## Aktuální humor, stálý kontaktní spoj a právě vznikající projekt

Nová /humor zachovává rozložení knižní harmoniky /temnota. Čtyři tituly dodal autor: Autokatastrofa, All Demente, Hospovídky, (S)Rande. DarkWorks přijímá data; kliknutí vybírá prezentaci přímo pod harmonikou. Barevné pastelkové tahy jsou vlastní SVG, reálně působící odřezky a bílá kniha jsou fotografické AI studie. Žádné domyšlené děje, termíny ani stavy knih. Pracovní copy a stejný prototyp knihy pro všechny čtyři tituly nejsou finální obálky. Podklady v docs/HUMOR-PHOTOS.md. Obě homepage harmoniky nyní otevírají také /humor, přechod s popelem zůstává pouze pro /temnota.

Na výslovné upřesnění autora kontakt už nemá jednorázovou vstupní animaci. Jeho horní hrana se pohybuje nepřetržitě ve výhledu, doplněná pohybující se šipkou k e-mailu a telefonu. Kontakty jsou stále viditelné. Pauza, uspání mimo výhled/neaktivní kartu a reduced motion zachované. Špendlíky ani předchozí odkrývání nevracet.

Autor chce v úvodu nenápadně upozornit na nejbližší tvorbu. Uprostřed hlavičky homepage je odkaz Právě vzniká: Moonika → /temnota#moonika, na mobilu vlastní druhý řádek. Moonika je pracovní výběr, nikoli potvrzené pořadí dokončení všech projektů. Jediné místo pro výměnu je src/data/current-project.ts. Bez dalšího rotátoru, odpočtu nebo nové sekce pod hero. Náhled docs/nahled-rozcestnik.jpg.


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

- Lokální administrace článků je nyní Keystatic: `/administrace` přehled, `/keystatic` editor. `keystatic.config.ts`, JSON v src/content/articles, vlastní fotografie v public/media/articles. Tři stavy: draft pouze náhled, demo pouze lokální ukázka, published veřejná rubrika a build. Osm dosavadních návrhů jsou demo, nikoli schválené články. Nepublikovat je automaticky. Admin/API/náhledy se negenerují do produkce a build odfiltruje nepoužité/nepublikované uploads jen z dist. Remote CMS, login, GitHub ani nasazení nejsou připojené; bez nové autorizace nevytvářet účty ani veřejný repozitář. Knihy/akce/rezervace CMS zatím neovládá.
- Všech 30 ikonových karet má na nový pokyn hover/focus efekt a krátké tematické SVG animace v icon-motion.css. Zachovat funkci odhalování a session dark mode, klávesnici a reduced motion. Pohyb není trvalá smyčka. Nové snímky v README.

- Nejnovější pokyn 5. 11. 2026: kreativita je opět bílá a minimalistická, bez barevných ploch a akcentů. Stejné fotografie papíru v sedmi rubrikách, mírnější nadpisy. Bílé i workshopy a pull quote; fotografie mohou mít přirozené barvy. Nové AI fotografické studie banán/zátky a lahev/vlaštovka doplňují navazující obsah. Nezaměňovat za autorovy snímky. Původ a prompty docs/CREATIVE-STILL-LIFE.md. Starší pokyny k barevným rubrikám překonané.

- Poslední revize 5. 11. 2026: 8 bílých stejně velkých dlaždic kreativity (nově Nástroje a inspirace / inspirace), desktop 4+4, tablet 2, mobil 1. Fotografie zvětšené. Jen navazující sekce nově smějí střídat pastelové podklady (levandulová/růžová), medailonek bílý. Animované BrushIcon přes icon-motion-trigger se stejnými pohyby jako homepage. Kruhový experiment odpojen ze všech aktivních článkových/rubrikových pozvánek, prototyp archivně zachovat.
- Kontakt a patičku sdílí všechny veřejné stránky přes SiteFooter v BaseLayout. Jeden e-mail/telefon, černá plocha; Moje světy jen mimo homepage. Nevkládat další globální patičky do jednotlivých stránek. Homepage témata zůstávají, její původní černý kontaktní blok nahrazen odkazem na společnou patičku. Předmět mailto dál mění ContactSection přes data-shared-contact-email. Zachovat unikátní kontakt/kontaktni-udaje/spojme-se kotvy.


## Průběžné odesílání na GitHub — aktuální pokyn 8. 11. 2026

Autor výslovně zadal „úpravy házej rovnou na git“. Hotové úpravy zadané autorem po relevantní kontrole a úspěšném npm run build rovnou commitnout a pushnout do stávajícího repozitáře MarekStojka/marek-stojka-web, větev main. Nečekat na další samostatný pokyn k pushi. Autorizace zahrnuje navazující automatické zveřejnění; ověřit Check and build a Publish website. Starší požadavky čekat na potvrzení před odesláním změn tohoto existujícího webu jsou tím překonané.
