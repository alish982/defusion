type JobType = 'Full-time' | 'Internships';

type Job = {
  slug: string;
  title: string;
  location: string;
  type: JobType;
  office: string;
  salary: string;
  probation: string;
  hours: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
};

const JOB_TYPES: JobType[] = ['Full-time', 'Internships'];

const COMMITMENT_LABELS: Record<JobType, string> = {
  'Full-time': 'Full-time',
  Internships: 'Internship',
};

const CAREERS_EMAIL = 'info@deepfusion.ai';

// Placeholder listings from the Figma design, to replace with real roles.
function placeholderJob(title: string, location: string, type: JobType): Job {
  return {
    slug: title.toLowerCase().replaceAll(' ', '-'),
    title,
    location,
    type,
    office: 'Kathmandu, Nepal',
    salary: 'NPR 30K - 40K',
    probation: '6 months probation',
    hours: '40 hrs/week',
    responsibilities: [
      'Train and evaluate models for OCR, key information extraction and tamper detection',
      'Build labelled datasets and the tools to grow them',
      'Optimise models for latency and memory on CPU and edge hardware',
      'Run error analysis and turn findings into the next experiment',
      'Ship and monitor models behind production APIs',
    ],
    requirements: [
      'Strong Python and PyTorch',
      'Shipped at least one computer vision model',
      'Solid grasp of evaluation: splits, leakage, metrics that match the task',
      'Able to explain trade-offs to non-specialists',
    ],
    niceToHave: [
      'ONNX, TensorRT or OpenVINO',
      'Experience with document or forensic imager',
      'FastAPI or a similar serving stack',
    ],
  };
}

const JOBS: Job[] = [
  placeholderJob('Machine Learning Engineer', 'Remote', 'Full-time'),
  placeholderJob('Computer Vision Engineer', 'Hybrid', 'Full-time'),
  placeholderJob('NLP Engineer', 'Hybrid', 'Full-time'),
  placeholderJob('AI Research Scientist', 'Hybrid', 'Full-time'),
  placeholderJob('MLOps Engineer', 'Hybrid', 'Full-time'),
  placeholderJob('Generative AI Engineer', 'Hybrid', 'Full-time'),
  placeholderJob('Data Scientist', 'Hybrid', 'Full-time'),
  placeholderJob('Machine Learning Intern', 'Hybrid', 'Internships'),
  placeholderJob('Computer Vision Intern', 'Hybrid', 'Internships'),
  placeholderJob('NLP Intern', 'Hybrid', 'Internships'),
  placeholderJob('AI Research Intern', 'Hybrid', 'Internships'),
  placeholderJob('MLOps Intern', 'Hybrid', 'Internships'),
  placeholderJob('Speech Recognition Intern', 'Hybrid', 'Internships'),
  placeholderJob('Data Science Intern', 'Hybrid', 'Internships'),
];

function getJobBySlug(slug: string) {
  return JOBS.find((job) => job.slug === slug);
}

function getRelatedJobs(job: Job, limit = 4) {
  return JOBS.filter(
    (other) => other.type === job.type && other.slug !== job.slug,
  ).slice(0, limit);
}

function getJobCommitment(job: Job) {
  return `${COMMITMENT_LABELS[job.type]}, ${job.location}`;
}

export {
  CAREERS_EMAIL,
  JOBS,
  JOB_TYPES,
  getJobBySlug,
  getJobCommitment,
  getRelatedJobs,
};
export type { Job, JobType };
