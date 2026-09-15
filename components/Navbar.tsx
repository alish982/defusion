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
// <div className="relative mx-auto w-full py-8 px-6 sm:px-8 md:px-12 lg:px-24 lg:pt-28 xl:pl-32 xl:pt-32">
  return (
    <header className="md:px-5 lg:px-14 xl:px-28 fixed inset-x-0 top-0 z-50">
      <div
        className="
          bg-ink/90
          md:bg-ink/70
          backdrop-blur-md
          md:[-webkit-mask-image:linear-gradient(to_bottom,black_10%,black_75%,transparent_100%)]
          md:[mask-image:linear-gradient(to_bottom,black_10%,black_75%,transparent_100%)]
  "
      >
        <div className="mx-auto flex h-20 items-center justify-between px-6 lg:px-10">
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
              className="grid h-9 w-9 place-items-center rounded-full text-paper md:hidden"
            >
              {open ? (
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <Image
                  src="/hamburger.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-4 w-4"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 z-40 flex h-[calc(100vh-80px)] flex-col bg-ink px-6 py-6 md:hidden">
          <nav className="flex flex-col">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b hairline py-4 text-[14px] text-[#FFFFFFCC] transition-colors hover:text-paper"
              >
                {link.label}
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 text-muted"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-auto flex w-full items-center justify-center gap-2 rounded-full border hairline bg-surface-raised px-4 py-3.5 text-[15px] font-medium text-paper border border-transparent bg-origin-border px-5 text-[13.5px] font-medium text-paper transition-opacity hover:opacity-85 sm:w-auto
[background-image:radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_70%),linear-gradient(rgba(255,255,255,0.08),rgba(255,255,255,0.08)),linear-gradient(#0a0a0c,#0a0a0c),linear-gradient(45deg,#004181_0%,rgba(255,255,255,0.2)_100%)]
[background-clip:padding-box,padding-box,padding-box,border-box]"
          >
            Get in Touch
            <span aria-hidden="true">
              <span aria-hidden="true">
                <Image src={"/arrow.svg"} alt="arrow" height={18} width={18} />
              </span>
            </span>
          </a>
        </div>
      )}
    </header>
  );
}
