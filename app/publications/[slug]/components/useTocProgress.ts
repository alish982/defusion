"use client";

import { RefObject, useEffect, useState } from "react";

export function useTocProgress(
  articleRef: RefObject<HTMLElement | null>,
  sectionIds: string[],
) {
  const [visible, setVisible] = useState(false);
  const [barVisible, setBarVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = articleRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setVisible(rect.top < vh * 0.6 && rect.bottom > vh * 0.4);
      setBarVisible(rect.top < 80 && rect.bottom > 160);

      const total = rect.height - vh;
      const pct = total > 0 ? (-rect.top / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, Math.round(pct))));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [articleRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return { visible, barVisible, progress, activeId };
}
