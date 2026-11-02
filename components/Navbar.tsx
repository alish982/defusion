"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollLink from "@/components/ui/ScrollLink";
import Link from "next/link";
import NavLink from "./ui/Navlink";
import { useHideOnScroll } from "./ui/smooth-scroll/Hideonscroll";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import GradientButton from "./ui/button";

const LINKS = [
  { label: "Research", id: "research" },
  { label: "Why DeepFusion", id: "why" },
  { label: "Research Domains", id: "domains" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const hidden = useHideOnScroll(80);
  const barRef = useRef<HTMLDivElement>(null);

  const lenis = useLenis();

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  useEffect(() => {
    if (!barRef.current) return;

    gsap.to(barRef.current, {
      yPercent: hidden && !open ? -100 : 0,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [hidden, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header ref={barRef} className="fixed inset-x-0 top-0 z-50">
      <div
        data-lenis-prevent
        className="mx-auto flex h-20 items-center justify-between
          px-6 md:px-5 lg:px-14 xl:px-28 lg:px-10
          bg-ink/90 md:bg-ink/70 backdrop-blur-md
          md:[-webkit-mask-image:linear-gradient(to_bottom,black_10%,black_75%,transparent_100%)]
          md:[mask-image:linear-gradient(to_bottom,black_10%,black_75%,transparent_100%)]"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Link href={"/"} className="flex items-center gap-2 text-paper">
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
            <span className="md:text-[20px] lg:text-[24px] font-medium tracking-tight">
              DEEPFUSION
            </span>
            <span className="text-[12px] text-[#FFFFFF] font-normal -mt-1">
              AI LABS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex cursor-pointer">
          {LINKS.map((link) => (
            <NavLink
              key={link.id}
              to={link.id}
              className="text-[14px] text-[#FFFFFFCC/80] transition-colors hover:text-paper"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <GradientButton
            as={NavLink}
            to="contact"
            className="max-md:hidden !h-11 hover:opacity-65"
          >
            Get in Touch
          </GradientButton>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
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

      <div
        className={`fixed inset-x-0 top-20 z-40 flex h-[calc(100dvh-80px)] flex-col bg-ink px-6 py-6 transition-all duration-300 ease-in-out md:hidden ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col">
          {LINKS.map((link) => (
            <NavLink
              key={link.id}
              to={link.id}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b hairline py-4 text-[14px] text-[#FFFFFFCC] transition-colors hover:text-paper"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <GradientButton
          as={ScrollLink}
          to="contact"
          onClick={() => setOpen(false)}
          className="mt-auto w-full"
        >
          Get in Touch
        </GradientButton>
      </div>
    </header>
  );
}
