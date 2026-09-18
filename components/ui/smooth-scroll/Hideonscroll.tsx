"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import type Lenis from "lenis";

export function useHideOnScroll(threshold = 80) {
  const [hidden, setHidden] = useState(false);
  const previousY = useRef(0);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = (instance: Lenis) => {
      const latest = instance.scroll;
      const previous = previousY.current;

      if (latest > previous && latest > threshold) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      previousY.current = latest;
    };

    lenis.on("scroll", handleScroll);
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis, threshold]);

  return hidden;
}
