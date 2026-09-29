"use client";

import { useEffect, useRef, useState } from "react";
import { profile, projects, education, achievements } from "@/data/portfolio";

type Entry = { kind: "in" | "out"; text: string };

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function runCommand(raw: string): { lines: string[]; clear?: boolean; goto?: string; matrix?: boolean } {
  const cmd = raw.trim();
  const c = cmd.toLowerCase();

  if (c === "" ) return { lines: [] };
  if (c === "clear") return { lines: [], clear: true };
  if (c === "help")
    return {
      lines: [
        "available commands:",
        "  whoami .............. who is izzul?",
        "  ls projects ......... list projects",
        "  cat education.log ... show education",
        "  achievements ........ show achievements",
        "  contact ............. github / linkedin / email",
        "  goto <section> ...... goto home|about|projects|education|contact",
        "  sudo hireme ......... ???",
        "  matrix .............. toggle the rain",
        "  clear ............... wipe terminal",
      ],
    };
  if (c === "whoami")
    return { lines: [profile.name + " — " + profile.tagline, profile.bio, "location: " + profile.location] };
  if (c === "ls" || c === "ls projects")
    return {
      lines: [
        "total " + projects.length,
        ...projects.flatMap((p) => [`./${p.slug}   [${p.status}]`, `    ${p.desc}`]),
        "",
        "tip: click a card below, or `goto projects`",
      ],
    };
  if (c === "cat education.log" || c === "cat education" || c === "education")
    return {
      lines: [
        ...education.flatMap((e) => [`[${e.period}] ${e.school}`, `  ${e.degree}`, `  ${e.desc}`, ""]),
      ],
    };
  if (c === "achievements")
    return { lines: achievements.map((a) => `[ACHIEVEMENT UNLOCKED] ${a.title} — ${a.desc}`) };
  if (c === "contact")
    return {
      lines: [
        `github:   ${profile.socials.github}`,
        `linkedin: ${profile.socials.linkedin}`,
        `email:    ${profile.socials.email.replace("mailto:", "")}`,
      ],
    };
  if (c === "sudo hireme")
    return {
      lines: [
        "[sudo] password for guest: ********",
        "permission granted.",
        ">>> Izzul is available for internships, freelance & collabs.",
        ">>> run `contact` to reach him.",
      ],
    };
  if (c === "matrix") return { lines: ["toggling the rain..."], matrix: true };
  if (c.startsWith("goto ")) {
    const dest = c.replace("goto ", "").trim();
    const ok = ["home", "about", "projects", "education", "contact"];
    if (ok.includes(dest)) return { lines: [`jumping to #${dest} ...`], goto: dest };
    return { lines: [`unknown section: ${dest}. try: ${ok.join(", ")}`] };
  }
  return { lines: [`command not found: ${cmd}`, "type `help` to see commands."] };
}

export default function Terminal({ onMatrix }: { onMatrix: () => void }) {
  const [history, setHistory] = useState<Entry[]>([
    { kind: "out", text: "Welcome to IZZUL-OS. type `help` — or click a shortcut below." },
  ]);
  const [input, setInput] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  const submit = (raw: string) => {
    const result = runCommand(raw);
    if (result.clear) {
      setHistory([]);
      return;
    }
    const next: Entry[] = [...history, { kind: "in", text: raw }];
    result.lines.forEach((l) => next.push({ kind: "out", text: l }));
    setHistory(next);
    if (result.goto) setTimeout(() => scrollTo(result.goto!), 250);
    if (result.matrix) setTimeout(onMatrix, 250);
  };

  const shortcuts = ["help", "whoami", "ls projects", "cat education.log", "contact", "sudo hireme"];

  return (
    <div className="panel-glow overflow-hidden rounded border border-[#33ff33]/30 bg-black/70">
      <div className="flex items-center gap-2 border-b border-[#33ff33]/25 bg-[#0a120a] px-4 py-2 text-xs">
        <span className="h-3 w-3 rounded-full bg-[#33ff33]/80" />
        <span className="h-3 w-3 rounded-full bg-[#33ff33]/40" />
        <span className="h-3 w-3 rounded-full bg-[#33ff33]/20" />
        <span className="ml-2 opacity-85">izzul@os: ~/terminal — zsh</span>
      </div>

      <div
        ref={boxRef}
        onClick={() => inputRef.current?.focus()}
        className="h-72 cursor-text overflow-y-auto px-4 py-3 font-mono text-xs leading-6 sm:text-sm"
      >
        {history.map((h, i) =>
          h.kind === "in" ? (
            <div key={i} className="text-glow">
              <span className="mr-2 opacity-60">➜ ~</span>
              <span>{h.text}</span>
            </div>
          ) : (
            <div key={i} className="whitespace-pre-wrap opacity-90">
              {h.text === "" ? "\u00a0" : h.text}
            </div>
          )
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(input);
            setInput("");
          }}
          className="mt-1 flex items-center"
        >
          <span className="mr-2 text-glow">➜ ~</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent outline-none placeholder:text-[#33ff33]/50"
            placeholder="type help + enter..."
            aria-label="terminal input"
          />
          <span className="cursor-blink ml-1 inline-block h-4 w-2 bg-[#33ff33]" />
        </form>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-[#33ff33]/25 bg-[#0a120a] px-4 py-2">
        {shortcuts.map((s) => (
          <button
            key={s}
            onClick={() => submit(s)}
            className="border border-[#33ff33]/30 px-2 py-1 text-[11px] opacity-90 transition hover:bg-[#33ff33] hover:text-black hover:opacity-100"
          >
            $ {s}
          </button>
        ))}
      </div>
    </div>
  );
}
