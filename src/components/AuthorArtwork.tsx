import { useEffect, useRef, useState, type PointerEvent } from 'react';

type World = { id: string; anchor: string; title: string; description: string; href?: string; linkLabel?: string };
type Drawing = { src: string; alt: string };
type Props = { drawings: Drawing[]; worlds: readonly World[]; authorName: string; introduction: string; biography: readonly string[]; experience: { title: string; description: string; period?: string }[] };

/** The original drawings stay intact. Ink extraction and color reveals are display effects only. */
export default function AuthorArtwork({ drawings, worlds, authorName, introduction, biography, experience }: Props) {
  const [drawing, setDrawing] = useState(0);
  const [colored, setColored] = useState(false);
  const [ready, setReady] = useState(false);
  const surface = useRef<HTMLCanvasElement>(null);
  const painting = useRef({ reveal: (_x: number, _y: number) => {}, render: () => {} });
  const allColor = useRef(false);

  useEffect(() => {
    const openWorld = () => {
      const id = location.hash.slice(1);
      const world = worlds.find((item) => item.anchor === id);
      if (world) {
        const detail = document.getElementById(`drawing-world-${world.id}`);
        if (detail instanceof HTMLDetailsElement) detail.open = true;
      }
    };
    openWorld();
    window.addEventListener('hashchange', openWorld);
    document.addEventListener('astro:page-load', openWorld);
    return () => { window.removeEventListener('hashchange', openWorld); document.removeEventListener('astro:page-load', openWorld); };
  }, [worlds]);

  useEffect(() => {
    const canvas = surface.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    let disposed = false, frame = 0;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const image = new Image();
    const ink = document.createElement('canvas');
    const mask = document.createElement('canvas');
    const color = document.createElement('canvas');
    const size = 900;
    for (const layer of [canvas, ink, mask, color]) layer.width = layer.height = size;
    const inkCtx = ink.getContext('2d', { willReadFrequently: true });
    const maskCtx = mask.getContext('2d');
    const colorCtx = color.getContext('2d');
    const marks: { x: number; y: number; time: number }[] = [];
    setReady(false);
    function render() {
      if (disposed || !ctx || !inkCtx || !maskCtx || !colorCtx || !image.complete || !image.naturalWidth) return;
      const now = performance.now();
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(ink, 0, 0);
      colorCtx.clearRect(0, 0, size, size);
      // Crop the scanned image's narrow side borders, keeping the original composition.
      const crop = image.naturalWidth * .025;
      colorCtx.drawImage(image, crop, (image.naturalHeight - image.naturalWidth + crop * 2) * .35, image.naturalWidth - crop * 2, image.naturalWidth - crop * 2, 0, 0, size, size);
      if (!allColor.current) {
        maskCtx.clearRect(0, 0, size, size);
        while (marks.length && now - marks[0].time > 1800) marks.shift();
        for (const mark of marks) {
          const strength = reduced.matches ? 1 : Math.min(1, (1800 - now + mark.time) / 750);
          const radius = size * .22;
          const gradient = maskCtx.createRadialGradient(mark.x, mark.y, radius * .48, mark.x, mark.y, radius);
          gradient.addColorStop(0, `rgba(0,0,0,${strength})`);
          gradient.addColorStop(1, 'rgba(0,0,0,0)');
          maskCtx.fillStyle = gradient;
          maskCtx.fillRect(mark.x - radius, mark.y - radius, radius * 2, radius * 2);
        }
        colorCtx.globalCompositeOperation = 'destination-in';
        colorCtx.drawImage(mask, 0, 0);
        colorCtx.globalCompositeOperation = 'source-over';
      }
      ctx.drawImage(color, 0, 0);
      if (marks.length && !allColor.current && !reduced.matches && !document.hidden) frame = requestAnimationFrame(render);
      else frame = 0;
    }
    image.onload = () => {
      if (disposed || !inkCtx) return;
      const crop = image.naturalWidth * .025;
      inkCtx.drawImage(image, crop, (image.naturalHeight - image.naturalWidth + crop * 2) * .35, image.naturalWidth - crop * 2, image.naturalWidth - crop * 2, 0, 0, size, size);
      const pixels = inkCtx.getImageData(0, 0, size, size);
      for (let i = 0; i < pixels.data.length; i += 4) {
        const max = Math.max(pixels.data[i], pixels.data[i + 1], pixels.data[i + 2]);
        // Remove pigment and paper; preserve only the author's black ink.
        pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = 24;
        pixels.data[i + 3] = Math.round(Math.max(0, Math.min(1, (88 - max) / 45)) * 255);
      }
      inkCtx.putImageData(pixels, 0, 0);
      setReady(true);
      render();
    };
    painting.current = {
      render: () => { cancelAnimationFrame(frame); render(); },
      reveal: (x, y) => {
        if (allColor.current) return;
        if (reduced.matches) marks.length = 0;
        marks.push({ x: x * size, y: y * size, time: performance.now() });
        if (marks.length > 36) marks.shift();
        if (!frame) render();
      },
    };
    const preference = () => { marks.length = 0; cancelAnimationFrame(frame); render(); };
    const visibility = () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else render(); };
    reduced.addEventListener('change', preference);
    document.addEventListener('visibilitychange', visibility);
    image.src = drawings[drawing].src;
    return () => { disposed = true; cancelAnimationFrame(frame); reduced.removeEventListener('change', preference); document.removeEventListener('visibilitychange', visibility); };
  }, [drawing, drawings]);

  function reveal(event: PointerEvent<HTMLDivElement>) {
    const r = event.currentTarget.getBoundingClientRect();
    painting.current.reveal((event.clientX - r.left) / r.width, (event.clientY - r.top) / r.height);
  }
  return <section className="author-artwork" id="o-mne" aria-labelledby="author-title">
    <span id="autor" className="art-anchor" />
    {worlds.map((world) => <span key={world.id} id={world.anchor} data-disclosure={`drawing-world-${world.id}`} className="art-anchor" />)}
    <figure className="drawing-figure">
      <div className={`drawing-stage ${ready ? 'is-ready' : ''}`} onPointerMove={reveal} onPointerDown={reveal}>
        <img src={drawings[drawing].src} alt={drawings[drawing].alt} width="900" height="900" loading="lazy" className="drawing-fallback" />
        <canvas ref={surface} className="drawing-canvas" aria-hidden="true" />
      </div>
      <figcaption className="drawing-tools">
        <button type="button" aria-pressed={colored} disabled={!ready} onClick={() => { allColor.current = !allColor.current; setColored(allColor.current); painting.current.render(); }}>{colored ? 'Zpátky k linkám' : 'Odhalit všechny barvy'}</button>
        <button type="button" onClick={() => setDrawing((value) => (value + 1) % drawings.length)}>Další kresba</button>
      </figcaption>
      <p className="drawing-hint">Přejeďte přes kresbu. Nebo se jí dotkněte.</p>
    </figure>
    <div className="art-author-copy">
      <h2 id="author-title">{authorName.split(' ')[0]}<br />{authorName.split(' ').slice(1).join(' ')}.</h2>
      <p className="art-introduction">{introduction}</p>
      {biography.map((p) => <p className="art-biography" key={p}>{p}</p>)}
      <details className="art-experience" id="zkusenosti" suppressHydrationWarning><summary>Zkušenosti a projekty</summary>{experience.length ? experience.map((item) => <article key={item.title}><h3>{item.title}</h3>{item.period && <p>{item.period}</p>}<p>{item.description}</p></article>) : <p>Konkrétní praxi a vybrané projekty tu ještě doplním.</p>}</details>
      <div className="art-worlds">{worlds.map((world) => <details key={world.id} id={`drawing-world-${world.id}`} suppressHydrationWarning><summary>{world.title}</summary><p>{world.description}</p>{world.href && <a href={world.href}>{world.linkLabel}</a>}</details>)}</div>
    </div>
  </section>;
}
