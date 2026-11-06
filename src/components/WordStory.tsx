import { useState, type KeyboardEvent } from 'react';

// Working microfiction for the interaction, not excerpts from Marek's books.
const versions = [
  { word: 'stín', continuation: 'Přišel dřív než já.' },
  { word: 'kurýr', continuation: 'Tvrdil, že mi veze trpělivost. Měl zpoždění.' },
  { word: 'dvojník', continuation: 'Tvrdil, že já jsem ten druhý.' },
  { word: 'včerejšek', continuation: 'Přišel si pro to, co jsem nestihl.' },
  { word: 'strach', continuation: 'Poprvé vypadal menší než já.' },
  { word: 'nápad', continuation: 'Neměl klíče. Stejně se dostal dovnitř.' },
] as const;

export default function WordStory() {
  const [index, setIndex] = useState(0);
  const version = versions[index];
  const change = (step: number) => setIndex((current) => (current + step + versions.length) % versions.length);
  function key(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') { event.preventDefault(); change(1); }
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') { event.preventDefault(); change(-1); }
    else if (event.key === 'Home') { event.preventDefault(); setIndex(0); }
  }
  return <section id="jedno-slovo" className="word-story" aria-labelledby="word-story-title">
    <header className="word-story-heading"><h2 id="word-story-title">Změň jednu věc.</h2><p>Jedno slovo. Jiný příběh.</p></header>
    <div className="word-story-stage">
      <p className="word-story-sentence">Za dveřmi stál<br />můj{' '}
        <button type="button" className="word-story-trigger" onClick={() => change(1)} onKeyDown={key} aria-label={`Změnit slovo ${version.word}`} aria-describedby="word-story-hint">
          <span key={version.word} className="word-story-word">{version.word}</span>
        </button><span aria-hidden="true">.</span>
      </p>
      <p className="word-story-continuation" key={index}>{version.continuation}</p>
    </div>
    <p className="word-story-hint" id="word-story-hint">Klepněte na podtržené slovo.</p>
    <p className="visually-hidden" role="status" aria-live="polite" aria-atomic="true">Za dveřmi stál můj {version.word}. {version.continuation}</p>
  </section>;
}
