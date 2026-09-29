"use client";

import { useEffect, useState } from "react";

const LINES = [
  "IZZUL-OS v1.0 — bios check ............ OK",
  "mounting /dev/ambition ............... OK",
  "loading modules: whoami, projects, education ... OK",
  "phosphor warming up .................. OK",
  "",
  "type `help` to begin.",
];

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= LINES.length) {
      const t = setTimeout(onDone, 450);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCount((c) => c + 1), 160);
    return () => clearTimeout(t);
  }, [count, onDone]);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pt-10">
      <div className="panel-glow rounded border border-[#33ff33]/30 bg-black/60 p-5 text-xs leading-6 sm:text-sm">
        {LINES.slice(0, count).map((l, i) => (
          <div key={i} className={l === "" ? "h-4" : "text-glow-soft"}>
            {l || "\u00a0"}
          </div>
        ))}
        <span className="cursor-blink inline-block h-4 w-2 bg-[#33ff33]" />
        <div className="mt-3">
          <button
            onClick={onDone}
            className="border border-[#33ff33]/50 px-3 py-1 text-xs hover:bg-[#33ff33] hover:text-black"
          >
            [ skip boot ]
          </button>
        </div>
      </div>
    </div>
  );
}
