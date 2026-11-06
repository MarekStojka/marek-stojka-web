import { withBase } from '../lib/site-path';
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { worlds } from '../data/worlds';
import WorldArt, { type TileArtwork } from './WorldArt';

const opensWithTransition = (id:string) => ['temnota','absurdita','napady'].includes(id);
const supportsHover = () => matchMedia('(hover: hover) and (pointer: fine) and (min-width: 701px)').matches;

export default function WorldAccordion({ tileArtwork = {}, instanceId = 'main' }: { tileArtwork?: Record<string, TileArtwork>; instanceId?: string }) {
  const [active, setActive] = useState<number | null>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const pointer = useRef({ x: 0, y: 0, mx: 0, my: 0 });

  useEffect(() => {
    if (active === null) return;
    const face = worlds[active].id;
    document.documentElement.dataset.authorFace = face;
    window.dispatchEvent(new CustomEvent('author-face-change', { detail: face }));
  }, [active]);

  useEffect(() => {
    if (active === null || !matchMedia('(max-width: 700px)').matches) return;
    const request = requestAnimationFrame(() => {
      const card = buttons.current[active]?.closest('article');
      if (!card) return;
      window.scrollTo({
        top: window.scrollY + card.getBoundingClientRect().top - 12,
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      });
    });
    return () => cancelAnimationFrame(request);
  }, [active]);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const card = (event.target as HTMLElement).closest('.world');
    const rect = card?.getBoundingClientRect() ?? bounds;
    pointer.current = { x: event.clientX - bounds.left, y: event.clientY - bounds.top,
      mx: (event.clientX - rect.left) / rect.width - .5, my: (event.clientY - rect.top) / rect.height - .5 };
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      const el = stage.current;
      if (el) {
        el.style.setProperty('--cursor-x', `${pointer.current.x}px`);
        el.style.setProperty('--cursor-y', `${pointer.current.y}px`);
        el.style.setProperty('--mx', String(pointer.current.mx));
        el.style.setProperty('--my', String(pointer.current.my));
      }
      frame.current = null;
    });
  }

  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (['ArrowRight', 'ArrowDown'].includes(event.key)) next = (index + 1) % worlds.length;
    else if (['ArrowLeft', 'ArrowUp'].includes(event.key)) next = (index + worlds.length - 1) % worlds.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = worlds.length - 1;
    else return;
    event.preventDefault();
    buttons.current[next]?.focus();
  }

  return <div ref={stage} className={`worlds ${active === null ? 'is-resting' : 'has-active'}`} onPointerMove={move} onPointerLeave={(event) => {
    if (event.pointerType === 'mouse' && supportsHover() && !event.currentTarget.contains(document.activeElement)) setActive(null);
  }} onBlur={(event) => { if (supportsHover() && !event.currentTarget.contains(event.relatedTarget)) setActive(null); }} onKeyDown={(event) => {
    if (event.key === 'Escape') {
      if (active !== null) buttons.current[active]?.focus();
      setActive(null);
    }
  }}>
    {worlds.map((world, index) => <article key={world.id} data-paper-entry={world.id === 'napady' ? '' : undefined} data-paper-href={world.id === 'napady' ? withBase(world.target) : undefined} data-paint-entry={world.id === 'absurdita' ? '' : undefined} data-paint-href={world.id === 'absurdita' ? withBase(world.target) : undefined} data-ash-entry={world.id === 'temnota' ? '' : undefined} data-ash-href={world.id === 'temnota' ? withBase(world.target) : undefined} className={`world world-${world.id} ${active === index ? 'is-active' : ''}`} onPointerEnter={(event) => { if (event.pointerType === 'mouse' && supportsHover()) setActive(index); }} onClick={(event) => {
      if (!opensWithTransition(world.id) && !(event.target as HTMLElement).closest('a, button')) setActive(index);
    }}>
      <WorldArt artwork={tileArtwork[world.id]} />
      <h2><button type="button" ref={(el) => { buttons.current[index] = el; }} aria-expanded={active === index} aria-controls={`${instanceId}-panel-${world.id}`} onFocus={() => { if ((!opensWithTransition(world.id)) || matchMedia('(min-width: 701px)').matches) setActive(index); }} onKeyDown={(event) => onKey(event, index)} onClick={(event) => {
        if (opensWithTransition(world.id)) return;
        if (event.detail === 0) setActive(active === index ? null : index);
        else setActive(index);
      }}><span>{world.title}</span><span className="toggle-mark" aria-hidden="true">{active === index ? '−' : '+'}</span></button></h2>
      <div id={`${instanceId}-panel-${world.id}`} className="world-details" inert={active !== index}>
        <p className="world-tagline">{world.tagline}</p>
        <p className="world-description">{world.description}</p>
        {<a className="world-cta" href={withBase(world.target)} data-paper-entry={world.id === 'napady' ? '' : undefined} data-ash-entry={world.id === 'temnota' ? '' : undefined} data-paint-entry={world.id === 'absurdita' ? '' : undefined}>{world.cta}<span aria-hidden="true">↗</span></a>}
      </div>
    </article>)}
    <span className="world-cursor" aria-hidden="true">↗</span>
  </div>;
}
