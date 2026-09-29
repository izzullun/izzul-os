"use client";

import { GraduationCap, Award } from "lucide-react";
import { education, achievements } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-5xl scroll-mt-24 px-4">
      <p className="mb-3 text-xs opacity-80">$ cat education.log + achievements.dat</p>
      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="panel-glow rounded border border-[#33ff33]/30 bg-black/60">
          <div className="flex items-center gap-2 border-b border-[#33ff33]/25 bg-[#0a120a] px-4 py-2 text-xs">
            <GraduationCap size={14} />
            <span className="opacity-85">izzul@os:~/education.log</span>
          </div>
          <div className="space-y-5 p-5">
            {education.map((e) => (
              <div key={e.school} className="relative border-l-2 border-[#33ff33]/40 pl-4">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#33ff33] shadow-[0_0_12px_#33ff33]" />
                <p className="text-[11px] opacity-75">[{e.period}]</p>
                <h3 className="text-glow font-bold">{e.school}</h3>
                <p className="text-xs text-glow-soft">{e.degree}</p>
                <p className="mt-1 text-xs leading-6 opacity-90">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-glow h-fit rounded border border-[#33ff33]/30 bg-black/60">
          <div className="flex items-center gap-2 border-b border-[#33ff33]/25 bg-[#0a120a] px-4 py-2 text-xs">
            <Award size={14} />
            <span className="opacity-85">~/achievements.dat</span>
          </div>
          <div className="space-y-3 p-5">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="rounded border border-[#33ff33]/25 bg-[#33ff33]/5 p-3"
              >
                <p className="text-[10px] tracking-widest opacity-75">
                  [ACHIEVEMENT UNLOCKED]
                </p>
                <p className="text-glow mt-1 text-sm font-bold">{a.title}</p>
                <p className="mt-1 text-xs leading-5 opacity-90">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
