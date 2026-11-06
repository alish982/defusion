import type { Metadata } from 'next';

import LegalPage from '@/components/shared/LegalPage';
import { TERMS_AND_CONDITIONS } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Terms & Conditions — DEEPFUSION AI Labs',
  description: TERMS_AND_CONDITIONS.intro,
};

export default function TermsAndConditionsPage() {
  return <LegalPage document={TERMS_AND_CONDITIONS} />;
}
