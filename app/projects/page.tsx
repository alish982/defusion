"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { publications } from "@/Data/Publications";
import Container from "@/components/container";
import BackLink from "@/components/ui/BackLink";

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container className="pt-16 xl:pt-24">
      <main className="min-h-screen bg-[#0a0a0b] py-16 sm:px-10 md:px-2 lg:px-4">
        <div className="mx-auto max-w-6xl">
          <BackLink href="/" label="Back to home" />

          <div className="flex items-center gap-3 py-4">
            <span className="h-2 w-2 rotate-45 bg-blue-500" />
            <span>Research Domains</span>
          </div>
          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
            All Publications
          </h1>
          <p className="mb-12 max-w-xl text-[15.5px] leading-relaxed text-neutral-400">
            {publications.length} papers from the DeepFusion AI research group,
            spanning speech, multimodal systems, and model efficiency.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
                  >
                    <div className="aspect-[4/3] w-full animate-pulse bg-neutral-800" />
                    <div className="flex flex-col gap-2.5 p-4">
                      <div className="h-2 w-2/5 animate-pulse rounded bg-neutral-800" />
                      <div className="h-3 w-11/12 animate-pulse rounded bg-neutral-800" />
                      <div className="h-3 w-2/3 animate-pulse rounded bg-neutral-800" />
                      <div className="mt-1 h-3 w-4/5 animate-pulse rounded bg-neutral-800" />
                    </div>
                  </div>
                ))
              : publications.map((pub) => (
                  <div
                    key={pub.slug}
                    //   href={`/projects/${pub.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"
                  >
                    <div
                      className={`aspect-[4/3] w-full bg-gradient-to-br ${pub.accent} transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className="flex flex-1 flex-col gap-2 p-4">
                      <p className="text-[12.5px] text-neutral-400">
                        {pub.date} · {pub.category}
                      </p>
                      <h3 className="line-clamp-2 text-[16px] font-semibold leading-snug text-neutral-100">
                        {pub.title}
                      </h3>
                      <p className="line-clamp-2 text-[13.5px] leading-relaxed text-neutral-400">
                        {pub.summary}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-[16px] text-[#5CAEFF] font-normal hover:opacity-80 transition-all duration-200 group-hover:gap-2.5 group-hover:text-blue-300">
                        <span className="border-b border-[#5CAEFF] pb-1.5">
                          Read the paper <span aria-hidden="true">→</span>
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </main>
    </Container>
  );
}
