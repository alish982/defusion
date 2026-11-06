import Image from 'next/image';
import Link from 'next/link';

import ScrollLink from '@/components/ui/ScrollLink';

import { COLUMNS, LEGAL, PRIXA_URL, type FooterLink } from '@/data/footer';

const baseLinkClass = 'leading-none transition-colors hover:text-white';
const columnLinkClass = `${baseLinkClass} font-creato text-[14px] text-white/88 md:font-sans md:text-[16px] md:text-white/70`;
const metaTextClass = 'font-sans text-[16px] leading-none text-white/70';

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

  if (link.href.startsWith('/')) {
    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
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

      <div className="flex flex-col gap-12 px-4 md:px-8 lg:gap-15 lg:px-7.25">
        <Image
          src="/icons/footer-logo.svg"
          width={413.816}
          height={422.605}
          alt="DeepFusion AI Labs logo"
          className="h-auto w-full max-w-103.5 self-center"
        />

        <div className="flex flex-col gap-6 lg:grid md:grid-cols-[1fr_auto_1fr] lg:items-end lg:gap-0">
          <p className={metaTextClass}>
            Copyright © {new Date().getFullYear()}. All Rights Reserved
          </p>

          {/* The artwork runs below the text line, so the negative margin keeps the text aligned. */}
          <a
            href={PRIXA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-[-4.2px] block w-fit transition-opacity hover:opacity-70 lg:mb-[-4.64px]"
          >
            <Image
              src="/icons/prixa-company.svg"
              width={201.161}
              height={24.7416}
              alt="A Prixa company"
              className="h-auto w-45.5 lg:w-50.25"
            />
          </a>

          <ul className="flex items-center gap-2.5 whitespace-nowrap lg:justify-end lg:pr-4">
            {LEGAL.map((link, i) => (
              <li key={link.label} className="flex items-center gap-2.5">
                {i > 0 && (
                  <span
                    aria-hidden
                    className="size-1 rounded-full bg-white/70"
                  />
                )}
                <FooterAnchor
                  link={link}
                  className={`${baseLinkClass} ${metaTextClass}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
