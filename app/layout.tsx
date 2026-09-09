import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeepFusion AI Labs — Frontier Intelligence. Global Scale.",
  description:
    "DeepFusion AI Labs is Prixa Group's dedicated research engine, building certified, multimodal AI across language, vision, voice, and security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-ink text-paper font-sans">
        {children}
      </body>
    </html>
  );
}