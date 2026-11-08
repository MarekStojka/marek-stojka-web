import banana from '../assets/creative-still-life/banan-zatky-v1.png';
import bottle from '../assets/creative-still-life/lahev-vlastovka-v1.png';
import brick from '../assets/creativity-guide/cihla-knihy-v1.png';
import bridge from '../assets/creativity-guide/tuzka-most-v1.png';
import paper from '../assets/creativity-guide/papir-pokusy-v1.png';
import pencils from '../assets/creativity-guide/pastelky-spolu-v1.png';
import ball from '../assets/creative-paper/obecne-v1.png';
import tools from '../assets/creativity-guide/nastroje-v1.png';
import desk from '../assets/creativity-guide/skicak-lupa-v1.png';
import mouse from '../assets/creativity-guide/tuzka-mys-v1.png';
import domino from '../assets/creativity-guide/domino-v1.png';

export const guideImages = { banana, bottle, brick, bridge, paper, pencils, ball, tools, desk, mouse, domino };
// Vlastní redakční obsah. Delší výklad je dostupný v nativním details.
// HTML je statický text tohoto projektu, nikoli obsah z formuláře nebo externího zdroje.
export const visualChapters = [
  {
    "id": "co-je-kreativita",
    "navTitle": "Co je kreativita",
    "title": "Co je kreativita?",
    "lead": "Nový pohled, který něco přináší. Někdy vyřeší problém. Jindy nás prostě rozesměje.",
    "detailLabel": "Co znamená novost a přínos?",
    "kind": "photo",
    "layout": "",
    "image": {
      "key": "banana",
      "alt": "Banán se třemi kovovými víčky na bílém pozadí.",
      "caption": "Banán s víčky."
    },
    "details": "<p class=\"guide-lead\">Schopnost přijít s něčím novým, co má zároveň nějaký přínos. Zní to jednoduše. A nemusí za tím být nic velkolepého.</p>\n<p>Vymyslíte hru, která dětem zpříjemní dlouhou cestu. Vysvětlíte složitou věc pomocí nečekaného přirovnání. Nebo napíšete příběh, který někomu pomůže pojmenovat vlastní pocit. Pokaždé hledáte nový způsob, jak něco vyřešit, sdělit nebo prožít.</p>\n<p>Důležité jsou obě části: <strong>novost i přínos.</strong> Nápad může být zvláštní, ale k ničemu. A osvědčený postup může být užitečný, aniž by byl nový. U kreativity se obojí potkává. Přínosem přitom nemusí být peníze nebo úspora času. Může jím být i porozumění, radost nebo dobře položená otázka.</p>"
  },
  {
    "id": "historie",
    "navTitle": "Odkud se vzala",
    "title": "Tvoříme odjakživa.",
    "lead": "Měnily se nástroje i představy o tvorbě. Potřeba hledat nové možnosti je ale mnohem starší než slovo kreativita.",
    "detailLabel": "Jak se pohled na tvorbu měnil?",
    "kind": "photo",
    "layout": "wide",
    "image": {
      "key": "tools",
      "alt": "Kámen, dřevěná tužka a digitální pero vedle sebe na bílém pozadí.",
      "caption": "Tři různé nástroje. Ilustrační zátiší."
    },
    "details": "<p>Opracovaný kámen, ozdoba, rytina nebo hudební nástroj. To všechno jsou stopy lidí, kteří uměli s tím, co měli kolem sebe, udělat něco nového. Z nálezů nepoznáme přesně, co se jim honilo hlavou. Vidíme ale, že lidská vynalézavost má dlouhou historii.</p>\n<p>Měnil se hlavně způsob, jak jsme si tvorbu vysvětlovali. V evropské tradici se objevovala představa božské inspirace i důraz na řemeslo a dovednost. Později vystoupila do popředí originalita jednotlivce a obraz výjimečného génia.</p>\n<p>Ve 20. století začala tvůrčí myšlení soustavně zkoumat psychologie. Vedle slavných umělců a objevitelů si všímala i učení, práce a běžného života. Otázka už nezněla jen „Kdo má mimořádný dar?“, ale také „Co lidem pomáhá přicházet na nové věci?“</p>"
  },
  {
    "id": "kdo-tvori",
    "navTitle": "Kdo je kreativní",
    "title": "Není jen pro umělce.",
    "lead": "Tvořivost může mít podobu osobního objevu, obyčejného zlepšení i velkého díla.",
    "detailLabel": "Jaké podoby může tvořivost mít?",
    "kind": "people",
    "layout": "purple",
    "image": null,
    "details": "<p>Učitel hledající srozumitelnější vysvětlení. Člověk, který si poradí s malým bytem. Dítě vymýšlející pravidla vlastní hry. Všichni mohou tvořit, i když se tím neživí a jejich nápad nezná nikdo mimo nejbližší okolí.</p>\n<p>Psychologové Kaufman a Beghetto rozlišují osobní objevy při učení, každodenní tvořivost, profesionální tvorbu a výjimečný přínos celému oboru. Nejsou to čtyři škatulky pro čtyři druhy lidí. Spíš připomínka, že tvorba může mít různý dosah a smysl.</p>"
  },
  {
    "id": "prinos",
    "navTitle": "Co nám přináší",
    "title": "K čemu nám je?",
    "lead": "Pomáhá něco vyřešit, sdělit nebo prožít. Třeba najít nové použití pro věc, kterou už máme.",
    "detailLabel": "Kde všude může být přínos?",
    "kind": "photo",
    "layout": "reverse",
    "image": {
      "key": "brick",
      "alt": "Cihla drží tři bílé knihy jako zarážka na bílém pozadí.",
      "caption": "Cihla jako knižní zarážka."
    },
    "details": "<p>Někdy pomůže úplně prakticky. Třeba když potřebujete udržet knihy na místě a všimnete si, že obyčejná cihla může posloužit jako zarážka. Nemusíte pokaždé vynalézat nový předmět. Můžete najít jiné použití pro ten, který už máte.</p>\n<p>Jindy díky ní něco lépe sdělíte nebo si s někým porozumíte. Obrázkový návod může usnadnit první krok. Příběh psaný pro kamaráda může mít hodnotu právě v tom, že mu rozumíte jen vy dva. <strong>Přínos vždycky záleží na situaci a na lidech, pro které tvoříte.</strong></p>"
  },
  {
    "id": "proc-ji-potrebujeme",
    "navTitle": "Proč ji potřebujeme",
    "title": "Co když to půjde jinak?",
    "lead": "Když známá cesta přestane fungovat, hodí se umět hledat další.",
    "detailLabel": "Proč někdy známý postup nestačí?",
    "kind": "photo",
    "layout": "yellow",
    "image": {
      "key": "bottle",
      "alt": "Papírová vlaštovka položená na hrdle skleněné lahve na bílém pozadí.",
      "caption": "Vlaštovka na hrdle lahve."
    },
    "details": "<p>Dokud známý postup dobře funguje, není důvod ho za každou cenu měnit. Jenže někdy se změní podmínky. Máte méně času, menší prostor nebo před sebou problém, se kterým jste se ještě nesetkali. A právě tehdy se hodí umět hledat další možnosti.</p>\n<p>Představte si sousedské setkání. Místnost je malá, rozpočet omezený a lidé se moc neznají. Velká slavnost nepřipadá v úvahu. To ale ještě neznamená, že se nemůžete potkat. Možná jen potřebujete vymyslet jiný důvod, proč spolu začít mluvit.</p>"
  },
  {
    "id": "jak-vznika-napad",
    "navTitle": "Jak vzniká nápad",
    "title": "Nápad potřebuje pár pokusů.",
    "lead": "Zkusit. Podívat se, co funguje. Upravit. A někdy začít znovu.",
    "detailLabel": "Jak postupovat od otázky k pokusu?",
    "kind": "photo",
    "layout": "wide",
    "image": {
      "key": "paper",
      "alt": "Kulička, rozložený papír a vlaštovka vedle sebe na bílém pozadí.",
      "caption": "Tři podoby papíru."
    },
    "details": "<p>Nejdřív potřebujete pochopit, co vlastně řešíte. U sousedského setkání se můžete ptát na program, ale také na to, proč lidé dosud nepřišli. Třeba nezjistíte, že jim chybí větší sál. Zjistíte, že se bojí přijít někam, kde nikoho neznají.</p>\n<p>Tím se změní otázka. Místo „Jak udělat velkou akci?“ hledáte, <strong>jak lidem usnadnit první rozhovor.</strong> Napadne vás výměna receptů, společná mapa čtvrti nebo stůl, u kterého si lidé navzájem opraví drobné věci.</p>\n<p>Pak jednu možnost zkusíte v malém. Sledujete, co funguje, a upravujete ji. Takové střídání hledání a výběru zachycuje i model Double Diamond od Design Council. Ve skutečnosti se jednotlivé kroky často vracejí a prolínají. Není to návod, který musíte pokaždé projít od jedničky do čtyřky.</p>"
  },
  {
    "id": "inspirace",
    "navTitle": "Z čeho nápady rostou",
    "title": "Z čeho nápady rostou?",
    "lead": "Ze spojení věcí, které už znáte. A z pozornosti k tomu, co ostatní snadno přehlédnou.",
    "detailLabel": "Jak pracovat s inspirací?",
    "kind": "photo",
    "layout": "",
    "image": {
      "key": "bridge",
      "alt": "Tužka položená přes dvě růžové gumy jako most na bílém pozadí.",
      "caption": "Tužka přes dvě gumy."
    },
    "details": "<p>Z toho, co znáte, zažijete a čeho si všimnete. Z věty zaslechnuté v tramvaji, z knihy, z nečekané chyby i z obyčejného předmětu na stole. Inspirace nemusí být zvláštní stav. Může začít docela prostou pozorností.</p>\n<p>Když vás něco zaujme, zkuste si říct proč. Místo „Ten plakát je hezký“ třeba „To jedno velké slovo přečtu i z druhé strany ulice“. S takovým postřehem už můžete dál pracovat. Neberete cizí hotový výsledek, ale hledáte princip, který pomůže i vám.</p>\n<p>A někdy stačí spojit dvě známé věci. Tužka a dvě gumy se promění v malý most. Není to převratný vynález, ale jednoduchý způsob, jak si vyzkoušet jiný pohled na něco běžného.</p>"
  },
  {
    "id": "podminky",
    "navTitle": "Co tvoření pomáhá",
    "title": "Dejte nápadu prostor.",
    "lead": "Pomáhají zkušenosti, vlastní zájem a možnost něco vyzkoušet bez okamžitého hodnocení.",
    "detailLabel": "Co pomáhá nápadům vznikat?",
    "kind": "photo",
    "layout": "reverse open",
    "image": {
      "key": "desk",
      "alt": "Otevřený skicák, fialová tužka a lupa na bílém pozadí.",
      "caption": "Skicák, tužka a lupa."
    },
    "details": "<p>Je snazší něco rozvíjet, když se máte o co opřít. Znalosti a zkušenosti dávají nápadům materiál. Ochota měnit pohled vám pomáhá hledat i mimo první řešení. A vlastní zájem dává důvod pokračovat, když se práce zkomplikuje.</p>\n<p>Podobně o tvorbě uvažuje psycholožka Teresa Amabile. Vedle dovedností, způsobu myšlení a motivace zdůrazňuje také prostředí. Záleží na tom, zda máte prostor něco zkusit, položit otázku nebo přinést nedokončený návrh. Nápadům se těžko daří tam, kde je každý první pokus hned konečnou zkouškou.</p>"
  },
  {
    "id": "prekazky",
    "navTitle": "Co nás brzdí",
    "title": "První pokus nemusí být dobrý.",
    "lead": "Má vám hlavně ukázat, co zkusit dál. Klidně začněte nanečisto.",
    "detailLabel": "Co zkusit, když se nedaří?",
    "kind": "photo",
    "layout": "compact",
    "image": {
      "key": "ball",
      "alt": "Zmačkaná papírová kulička na bílém pozadí.",
      "caption": "Papírová kulička."
    },
    "details": "<p>Někdy čekáte na správnou náladu. Jindy vyřadíte každou myšlenku dřív, než dostane tvar. „To už někdo udělal.“ „Je to moc obyčejné.“ „První verze přece musí být dobrá.“ Takové věty umějí práci zastavit ještě před začátkem.</p>\n<p>Zkuste prvnímu pokusu dát menší úkol. Nemusí nikoho nadchnout. Má vám jen ukázat, co je na nápadu zajímavé a kde zatím nefunguje. Místo celé knihy napište jeden rozhovor. Místo dokonalého návrhu si načrtněte tři hrubé možnosti.</p>\n<p>Někdy také pomůže omezení: sto slov, jediná barva, deset minut. Ne jako povinnost být rychle kreativní, ale jako menší prostor, ve kterém se snáz rozhoduje. Pokud vám takové omezení nepomáhá, změňte ho.</p>"
  },
  {
    "id": "rozvijeni",
    "navTitle": "Jak ji rozvíjet",
    "title": "Zkuste to trochu jinak.",
    "lead": "Kreativitu můžete procvičovat na malých každodenních úkolech.",
    "detailLabel": "Jak kreativitu procvičovat?",
    "kind": "practice",
    "layout": "lime",
    "image": null,
    "details": "<p>Nemusíte čekat na velké zadání. Vyberte malou otázku a zkuste k ní najít několik opravdu odlišných odpovědí. Potom jednu rozpracujte a podívejte se, co by ji zlepšilo. Právě vytváření, posuzování a zlepšování nápadů patří i do rámce kreativního myšlení OECD.</p>\n<p>V běžném dni můžete začít třeba takhle:</p>\n<ul><li>Změňte otázku. Místo „Jak to zrychlit?“ zkuste „Co z toho vůbec nemusíme dělat?“</li><li>Najděte tři cesty: levnou, překvapivou a takovou, která zapojí dalšího člověka.</li><li>Vezměte starý nápad a změňte jednu vlastnost. Co se tím zlepší? Co naopak ztratíte?</li></ul>"
  },
  {
    "id": "spolecne",
    "navTitle": "Tvoření s druhými",
    "title": "Každý vidí něco jiného.",
    "lead": "Nejdřív si dejte prostor přemýšlet samostatně. Potom nápady propojte.",
    "detailLabel": "Jak tvořit společně?",
    "kind": "photo",
    "layout": "",
    "image": {
      "key": "pencils",
      "alt": "Svazek barevných pastelek s gumičkou a jedna pastelka vedle na bílém pozadí.",
      "caption": "Pastelky s gumičkou."
    },
    "details": "<p>Jeden zná téma, druhý si všimne nesrozumitelné věty a třetí položí otázku, která nikoho nenapadla. To je na společné tvorbě cenné. Samotné svolání porady ale ještě neznamená, že dostane prostor každý.</p>\n<p>Ve výzkumu skupinového brainstormingu se ukázal problém vzájemného blokování: zatímco jeden mluví, ostatní čekají. Prakticky můžete zkusit nejdřív pár minut psát samostatně. Teprve pak nápady sdílet, spojovat a vybírat.</p>\n<p>A když dáváte zpětnou vazbu, buďte konkrétní. „Tady nevím, komu je text určený“ pomůže druhému člověku pokračovat víc než prosté „Nelíbí se mi to“.</p>"
  },
  {
    "id": "technologie",
    "navTitle": "Technologie a AI",
    "title": "Nástroj se mění. Výběr je na vás.",
    "lead": "Tužka, počítač i AI otevírají možnosti. Vy rozhodujete, co z nich dává smysl.",
    "detailLabel": "Co o tom říká výzkum?",
    "kind": "photo",
    "layout": "reverse",
    "image": {
      "key": "mouse",
      "alt": "Fialová dřevěná tužka a bílá počítačová myš na bílém pozadí.",
      "caption": "Tužka a počítačová myš."
    },
    "details": "<p>S digitálními nástroji můžeme snadněji zkoušet různé verze obrazu, textu nebo zvuku. Generativní AI k tomu přidává další návrhy. Pořád ale záleží na tom, co vyberete, jak s tím budete pracovat a proč to chcete použít.</p>\n<p>Jeden experiment s krátkými příběhy ukázal obě strany této pomoci: přístup k námětům od AI zlepšil průměrné hodnocení jednotlivých příběhů, zároveň si ale byly příběhy navzájem podobnější. Není to závěr o každém nástroji a každé tvorbě. Je to důvod přemýšlet, zda vám pomoc otevírá nové možnosti, nebo vás vede ke snadno dostupné první odpovědi.</p>\n<p>Můžete si proto nejdřív poznamenat vlastní směr a teprve potom porovnávat další návrhy. A pokud obsahují faktická tvrzení, ověřte je.</p>"
  },
  {
    "id": "odpovednost",
    "navTitle": "Nápad a odpovědnost",
    "title": "Kam nápad dopadne?",
    "lead": "Originalita není všechno. Zvažte také, komu nápad pomůže a koho může zasáhnout.",
    "detailLabel": "Na co se před zveřejněním zeptat?",
    "kind": "photo",
    "layout": "wide",
    "image": {
      "key": "domino",
      "alt": "Řada domina přerušená růžovou gumou na bílém pozadí.",
      "caption": "Domino a růžová guma."
    },
    "details": "<p>Poutavá reklama může zaujmout a zároveň někoho zmást. Vtip může část lidí pobavit a jinému člověku ublížit. K přínosu ze začátku se proto vyplatí vracet i ve chvíli, kdy je nápad téměř hotový.</p>\n<p>Zkuste se na něj podívat očima lidí, kterých se dotkne. Komu pomůže? Komu může uškodit? Na čí práci navazuje? A dokážete vysvětlit, proč jste ho udělali právě takhle? Odpovědi nemusí být jednoduché. Pomohou vám ale posoudit víc než jen to, jestli je výsledek neobvyklý.</p>"
  },
  {
    "id": "prvni-krok",
    "navTitle": "Váš první krok",
    "title": "Teď něco vašeho.",
    "lead": "Vyberte jednu drobnost z dnešního dne. Co by mohlo fungovat jinak?",
    "detailLabel": "Rozvinout první pokus",
    "kind": "finish",
    "layout": "",
    "image": null,
    "details": "<p>Vybavte si drobnost, která vás dnes zdržela, zmátla nebo zaujala. Vezměte papír a věnujte jí pár minut.</p>\n<ol><li>Napište, co chcete změnit a pro koho.</li><li>Najděte tři odlišné možnosti.</li><li>Vyberte jednu a zkuste ji v nejmenší možné podobě.</li><li>Podívejte se, co přinesla. Co byste příště upravili?</li></ol>\n<p>Nemusí z toho vzniknout nic velkého. Pro začátek stačí zjistit něco, co jste před pokusem nevěděli.</p>"
  }
] as const;
