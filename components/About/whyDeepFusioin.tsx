"use client";

import { useState } from "react";
import Image from "next/image";
import { PILLARS } from "@/Data/About";

function PillarCard({
  title,
  desc,
  isActive = true,
  className,
}: {
  title: string;
  desc: string;
  isActive?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-surface border-r-[0.8px] ${className}`}
      style={{ borderRight: "0.3px solid rgba(106, 101, 101, 0.97)" }}
    >
      <div className="absolute inset-0 ">
        <Image
          src="/fiber.png"
          alt="Woven texture"
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent " />
      <div className="absolute inset-x-0 bottom-0 px-4">
        <div className="h-[102px] shadow-[0_-0.3px_0_theme(colors.neutral.300)]">
          <div className="py-5">
            <p className="text-[24px] md:text-[32px] font-normal font-creato text-white leading-[1.1] transition-opacity duration-[900ms] ease-in-out">
              {title}
            </p>
            <p
              className="text-[14px] text-[16px] leading-relaxed text-[#FFFFFFA3] transition-opacity duration-[1400ms] ease-in-out"
              style={{ opacity: isActive ? 1 : 0 }}
            >
              {desc}
            </p>
          </div>
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
      <h2 className="mt-4 max-w-xl md:whitespace-nowrap text-[1.62rem] md:text-[2rem] font-normal font-creato leading-tight tracking-tight sm:text-3xl">
        We Work at the Layer Where Behavior is Decided
      </h2>
      <p className="mt-5 max-w-md text-[14px] md:text-[16px] text-muted">
        It addresses the challenge of taking complex research and deploying it
        as reliable production systems.
      </p>

      {/* Mobile: swipeable slider — now persists through the problem zone */}
      <div className="mt-12 min-[822px]:hidden">
        <div className="flex snap-x snap-mandatory overflow-x-auto pb-4 px-6 -mx-6 scrollbar-hide">
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

      {/* Desktop: only activates once there's enough room for the expand-on-click row to look right */}
      <div className="mt-12 hidden min-[822px]:flex">
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
                desc={p.desc}
                isActive={isActive}
                className="h-[420px] cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
