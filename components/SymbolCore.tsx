"use client";

import { useEffect, useState } from "react";

const OUTER = ["λ", "Ξ", "Δ", "Ω", "Ψ", "Σ", "Φ", "Θ"];
const INNER = ["⌁", "⏣", "⎔", "⌘", "❖"];
const CORE = ["λ", "Ξ", "Ω", "Ψ", "⌁", "⏣", "◈", "∆"];

function orbit(glyphs: string[], radius: number) {
  return glyphs.map((g, i) => (
    <span
      key={`${g}-${i}`}
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 opacity-80"
      style={{
        transform: `translate(-50%, -50%) rotate(${
          (360 / glyphs.length) * i
        }deg) translateY(-${radius}px)`,
      }}
    >
      {g}
    </span>
  ));
}

/**
 * Decorative rotating sigil: two counter-rotating glyph rings
 * around a cycling core rune. Pure text + CSS, theme-matched.
 */
export default function SymbolCore() {
  const [motionOK] = useState<boolean>(() => {
    try {
      return (
        typeof window !== "undefined" &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    } catch {
      return false;
    }
  });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!motionOK) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 1800);
    return () => window.clearInterval(id);
  }, [motionOK]);

  const rune = CORE[tick % CORE.length];

  return (
    <div aria-hidden="true" className="hidden w-60 shrink-0 lg:block">
      <div className={motionOK ? "sigil-float" : undefined}>
        <div className="relative aspect-square w-full text-[#33ff33]">
          {/* corner ticks */}
          <span className="absolute left-0 top-0 text-sm opacity-60">+</span>
          <span className="absolute right-0 top-0 text-sm opacity-60">+</span>
          <span className="absolute bottom-0 left-0 text-sm opacity-60">+</span>
          <span className="absolute bottom-0 right-0 text-sm opacity-60">+</span>

          {/* outer ring */}
          <div className="absolute inset-2 rounded-full border border-dashed border-[#33ff33]/40" />
          <div
            className={`absolute inset-2 text-sm ${
              motionOK ? "sigil-spin" : undefined
            }`}
          >
            {orbit(OUTER, 100)}
          </div>

          {/* inner ring, counter-rotating */}
          <div className="absolute inset-10 rounded-full border border-dotted border-[#33ff33]/30" />
          <div
            className={`absolute inset-10 text-xs ${
              motionOK ? "sigil-spin-rev" : undefined
            }`}
          >
            {orbit(INNER, 68)}
          </div>

          {/* cycling core rune */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              key={motionOK ? rune : "static"}
              className={`text-glow text-7xl font-bold ${
                motionOK ? "sigil-pop" : undefined
              }`}
            >
              {rune}
            </span>
          </div>
        </div>
        <p className="mt-2 text-center text-[10px] opacity-80">
          ~/sigil --ward:active
        </p>
      </div>
    </div>
  );
}
