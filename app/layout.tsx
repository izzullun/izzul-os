import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-term",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://izzulzaqwan.vercel.app"),
  title: "Izzul Zaqwan | Terminal Portfolio",
  description:
    "Izzul Zaqwan — portfolio. Type whoami, ls projects, cat education.log. Status: open to work.",
  openGraph: {
    title: "Izzul Zaqwan | Terminal Portfolio",
    description:
      "I build fast, weird, wonderful things for the web. Type `whoami` to begin.",
    url: "/",
    siteName: "IZZUL-OS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izzul Zaqwan | Terminal Portfolio",
    description:
      "I build fast, weird, wonderful things for the web. Type `whoami` to begin.",
  },
};

export const viewport = {
  themeColor: "#050805",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050805] text-[#33ff33]">
        {children}
      </body>
    </html>
  );
}
