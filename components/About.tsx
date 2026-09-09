"use client";

import { useState } from "react";
import { DOMAINS, PILLARS } from "../Data/About";
import Image from "next/image";

export default function About() {
  const [active, setActive] = useState(0);
  return (
    <>
      {/* Intro statement */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-6 text-center lg:px-10">
          <p className="text-balance font-light leading-[1.1] tracking-[-1px] text-muted text-[1.5rem] md:text-[3.2rem]">
            DeepFusion AI Labs is Prixa Group&rsquo;s dedicated research engine,
            a team building certified, multimodal AI across language, vision,
            voice, and security, and bringing it to life inside the products
            people use every day. Serious research, without the friction.
          </p>
        </div>
      </section>

      {/* Research domains */}
      <section id="domains" className="border-t hairline py-12 lg:py-16">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-10">
          <div className="text-center">
            <span className="eyebrow">Research Domains</span>
            <h2 className="mx-auto mt-4 text-balance text-[1.75rem] font-medium leading-tight tracking-tight sm:text-3xl">
              DeepFusion AI builds lasting
              <br className="sm:hidden" /> AI capabilities.
            </h2>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <ul className="order-2 lg:order-none">
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
                      <div className="h-px w-[45%] min-w-[220px] max-w-[300px] bg-blue-500" />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="order-1 aspect-[12/13] rounded-3xl p-6 lg:order-none lg:p-8">
              <Image
                src="/designimg.svg"
                alt="Design illustration"
                width={700}
                height={500}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why DeepFusion */}
      <section id="why" className="border-t hairline py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="h-2.5 w-2.5 rotate-45 bg-blue-500" />
            <span>Why DeepFusion</span>
          </div>
          <h2 className="mt-4 max-w-xl md:whitespace-nowrap text-[1.75rem] font-medium leading-tight tracking-tight sm:text-3xl">
            We Work at the Layer Where Behavior is Decided
          </h2>
          <p className="mt-5 max-w-md text-[16px] text-muted md:whitespace-nowrap">
            It addresses the challenge of taking complex research and deploying
            it as reliable production systems.
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className={`relative h-[420px] overflow-hidden rounded-2xl border hairline bg-surface ${
                  p.wide ? "lg:col-span-3" : "lg:col-span-1"
                }`}
              >
                {/* full-bleed texture background */}
                <div className="absolute inset-0">
                  <Image
                    src="/fiber.png"
                    alt="Woven texture"
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* gradient fade so the text stays legible over the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* bottom-aligned content */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="border-t hairline pt-4">
                    <p className="text-[15px] font-medium text-white">
                      {p.title}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
