"use client";

import { useState } from "react";
import { Mail, Send, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

type Status = "idle" | "sending" | "done" | "error";

const plainEmail = profile.socials.email.replace("mailto:", "");

const inputCls =
  "w-full border border-[#33ff33]/30 bg-black/60 px-3 py-2.5 text-sm text-[#33ff33] outline-none placeholder:text-[#33ff33]/50 focus:border-[#33ff33]/70";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(plainEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — user can copy manually */
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setStatus("done");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "send failed");
      }
    } catch {
      setStatus("error");
      setErrorMsg("network error — try email instead");
    }
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl scroll-mt-24 px-4">
      <p className="mb-3 text-xs opacity-80">$ contact --socials --open-channel</p>
      <div className="panel-glow rounded border border-[#33ff33]/30 bg-black/60 p-6 text-center sm:p-10">
        <p className="text-xs opacity-80">transmission incoming...</p>
        <h2 className="text-glow mt-2 text-2xl font-bold sm:text-4xl">
          Let&apos;s build something cool.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 opacity-90">
          Internships, freelance, collabs, or just nerding out — my inbox is
          open. Fastest way: email. Coolest way: open an issue on my GitHub.
        </p>

        {/* direct message form */}
        <form
          onSubmit={submit}
          className="mx-auto mt-6 max-w-xl text-left text-xs"
        >
          <p className="mb-3 opacity-80">$ ./send-message.sh --to izzul</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block opacity-80">name_</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                minLength={2}
                maxLength={80}
                placeholder="guest"
                autoComplete="name"
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="mb-1 block opacity-80">email_</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="you@earth.dev"
                autoComplete="email"
                className={inputCls}
              />
            </label>
          </div>
          <label className="mt-3 block">
            <span className="mb-1 block opacity-80">message_</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              minLength={10}
              maxLength={2000}
              rows={4}
              placeholder="hey izzul, let's build..."
              className={`${inputCls} resize-y`}
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-3 flex w-full items-center justify-center gap-2 bg-[#33ff33] px-5 py-3 font-bold text-black transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
          >
            <Send size={14} />
            {status === "sending" ? "sending..." : "$ ./send.sh"}
          </button>
          {status === "done" && (
            <p className="text-glow mt-3" role="status">
              ✓ delivered — I&apos;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-red-400" role="alert">
              ✗ {errorMsg}
            </p>
          )}
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
          <a
            href={profile.socials.email}
            className="flex items-center gap-2 bg-[#33ff33] px-5 py-3 font-bold text-black transition hover:brightness-110"
          >
            <Send size={14} /> ./hire-izzul.sh
          </a>
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 border border-[#33ff33]/40 px-4 py-3 transition hover:bg-[#33ff33] hover:text-black"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "copied ✓" : plainEmail}
          </button>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#33ff33]/40 px-4 py-3 transition hover:bg-[#33ff33] hover:text-black"
          >
            <GithubIcon size={14} /> GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#33ff33]/40 px-4 py-3 transition hover:bg-[#33ff33] hover:text-black"
          >
            <LinkedinIcon size={14} /> LinkedIn
          </a>
          <a
            href={profile.socials.email}
            className="flex items-center gap-2 border border-[#33ff33]/40 px-4 py-3 transition hover:bg-[#33ff33] hover:text-black"
          >
            <Mail size={14} /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
