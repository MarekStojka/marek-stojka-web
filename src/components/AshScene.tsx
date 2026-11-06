import { useEffect, useRef, useState } from 'react';
import { createAshTextures } from '../lib/ashTexture';

type Flake = { t: number; spread: number; side: number; phase: number; size: number; depth: number; ox: number; oy: number; vx: number; vy: number };

/** Local, procedural ash. Nothing is downloaded or captured from the visitor. */
export default function AshScene() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [reduced, setReduced] = useState(false);
  const controls = useRef({ paused: false, burst: 0 });

  useEffect(() => {
    const surface = canvas.current;
    if (!surface) return;
    const ctx = surface.getContext('2d', { alpha: true });
    if (!ctx) return;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let width = 1, height = 1, dpr = 1, frame = 0, last = 0, clock = 0;
    let visible = true, disposed = false, touchTimer = 0;
    let passage = document.documentElement.dataset.ashPassage === 'active';
    const pointer = { x: -1000, y: -1000, strength: 0, px: -1000, py: -1000 };
    let flakes: Flake[] = [];
    const textures = createAshTextures();
    // Pre-blur a small sprite atlas once, rather than filtering hundreds of flakes every frame.
    const softTextures = textures.map((texture) => {
      const copy = document.createElement('canvas'); copy.width = copy.height = 48;
      const context = copy.getContext('2d')!; context.filter = 'blur(1.1px)'; context.drawImage(texture,0,0); return copy;
    });
    // Seeded randomness makes the still composition intentional and repeatable.
    let seed = 411;
    const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    const normal = () => (random() + random() + random() + random() - 2) / 2;
    const haze = document.createElement('canvas');
    haze.width = haze.height = 256;
    const hazeCtx = haze.getContext('2d');
    if (hazeCtx) {
      const gradient = hazeCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
      gradient.addColorStop(0, 'rgba(140,135,126,.18)');
      gradient.addColorStop(.4, 'rgba(104,101,93,.065)');
      gradient.addColorStop(1, 'rgba(75,73,68,0)');
      hazeCtx.fillStyle = gradient;
      hazeCtx.fillRect(0, 0, 256, 256);
    }
    function resize() {
      if (!surface) return;
      const rect = surface.getBoundingClientRect();
      width = rect.width; height = rect.height;
      dpr = Math.min(devicePixelRatio || 1, 1.5);
      surface.width = Math.round(width * dpr); surface.height = Math.round(height * dpr);
      if (!flakes.length) {
        const count = width < 700 ? 850 : 1900;
        flakes = Array.from({ length: count }, () => ({ t: random(), spread: normal(), side: normal(), phase: random() * Math.PI * 2, size: .35 + random() ** 3.5 * 10, depth: random(), ox: 0, oy: 0, vx: 0, vy: 0 }));
      }
      if (media.matches || controls.current.paused) draw(0);
    }
    function draw(delta: number) {
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      const mobile = width < 700;
      const center = width * (mobile ? .67 : .705);
      const scale = Math.min(width * (mobile ? .73 : .4), height * .77);
      // Thin, overlapping smoke layers, rather than an opaque fog image.
      for (let i = 0; i < 8; i++) {
        const t = i / 7;
        const x = center + Math.sin(t * 5.9 + clock * .045) * scale * .21;
        const y = height * .83 - t * height * .65;
        const size = scale * (.55 + Math.sin(t * 3) * .43);
        ctx.globalAlpha = .38;
        ctx.drawImage(haze, x - size / 2, y - size / 2, size, size);
      }
      for (const f of flakes) {
        const t = (f.t + clock * .009 * (.3 + f.depth * .7)) % 1;
        const turn = t * 9.5 + clock * .10;
        const plumeWidth = (.07 + Math.sin(t * Math.PI) * .44) * scale;
        const curl = Math.sin(t * 6.5 + clock * .08);
        const x = center + curl * scale * .24 + f.spread * plumeWidth + Math.sin(turn + f.phase) * scale * .065 * f.depth;
        const y = height * .88 - t * height * .76 + f.side * plumeWidth * .44 + Math.cos(turn + f.phase) * scale * .055;
        if (delta > 0) {
          const dx = x + f.ox - pointer.x, dy = y + f.oy - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const range = mobile ? 135 : 190;
          if (dist < range && dist > 1) {
            const force = (1 - dist / range) * pointer.strength * delta * 1.1;
            f.vx += (dx / dist * .48 - dy / dist) * force;
            f.vy += (dy / dist * .48 + dx / dist) * force;
          }
          if (controls.current.burst > 0) {
            const b = controls.current.burst;
            f.vx += Math.sin(f.phase + turn) * b * .065 * delta;
            f.vy += Math.cos(f.phase + turn) * b * .065 * delta;
          }
          f.vx = (f.vx - f.ox * .0018 * delta) * Math.pow(.95, delta);
          f.vy = (f.vy - f.oy * .0018 * delta) * Math.pow(.95, delta);
          f.ox += f.vx * delta; f.oy += f.vy * delta;
        }
        const alpha = Math.sin(t * Math.PI) ** .5 * (.12 + f.depth * .58);
        ctx.globalAlpha = alpha;
        const shade = Math.round(115 + f.depth * 112);
        ctx.fillStyle = `rgb(${shade},${shade - 5},${shade - 12})`;
        const size = f.size * (mobile ? .8 : 1) * (.6 + f.depth * .8);
        const px = x + f.ox, py = y + f.oy;
        if (size < 1.1) ctx.fillRect(px, py, size, size);
        else {
          const angle = f.phase + clock * (.12 + f.depth * .35);
          ctx.save();ctx.translate(px, py);ctx.rotate(angle);
          ctx.scale(1, .2 + Math.abs(Math.sin(angle)) * .8);
          if (f.depth > .87) ctx.globalAlpha *= .5;
          ctx.drawImage((f.depth > .87 ? softTextures : textures)[Math.floor(f.phase / (Math.PI * 2) * textures.length)], -size, -size, size * 2, size * 2);
          ctx.restore();
        }
      }
      ctx.globalAlpha = 1;
    }
    function tick(now: number) {
      if (disposed) return;
      if (passage || !visible || document.hidden || controls.current.paused || media.matches) { frame = 0; last = 0; return; }
      const delta = last ? Math.min((now - last) / 16.667, 2) : 1;
      last = now; clock += delta * .016667;
      pointer.strength *= Math.pow(.96, delta);
      controls.current.burst *= Math.pow(.94, delta);
      draw(delta);
      frame = requestAnimationFrame(tick);
    }
    function start() { if (!frame && !disposed) frame = requestAnimationFrame(tick); }
    function move(event: PointerEvent) {
      if (!surface || media.matches || controls.current.paused) return;
      const rect = surface.getBoundingClientRect();
      pointer.x = event.clientX - rect.left; pointer.y = event.clientY - rect.top;
      pointer.strength = Math.min(5, .8 + Math.hypot(pointer.x - pointer.px, pointer.y - pointer.py) * .075);
      pointer.px = pointer.x; pointer.py = pointer.y;
      if (event.pointerType !== 'mouse') { window.clearTimeout(touchTimer); touchTimer = window.setTimeout(() => { pointer.strength = 0; }, 550); }
    }
    function leave() { pointer.strength = 0; pointer.px = pointer.py = -1000; }
    const parent = surface.parentElement!;
    const interaction = surface.closest<HTMLElement>('.dark-hero') ?? parent;
    interaction.addEventListener('pointermove', move, { passive: true });
    interaction.addEventListener('pointerdown', move, { passive: true });
    interaction.addEventListener('pointerleave', leave);
    const observer = new ResizeObserver(resize); observer.observe(surface);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); });
    intersection.observe(surface);
    const visibility = () => { if (!document.hidden) start(); };
    document.addEventListener('visibilitychange', visibility);
    const preference = () => { setReduced(media.matches); if (media.matches) draw(0); else start(); };
    media.addEventListener('change', preference);
    setReduced(media.matches);
    const arrive = () => { passage = false; start(); };
    document.addEventListener('ash-arrive', arrive);
    resize(); draw(0); start();
    // A user action can resume a stopped loop without recreating the simulation.
    const resume = () => { if (!controls.current.paused) start(); };
    parent.addEventListener('ash-resume', resume);
    return () => {
      disposed = true; document.removeEventListener('ash-arrive', arrive); cancelAnimationFrame(frame); window.clearTimeout(touchTimer);
      observer.disconnect(); intersection.disconnect();
      document.removeEventListener('visibilitychange', visibility); media.removeEventListener('change', preference);
      interaction.removeEventListener('pointermove', move); interaction.removeEventListener('pointerdown', move);
      interaction.removeEventListener('pointerleave', leave); parent.removeEventListener('ash-resume', resume);
    };
  }, []);

  return <div className="ash-scene">
    <canvas ref={canvas} aria-hidden="true" className="ash-canvas" />
    <div className="ash-controls">
      <button type="button" disabled={reduced} onClick={() => {
        if (reduced) return;
        controls.current.burst = 8;
        controls.current.paused = false;
        canvas.current?.parentElement?.dispatchEvent(new Event('ash-resume'));
      }}>Rozvířit popel <span aria-hidden="true">↗</span></button>
    </div>
  </div>;
}
