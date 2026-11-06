import type { Metadata } from 'next';

import LayoutWrapper from '@/components/layouts/LayoutWrapper';

import CareersHero from './_components/CareersHero';
import CareersList from './_components/CareersList';
import HowWeWork from './_components/HowWeWork';

export const metadata: Metadata = {
  title: 'Careers | DEEPFUSION AI Labs',
  description:
    'Find the role that fits you best at DeepFusion AI Labs, across full-time positions and internships.',
};

export default function CareersPage() {
  return (
    <main className="pb-8 md:pb-21">
      <CareersHero />
      <div className="mt-12 lg:mt-22">
        <HowWeWork />
      </div>
      <div className="mt-12 lg:mt-41.75">
        <LayoutWrapper>
          <CareersList />
        </LayoutWrapper>
      </div>
    </main>
  );
}
