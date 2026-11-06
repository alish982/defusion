import type { Metadata } from 'next';

import LegalPage from '@/components/shared/LegalPage';
import { PRIVACY_POLICY } from '@/data/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy — DEEPFUSION AI Labs',
  description: PRIVACY_POLICY.intro,
};

export default function PrivacyPolicyPage() {
  return <LegalPage document={PRIVACY_POLICY} />;
}
