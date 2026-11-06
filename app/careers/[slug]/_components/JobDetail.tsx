'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLenis } from 'lenis/react';

import { useHideOnScroll } from '@/components/smooth-scroll/HideOnScroll';
import GradientButton from '@/components/ui/Button';

import { OPEN_ROLES_ID } from '../../_components/CareersHero';

const TABS = ['Overview', 'Application'] as const;

type Tab = (typeof TABS)[number];

/** Two columns on desktop. Below that, tabs switch between the two panels. */
export default function JobDetail({
  overview,
  application,
}: {
  overview: ReactNode;
  application: ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');
  const applicationRef = useRef<HTMLDivElement>(null);
  const isNavbarHidden = useHideOnScroll(80);
  const lenis = useLenis();

  // Open the new panel from its start, not partway down the previous one.
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    lenis?.scrollTo(0, { immediate: true });
  };

  // The form grows when validation errors appear, so keep its height current.
  useEffect(() => {
    const panel = applicationRef.current;
    if (!panel) return;

    const observer = new ResizeObserver(() => {
      panel.style.setProperty(
        '--application-height',
        `${panel.offsetHeight}px`,
      );
    });
    observer.observe(panel);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,41.25rem)_25rem] lg:grid-rows-[auto_1fr] lg:justify-between lg:gap-x-10 xl:grid-cols-[minmax(0,41.25rem)_31.25rem]">
      <GradientButton
        as={Link}
        variant="outline"
        href={`/careers#${OPEN_ROLES_ID}`}
        showArrow={false}
        className="mb-5 w-fit lg:mb-10"
      >
        <Image
          src="/icons/arrow-left.svg"
          alt=""
          width={16}
          height={16}
          aria-hidden="true"
        />
        Back
      </GradientButton>

      {/* Pinned under the navbar, moving to the top of the screen while the navbar is hidden. */}
      <div
        role="tablist"
        className={`sticky z-40 -mx-4 mb-10 flex bg-ink px-4 pt-3 transition-[top] duration-300 ease-out md:-mx-8 md:px-8 lg:hidden ${
          isNavbarHidden ? 'top-0' : 'top-22'
        }`}
      >
        {TABS.map((tab) => {
          const isActive = tab === activeTab;

          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleTabChange(tab)}
              className={`flex-1 cursor-pointer border-b pb-3 text-left font-creato text-[18px] leading-[1.1] tracking-[-1px] transition-colors ${
                isActive
                  ? 'border-white text-white'
                  : 'border-white/20 text-white/20 hover:text-white/60'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div
        className={`min-w-0 lg:col-start-1 ${
          activeTab === 'Overview' ? '' : 'hidden lg:block'
        }`}
      >
        {overview}
      </div>

      {/* Sticks below the navbar, or higher when the form is too tall to fit, so its submit button stays reachable. */}
      <div
        ref={applicationRef}
        className={`lg:sticky lg:top-[min(7rem,calc(100dvh-var(--application-height,0px)-1.5rem))] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start ${
          activeTab === 'Application' ? '' : 'hidden lg:block'
        }`}
      >
        {application}
      </div>
    </div>
  );
}
