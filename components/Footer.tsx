import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 pb-10">
      <div className="border-t border-[#33ff33]/25 pt-4 text-[11px] leading-6 opacity-85">
        <p>
          <span className="mr-2">➜ ~</span>
          echo &quot;© {new Date().getFullYear()} {profile.name} — built with
          next.js + too much phosphor&quot;
        </p>
        <p className="text-glow-soft">
          © {new Date().getFullYear()} {profile.name} — built with next.js +
          too much phosphor
        </p>
        <p className="mt-1">
          uptime: always | status: {profile.status} |{" "}
          <a href="#home" className="underline underline-offset-4 hover:opacity-100">
            reboot to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
