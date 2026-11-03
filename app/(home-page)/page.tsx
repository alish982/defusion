// 'use client';

// import { useEffect } from 'react';

import HeroSection from './_components/HeroSection';
import AboutSection from './_components/about-section/AboutSection';
import PublicationsSection from './_components/PublicationsSection';
import ContactUsSection from './_components/ContactUsSection';
import LayoutWrapper from '@/components/layouts/LayoutWrapper';

export default function Home() {
  // useEffect(() => {
  //   const target = sessionStorage.getItem('scrollTarget');
  //   if (!target) return;
  //   sessionStorage.removeItem('scrollTarget');

  //   setTimeout(() => {
  //     const el = document.getElementById(target);
  //     if (!el) return;
  //     const y = el.getBoundingClientRect().top + window.scrollY - 70;
  //     window.scrollTo({ top: y, behavior: 'smooth' });
  //   }, 150);
  // }, []);

  return (
    <main>
      <HeroSection />
      <LayoutWrapper className="xl:pt-32">
        <AboutSection />
        <PublicationsSection />
        <ContactUsSection />
      </LayoutWrapper>
    </main>
  );
}
