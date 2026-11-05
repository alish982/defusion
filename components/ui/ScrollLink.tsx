"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";

import { scrollToSection } from "@/components/smooth-scroll/scroll-to-section";

/** Links to a home page section, going to the home page first when needed. */
export default function ScrollLink({
  to,
  children,
  className = "",
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const href = `/#${to}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Leave new tab and new window clicks to the browser.
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;

    e.preventDefault();
    onClick?.();

    if (pathname === "/" && lenis) {
      scrollToSection(lenis, to);
    } else {
      // SmoothScroller scrolls to the section once the home page is showing.
      router.push(href, { scroll: false });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
