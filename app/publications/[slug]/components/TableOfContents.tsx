"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import { useTocProgress } from "./useTocProgress";

export type TocItem = { id: string; title: string };

type Props = {
  items: TocItem[];
  articleRef: RefObject<HTMLElement | null>;
};

export default function TableOfContents({ items, articleRef }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const sectionIds = useMemo(() => items.map((item) => item.id), [items]);
  const { visible, barVisible, progress, activeId } = useTocProgress(
    articleRef,
    sectionIds,
  );
  const activeIndex = items.findIndex((item) => item.id === activeId);
  const activeItem = activeIndex >= 0 ? items[activeIndex] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!barVisible) setOpen(false);
  }, [barVisible]);

  useEffect(() => {
    if (!mounted || !barVisible) return;

    const header = document.getElementById("site-header");
    let raf = 0;

    const tick = () => {
      const bottom = header
        ? Math.max(0, header.getBoundingClientRect().bottom)
        : 0;
      if (barRef.current) {
        barRef.current.style.transform = `translateY(${bottom}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    tick();
    return () => cancelAnimationFrame(raf);
  }, [mounted, barVisible]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const pad = (index: number) => String(index + 1).padStart(2, "0");

  const mobileBar = (
    <div
      ref={barRef}
      className={[
        "fixed inset-x-0 top-0 z-40 lg:hidden",
        "border-b border-white/10 bg-black",
        "transition-opacity duration-500 ease-out motion-reduce:transition-none",
        barVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-expanded={open}
        aria-controls="toc-mobile-list"
        className="flex h-14 w-full items-center justify-between gap-4 px-4 text-left sm:px-8"
      >
        <span className="flex min-w-0 items-center gap-3 text-[15px] text-white sm:text-[16px]">
          {activeItem ? (
            <>
              <span className="font-mono text-[13px] text-[#5B7CFF]">
                {pad(activeIndex)}
              </span>
              <span className="truncate">{activeItem.title}</span>
            </>
          ) : (
            <span>Contents</span>
          )}
        </span>

        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          className={`shrink-0 text-[#FFFFFFA3] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        id="toc-mobile-list"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0 overflow-hidden">
          <li className="h-px" />
          {items.map((item, index) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => goTo(item.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] transition-colors sm:px-8 ${
                    isActive ? "text-white" : "text-[#FFFFFFA3]"
                  }`}
                >
                  <span className="font-mono text-[13px] text-[#5B7CFF]">
                    {pad(index)}
                  </span>
                  {item.title}
                </button>
              </li>
            );
          })}
          <li className="h-2" />
        </ul>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10">
        <div
          className="h-full w-full origin-left bg-[#5B7CFF] transition-transform duration-300 ease-out"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
    </div>
  );

  return (
    <>
      {mounted && createPortal(mobileBar, document.body)}

      <aside
        aria-label="Table of contents"
        className={[
          "sticky top-32 hidden shrink-0 self-start lg:block",
          "w-[200px] xl:w-[260px]",
          "transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform]",
          "motion-reduce:transition-none",
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-4">
          {items.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => goTo(item.id)}
                className={`text-left text-[14px] transition-colors duration-300 ${
                  item.id === activeId
                    ? "text-white"
                    : "text-[#FFFFFFA3] hover:text-white"
                }`}
              >
                {pad(index)} . {item.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 h-px w-full overflow-hidden bg-[#FFFFFF1F]">
          <div
            className="h-full w-full origin-left bg-white transition-transform duration-300 ease-out"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
        <p className="mt-3 text-[12px] text-[#FFFFFFA3]">{progress}% read</p>
      </aside>
    </>
  );
}
