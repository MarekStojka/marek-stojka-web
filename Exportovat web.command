#!/bin/zsh
set -eu
cd -- "${0:A:h}"
export PATH="$PWD/.runtime/node/bin:$PATH"
export ASTRO_TELEMETRY_DISABLED=1
# Portable export for the root of a domain. GitHub Pages gets its base in deploy.yml.
export SITE_BASE=/
print 'Připravuji hotový web pro hosting…'
npm run build
archive_dir=$(mktemp -d)
trap 'rm -rf -- "$archive_dir"' EXIT
(cd dist && zip -qr "$archive_dir/web-html.zip" .)
mkdir -p exports
mv -- "$archive_dir/web-html.zip" exports/web-html.zip
print 'Hotovo: exports/web-html.zip — na hosting nahrajte celý rozbalený obsah.'
