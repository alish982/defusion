import Image from "next/image";
import { PAPERS } from "@/Data/Project";

export default function Projects() {
  return (
    <section id="research" className="py-8 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rotate-45 bg-blue-500" />
              <span>Research</span>
            </div>
            <h2 className="mt-4 text-balance text-[1.75rem] font-light leading-tight tracking-tight sm:text-3xl sm:whitespace-nowrap">
              DeepFusion AI's Recent
              <br className="sm:hidden" /> Works
            </h2>
          </div>

          <a
            href="#all-publications"
            className="hidden lg:inline-flex items-center gap-2 rounded-full border hairline px-4 py-2 text-[13px] font-medium text-paper transition-opacity hover:opacity-85
[background-image:linear-gradient(to_bottom,#FFFFFF1F,#FFFFFF00)]"
          >
            All Publications
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAPERS.map((p, i) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl border hairline bg-surface"
            >
              <div className="relative aspect-[4/3]">
                <Image src="/image1.png" alt="" fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-[12px] uppercase tracking-wide text-muted-2">
                  {p.tag}
                </p>
                <h3 className="mt-3 text-[15px] font-medium leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13px] text-muted-2">{p.desc}</p>
                <a
                  href={p.href}
                  className="mt-4 inline-block text-[13px] text-[#5CAEFF] font-medium text-accent hover:opacity-80"
                >
                  Read the Paper →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center lg:hidden">
          <a
            href="#all-publications"
            className="inline-flex items-center gap-2 rounded-full border hairline px-4 py-2 text-[13px] font-medium text-paper transition-opacity hover:opacity-85
[background-image:linear-gradient(to_bottom,#FFFFFF1F,#FFFFFF00)]"
          >
            All Publications
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
