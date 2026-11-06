# Papírová série a přechod do kreativity

Aktuální pokyn autora: sedm rubrik kreativity používá jednotné fotografie papíru. Vzniklo sedm samostatných AI studií se stejným výchozím snímkem, světlem a kompozicí: zmačkaný papír / schéma na papíru / magenta-fialové čmárání / vlaštovka / prostřižené okénko / otevřená papírová knížka / roztržené části spojené fialovou sponkou. Původ a přesné prompty v PAPER-PHOTOS.md; soubory src/assets/creative-paper a mapování creative-photos.ts.

Všechny mají skutečnou alfu a již se nezobrazují přes multiply: papír zůstává bílý. Na následný požadavek zmenšené na width:min(65%,300px) v rozcestníku i článkových dlaždicích. Větší volný prostor navazuje na kupičky hlavní stránky.

PaperTransition.astro přidává vstup přes celou dlaždici Jsem kreativec v obou homepage harmonikách: fotografie, název i CTA. Od kliknutí se rozšiřuje černá díra s potrhaným světlým okrajem a vlákny. Po plném zakrytí naviguje na /kreativec a 600 ms odhaluje obsah. Původní stránka zůstává pod trhlinou do zakrytí. Lehká SVG/rAF geometrie, nikoli fotografie či fyzikální simulace. Zachovat ClientRouter/persist, modifikované kliknutí, Escape před navigací a přímý vstup při reduced motion. Bez pauzy, beze změn popela a humoru.
