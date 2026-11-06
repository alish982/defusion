import Image from 'next/image';

import {
  getJobCommitment,
  getRelatedJobs,
  type Job,
} from '@/data/careers';

import JobRow from '../../_components/JobRow';

function MetaItem({ icon, children }: { icon: string; children: string }) {
  return (
    <li className="flex items-center gap-2 text-[14px] leading-[1.2] text-white/90">
      <Image src={`/icons/${icon}.svg`} alt="" width={16} height={16} />
      {children}
    </li>
  );
}

function ContractItem({ icon, children }: { icon: string; children: string }) {
  return (
    <li className="flex items-center gap-1.5 py-2 pr-6 text-[12px] leading-[1.2] text-white/90">
      <Image src={`/icons/${icon}-sm.svg`} alt="" width={14} height={14} />
      {children}
    </li>
  );
}

function BulletSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="flex flex-col gap-4 lg:gap-5">
      <h2 className="font-creato text-[16px] font-normal leading-[1.1] text-white lg:text-[28px]">
        {title}
      </h2>
      <ul className="flex list-disc flex-col gap-3 pl-[21px] text-[14px] leading-[1.2] text-white/64 lg:gap-3.5 lg:pl-6 lg:text-[16px]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function JobOverview({ job }: { job: Job }) {
  const relatedJobs = getRelatedJobs(job);
  const commitment = getJobCommitment(job);

  return (
    <div className="flex flex-col gap-12 lg:gap-20">
      <div className="flex flex-col gap-6 lg:gap-15">
        <div className="flex flex-col gap-4 lg:gap-5">
          <h1 className="font-creato text-[28px] font-normal leading-[1.1] tracking-[-1px] text-[#f4f4f5] lg:text-[40px] lg:text-white">
            {job.title}
          </h1>

          <div className="flex items-center gap-1.5 text-[12px] leading-[1.2] text-white/90 lg:hidden">
            <Image src="/icons/map-pin-sm.svg" alt="" width={14} height={14} />
            {job.office}
          </div>

          <ul className="hidden items-center gap-8 lg:flex">
            <MetaItem icon="map-pin">{job.office}</MetaItem>
            <MetaItem icon="banknote">{job.salary}</MetaItem>
            <MetaItem icon="macbook">{commitment}</MetaItem>
          </ul>
        </div>

        <div className="flex flex-col gap-5 border-y border-white/10 py-5 lg:hidden">
          <div className="flex flex-col gap-2 px-2">
            <h2 className="font-creato text-[16px] font-normal leading-[1.1] text-white">
              Contract details
            </h2>
            <ul className="flex flex-col">
              <ContractItem icon="banknote">{job.salary}</ContractItem>
              <ContractItem icon="macbook">{commitment}</ContractItem>
              <ContractItem icon="people">{job.probation}</ContractItem>
              <ContractItem icon="clock">{job.hours}</ContractItem>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-12">
          <BulletSection
            title="What you'll work on"
            items={job.responsibilities}
          />
          <BulletSection title="What we look for" items={job.requirements} />
          <BulletSection title="Nice to have" items={job.niceToHave} />
        </div>
      </div>

      {relatedJobs.length > 0 && (
        <section className="flex flex-col gap-5 lg:gap-10">
          <h2 className="font-creato text-[20px] font-normal leading-[1.1] text-white lg:text-[27px]">
            Related open positions
          </h2>
          <ul className="flex flex-col gap-4 max-md:[&>li:nth-child(n+4)]:hidden md:gap-0">
            {relatedJobs.map((relatedJob) => (
              <JobRow key={relatedJob.slug} job={relatedJob} variant="compact" />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
