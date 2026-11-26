"use client";

import { useRef } from "react";
import type { PublicationSection } from "@/data/publications";
import TableOfContents, { type TocItem } from "./TableOfContents";

const INTRO =
  "Real-time speech recognition has become table stakes for modern voice interfaces — but for low-resource languages like Nepali, streaming ASR remains a largely unsolved problem. Most published Nepali ASR work focuses on offline, full-utterance transcription, where the model can see the entire audio clip before producing a transcript.";

export default function PublicationBody({
  sections,
}: {
  sections: PublicationSection[];
}) {
  const articleRef = useRef<HTMLDivElement>(null);
  const items: TocItem[] = sections.map(({ id, title }) => ({ id, title }));

  return (
    <div className="flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-10 xl:gap-[86px]">
      <TableOfContents items={items} articleRef={articleRef} />

      <div className="order-first flex flex-row flex-wrap items-center gap-x-5 gap-y-2 lg:order-last lg:flex-col lg:items-start lg:gap-5 lg:shrink-0">
        <p className="text-[14px] leading-[100%] text-[#838383]">
          Nov 16, 2026
        </p>
        <p className="text-[14px] leading-[100%] text-[#838383]">11 min read</p>
        <p className="text-[14px] leading-[100%] text-[#838383]">Share</p>
      </div>

      <div
        ref={articleRef}
        className="flex w-full min-w-0 max-w-[630px] flex-col gap-10 md:gap-[56px] lg:flex-1"
      >
        <div className="flex flex-col gap-5">
          <p className="text-[15px] leading-[150%] text-[#FFFFFFA3] md:text-[16px]">
            {INTRO}
          </p>
          <p className="text-[15px] leading-[150%] text-[#FFFFFFA3] md:text-[16px]">
            {INTRO}
          </p>
        </div>

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 lg:scroll-mt-32"
          >
            <h2 className="font-creato text-[24px] leading-[1.1] md:text-[28px]">
              {section.title}
            </h2>
            <div className="mt-4 flex flex-col gap-4 md:mt-6 md:gap-5">
              {section.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-[150%] text-[#FFFFFFA3] md:text-[16px]"
                >
                  {text}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
