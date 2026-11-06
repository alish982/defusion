import LayoutWrapper from '@/components/layouts/LayoutWrapper';
import type { LegalDocument } from '@/data/legal';

import LegalSection from './LegalSection';

export default function LegalPage({ document }: { document: LegalDocument }) {
  const { title, intro, lastUpdated, sections } = document;

  return (
    <main className="pt-24 pb-8 md:pt-43 md:pb-21">
      <LayoutWrapper>
        <div className="flex max-w-[800px] flex-col gap-10 md:gap-17">
          <header className="flex flex-col gap-[19px]">
            <h1 className="w-fit bg-gradient-to-r from-[#7F9AB4] from-[9.277%] to-[#F4F4F5] to-[66.538%] bg-clip-text pb-1 font-creato text-[2.75rem] font-normal leading-[1] tracking-[-2px] text-transparent md:text-[64px]">
              {title}
            </h1>
            <p className="text-[14px] leading-[1.4] text-white/70 md:text-[16px] md:leading-[1.5] md:text-white/78">
              {intro}
            </p>
            <p className="text-[14px] leading-none text-white/70">
              Last updated: {lastUpdated}
            </p>
          </header>

          <div className="flex flex-col gap-8 text-[14px] leading-[1.5] text-white/70 md:gap-10 md:text-[16px]">
            {sections.map((section, i) => (
              <LegalSection
                key={section.title}
                number={i + 1}
                section={section}
              />
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </main>
  );
}
