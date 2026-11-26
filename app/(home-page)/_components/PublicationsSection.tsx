import { PAPERS } from "@/data/project";
import GradientButton from "@/components/ui/Button";
import Link from "next/link";
import PublicationCard from "@/app/publications/PublicationCard";
import LayoutWrapper from "@/components/layouts/LayoutWrapper";

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
        <div className="mt-12 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {PAPERS.map((p) => (
            <PublicationCard
              key={p.href}
              date={p.date}
              tag={p.tag}
              title={p.title}
              desc={p.desc}
              readHref={p.href}
              citation={p.citation}
            />
          ))}
        </div>

        {/* Mobile: swipeable slider */}
        <div className="mt-8 sm:hidden">
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
            {PAPERS.map((p) => (
              <div className="w-[85%] shrink-0 snap-center [&>*]:h-full">
                <PublicationCard
                  key={p.href}
                  date={p.date}
                  tag={p.tag}
                  title={p.title}
                  desc={p.desc}
                  readHref={p.href}
                  citation={p.citation}
                />
              </div>
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
