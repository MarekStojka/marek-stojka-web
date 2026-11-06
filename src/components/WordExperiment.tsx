import { useState } from 'react';

const pairs = [['ticho', 'vlastní názor', 'mělo'], ['stín', 'den volna', 'měl'], ['budík', 'strach z rána', 'měl'], ['otazník', 'poslední slovo', 'měl'], ['výtah', 'krizi směru', 'měl'], ['nápad', 'návod k použití', 'měl']];
export default function WordExperiment() {
  const [index, setIndex] = useState(0);
  return <div className="word-experiment"><span className="mono">MALÝ GENERÁTOR VELKÝCH OTÁZEK</span><p aria-live="polite" aria-atomic="true">Co kdyby {pairs[index][2]} <strong>{pairs[index][0]}</strong><br />{pairs[index][1]}?</p><button type="button" onClick={() => setIndex((index + 1) % pairs.length)}>Ještě jednu možnost <span aria-hidden="true">↻</span></button><span className="experiment-counter mono">{String(index + 1).padStart(2, '0')} / {String(pairs.length).padStart(2, '0')}</span></div>;
}
