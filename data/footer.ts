type FooterLink = {
  label: string;
  href: string;
  /** In-page section id, scrolled to smoothly via ScrollLink. */
  section?: boolean;
  external?: boolean;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const COLUMNS: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'Research', href: 'research', section: true },
      { label: 'Why Deepfusion', href: 'why', section: true },
      { label: 'Research Domains', href: 'domains', section: true },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Sanepa, Lalitpur', href: 'https://maps.google.com/?q=Sanepa,Lalitpur', external: true },
      { label: '+977-9700122624', href: 'tel:+9779700122624' },
      { label: 'info@deepfusionlabs.com', href: 'mailto:info@deepfusionlabs.com' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'Twitter', href: '#', external: true },
      { label: 'Linkedin', href: '#', external: true },
      { label: 'Facebook', href: '#', external: true },
    ],
  },
];

const LEGAL: FooterLink[] = [
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

const PRIXA_URL = 'https://prixa.org';

export { COLUMNS, LEGAL, PRIXA_URL };
export type { FooterLink, FooterColumn };
