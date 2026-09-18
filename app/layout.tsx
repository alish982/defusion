import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { creatoDisplay } from "./font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroller from "@/components/ui/smooth-scroll/SmoothScroller";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DEEPFUSION AI Labs — Frontier Intelligence. Global Scale.",
  description:
    "DeepFusion AI Labs is Prixa Group's dedicated research engine, building certified, multimodal AI across language, vision, voice, and security.",
    icons: {
      icon: '/logo.svg'
    }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${creatoDisplay.variable}`}>
      <SmoothScroller>

      <body className="antialiased bg-ink text-paper font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
      </SmoothScroller>
    </html>
  );
}
