import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LayoutWrapper from '@/components/layouts/LayoutWrapper';
import { JOBS, getJobBySlug } from '@/data/careers';

import ApplyForm from './_components/ApplyForm';
import JobDetail from './_components/JobDetail';
import JobOverview from './_components/JobOverview';

type JobPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) return {};

  return {
    title: `${job.title} — DEEPFUSION AI Labs`,
    description: `Apply for the ${job.title} role at DeepFusion AI Labs, ${job.location.toLowerCase()} from ${job.office}.`,
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) notFound();

  return (
    <main className="pt-28 pb-8 md:pb-21 lg:pt-44">
      <LayoutWrapper>
        <JobDetail
          key={job.slug}
          overview={<JobOverview job={job} />}
          application={<ApplyForm jobTitle={job.title} />}
        />
      </LayoutWrapper>
    </main>
  );
}
