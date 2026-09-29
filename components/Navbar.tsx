"use client";

import { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#home", label: "~/home" },
  { href: "#about", label: "~/about" },
  { href: "#projects", label: "~/projects" },
  { href: "#education", label: "~/education" },
  { href: "#contact", label: "~/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[#33ff33]/25 bg-[#050805]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2 text-sm font-bold tracking-widest">
          <Terminal size={16} className="text-[#33ff33]" />
          <span className="text-glow">
            {profile.handle}@{profile.host}:~$
          </span>
        </a>
        <div className="hidden items-center gap-5 text-xs md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-80 transition hover:opacity-100 hover:text-glow">
              {l.label}
            </a>
          ))}
          <span className="border border-[#33ff33]/40 px-2 py-1 text-[10px] tracking-widest text-glow-soft">
            ● {profile.status}
          </span>
        </div>
        <button
          className="md:hidden"
          aria-label="toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-1 border-t border-[#33ff33]/20 px-4 py-3 text-sm md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-1 opacity-90"
            >
              <span className="mr-2 opacity-70">$</span>
              {l.label.replace("~/", "")}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
