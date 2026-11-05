import type { Metadata } from 'next';

import LayoutWrapper from '@/components/layouts/LayoutWrapper';

import CareersList from './CareersList';

export const metadata: Metadata = {
  title: 'Careers — DEEPFUSION AI Labs',
  description:
    'Find the role that fits you best at DeepFusion AI Labs, across full-time positions and internships.',
};

export default function CareersPage() {
  return (
    <main className="pt-24 pb-8 md:pt-43 md:pb-21">
      <LayoutWrapper>
        <CareersList />
      </LayoutWrapper>
    </main>
  );
}
