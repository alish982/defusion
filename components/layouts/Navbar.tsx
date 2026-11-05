'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';

import gsap from 'gsap';

import NavLink from '@/components/ui/NavLink';
import GradientButton from '@/components/ui/Button';
import LayoutWrapper from '@/components/layouts/LayoutWrapper';

import { useHideOnScroll } from '@/components/smooth-scroll/HideOnScroll';
import { useLenis } from 'lenis/react';
import type Lenis from 'lenis';

import { NAV_LINKS, type NavItem } from '@/data/nav-links';

function NavItemLink({
  link,
  className,
  onClick,
}: {
  link: NavItem;
  className: string;
  onClick?: () => void;
}) {
  if (link.href !== undefined) {
    return (
      <Link href={link.href} className={className} onClick={onClick}>
        {link.label}
      </Link>
    );
  }

  return (
    <NavLink to={link.id} className={className} onClick={onClick}>
      {link.label}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const hidden = useHideOnScroll(80);
  const barRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = useCallback(
    ({ scroll }: Lenis) => setScrolled(scroll > 0),
    [],
  );
  const lenis = useLenis(handleScroll);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  useEffect(() => {
    if (!barRef.current) return;

    gsap.to(barRef.current, {
      yPercent: hidden && !open ? -100 : 0,
      duration: 0.35,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }, [hidden, open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header ref={barRef} className="fixed inset-x-0 top-0 z-50">
      <div
        data-lenis-prevent
        className={`transition-colors duration-300 ${
          scrolled || open ? 'bg-black' : 'bg-transparent'
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <LayoutWrapper>
          <div className="flex h-22 items-center justify-between">
            <div className="flex-1">
              <Link href={'/'} className="block w-fit">
                <Image
                  src="/icons/logo-horizontal.svg"
                  height={48}
                  width={191}
                  alt="DeepFusion AI Labs logo"
                />
              </Link>
            </div>

            <nav className="hidden items-center lg:flex cursor-pointer">
              {NAV_LINKS.map((link) => (
                <NavItemLink
                  key={link.label}
                  link={link}
                  className="flex h-10 items-center justify-center whitespace-nowrap px-3 font-sans text-[14px] leading-[1.3] text-white/80 transition-colors hover:text-paper lg:px-5 lg:text-[16px]"
                />
              ))}
            </nav>

            <div className="flex flex-1 items-center justify-end gap-3">
              <GradientButton
                as={Link}
                href="/contact"
                showArrow={false}
                className="max-lg:hidden h-10! hover:opacity-65"
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
                className="grid h-9 w-9 place-items-center rounded-full text-paper lg:hidden"
              >
                {open ? (
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 5l10 10M15 5L5 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <Image
                    src="/icons/hamburger.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="h-4 w-4"
                  />
                )}
              </button>
            </div>
          </div>
        </LayoutWrapper>
      </div>

      <div
        className={`fixed inset-x-0 top-22 z-40 flex h-[calc(100dvh-88px)] flex-col bg-black px-4 py-6 md:px-8 transition-all duration-300 ease-in-out lg:hidden ${
          open
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <NavItemLink
              key={link.label}
              link={link}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b hairline py-4 text-[14px] md:text-[16px] text-[#FFFFFFCC] transition-colors hover:text-paper"
            />
          ))}
        </nav>

        <GradientButton
          as={Link}
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-auto w-full"
        >
          Get in Touch
        </GradientButton>
      </div>
    </header>
  );
}
