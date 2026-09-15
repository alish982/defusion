"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  "DeepFusion AI Labs is Prixa Group's dedicated research engine, a team building certified, multimodal AI across language, vision, voice, and security, and bringing it to life inside the products people use every day. Serious research, without the friction.";

export default function GsapIntro() {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll("span.word");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.15, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.02,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 3,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-10 lg:py-28">
      <div className="">
        <p
          ref={containerRef}
          className="text-balance text-center font-creato font-normal leading-[1.1] tracking-[-1px] text-[1.5rem] md:text-[3.25rem]"
        >
          {TEXT.split(" ").map((word, i) => (
            <span key={i} className="word inline-block mr-[0.28em]">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}