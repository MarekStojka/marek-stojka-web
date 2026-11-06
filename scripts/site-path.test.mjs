import assert from 'node:assert/strict';
import { test } from 'node:test';
import { withBase, samePage } from '../src/lib/site-path.ts';

test('root and subdirectory hosting retain paths, fragments and queries', () => {
  for (const base of ['/', '/marek-stojka-web', '/marek-stojka-web/']) {
    const prefix = base.replace(/\/+$/, '');
    for (const path of ['/', '/kreativec', '/temnota#moonika', '/media/articles/obraz.webp', '/?a=b']) {
      assert.equal(withBase(path, base), `${prefix}${path}`);
      assert.equal(withBase(withBase(path, base), base), `${prefix}${path}`);
    }
    for (const path of ['#obsah', 'mailto:Marka.st@seznam.cz', 'tel:+420739455437', 'https://www.besohaj.cz/', '//example.com/image.png']) {
      assert.equal(withBase(path, base), path);
    }
  }
});

test('animated entries survive a trailing-slash redirect and relative targets', () => {
  assert.ok(samePage('/marek-stojka-web/temnota/', '/marek-stojka-web/temnota#moonika'));
  assert.ok(samePage('/marek-stojka-web/humor/', 'https://marekstojka.github.io/marek-stojka-web/humor'));
  assert.ok(samePage('/', '/'));
  assert.ok(!samePage('/marek-stojka-web/', '/marek-stojka-web/kreativec'));
});
