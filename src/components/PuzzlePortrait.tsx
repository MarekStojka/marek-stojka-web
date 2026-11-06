import { useEffect, useRef, useState, type CSSProperties } from 'react';

// These two squares contain opposite parts of the face in the original photograph.
const columns = 5;
const pair = [7, 8];
const ordered = Array.from({ length: columns * columns }, (_, i) => i);
const mixed = ordered.map(i => i === pair[0] ? pair[1] : i === pair[1] ? pair[0] : i);
interface Props { src: string; srcSet: string; }
export default function PuzzlePortrait({ src, srcSet }: Props) {
 const [aligned, setAligned] = useState(false);
 const [assembled, setAssembled] = useState(false);
 const [reduced, setReduced] = useState(false);
 const root = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const preference = () => { setReduced(media.matches); if (media.matches) setAssembled(true); };
  preference();media.addEventListener('change', preference);
  const observer = new IntersectionObserver(entries => {
   if (entries[0].isIntersecting) { setAssembled(true); observer.disconnect(); }
  }, { threshold: .2 });
  if (root.current) observer.observe(root.current);
  return () => { observer.disconnect();media.removeEventListener('change', preference); };
 }, []);
 const placement = aligned ? ordered : mixed;
 return <div className={`puzzle-portrait ${assembled ? 'is-assembled' : ''} ${reduced ? 'is-reduced' : ''}`} ref={root}>
  <button className="portrait-grid" type="button" onClick={() => setAligned(value => !value)} aria-pressed={aligned} aria-label={aligned ? 'Znovu prohodit dva dílky portrétu' : 'Srovnat dva prohozené dílky portrétu'}>
   <span className="visually-hidden">Portrét Marka Stojky rozdělený do pětadvaceti čtverců.</span>
   {ordered.map(piece => {
    const slot = placement.indexOf(piece);
    const col = piece % columns, row = Math.floor(piece / columns);
    return <span key={piece} aria-hidden="true" className={`portrait-piece ${pair.includes(piece) ? 'is-swapped' : ''}`} style={{
     left: `${(slot % columns) * 20}%`, top: `${Math.floor(slot / columns) * 20}%`,
     '--piece-x': `${((piece * 7) % 5 - 2) * 14}px`,
     '--piece-y': `${((piece * 3) % 7 - 3) * 13}px`,
     '--piece-r': `${((piece * 11) % 9 - 4) * 2}deg`,
     '--piece-delay': `${piece * 27}ms`,
    } as CSSProperties}>
     <span className="portrait-piece-image" style={{ left: `${-col * 100}%`, top: `${-row * 100}%` }}><img src={src} srcSet={srcSet} sizes="(max-width: 700px) 135vw, 66vw" alt="" loading="lazy" decoding="async" draggable="false" /></span>
    </span>;
   })}
  </button>

  <span className="visually-hidden" aria-live="polite">{aligned ? 'Portrét je složený správně.' : 'Dva dílky obličeje jsou prohozené.'}</span>
 </div>;
}
