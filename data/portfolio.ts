export const profile = {
  name: "Izzul Zaqwan",
  handle: "izzulzaqwan",
  host: "IZZUL-OS",
  roles: ["full-stack dev", "student", "builder", "open-source enjoyer"],
  tagline: "I build fast, weird, wonderful things for the web.",
  bio: "Hey — I'm Izzul. I turn ideas into shipped projects: websites, tools, and experiments. Currently learning in public, collecting achievements like side-quests, and looking for internships / freelance / collabs.",
  location: "Malaysia // working worldwide",
  status: "OPEN_TO_WORK",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    email: "mailto:hello@example.com",
  },
  skills: [
    "typescript",
    "react",
    "next.js",
    "tailwind",
    "node.js",
    "python",
    "git",
    "figma",
  ],
};

export type Project = {
  slug: string;
  title: string;
  desc: string;
  tech: string[];
  github: string;
  demo: string;
  status: string;
};

export const projects: Project[] = [
  {
    slug: "project-nova",
    title: "project-nova",
    desc: "Placeholder project — replace with your real build. A fast web app with auth, dashboard, and dark mode.",
    tech: ["next.js", "tailwind", "typescript"],
    github: "https://github.com/",
    demo: "#projects",
    status: "SHIPPED",
  },
  {
    slug: "terminal-ui",
    title: "terminal-ui-kit",
    desc: "Placeholder project — a tiny component library for retro terminal interfaces. Copy-paste CRT panels.",
    tech: ["react", "css"],
    github: "https://github.com/",
    demo: "#projects",
    status: "WIP",
  },
  {
    slug: "study-tracker",
    title: "study-tracker",
    desc: "Placeholder project — track courses, certs and streaks. Gamified learning log with achievements.",
    tech: ["node.js", "sqlite"],
    github: "https://github.com/",
    demo: "#projects",
    status: "SHIPPED",
  },
];

export type Edu = {
  period: string;
  school: string;
  degree: string;
  desc: string;
};

export const education: Edu[] = [
  {
    period: "2022 — 2025",
    school: "Your University / College",
    degree: "B.Sc. Computer Science (placeholder)",
    desc: "Replace with your real school. Focus: software engineering, web dev, data structures.",
  },
  {
    period: "2020 — 2022",
    school: "Your High School / Diploma",
    degree: "Science Stream (placeholder)",
    desc: "Replace with your real background. Where the curiosity started.",
  },
];

export const achievements = [
  {
    title: "Hackathon Finalist",
    desc: "Placeholder — Top 10 out of 120 teams. 24h build.",
  },
  {
    title: "AWS / Google Cert (placeholder)",
    desc: "Cloud fundamentals certified. Replace with your cert.",
  },
  {
    title: "100 Days of Code",
    desc: "Placeholder streak — shipped something every day.",
  },
];

export const ASCII_NAME = `
█████  █████  █████  █   █  █             █████    █     ███   █   █    █    █   █
  █       █      █   █   █  █                █    █ █   █   █  █   █   █ █   ██  █
  █      █      █    █   █  █               █    █   █  █   █  █   █  █   █  █ █ █
  █     █      █     █   █  █              █     █████  █ █ █  █ █ █  █████  █  ██
  █    █      █      █   █  █             █      █   █  █  █   ██ ██  █   █  █   █
█████  █████  █████  █████  █████         █████  █   █   ██ █  █   █  █   █  █   █
`;
