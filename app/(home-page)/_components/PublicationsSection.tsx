import Image from 'next/image';
import { PAPERS } from '@/data/project';
import GradientButton from '@/components/ui/Button';
import Link from 'next/link';
import PublicationCard from '@/app/publications/PublicationCard';
import LayoutWrapper from '@/components/layouts/LayoutWrapper';

export default function PublicationsSection() {
  return (
    <section id="research" className="py-8 lg:py-28">
      <LayoutWrapper>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rotate-45 bg-blue-500" />
              <span>Research</span>
            </div>
            <h2 className="mt-4 text-balance text-[1.75rem] font-normal font-creato leading-tight tracking-tight sm:text-3xl sm:whitespace-nowrap">
              DeepFusion AI&apos;s Recent
              <br className="sm:hidden" /> Works
            </h2>
          </div>
          <GradientButton
            as={Link}
            variant="outline"
            href="/publications"
            className="max-lg:hidden hover:scale-110"
          >
            All Publications
          </GradientButton>
        </div>

        {/* Desktop / tablet: grid */}
        <div className="mt-12 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {PAPERS.map((p) => (
            <PublicationCard
              date={p.date}
              key={p.title}
              tag={p.tag}
              title={p.title}
              desc={p.desc}
              readHref={p.href}
            />
          ))}
        </div>

        {/* Mobile: swipeable slider*/}
        <div className="mt-8 sm:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 -mx-4 scrollbar-hide">
            {PAPERS.map((p) => (
              <article
                key={p.title}
                className="flex flex-col overflow-hidden rounded-2xl border hairline bg-surface w-[85%] shrink-0 snap-center"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/image1.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 bg-[#181818]">
                  <p className="text-[12px] uppercase tracking-wide text-muted-2">
                    {p.tag}
                  </p>
                  <h3 className="mt-3 text-[18px] font-medium font-creato leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[16px] text-muted-2">{p.desc}</p>
                  <div className="mt-auto grid grid-cols-2 gap-[13px] pt-4">
                    <GradientButton
                      as="a"
                      variant="subtle"
                      href={p.href}
                      className="h-11! min-w-0 px-2!"
                    >
                      Read
                    </GradientButton>
                    <GradientButton
                      as="a"
                      variant="outline"
                      href="#"
                      className="h-11! min-w-0 px-2!"
                    >
                      Cite
                    </GradientButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex lg:hidden">
          <GradientButton
            as={Link}
            variant="outline"
            href="/publications"
            className="w-full"
          >
            All Publications
          </GradientButton>
        </div>
      </LayoutWrapper>
    </section>
  );
}
