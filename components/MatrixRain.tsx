"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain({ on }: { on: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!on || !ref.current) return;
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01<>[]$#+-*/IZUL";
    const font = 16;
    const cols = Math.floor(canvas.width / font);
    const drops = Array.from({ length: cols }, () => Math.random() * -50);

    let raf = 0;
    const draw = () => {
      ctx.fillStyle = "rgba(5,8,5,0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#33ff33";
      ctx.font = `${font}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(ch, i * font, drops[i] * font);
        if (drops[i] * font > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [on]);

  if (!on) return null;
  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30 opacity-40"
      aria-hidden
    />
  );
}
