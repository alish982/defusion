import Link from 'next/link';

import GradientButton from '@/components/ui/Button';
import type { Job } from '@/data/careers';

const VARIANTS = {
  default: {
    Title: 'h4',
    row: 'md:grid-cols-[1fr_55px_1fr] md:border-white/8 md:p-6 md:last:border-b-0 md:hover:rounded-sm md:hover:bg-[#121212]',
    title: '',
    location: '',
  },
  compact: {
    Title: 'h3',
    row: 'md:grid-cols-[1fr_49px_1fr] md:border-white/12 md:px-5 md:py-[19px] md:hover:rounded-lg md:hover:bg-[#212121]',
    title: 'md:text-[16px]',
    location: 'md:text-[14px]',
  },
} as const;

export default function JobRow({
  job,
  variant = 'default',
}: {
  job: Job;
  variant?: keyof typeof VARIANTS;
}) {
  const styles = VARIANTS[variant];
  const { Title } = styles;

  return (
    <li
      className={`group relative flex flex-col gap-6 rounded-md bg-[#121212] p-5 transition-colors md:grid md:items-center md:rounded-none md:border-b md:bg-transparent md:hover:border-transparent ${styles.row}`}
    >
      <div className="flex flex-col gap-4 md:contents">
        <Title
          className={`font-creato text-[18px] font-normal leading-none text-white transition-colors md:text-white/70 md:group-hover:text-white ${styles.title}`}
        >
          {job.title}
        </Title>
        <p
          className={`font-creato text-[16px] leading-none text-white/58 transition-colors md:text-white/70 md:group-hover:text-white ${styles.location}`}
        >
          {job.location}
        </p>
      </div>
      {/* The link's ::after covers the whole row, so the row is one click target. */}
      <GradientButton
        as={Link}
        variant="outline"
        href={`/careers/${job.slug}`}
        aria-label={`Apply for ${job.title}, ${job.location}`}
        className="static! h-11! w-full border-[#414b56]! after:absolute after:inset-0 hover:opacity-100! md:w-auto md:justify-self-end md:border-[#3d4955]! md:group-hover:border-[#414b56]!"
      >
        Apply Now
      </GradientButton>
    </li>
  );
}
