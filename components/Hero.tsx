"use client";

import GradientButton from "./ui/button";
import ScrollLink from "@/components/ui/ScrollLink";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden lg:flex lg:min-h-screen lg:items-center"
    >
      <div className="relative h-[45vh] w-full lg:absolute lg:inset-0 lg:-z-10 lg:h-auto">
        <video
          src="/video/hero.webm"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, transparent 15%, black 90%, black 100%), " +
              "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(to right, transparent 0%, transparent 15%, black 90%, black 100%), " +
              "linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)",
            maskComposite: "intersect",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative mx-auto w-full max-w-[1900px] py-8 px-6 sm:px-8 md:px-12 lg:px-24 lg:pt-28 xl:pl-40 xl:pt-32">
        <div className="max-w-2xl">
          <h1 className="text-balance text-[2.25rem] font-creato font-normal leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.75rem] lg:leading-[1.08]">
            <span className="font-creato bg-gradient-to-r from-[#7F9AB4] to-[#F4F4F5] bg-clip-text text-transparent whitespace-nowrap">
              Frontier Intelligence.
            </span>
            <br />
            Global Scale.
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted md:text-[18px]">
            A pioneering frontier artificial intelligence at a global scale,
            delivering certified, multimodal, state-of-the-art research into a
            product.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <GradientButton
              as={ScrollLink}
              to="research"
              className="w-full sm:w-auto"
            >
              Explore the research
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
