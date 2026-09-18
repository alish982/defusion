"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { publications } from "@/Data/Publications";
import Container from "@/components/container";
import PublicationCard from "./publicationCard";
import Pagination from "@/utils/Pagination";

const CATEGORIES = ["All", "Edge AI", "Speech and Voice", "Multimodal"];
const ITEMS_PER_PAGE = 9;
const TRANSITION_MS = 220;

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [displayPage, setDisplayPage] = useState(1); // page actually rendered in the grid
  const [isTransitioning, setIsTransitioning] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const lenis = useLenis();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredPublications = useMemo(() => {
    if (activeCategory === "All") return publications;
    return publications.filter((pub) => pub.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPublications.length / ITEMS_PER_PAGE),
  );

  const paginatedPublications = useMemo(() => {
    const start = (displayPage - 1) * ITEMS_PER_PAGE;
    return filteredPublications.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPublications, displayPage]);

  useEffect(() => {
    setCurrentPage(1);
    setDisplayPage(1);
  }, [activeCategory]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (currentPage === displayPage) return;

    setIsTransitioning(true);

    if (lenis && topRef.current) {
      lenis.resize();
      lenis.scrollTo(topRef.current, {
        offset: -90,
        duration: 0.9,
      });
    }

    const swapTimer = setTimeout(() => {
      setDisplayPage(currentPage);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(false));
      });
    }, TRANSITION_MS);

    return () => clearTimeout(swapTimer);
  }, [currentPage, displayPage, lenis]);

  const handlePageChange = (
    page: number,
    e?: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    e?.currentTarget.blur();
    setCurrentPage(page);
  };

  return (
    <Container className="pt-16 xl:pt-24">
      <main className="min-h-screen bg-[#0a0a0b] py-16 sm:px-10 md:px-2 ">
        <div ref={topRef}>
          <div className="flex items-center gap-3 py-4">
            <span className="h-2 w-2 rotate-45 bg-blue-500" />
            <span>Research Domains</span>
          </div>
          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
            All Publications
          </h1>
          <p className="mb-8 max-w-xl text-[15.5px] leading-relaxed text-neutral-400">
            {publications.length} papers from the DeepFusion AI research group,
            spanning speech, multimodal systems, and model efficiency.
          </p>

          <div className="mb-10 flex flex-wrap gap-2.5">
            {CATEGORIES.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "border-[#5CAEFF] bg-[#5CAEFF]/10 text-[#5CAEFF]"
                      : "border-white/10 text-neutral-400 hover:border-white/20 hover:text-neutral-100"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div
            className="grid min-h-[600px] grid-cols-1 gap-6 transition-all ease-out sm:grid-cols-2 lg:grid-cols-3"
            style={{
              transitionDuration: `${TRANSITION_MS}ms`,
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateY(10px)" : "translateY(0)",
            }}
          >
            {isLoading
              ? Array.from({ length: 9 }).map((_, i) => (
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
              : paginatedPublications.map((pub) => (
                  <PublicationCard
                    key={pub.slug}
                    date={pub.date}
                    tag={pub.category}
                    title={pub.title}
                    desc={pub.summary}
                    accent={pub.accent}
                  />
                ))}
          </div>

          {!isLoading && filteredPublications.length === 0 && (
            <p className="py-12 text-center text-[14px] text-neutral-500">
              No publications in this category yet.
            </p>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </Container>
  );
}