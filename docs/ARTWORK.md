# Kresby Marka Stojky a AI studie

**Historický směr:** aktuální hero bylo na nový pokyn nahrazeno čtyřmi bílými fotografiemi kupiček; viz PILE-PHOTOS.md. Kresby i AI studie zůstávají uložené pro možné budoucí využití.

Uživatel potvrdil, že přiložené kresby sám tvoří. Originály jsou v `src/assets/artwork/marek-stojka-hudebnik.png` a `marek-stojka-surrealni-portret.png`. V dlaždici „Mám rád humor“ se střídají při otevření/zavření; samotné kresby nejsou překreslené ani měněné. Astro vytváří optimalizované WebP pro web. Barevnost zůstává uvnitř dlaždice, rámec webu je neutrální.

`src/assets/artwork/ai-surrealni-kreativec-v1.png` je nový motiv vytvořený vestavěným ImageGen na uživatelovu žádost. Je to **AI studie podle uživatelových referencí**, nikoli kresba Marka Stojky. Zatím je pouze na lokálním pracovním plátně pro porovnání; homepage používá originály autora.

## Přesný prompt — vestavěný ImageGen

Use case: illustration-story. Create one NEW original illustration for a Czech creative author's personal website. The supplied two images are artworks by the user and are STYLE references only. Follow their handmade visual language: thick confident irregular black ink contours, flat cyan turquoise / hot magenta / lavender / mustard yellow / warm tan palette, visible rough paper and stippled pigment grain, playful surreal faces, warped anatomy and impossible visual puns. New composition: a mischievous fictional adult creative with oversized round spectacles, face in three-quarter view; a single black pencil passes through an impossible loop formed by his lavender hair, turns into a small mustard-yellow fish at the top. A tiny second face peeks from his collar. Broad wavy turquoise and magenta bands flow diagonally through the background. Strong graphic shapes, surprising humor, flat handmade illustration; no photorealism, no 3D, no smooth digital gradient, no generic vector polish. Portrait format, face centered in upper middle, lower portion quieter dark turquoise and black for a website title overlay added later in code. Do not copy a reference character or composition. No text, letters, numbers, signatures or watermark.

## Aktuální využití — interaktivní autorská sekce

Marek zvolil vlastní kresby místo retušovaných portrétů. Dva originály jsou optimalizované na WebP a vykreslené v AuthorArtwork.tsx. Canvas oddělí tmavou linku od barevných pigmentů a nad ní odhaluje původní barvu; originály se nepřepisují. Kresby se neoznačují jako AI, protože jsou Markovým dílem. Kruhový výřez zachovává proporce; nenahrazuje originální kompozici.
