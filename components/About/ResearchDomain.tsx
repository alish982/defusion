"use client";

import Image from "next/image";
import { DOMAINS } from "@/Data/About";
import { useAutoLoading } from "./loading";

const ITEM_DURATION = 4000;

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
                      className={`mt-0.5 shrink-0 text-[18px] transition-colors duration-300 ${
                        isActive ? "text-[#5CAEFF]" : "text-white/35"
                      }`}
                    >
                      {d.n}
                    </span>
                    <div className="flex-1">
                      <p
                        className={`text-[18px] font-creato font-medium transition-colors duration-300 ${
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
                    </div>
                  </button>

                  {isActive && (
                    <div className="h-px w-[45%] min-w-[220px] max-w-[300px] overflow-hidden bg-white/10">
                      <div
                        className="h-full bg-[#5CAEFF]"
                        style={{
                          width: fill ? "100%" : "0%",
                          transition: fill
                            ? `width ${ITEM_DURATION}ms linear`
                            : "none",
                        }}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="order-1 lg:order-none lg:p-8">
            <div className="relative h-[360px] w-full overflow-hidden rounded-3xl lg:h-[500px] lg:w-[500px]">
              <Image
                src="/1.png"
                alt="Design illustration"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="h-full w-full rounded-lg object-contain [background-image:linear-gradient(black,black),linear-gradient(90deg,rgba(0,0,0,0.6)_0%,rgba(255,255,255,0.6)_100%)] [background-clip:padding-box,border-box]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
