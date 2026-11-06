import LayoutWrapper from '@/components/layouts/LayoutWrapper';

export default function HowWeWork() {
  return (
    <section>
      <LayoutWrapper>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <h2 className="font-creato text-[28px] font-normal leading-[1.1] tracking-[-1px] text-[#f4f4f5] lg:whitespace-nowrap lg:text-[40px]">
            How we work
          </h2>

          <div className="text-[16px] leading-[1.5] text-white/70 lg:w-172.5 lg:shrink-0 lg:text-[18px]">
            <p>
              <span className="mb-[1.5em] block lg:mb-0 lg:inline">
                At DeepFusion, engineers, researchers and designers work side by
                side to turn cutting-edge AI research into products people
                actually use, from the first experiment to the final release.
              </span>{' '}
              <span>
                We&apos;re a small, ambitious team where every voice counts,
                ideas move quickly from whiteboard to production, and the impact
                of your work is visible from day one.
              </span>
            </p>
            <p className="mt-[1.5em] hidden lg:block">
              Whether you&apos;re training models, building scalable systems or
              shaping the experience users see, you&apos;ll learn constantly,
              work with people who care about doing things right, and grow
              faster than you thought possible. Bring your curiosity and your
              drive, and we&apos;ll give you hard problems worth solving, the
              tools to solve them, and a team that has your back.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
