type JobType = 'Full-time' | 'Internships';

type Job = {
  id: string;
  title: string;
  location: string;
  type: JobType;
  applyHref: string;
};

const JOB_TYPES: JobType[] = ['Full-time', 'Internships'];

const APPLY_HREF = '/contact';

// Placeholder listings from the Figma design, to replace with real roles.
const JOBS: Job[] = [
  { id: 'ft-1', title: 'Machine Learning Engineer', location: 'Remote', type: 'Full-time', applyHref: APPLY_HREF },
  { id: 'ft-2', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Full-time', applyHref: APPLY_HREF },
  { id: 'ft-3', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Full-time', applyHref: APPLY_HREF },
  { id: 'ft-4', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Full-time', applyHref: APPLY_HREF },
  { id: 'ft-5', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Full-time', applyHref: APPLY_HREF },
  { id: 'ft-6', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Full-time', applyHref: APPLY_HREF },
  { id: 'ft-7', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Full-time', applyHref: APPLY_HREF },
  { id: 'in-1', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Internships', applyHref: APPLY_HREF },
  { id: 'in-2', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Internships', applyHref: APPLY_HREF },
  { id: 'in-3', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Internships', applyHref: APPLY_HREF },
  { id: 'in-4', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Internships', applyHref: APPLY_HREF },
  { id: 'in-5', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Internships', applyHref: APPLY_HREF },
  { id: 'in-6', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Internships', applyHref: APPLY_HREF },
  { id: 'in-7', title: 'Machine Learning Engineer', location: 'Hybrid', type: 'Internships', applyHref: APPLY_HREF },
];

export { JOBS, JOB_TYPES };
export type { Job, JobType };
