"use client";

import { useState, useEffect, useRef } from "react";

export function useAutoLoading(itemCount: number, itemDuration = 4000) {
  const [active, setActive] = useState(0);
  const [fill, setFill] = useState(false);
  const [inView, setInView] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setFill(false);
    if (!inView) return;

    let raf1: number, raf2: number;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setFill(true));
    });

    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % itemCount);
    }, itemDuration);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [active, inView, itemCount, itemDuration]);

  return { active, setActive, fill, sectionRef };
}