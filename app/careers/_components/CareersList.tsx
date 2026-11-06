'use client';

import { useState } from 'react';
import Image from 'next/image';

import { JOBS, JOB_TYPES, type JobType } from '@/data/careers';

import { OPEN_ROLES_ID } from './CareersHero';
import JobRow from './JobRow';

type Filter = 'All Careers' | JobType;

const FILTERS: Filter[] = ['All Careers', ...JOB_TYPES];

export default function CareersList() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All Careers');

  const visibleTypes = JOB_TYPES.filter(
    (type) => activeFilter === 'All Careers' || activeFilter === type,
  );

  return (
    <div id={OPEN_ROLES_ID} className="flex flex-col gap-12 md:gap-20">
      <div className="flex flex-col gap-8 md:gap-10">
        <h2 className="max-w-67.25 font-creato text-[28px] font-normal leading-[1.1] tracking-[-1px] text-[#f4f4f5] md:max-w-none md:text-[40px] md:text-white">
          Find the role that fits you best.
        </h2>

        <div className="scrollbar-hide flex items-center gap-3 overflow-x-auto md:gap-4">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            const icon = isActive ? 'circle-check' : 'circle-placeholder';

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-full py-2 pr-4 pl-2 text-[14px] leading-none tracking-[-0.3125px] transition-colors md:h-12 md:gap-2 md:py-0 md:pr-5 md:pl-3 md:text-[16px] ${
                  isActive
                    ? 'text-white ring-[1.5px] ring-inset ring-white'
                    : 'bg-[#2a2a2a] text-white/80 hover:text-white'
                }`}
              >
                <Image
                  src={`/icons/${icon}-sm.svg`}
                  alt=""
                  width={20}
                  height={20}
                  className="md:hidden"
                />
                <Image
                  src={`/icons/${icon}.svg`}
                  alt=""
                  width={28}
                  height={28}
                  className="hidden md:block"
                />
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {visibleTypes.map((type) => (
        <section key={type} className="flex flex-col gap-6 md:gap-8">
          <h3 className="font-creato text-[20px] font-normal leading-[1.1] text-white md:text-[24px]">
            {type}
          </h3>
          <ul className="flex flex-col gap-4 md:gap-0">
            {JOBS.filter((job) => job.type === type).map((job) => (
              <JobRow key={job.slug} job={job} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
