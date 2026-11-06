/** A string renders as a paragraph, an array of strings as a bulleted list. */
type LegalBlock = string | string[];

type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

type LegalDocument = {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
};

// Sample copy, to replace with text approved by legal counsel before launch.
const PRIVACY_POLICY: LegalDocument = {
  title: 'Privacy Policy',
  intro:
    'How DeepFusion AI Labs collects, uses, and protects your information when you visit our website or get in touch with us.',
  lastUpdated: 'November 6, 2026',
  sections: [
    {
      title: 'Information We Collect',
      blocks: [
        'We collect information you choose to share with us and a limited amount of technical data generated when you use our website.',
        [
          'Contact details, such as your name, email address, and organization, when you submit our contact form.',
          'Application details, such as your resume and work history, when you apply for a role.',
          'Usage data, such as your browser type, device, and the pages you visit.',
        ],
      ],
    },
    {
      title: 'How We Use Your Information',
      blocks: [
        'We use the information we collect to operate our website and respond to you. Specifically, we use it to:',
        [
          'Reply to research, partnership, and press enquiries.',
          'Review job and internship applications.',
          'Maintain, secure, and improve our website.',
          'Meet our legal and regulatory obligations.',
        ],
      ],
    },
    {
      title: 'Cookies',
      blocks: [
        'Our website may use cookies and similar technologies to keep it working properly and to help us understand how visitors use it. You can block or delete cookies in your browser settings, though some features may not work as intended.',
      ],
    },
    {
      title: 'Sharing Your Information',
      blocks: [
        'We do not sell your personal information. We may share it with service providers who help us run our website and business, with other companies in the Prixa Group, or where the law requires us to do so.',
      ],
    },
    {
      title: 'Data Retention and Security',
      blocks: [
        'We keep personal information only for as long as we need it for the purposes described in this policy. We use reasonable technical and organizational safeguards to protect it, but no method of transmission or storage is completely secure.',
      ],
    },
    {
      title: 'Your Rights',
      blocks: [
        'Depending on where you live, you may have the right to access, correct, or delete your personal information, and to object to how we use it. To make a request, contact us using the details below.',
      ],
    },
    {
      title: 'Changes to This Policy',
      blocks: [
        'We may update this policy from time to time. When we do, we will post the new version on this page and change the date at the top.',
      ],
    },
    {
      title: 'Contact Us',
      blocks: [
        'If you have questions about this policy, email us at info@deepfusionlabs.com or write to DeepFusion AI Labs, Sanepa, Lalitpur, Nepal.',
      ],
    },
  ],
};

// Sample copy, to replace with text approved by legal counsel before launch.
const TERMS_AND_CONDITIONS: LegalDocument = {
  title: 'Terms & Conditions',
  intro:
    'The terms that apply when you access or use the DeepFusion AI Labs website.',
  lastUpdated: 'November 6, 2026',
  sections: [
    {
      title: 'Acceptance of Terms',
      blocks: [
        'By accessing or using our website, you agree to these terms. If you do not agree with them, please do not use the website.',
      ],
    },
    {
      title: 'Use of the Website',
      blocks: [
        'You may use our website for lawful purposes only. You agree not to:',
        [
          'Interfere with or disrupt the website or its security.',
          'Attempt to gain unauthorized access to any part of the website or its systems.',
          'Scrape or copy content in bulk without our written permission.',
          'Submit false, misleading, or harmful information through our forms.',
        ],
      ],
    },
    {
      title: 'Intellectual Property',
      blocks: [
        'The content on this website, including text, graphics, logos, and research materials, belongs to DeepFusion AI Labs or its licensors. You may cite our publications with proper attribution, but you may not otherwise reproduce or distribute our content without permission.',
      ],
    },
    {
      title: 'Research and Publications',
      blocks: [
        'Research and publications on this website are provided for informational purposes. They do not constitute professional advice, and results described in them may not apply to your circumstances.',
      ],
    },
    {
      title: 'Third-Party Links',
      blocks: [
        'Our website may link to websites and services we do not control. We are not responsible for their content or practices, and you use them at your own risk.',
      ],
    },
    {
      title: 'Disclaimer and Limitation of Liability',
      blocks: [
        'The website is provided on an "as is" and "as available" basis, without warranties of any kind. To the fullest extent permitted by law, DeepFusion AI Labs is not liable for any indirect or consequential loss arising from your use of the website.',
      ],
    },
    {
      title: 'Governing Law',
      blocks: [
        'These terms are governed by the laws of Nepal. Any dispute relating to them is subject to the jurisdiction of the courts of Nepal.',
      ],
    },
    {
      title: 'Changes to These Terms',
      blocks: [
        'We may update these terms from time to time. When we do, we will post the new version on this page and change the date at the top. Continuing to use the website means you accept the updated terms.',
      ],
    },
    {
      title: 'Contact Us',
      blocks: [
        'If you have questions about these terms, email us at info@deepfusionlabs.com or write to DeepFusion AI Labs, Sanepa, Lalitpur, Nepal.',
      ],
    },
  ],
};

export { PRIVACY_POLICY, TERMS_AND_CONDITIONS };
export type { LegalBlock, LegalDocument, LegalSection };
