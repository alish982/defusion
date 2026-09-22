"use client";

import Image from "next/image";
import { DOMAINS } from "@/Data/About";
import { useAutoLoading } from "./loading";

const ITEM_DURATION = 3000;

export default function ResearchDomains() {
  const { active, setActive, fill, sectionRef } = useAutoLoading(
    DOMAINS.length,
    ITEM_DURATION,
  );

  return (
    <section id="domains" className="py-8">
      <div className="">
        <div className="text-center mb-6 md:mb-0">
          <div className="flex items-center justify-center gap-4">
            <span className="h-2 w-2 rotate-45 bg-blue-500" />
            <span>Research Domains</span>
          </div>
          <h2 className="mx-auto my-4 text-balance text-[1.64rem] md:text-[2rem] text-[#F4F4F5] font-creato font-normal leading-tight tracking-tight sm:text-3xl whitespace-nowrap">
            DeepFusion AI builds lasting
            <br className="sm:hidden" /> AI capabilities.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 lg:items-start lg:gap-36">
          <ul ref={sectionRef} className="order-2 pt-4 lg:order-none">
            {DOMAINS.map((d, i) => {
              const isActive = i === active;
              return (
                <li
                  key={d.n}
                  className="relative border-b border-white/10 pt-4"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="flex w-full items-start gap-4 py-4 text-left"
                  >
                    <span
                      className={`mt-0.5 shrink-0 text-[18px] transition-colors duration-700 ${
                        isActive ? "text-[#5CAEFF]" : "text-white/35"
                      }`}
                    >
                      {d.n}
                    </span>
                    <div className="flex-1">
                      <p
                        className={`text-[18px] font-creato font-medium transition-colors duration-700 ${
                          isActive ? "text-white" : "text-white/45"
                        }`}
                      >
                        {d.title}
                      </p>

                      {isActive ? (
                        <>
                          <p className="mt-3 text-[12px] font-normal tracking-wide text-[#71717A]">
                            {d.eyebrow}
                          </p>
                          {d.desc ? (
                            <p className="mt-3 text-[14px] text-[#A1A1AA]">
                              {d.desc}
                            </p>
                          ) : null}
                        </>
                      ) : (
                        <p className="mt-2 text-[11px] tracking-wide text-white/30">
                          {d.eyebrow}
                        </p>
                      )}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isActive
                            ? "mt-3 h-px opacity-100"
                            : "mt-0 h-0 opacity-0"
                        }`}
                      >
                        <div className="h-px w-full overflow-hidden bg-white/10">
                          <div
                            className="h-full bg-[#5CAEFF]"
                            style={{
                              width: isActive && fill ? "100%" : "0%",
                              transition:
                                isActive && fill
                                  ? `width ${ITEM_DURATION}ms linear`
                                  : "none",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="order-1 lg:order-none lg:p-8">
            <div className="relative h-[360px] w-full overflow-hidden rounded-3xl lg:h-[500px] lg:w-[500px]">
              {DOMAINS.map((d, i) => (
                <Image
                  key={d.image}
                  src={d.image}
                  alt={d.title}
                  fill
                  sizes="(min-width: 1024px) 500px, 100vw"
                  priority={i === 0}
                  className={`h-full w-full rounded-lg object-contain absolute inset-0 transition-opacity duration-700 ease-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  background: `
          radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.85) 100%),
          linear-gradient(to top, rgba(0,0,0,0.6), transparent 25%),
          linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 25%),
          linear-gradient(to left, rgba(0,0,0,0.6), transparent 25%),
          linear-gradient(to right, rgba(0,0,0,0.6), transparent 25%)
        `,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
