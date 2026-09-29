"use client";

import { ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl scroll-mt-24 px-4">
      <p className="mb-3 text-xs opacity-80">$ ls projects/ --showcase</p>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="panel-glow flex flex-col rounded border border-[#33ff33]/30 bg-black/60 transition hover:border-[#33ff33]/70"
          >
            <div className="flex items-center gap-2 border-b border-[#33ff33]/25 bg-[#0a120a] px-4 py-2 text-xs">
              <Folder size={14} />
              <span className="truncate opacity-90">~/{p.slug}</span>
              <span className="ml-auto border border-[#33ff33]/40 px-1.5 py-0.5 text-[10px]">
                {p.status}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-glow text-lg font-bold">$ ./{p.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-6 opacity-90">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-[#33ff33]/10 px-1.5 py-0.5 text-[11px] text-glow-soft"
                  >
                    [{t}]
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-2 text-xs">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 border border-[#33ff33]/40 px-2 py-2 transition hover:bg-[#33ff33] hover:text-black"
                >
                  <GithubIcon size={13} /> code
                </a>
                <a
                  href={p.demo}
                  className="flex flex-1 items-center justify-center gap-1.5 border border-[#33ff33]/40 px-2 py-2 transition hover:bg-[#33ff33] hover:text-black"
                >
                  <ExternalLink size={13} /> live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-3 text-xs opacity-70">
        {`// TODO(you): replace these 3 placeholders with your real builds. edit data/portfolio.ts`}
      </p>
    </section>
  );
}
