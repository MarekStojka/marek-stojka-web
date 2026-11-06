#!/bin/zsh
cd -- "${0:A:h}" || exit 1
export PATH="$PWD/.runtime/node/bin:$PATH"
export ASTRO_TELEMETRY_DISABLED=1
if /usr/sbin/lsof -nP -iTCP:4321 -sTCP:LISTEN >/dev/null 2>&1; then
  print 'Náhled už běží na http://127.0.0.1:4321/'
  exit 0
fi
if ! command -v node >/dev/null 2>&1; then
  print 'Chybí Node.js. Je potřeba obnovit lokální prostředí .runtime/node.'
  exit 1
fi
print 'Náhled: http://127.0.0.1:4321/ — Astro jej spustí na pozadí.'
exec node node_modules/astro/bin/astro.mjs dev --host 127.0.0.1 --port 4321
