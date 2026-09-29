import Link from "next/link";

export default function NotFound() {
  return (
    <div className="crt flex min-h-screen items-center justify-center bg-[#050805] p-4 text-[#33ff33]">
      <div className="panel-glow w-full max-w-xl rounded border border-[#33ff33]/30 bg-black/60 p-6">
        <p className="text-xs opacity-80">izzul@os:~$ cd ~/this-page</p>
        <p className="text-glow mt-4 text-2xl font-bold">
          command not found: 404
        </p>
        <p className="mt-2 text-sm leading-7 opacity-90">
          This route doesn&apos;t exist. The terminal forgives you — head back
          home and try `help`.
        </p>
        <Link
          href="/"
          className="mt-5 inline-block bg-[#33ff33] px-4 py-2.5 text-xs font-bold text-black transition hover:brightness-110"
        >
          [ cd ~/home ]
        </Link>
      </div>
    </div>
  );
}
