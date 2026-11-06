/** Shared, seeded charcoal flakes: irregular silhouettes, cracked faces and soft depth. */
export function createAshTextures() {
  let seed = 521;
  const random = () => { seed = seed * 16807 % 2147483647; return (seed - 1) / 2147483646; };
  return Array.from({ length: 8 }, (_, variant) => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 48;
    const ctx = canvas.getContext('2d')!;
    ctx.translate(24, 24);
    ctx.beginPath();
    for (let i = 0; i < 9; i++) {
      const angle = i / 9 * Math.PI * 2;
      const radius = 10 + random() * 10;
      const x = Math.cos(angle) * radius, y = Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath(); ctx.clip();
    const tone = 105 + variant * 13;
    const gradient = ctx.createLinearGradient(-18, -18, 18, 18);
    gradient.addColorStop(0, `rgb(${tone + 44},${tone + 42},${tone + 38})`);
    gradient.addColorStop(.5, `rgb(${tone},${tone},${tone - 3})`);
    gradient.addColorStop(1, `rgb(${tone - 62},${tone - 63},${tone - 63})`);
    ctx.fillStyle = gradient; ctx.fillRect(-24, -24, 48, 48);
    for (let i = 0; i < 65; i++) {
      ctx.fillStyle = random() > .5 ? '#ffffff38' : '#00000065';
      ctx.fillRect(random() * 48 - 24, random() * 48 - 24, .7 + random() * 2, .7 + random() * 1.5);
    }
    ctx.strokeStyle = '#0c0c0c80'; ctx.lineWidth = .7;
    ctx.beginPath();ctx.moveTo(-14, -8);ctx.lineTo(2, 1);ctx.lineTo(7, 14);ctx.stroke();
    return canvas;
  });
}
