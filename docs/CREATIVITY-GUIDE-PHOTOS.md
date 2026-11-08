# Fotografická zátiší průvodce kreativitou

Pracovní revize 8. 11. 2026 pro `/kreativec/magazin/obecne`.

Autor výslovně požaduje reálně sestavitelné a vyfotitelné motivy v duchu banánu s víčky. Nové obrázky jsou **AI fotografické studie**, nikoli fotografie pořízené Markem. Takto jsou označené i u obou obrázků na stránce. Zobrazují běžné, fyzicky uskutečnitelné aranže. Původní papírová koule v úvodu zůstává.

## Cihla jako zarážka knih

- Soubor: `src/assets/creativity-guide/cihla-knihy-v1.png`
- Originál: `/Users/marekstojka/.codex/generated_images/01a1ba56-3719-7482-898a-03a733e8f283/exec-a4877f3f-6ca3-4175-bb34-2826a23c2ae6.png`
- 1536 × 1024 px, neprůhledné bílé pozadí, vestavěný ImageGen.
- Sekce „Co nám přináší?“: předmět dostává jinou roli, aniž by měnil fyzickou podobu.
- Aranž pro skutečné focení: světlá betonová cihla, tři knihy s čistými přebaly, bílé pozadí a měkké světlo.

Přesný prompt:

```text
Use case: product-mockup. Asset: editorial photographic example for a creativity guide on a minimalist white website, landscape 3:2. A rough rectangular light-gray concrete brick being used as a clever bookend, supporting three upright thin hardcover books with blank matte white and pale gray covers, one leaning gently against the brick. Clear, plausible simple arrangement making the brick's new purpose immediately understandable. Seamless pure white background and floor, restrained gray shadows, soft neutral studio light, front three-quarter view, subject fully visible centered occupying 65% of frame with generous white space. High-end tactile still-life photography. Grayscale only, no orange, no text on book spines, no lettering, no logos, no hands, no people, no watermark, no border.
```

## Papírová loďka v hrnku

- Soubor: `src/assets/creativity-guide/hrnek-lodka-v1.png`
- Originál: `/Users/marekstojka/.codex/generated_images/01a1ba56-3719-7482-898a-03a733e8f283/exec-45d1e0c3-6508-49f0-98de-b767face855b.png`
- 1536 × 1024 px, neprůhledné bílé pozadí, vestavěný ImageGen.
- Sekce „Z čeho nápady rostou?“: propojení dvou obyčejných předmětů.
- Aranž pro skutečné focení: bílý hrnek s podšálkem, voda a malá složená papírová loďka. Loďku vyfotit před nasáknutím.

Přesný prompt:

```text
Use case: photorealistic-natural. Asset: landscape 3:2 editorial still-life photo for a creativity website. This must be a completely practical arrangement of real everyday objects that a person could set up and photograph, not a surreal render. A real simple white ceramic teacup with a handle on a white saucer, filled almost to the rim with still water, and one tiny ordinary folded white paper boat physically floating on that water. Three-quarter camera view slightly from above so the water surface and folded boat are clearly visible. Real porous paper with a subtly damp lower edge, normal cup proportions, realistic small boat size that fits comfortably inside the rim. Pure white seamless tabletop and background, gentle natural soft studio light, believable contact shadow beneath saucer. Main arrangement occupies roughly 65 percent of the landscape frame, ample breathing room. Neutral white and gray palette, no orange. No waves, no ocean, no landscapes, no fantasy elements, no text, no logos, no watermark, no border. Elegant playful editorial photography in the spirit of arranging bottle caps on a banana. Clearly physically buildable.
```

## Výběr a zpracování

Před upřesněním vznikl také motiv chodícího papírového domu. Do projektu ani stránky nebyl zařazen; neodpovídá požadovanému směru jednoduchých zátiší. Originál zůstává v adresáři generovaných obrázků.

Vybrané originály jsou zkopírované beze změn. Astro Image připravuje varianty WebP 400, 650 a 900 px; na stránce jsou přes `object-fit: contain` bez ořezu, s popisem a odloženým načtením. Bez další retuše nebo filtrů.
