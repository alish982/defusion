import Image from "next/image";
import { PAPERS } from "@/Data/Project";
import ScrollLink from "@/components/ui/ScrollLink";
import Link from "next/link";
import PublicationCard from "@/app/publications/publicationCard";

export default function Projects() {
  return (
    <section id="research" className="py-8 lg:py-28">
      <div className="mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rotate-45 bg-blue-500" />
              <span>Research</span>
            </div>
            <h2 className="mt-4 text-balance text-[1.75rem] font-normal font-creato leading-tight tracking-tight sm:text-3xl sm:whitespace-nowrap">
              DeepFusion AI's Recent
              <br className="sm:hidden" /> Works
            </h2>
          </div>

          <Link
            href="/publications"
            className="hidden lg:inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-paper transition-all duration-300 ease-out hover:opacity-85 hover:scale-110
   [background-image:linear-gradient(to_right,#FFFFFF1F,#FFFFFF14)]"
          >
            All Publications
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Desktop / tablet: grid */}
        <Link href="/publications">
          <div className="mt-12 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {PAPERS.map((p) => (
              <PublicationCard
                date={p.date}
                key={p.title}
                tag={p.tag}
                title={p.title}
                desc={p.desc}
              />
            ))}
          </div>
        </Link>

        {/* Mobile: swipeable slider*/}
        <Link href="/publications">
          <div className="mt-8 sm:hidden">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 -mx-6 scrollbar-hide">
              {PAPERS.map((p) => (
                <article
                  key={p.title}
                  className="overflow-hidden rounded-2xl border hairline bg-surface w-[85%] shrink-0 snap-center"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/image1.png"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 bg-[#181818]">
                    <p className="text-[12px] uppercase tracking-wide text-muted-2">
                      {p.tag}
                    </p>
                    <h3 className="mt-3 text-[18px] font-medium font-creato leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[16px] text-muted-2">{p.desc}</p>
                    <div className="mt-4 inline-block text-[16px] text-[#5CAEFF] font-normal hover:opacity-80 border-b border-[#5CAEFF] pb-1.5">
                      Read the Paper{" "}
                      <Image
                        src="/arrow.svg"
                        alt="image"
                        width={20}
                        height={20}
                        className="inline-block"
                        style={{
                          filter:
                            "invert(48%) sepia(90%) saturate(1000%) hue-rotate(190deg)",
                        }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Link>

        <div className="mt-8 flex lg:hidden">
          <Link
            href="/publications"
            className="flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-[16px] font-normal text-paper transition-opacity hover:opacity-85
          [background-image:linear-gradient(to_right,#FFFFFF1F,#FFFFFF14)]"
          >
            All Publications
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
