export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden lg:pt-48 lg:pb-32"
    >
      <div className="relative mx-auto max-w-[1600px] px-6 pt-40">
        <div className="max-w-2xl">
          <h1 className="text-balance text-[2.25rem] font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.75rem] lg:leading-[1.08]">
            <span className="bg-gradient-to-r from-[#7F9AB4] to-[#F4F4F5] bg-clip-text text-transparent whitespace-nowrap">
              Frontier Intelligence.
            </span>
            <br />
            Global Scale.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] md:text-[18px] leading-relaxed text-muted">
            A pioneering frontier artificial intelligence at a global scale,
            delivering certified, multimodal, state-of-the-art research into a
            product.
          </p>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#domains"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-transparent bg-origin-border px-5 text-[13.5px] font-medium text-paper transition-opacity hover:opacity-85 sm:w-auto
[background-image:radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_70%),linear-gradient(rgba(255,255,255,0.08),rgba(255,255,255,0.08)),linear-gradient(#0a0a0c,#0a0a0c),linear-gradient(45deg,#004181_0%,rgba(255,255,255,0.2)_100%)]
[background-clip:padding-box,padding-box,padding-box,border-box]"
            >
              Explore the research
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#why"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border hairline px-5 text-[13.5px] font-medium text-paper transition-colors hover:bg-surface-raised sm:w-auto"
            >
              Business Foundation
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
