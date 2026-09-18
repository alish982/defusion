"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number, e?: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-14 flex items-center justify-center gap-1.5 border-t border-white/10 pt-8">
      <button
        type="button"
        onClick={(e) => onPageChange(currentPage - 1, e)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-neutral-400 transition-all duration-200 hover:border-[#5CAEFF]/40 hover:bg-[#5CAEFF]/5 hover:text-[#5CAEFF] disabled:pointer-events-none disabled:opacity-30"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="mx-1 flex items-center gap-1.5">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              onClick={(e) => onPageChange(page, e)}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex h-9 w-9 items-center justify-center rounded-lg text-[13px] font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5CAEFF]/10 text-[#5CAEFF] shadow-[0_0_0_1px_rgba(92,174,255,0.4)]"
                  : "text-neutral-500 hover:bg-white/5 hover:text-neutral-100"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={(e) => onPageChange(currentPage + 1, e)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-neutral-400 transition-all duration-200 hover:border-[#5CAEFF]/40 hover:bg-[#5CAEFF]/5 hover:text-[#5CAEFF] disabled:pointer-events-none disabled:opacity-30"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}