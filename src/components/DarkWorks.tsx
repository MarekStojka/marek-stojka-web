import { useRef, useState, type KeyboardEvent } from 'react';

const defaultWorks = [
  { id: 'moonika', title: 'Moonika', status: 'Vydání 2027', href: '#moonika', link: 'O knize' },
  { id: 'mistrovstvi-smichu', title: 'Mistrovství smíchu', status: 'Hotovo 70 %', href: '#mistrovstvi-smichu', link: 'O knize' },
  { id: 'armelie', title: 'Armelie', status: 'Vydání 2027–2028', href: '#armelie', link: 'O knize' },
  { id: 'pohovor', title: 'Pohovor', status: 'Hotovo 10 %', href: '#pohovor', link: 'O knize' },
  { id: 'sraz-zitra', title: 'Sraz zítra', status: 'Hotovo 40 %', href: '#sraz-zitra', link: 'O knize' },
] as const;

type Work = { id: string; title: string; status?: string; href?: string; link?: string };

export default function DarkWorks({ works = defaultWorks }: { works?: readonly Work[] }) {
  const [active, setActive] = useState(0);
  const selected = useRef(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function select(index: number) {
    selected.current = index;
    setActive(index);
    window.dispatchEvent(new CustomEvent('book:select', { detail: works[index].id }));
  }
  function key(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % works.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + works.length - 1) % works.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = works.length - 1;
    else if (event.key === 'Escape') { setActive(selected.current); return; }
    else return;
    event.preventDefault(); buttons.current[next]?.focus({ preventScroll: true });
  }
  return <div className="dark-works dark-works-library has-selection" aria-label="Moje knihy a rozpracovaná tvorba" onPointerLeave={(event) => {
    if (event.pointerType === 'mouse' && !event.currentTarget.contains(document.activeElement)) setActive(selected.current);
  }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setActive(selected.current); }}>
    {works.map((work, index) => <article className={`dark-work ${active === index ? 'is-active' : ''}`} key={work.id} onClick={() => select(index)} onPointerEnter={(event) => {
      if (event.pointerType === 'mouse' && matchMedia('(hover: hover) and (pointer: fine)').matches) setActive(index);
    }}>
      {work.status && <p className="dark-work-status">{work.status}</p>}
      <h2><button type="button" ref={(element) => { buttons.current[index] = element; }} onFocus={() => setActive(index)} onClick={() => select(index)} onKeyDown={(event) => key(event, index)} aria-expanded={active === index} aria-controls={`work-panel-${work.id}`}>
        {work.title}
      </button></h2>
      <div className="dark-work-detail" id={`work-panel-${work.id}`} inert={active !== index}>
        {work.href ? <a href={work.href} onClick={() => select(index)}>{work.link}<span aria-hidden="true">↗</span></a> : null}
      </div>
    </article>)}
  </div>;
}
