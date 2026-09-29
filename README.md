# izzul-os

A retro-terminal portfolio for **Izzul Zaqwan** — boot sequence, interactive
terminal (`whoami`, `ls projects`, `cat education.log`, `sudo hireme`),
phosphor-green CRT aesthetic, and a working contact form.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Resend.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and fill in your own values
(never commit `.env.local`):

```env
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=you@example.com
```

## Content

All portfolio content (bio, projects, education, achievements, socials)
lives in `data/portfolio.ts`. Drop your resume PDF at
`public/resume.pdf` to enable the download buttons.

## Deploy

Push to GitHub, import into [Vercel](https://vercel.com/new), and set
`RESEND_API_KEY` + `CONTACT_TO_EMAIL` in the project environment variables.
