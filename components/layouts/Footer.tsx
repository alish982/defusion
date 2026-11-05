import Image from 'next/image';

import ScrollLink from '@/components/ui/ScrollLink';

import { COLUMNS, LEGAL, type FooterLink } from '@/data/footer';

const baseLinkClass = 'leading-none transition-colors hover:text-white';
const columnLinkClass = `${baseLinkClass} font-creato text-[14px] text-white/88 md:font-sans md:text-[16px] md:text-white/70`;
const metaTextClass =
  'font-sans text-[14px] leading-none text-white/70 md:text-[16px]';

function FooterAnchor({
  link,
  className,
}: {
  link: FooterLink;
  className: string;
}) {
  if (link.section) {
    return (
      <ScrollLink to={link.href} className={className}>
        {link.label}
      </ScrollLink>
    );
  }

  return (
    <a
      href={link.href}
      className={className}
      {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {link.label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-col gap-10 py-10 bg-[linear-gradient(180deg,rgba(255,255,255,0)_45.917%,rgba(255,255,255,0.2)_100%),linear-gradient(#000,#000)]"
    >
      <div className="mx-4 grid border border-white/20 md:mx-0 md:h-105.5 md:grid-cols-3 md:border-x-0">
        {COLUMNS.map((col) => (
          <div
            key={col.title}
            className="h-50 border-b border-white/20 p-8 last:border-b-0 md:h-full md:border-b-0 md:border-r md:p-10"
          >
            <p className="font-creato text-[14px] font-medium leading-none text-white md:text-[16px]">
              {col.title}
            </p>
            <ul className="mt-6 flex flex-col gap-4 md:mt-8 md:gap-4.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <FooterAnchor link={link} className={columnLinkClass} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid items-end justify-items-center gap-y-5 px-12 lg:grid-cols-[1fr_auto_1fr] lg:justify-items-stretch">
        <Image
          src="/icons/footer-logo.svg"
          width={413.816}
          height={422.605}
          alt="DeepFusion AI Labs logo"
          className="mb-5 h-auto w-full max-w-77 md:max-w-103.5 lg:col-start-2 lg:row-start-1 lg:mb-0"
        />

        <p
          className={`${metaTextClass} text-center lg:col-start-1 lg:row-start-1 lg:text-left`}
        >
          Copyright © 2026 DeepFusion AI Labs.
        </p>

        <ul className="flex items-center gap-2.5 whitespace-nowrap lg:col-start-3 lg:row-start-1 lg:justify-end">
          {LEGAL.map((link, i) => (
            <li key={link.label} className="flex items-center gap-2.5">
              {i > 0 && (
                <span aria-hidden className="size-1 rounded-full bg-white/70" />
              )}
              <FooterAnchor
                link={link}
                className={`${baseLinkClass} ${metaTextClass}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
