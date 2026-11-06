import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';

export interface AuthorFace {
  id: string;
  title: string;
  anchor: string;
  description: string;
  note: string;
  href?: string;
  linkLabel?: string;
  portrait: { src: string; srcSet: string; width: number; height: number };
}

export default function AuthorFaces({ faces, introduction, biography, experience, authorName, placeholder = true }: { faces: AuthorFace[]; introduction: string; biography: readonly string[]; experience: { title: string; description: string; period?: string }[]; authorName: string; placeholder?: boolean }) {
  const [active, setActive] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);
  const wasDragged = useRef(false);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const fromHash = () => {
      let hash = location.hash.slice(1);
      try { hash = decodeURIComponent(hash); } catch { return false; }
      const index = faces.findIndex((face) => face.anchor === hash);
      if (index >= 0) { setActive(index); return true; }
      return false;
    };
    const fromHero = (event: Event) => {
      const index = faces.findIndex((face) => face.id === (event as CustomEvent<string>).detail);
      if (index >= 0) setActive(index);
    };
    if (!fromHash()) {
      const index = faces.findIndex((face) => face.id === document.documentElement.dataset.authorFace);
      if (index >= 0) setActive(index);
    }
    window.addEventListener('hashchange', fromHash);
    window.addEventListener('author-face-change', fromHero);
    return () => {
      window.removeEventListener('hashchange', fromHash);
      window.removeEventListener('author-face-change', fromHero);
    };
  }, [faces]);

  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (['ArrowDown', 'ArrowRight'].includes(event.key)) next = (index + 1) % faces.length;
    else if (['ArrowUp', 'ArrowLeft'].includes(event.key)) next = (index + faces.length - 1) % faces.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = faces.length - 1;
    else return;
    event.preventDefault();
    buttons.current[next]?.focus({ preventScroll: true });
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const offset = dragStart.current === null ? ((event.clientX - rect.left) / rect.width - .5) * 12 : Math.max(-50, Math.min(50, (event.clientX - dragStart.current) * .25));
    if (dragStart.current !== null && Math.abs(event.clientX - dragStart.current) > 8) wasDragged.current = true;
    event.currentTarget.style.setProperty('--portrait-x', `${offset}px`);
  }
  function finishDrag(event: PointerEvent<HTMLButtonElement>, cancelled = false) {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    if (!cancelled && Math.abs(distance) > 40) setActive((value) => (value + (distance < 0 ? 1 : faces.length - 1)) % faces.length);
    if (cancelled) wasDragged.current = false;
    dragStart.current = null;
    stage.current?.style.setProperty('--portrait-x', '0px');
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  return <section id="o-mne" className="author-faces" aria-labelledby="faces-title" data-active-face={faces[active].id}>
    {faces.map((face) => <span key={face.anchor} id={face.anchor} className="face-anchor" aria-hidden="true" />)}
    <span id="autor" className="face-anchor" aria-hidden="true" />
    <header className="author-face-heading">
      <h2 id="faces-title">{authorName}.</h2>
      <div className="author-face-copy">
        <p className="author-face-intro">{introduction}</p>
        {biography.map((paragraph) => <p className="portrait-biography" key={paragraph}>{paragraph}</p>)}
        <details id="zkusenosti" className="portrait-experience" suppressHydrationWarning><summary>Zkušenosti a projekty<span aria-hidden="true">↗</span></summary>{experience.length ? experience.map((item) => <article key={item.title}><h3>{item.title}</h3>{item.period && <p>{item.period}</p>}<p>{item.description}</p></article>) : <p>Konkrétní praxi a vybrané projekty tu ještě doplním.</p>}</details>
      </div>
    </header>
    <figure className="author-portrait">
      <div className="portrait-stage" ref={stage} onPointerMove={move} onPointerLeave={() => { if (dragStart.current === null) stage.current?.style.setProperty('--portrait-x', '0px'); }}>
        <div className="portrait-light" aria-hidden="true" />
        <button type="button" className="portrait-person" aria-label="Přepnout na další tvář — kliknutím nebo tažením do strany" onPointerDown={(event) => {
          if (event.button !== 0 || dragStart.current !== null) return;
          dragStart.current = event.clientX;
          wasDragged.current = false;
          event.currentTarget.setPointerCapture(event.pointerId);
        }} onPointerUp={(event) => finishDrag(event)} onPointerCancel={(event) => finishDrag(event, true)} onClick={() => {
          if (!wasDragged.current) setActive((value) => (value + 1) % faces.length);
          wasDragged.current = false;
        }}>
          {faces.map((face, index) => <img key={face.id} src={face.portrait.src} srcSet={face.portrait.srcSet} sizes="(max-width: 800px) 85vw, 580px" width={face.portrait.width} height={face.portrait.height} loading="lazy" decoding="async" draggable={false} className={`portrait-layer ${index === active ? 'is-current' : ''}`} alt={index === active ? (placeholder ? 'Dočasný modelový portrét pro návrh; nejde o fotografii Marka Stojky.' : `${authorName} — ${face.title}.`) : ''} aria-hidden={index !== active} />)}
        </button>
        <div className="face-options" role="tablist" aria-label="Čtyři polohy autorovy tvorby">
          {faces.map((face, index) => <button className={`face-option face-option-${face.id} ${index === active ? 'is-current' : ''}`} key={face.id} type="button" role="tab" id={`face-button-${face.id}`} ref={(element) => { buttons.current[index] = element; }} aria-selected={index === active} aria-controls={`face-description-${face.id}`} tabIndex={index === active ? 0 : -1} onPointerEnter={(event) => {
            if (event.pointerType === 'mouse' && matchMedia('(hover: hover) and (pointer: fine)').matches && dragStart.current === null) setActive(index);
          }} onFocus={() => setActive(index)} onClick={() => setActive(index)} onKeyDown={(event) => onKey(event, index)}>{face.title}</button>)}
        </div>
      </div>
      {placeholder && <figcaption>Modelový portrét · vlastní fotografie doplním.</figcaption>}
    </figure>
    <div className="face-panels" aria-live="polite">
      {faces.map((face, index) => <div className="face-description" data-title={face.title} key={face.id} id={`face-description-${face.id}`} role="tabpanel" aria-labelledby={`face-button-${face.id}`} hidden={index !== active}>
        <p>{face.description}</p>
        {face.href && <a href={face.href}>{face.linkLabel}<span aria-hidden="true">↗</span></a>}
      </div>)}
    </div>
  </section>;
}
