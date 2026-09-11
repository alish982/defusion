"use client";

import { useState } from "react";
import Image from "next/image";
import { PILLARS } from "@/Data/About";

function PillarCard({
  title,
  desc,
  className,
}: {
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border hairline bg-surface ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src="/fiber.png"
          alt="Woven texture"
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="border-t hairline pt-4">
          <p className="text-[28px] font-medium text-white">{title}</p>
          {desc && (
            <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">
              {desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WhyDeepFusion() {
  const [activeProject, setActiveProject] = useState(1);

  return (
    <>
      <div className="flex items-center gap-4 md:mt-12">
        <span className="h-2.5 w-2.5 rotate-45 bg-blue-500" />
        <span>Why DeepFusion</span>
      </div>
      <h2 className="mt-4 max-w-xl md:whitespace-nowrap text-[1.62rem] md:text-[2rem] font-light leading-tight tracking-tight sm:text-3xl">
        We Work at the Layer Where Behavior is Decided
      </h2>
      <p className="mt-5 max-w-md text-[16px] text-muted md:whitespace-nowrap">
        It addresses the challenge of taking complex research and deploying
        it as reliable production systems.
      </p>

      {/* Mobile: swipeable slider */}
      <div className="mt-12 lg:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 -mx-6 scrollbar-hide">
          {PILLARS.map((p) => (
            <PillarCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              className="h-[320px] w-[85%] shrink-0 snap-center"
            />
          ))}
        </div>
      </div>

      {/* Desktop: interactive expand-on-click row */}
      <div className="mt-12 hidden gap-4 lg:flex">
        {PILLARS.map((p) => {
          const isActive = p.id === activeProject;
          return (
            <div
              key={p.title}
              onClick={() => setActiveProject(p.id)}
              style={{
                flexBasis: isActive ? "60%" : "20%",
                transitionProperty: "flex-basis",
                transitionDuration: "300ms",
                transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            >
              <PillarCard
                title={p.title}
                desc={isActive ? p.desc : ""}
                className="h-[420px] cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}