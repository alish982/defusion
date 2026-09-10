"use client";

import { useState } from "react";
import Image from "next/image";

const LINKS = [
  { label: "Research", href: "#research" },
  { label: "Why DeepFusion", href: "#why" },
  { label: "Research Domains", href: "#domains" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-ink/70 backdrop-blur-md"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, black 10%, black 75%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, black 10%, black 75%, transparent 100%)",
      }}
    >
      <div className="mx-auto flex h-20 max-w-[1650px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2 text-paper">
          <Image
            src="/logo.svg"
            height={36}
            width={36}
            alt="DeepFusion AI Labs logo"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 10%, black 75%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 10%, black 75%, transparent 100%)",
            }}
          />
          <span className="flex flex-col leading-tight">
            <span className="text-[24px] font-medium tracking-tight">
              DEEPFUSION
            </span>
            <span className="text-[12px] text-[#FFFFFF] font-normal -mt-1">
              AI LABS
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-[#FFFFFFCC/80] transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-full border border-transparent bg-origin-border px-4 text-[13px] font-medium text-paper transition-opacity hover:opacity-85
            [background-image:radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_70%),linear-gradient(#0a0a0c,#0a0a0c),linear-gradient(45deg,#004181_0%,rgba(255,255,255,0.35)_100%)]
            [background-clip:padding-box,padding-box,border-box]"
          >
            Get in touch
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border hairline text-paper md:hidden"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t hairline px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-block w-fit rounded-full bg-paper px-4 py-2 text-[14px] font-medium text-ink"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
