"use client";

import { Mail, MapPin, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

function Window({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="panel-glow overflow-hidden rounded border border-[#33ff33]/30 bg-black/60">
      <div className="flex items-center gap-2 border-b border-[#33ff33]/25 bg-[#0a120a] px-4 py-2 text-xs">
        <span className="h-3 w-3 rounded-full bg-[#33ff33]/80" />
        <span className="h-3 w-3 rounded-full bg-[#33ff33]/40" />
        <span className="h-3 w-3 rounded-full bg-[#33ff33]/20" />
        <span className="ml-2 opacity-85">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl scroll-mt-24 px-4">
      <p className="mb-3 text-xs opacity-80">$ whoami --verbose</p>
      <Window title="izzul@os:~/about">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-glow text-2xl font-bold sm:text-3xl">
              {profile.name}
            </h2>
            <p className="mt-1 text-sm opacity-90">{profile.tagline}</p>
            <p className="mt-4 text-sm leading-7 opacity-90">{profile.bio}</p>
            <p className="mt-3 flex items-center gap-2 text-xs opacity-80">
              <MapPin size={14} /> {profile.location}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-[#33ff33]/40 px-3 py-2 text-xs transition hover:bg-[#33ff33] hover:text-black"
              >
                <GithubIcon size={14} /> GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-[#33ff33]/40 px-3 py-2 text-xs transition hover:bg-[#33ff33] hover:text-black"
              >
                <LinkedinIcon size={14} /> LinkedIn
              </a>
              <a
                href={profile.socials.email}
                className="flex items-center gap-2 border border-[#33ff33]/40 px-3 py-2 text-xs transition hover:bg-[#33ff33] hover:text-black"
              >
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
          <div className="rounded border border-[#33ff33]/25 bg-[#0a120a] p-4 text-xs leading-7">
            <p className="mb-2 flex items-center gap-2 opacity-80">
              <Cpu size={14} /> $ ls ~/skills/
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((s) => (
                <span
                  key={s}
                  className="border border-[#33ff33]/30 bg-[#33ff33]/5 px-2 py-1 text-glow-soft"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 opacity-85">
              status: <span className="text-glow">{profile.status}</span>
            </p>
            <p className="opacity-85">
              shell: <span className="text-glow-soft">zsh + too much coffee</span>
            </p>
          </div>
        </div>
      </Window>
    </section>
  );
}

export default About;
