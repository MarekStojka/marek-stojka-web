import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import { readdirSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, relative, sep } from 'node:path';

const site = process.env.SITE_URL;
if (site && !/^https?:\/\//.test(site)) throw new Error('SITE_URL musí být úplná URL včetně https://');

const localAdmin = {
  name: 'local-content-admin',
  hooks: {
    'astro:config:setup': (options) => {
      if (options.command === 'dev') return keystatic().hooks['astro:config:setup'](options);
    },
    'astro:build:done': ({ dir }) => {
      // public/ is copied verbatim by Astro: remove unpublished uploads as well.
      const contentDir = new URL('./src/content/articles/', import.meta.url);
      const allowed = new Set(readdirSync(contentDir).filter(f => f.endsWith('.json')).map(f => JSON.parse(readFileSync(new URL(f, contentDir), 'utf8'))).filter(a => a.status === 'published' && a.image).map(a => a.image));
      const uploads = fileURLToPath(new URL('media/articles/', dir));
      if (!existsSync(uploads)) return;
      const clean = (folder) => {
        for (const entry of readdirSync(folder, { withFileTypes: true })) {
          const path = join(folder, entry.name);
          if (entry.isDirectory()) clean(path);
          else if (!allowed.has('/media/articles/' + relative(uploads, path).split(sep).join('/'))) rmSync(path);
        }
      };
      clean(uploads);
    },
  },
};

export default defineConfig({
  site,
  output: 'static',
  devToolbar: { enabled: false },
  integrations: [react(), localAdmin],
  vite: { plugins: [tailwindcss()] },
});
