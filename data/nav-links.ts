type NavItem =
  | { label: string; id: string; href?: never }
  | { label: string; href: string; id?: never };

const NAV_LINKS: NavItem[] = [
  { label: 'Research Domains', id: 'domains' },
  { label: 'Why DeepFusion', id: 'why' },
  { label: 'Publications', id: 'research' },
  { label: 'Careers', href: '/careers' },
];

export { NAV_LINKS };
export type { NavItem };
