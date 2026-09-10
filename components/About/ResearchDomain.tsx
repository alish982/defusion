"use client";

import Image from "next/image";
import { DOMAINS } from "@/Data/About";
import { useAutoLoading } from "./loading";

const ITEM_DURATION = 4000;

export default function ResearchDomains() {
  const { active, setActive, fill, sectionRef } = useAutoLoading(
    DOMAINS.length,
    ITEM_DURATION
  );

  return (
    <section id="domains" className="pt-8">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-center mb-6 md:mb-0">
          <div className="flex items-center justify-center gap-4">
            <span className="h-2 w-2 rotate-45 bg-blue-500" />
            <span>Research Domains</span>
          </div>
          <h2 className="mx-auto mt-4 text-balance text-[1.75rem] font-medium leading-tight tracking-tight sm:text-3xl">
            DeepFusion AI builds lasting
            <br className="sm:hidden" /> AI capabilities.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <ul ref={sectionRef} className="order-2 lg:order-none">
            {DOMAINS.map((d, i) => {
              const isActive = i === active;
              return (
                <li key={d.n} className="relative border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="flex w-full items-start gap-4 py-5 text-left"
                  >
                    <span
                      className={`mt-0.5 shrink-0 text-[18px] transition-colors duration-300 ${
                        isActive ? "text-blue-500" : "text-white/35"
                      }`}
                    >
                      {d.n}
                    </span>
                    <div className="flex-1">
                      <p
                        className={`text-[18px] transition-colors duration-300 ${
                          isActive
                            ? "font-medium text-white"
                            : "font-normal text-white/45"
                        }`}
                      >
                        {d.title}
                      </p>

                      {isActive ? (
                        <>
                          <p className="mt-4 text-[14px] tracking-wide text-white/40">
                            {d.eyebrow}
                          </p>
                          {d.desc ? (
                            <p className="mt-4 text-[16px] text-white/50">
                              {d.desc}
                            </p>
                          ) : null}
                        </>
                      ) : (
                        <p className="mt-1 text-[11px] tracking-wide text-white/30">
                          {d.eyebrow}
                        </p>
                      )}
                    </div>
                  </button>

                  {isActive && (
                    <div className="h-px w-[45%] min-w-[220px] max-w-[300px] overflow-hidden bg-white/10">
                      <div
                        className="h-full bg-blue-500"
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

          <div className="order-1 aspect-[12/13] rounded-3xl lg:order-none lg:p-8">
            <Image
              src="/1.png"
              alt="Design illustration"
              width={500}
              height={400}
              className="h-full w-full rounded-lg border border-transparent bg-origin-border object-contain [background-image:linear-gradient(black,black),linear-gradient(90deg,rgba(0,0,0,0.6)_0%,rgba(255,255,255,0.6)_100%)] [background-clip:padding-box,border-box]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}