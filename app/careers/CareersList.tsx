'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import GradientButton from '@/components/ui/Button';
import { JOBS, JOB_TYPES, type Job, type JobType } from '@/data/careers';

type Filter = 'All Careers' | JobType;

const FILTERS: Filter[] = ['All Careers', ...JOB_TYPES];

function JobRow({ job }: { job: Job }) {
  return (
    <li className="group flex flex-col gap-4 border-b border-white/6 p-4 transition-colors last:border-b-0 hover:rounded-lg hover:border-transparent hover:bg-[#212121] md:grid md:grid-cols-[1fr_55px_1fr] md:items-center md:gap-6 md:p-6">
      <h3 className="font-creato text-[18px] font-normal leading-none text-white/70 transition-colors group-hover:text-white">
        {job.title}
      </h3>
      <p className="font-creato text-[16px] leading-none text-white/70 transition-colors group-hover:text-white">
        {job.location}
      </p>
      <GradientButton
        as={Link}
        variant="outline"
        href={job.applyHref}
        aria-label={`Apply for ${job.title}, ${job.location}`}
        className="h-11! w-full border-[#3d4955]! md:w-auto md:justify-self-end"
      >
        Apply Now
      </GradientButton>
    </li>
  );
}

export default function CareersList() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All Careers');

  const visibleTypes = JOB_TYPES.filter(
    (type) => activeFilter === 'All Careers' || activeFilter === type,
  );

  return (
    <div className="flex flex-col gap-12 rounded-xl border border-[#004181] bg-[#181818] p-4 md:gap-20 md:p-8">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="mx-[1.657px] size-2 rotate-45 bg-[#0a85ff]"
            />
            <p className="text-[16px] leading-[1.1] text-white">Join Us</p>
          </div>
          <h1 className="font-creato text-[32px] font-normal leading-[1.1] tracking-[-1px] text-white md:text-[40px]">
            Find the role that fits you best.
          </h1>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full pr-5 pl-3 text-[16px] leading-none tracking-[-0.3125px] transition-colors ${
                  isActive
                    ? 'text-white ring-[1.5px] ring-inset ring-white'
                    : 'bg-[#2a2a2a] text-white/80 hover:text-white'
                }`}
              >
                <Image
                  src={
                    isActive
                      ? '/icons/circle-check.svg'
                      : '/icons/circle-placeholder.svg'
                  }
                  alt=""
                  width={28}
                  height={28}
                />
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {visibleTypes.map((type) => (
        <section key={type} className="flex flex-col gap-4 md:gap-8">
          <h2 className="font-creato text-[24px] font-normal leading-[1.1] text-white">
            {type}
          </h2>
          <ul className="flex flex-col">
            {JOBS.filter((job) => job.type === type).map((job) => (
              <JobRow key={job.id} job={job} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
