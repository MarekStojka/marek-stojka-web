# Archivní směr — portréty odložené

Marek retušované portréty odmítl a místo nich vybral interaktivní vlastní kresbu. Sady V1/V2 i originál jsou zachované, ale nejsou importované do homepage. Níže je historický postup.

# Portréty Marka Stojky

Aktuální web používá čtyři úpravy vlastní fotografie, kterou dodal Marek Stojka (`DSC05772.jpeg`). Původní modelový snímek už není použitý. Originál je zachovaný jako `src/assets/portraits/original/marek-stojka-original.jpeg`; do webu se přímo neimportuje.

- `marek-desim-v2.png` — intenzivní zamračený pohled.
- `marek-humor-v2.png` — otevřený smích.
- `marek-kreativec-v2.png` — hravé zamyšlení s pohledem vzhůru.
- `marek-experimentuji-v2.png` — překvapené objevení.

Všechny čtyři soubory jsou ve `src/assets/portraits/`, mají rozměr 1024 × 1536 a průhledné pozadí. Jsou černobílé, s měkkým ateliérovým světlem a černým tričkem bez potisku. Vznikly vestavěným ImageGen v režimu editace skutečné fotografie. Základní retuš posloužila jako předloha pro další varianty, aby se co nejméně měnila poloha postavy. Sada V2 má na výslovné přání autora výraznější emoce. Jemnější sada V1 zůstává uložená.

Přesná zadání a původ: `PORTRAIT-EDITS-V2.md` (aktuální sada), `PORTRAIT-EDITS.md` (jemná V1). Čtyři snímky lze porovnat na `/navrhy/prehled#portrety`, přepínání vyzkoušet na `/#o-mne`.

## Použití a další úpravy

Zdroje jsou přiřazené k jednotlivým tvářím v `src/data/author.ts`. `portraitsArePlaceholders` je nyní `false`, takže web nepíše, že jde o modelový snímek. Astro vytváří lokální WebP varianty 480/800/1024 px. Všechny čtyři fotografie používají stejnou velikost a pozici v CSS, bez individuálního posouvání.

Při další retuši zachovat identitu, proporce, krátké vlasy, původní natočení těla a hlavy, ruce a tetování. Rozdíl má být především v očích, obočí a ústech. Staré modelové soubory `author-placeholder.png` a `author-cutout.png` jsou pouze zachované historické podklady, do aktuální stránky nejsou importované.
