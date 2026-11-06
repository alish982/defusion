'use client';

import type { MouseEvent } from 'react';
import { useLenis } from 'lenis/react';

import LayoutWrapper from '@/components/layouts/LayoutWrapper';
import GradientButton from '@/components/ui/Button';
import { scrollToSection } from '@/components/smooth-scroll/scroll-to-section';

export const OPEN_ROLES_ID = 'open-roles';

export default function CareersHero() {
  const lenis = useLenis();

  const handleOpenRolesClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Leave new tab and new window clicks to the browser.
    if (!lenis || e.metaKey || e.ctrlKey || e.shiftKey) return;

    e.preventDefault();
    scrollToSection(lenis, OPEN_ROLES_ID);
  };

  return (
    <section className="bg-[#121212] lg:rounded-lg">
      <LayoutWrapper>
        <div className="flex min-h-130 flex-col justify-between pt-40 pb-10 lg:min-h-165 lg:justify-end lg:gap-10.5 lg:pb-18.5">
          <h1 className="flex max-w-89.5 flex-col gap-2 font-creato text-[44px] font-normal leading-[0.88] tracking-[-2px] text-[#f4f4f5] lg:w-188.25 lg:max-w-none lg:gap-3 lg:text-[76px]">
            {/* The vertical padding stops the tight line height clipping descenders out of the gradient. */}
            <span className="my-[-0.12em] bg-linear-to-r from-[#7f9ab4] from-[13.942%] to-[#f4f4f5] bg-clip-text py-[0.12em] text-transparent">
              Grow your skills,<span className="hidden lg:inline"> impact</span>
            </span>
            <span className="lg:hidden">impact and your</span>
            <span className="lg:hidden">career with us.</span>
            <span className="hidden whitespace-nowrap lg:block">
              and your career with us.
            </span>
          </h1>

          <GradientButton
            as="a"
            variant="subtle"
            href={`#${OPEN_ROLES_ID}`}
            onClick={handleOpenRolesClick}
            className="w-full lg:w-fit"
          >
            See Open Roles
          </GradientButton>
        </div>
      </LayoutWrapper>
    </section>
  );
}
