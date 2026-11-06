# Volné odřezky v humoru

Vestavěný ImageGen, nový fotografický objekt s průhledným pozadím. Soubor `src/assets/humor/odrezek-magenta-v1.png`. Originální výstup zůstává v adresáři generated_images. Je to AI fotografická studie, nikoli Markova kresba nebo fotografie.

Na stránce se používá tentýž izolovaný kousek v několika velikostech a natočeních, s jemným stínem. Žádná změna autorských originálů. Astro optimalizuje PNG na WebP se zachováním průhlednosti.

## Přesný prompt

Use case: product-mockup. Asset: photorealistic isolated decorative object for a minimalist author's website. A SINGLE real curled shaving from a sharpened MAGENTA colored pencil, top-down macro studio photograph. Thin pale natural wood with visible fibers, scalloped fan-shaped outer edge edged in rich magenta pigment, curled into a loose partial spiral, with subtle thickness and tiny imperfections. One object only, no pencil, no heap, no other fragments. Centered, fully visible with generous transparent margins, nearly square composition. Soft directional studio light from upper left. Genuinely transparent background with alpha, no white rectangle or checkerboard baked into image. Restrained realistic contact shadow, not a cartoon, not CGI, no text, no watermark. Avoid orange pigment.

`transparent_background: true`. Čtyři viditelné kusy v rámci humorové stránky: dva v hero, jeden u obsahu vybrané knihy, jeden v patičce. Přesunutí je místní, neukládá se. Myš a dotyk přes pointer capture, klávesnice šipkami / Shift+šipky, Home vrací výchozí polohu; klepnutí posune kousek o 35 px. Pohyb se omezuje na příslušnou oblast stránky.
