"use client";

import { useCallback, useState } from "react";
import Navbar from "@/components/Navbar";
import BootSequence from "@/components/BootSequence";
import Terminal from "@/components/Terminal";
import TypeRoles from "@/components/TypeRoles";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import SymbolCore from "@/components/SymbolCore";
import { ASCII_NAME, profile } from "@/data/portfolio";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [matrix, setMatrix] = useState(false);
  const [crtOn, setCrtOn] = useState<boolean>(() => {
    try {
      return (
        typeof window === "undefined" ||
        window.localStorage.getItem("izzul-crt") !== "off"
      );
    } catch {
      return true;
    }
  });
  const finishBoot = useCallback(() => setBooted(true), []);

  const toggleCrt = useCallback(() => {
    setCrtOn((prev) => {
      try {
        window.localStorage.setItem("izzul-crt", prev ? "off" : "on");
      } catch {
        /* ignore persistence errors */
      }
      return !prev;
    });
  }, []);

  return (
    <div
      className={`min-h-screen bg-[#050805] text-[#33ff33] ${
        crtOn ? "crt flicker" : "crt-off"
      }`}
    >
      <MatrixRain on={matrix} />
      <Navbar />

      {!booted ? (
        <BootSequence onDone={finishBoot} />
      ) : (
        <main className="space-y-14 pb-14">
          {/* HERO */}
          <section id="home" className="mx-auto w-full max-w-5xl scroll-mt-24 px-4 pt-10">
            <div className="rise-in">
              <p className="text-xs opacity-85">
                izzul@os:~$ ./hello.sh --cool-as-hell
              </p>
              <div className="mt-4 lg:flex lg:items-center lg:gap-8">
                <pre className="ascii-art text-glow hidden max-w-full flex-1 overflow-x-auto text-[8px] leading-tight sm:block sm:text-[10px] lg:min-w-0 lg:text-[11px]">
                  {ASCII_NAME}
                </pre>
                <SymbolCore />
              </div>
              <h1 className="text-glow mt-4 text-4xl font-black tracking-tight sm:hidden">
                IZZUL
                <br />
                ZAQWAN
              </h1>
              <div className="mt-4 font-mono text-lg sm:text-2xl">
                <TypeRoles />
              </div>
              <p className="mt-3 max-w-xl text-sm leading-7 opacity-85">
                {profile.tagline} {profile.bio.split(".")[0]}.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <a
                  href="#projects"
                  className="bg-[#33ff33] px-4 py-2.5 font-bold text-black transition hover:brightness-110"
                >
                  [ ./view-projects.sh ]
                </a>
                <a
                  href="#contact"
                  className="border border-[#33ff33]/50 px-4 py-2.5 transition hover:bg-[#33ff33] hover:text-black"
                >
                  [ hire me ]
                </a>
                <button
                  onClick={() => setMatrix((m) => !m)}
                  className="border border-dashed border-[#33ff33]/40 px-4 py-2.5 opacity-85 transition hover:opacity-100"
                >
                  [ matrix: {matrix ? "ON" : "OFF"} ]
                </button>
                <button
                  onClick={toggleCrt}
                  aria-pressed={crtOn}
                  className="border border-dashed border-[#33ff33]/40 px-4 py-2.5 opacity-85 transition hover:opacity-100"
                >
                  [ crt: {crtOn ? "ON" : "OFF"} ]
                </button>
              </div>
            </div>

            <div className="rise-in mt-8" style={{ animationDelay: "150ms" }}>
              <Terminal onMatrix={() => setMatrix((m) => !m)} />
            </div>
          </section>

          <About />
          <Projects />
          <Education />
          <Contact />
        </main>
      )}

      {booted && <Footer />}

      {/* bottom hint */}
      {booted && (
        <div className="fixed bottom-3 right-3 z-40 hidden text-[10px] opacity-60 md:block">
          try: <span className="border border-[#33ff33]/30 px-1">sudo hireme</span>
        </div>
      )}
    </div>
  );
}
