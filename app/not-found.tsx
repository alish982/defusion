import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import LayoutWrapper from '@/components/layouts/LayoutWrapper';

export const metadata: Metadata = {
  title: 'Page not found | DEEPFUSION AI Labs',
};

export default function NotFound() {
  return (
    <main
      data-hide-footer
      className="flex h-dvh flex-col overflow-hidden bg-black pt-28 pb-12 lg:justify-center lg:py-22"
    >
      <div className="relative flex min-h-0 flex-col">
        <div className="shrink-0 lg:absolute lg:inset-x-0 lg:top-15 lg:z-10">
          <LayoutWrapper>
            <div className="flex flex-col items-start gap-6">
              <p className="text-[16px] leading-normal text-white/50">
                OOPS! TOO CLOSE
              </p>
              <h1 className="font-creato text-[28px] font-normal leading-[0.88] text-white/80 lg:text-[36px]">
                This page doesn’t exist.
              </h1>
              <Link
                href="/"
                className="flex items-center gap-1.5 border-b-[0.5px] border-[#5caeff] text-[16px] leading-6.5 tracking-[-0.3125px] text-[#5caeff] transition-opacity hover:opacity-70"
              >
                Back to home
                <Image
                  src="/icons/arrow-blue.svg"
                  alt="Arrow icon"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </LayoutWrapper>
        </div>

        <Image
          src="/images/404.svg"
          alt="404 illustration"
          width={1440}
          height={650}
          priority
          className="mt-12 h-auto min-h-0 w-full object-contain"
        />
      </div>
    </main>
  );
}
