import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import SmoothScroller from '@/components/smooth-scroll/SmoothScroller';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const creatoDisplay = localFont({
  src: [
    {
      path: '../public/fonts/CreatoDisplay-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../public/fonts/CreatoDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/CreatoDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/CreatoDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/CreatoDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/CreatoDisplay-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-ExtraBoldItalic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../public/fonts/CreatoDisplay-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/CreatoDisplay-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-creato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DEEPFUSION AI Labs — Frontier Intelligence. Global Scale.',
  description:
    "DeepFusion AI Labs is Prixa Group's dedicated research engine, building certified, multimodal AI across language, vision, voice, and security.",
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${creatoDisplay.variable}`}>
      <SmoothScroller>
        <body className="antialiased bg-ink text-paper font-sans">
          <Navbar />
          {children}
          <Footer />
        </body>
      </SmoothScroller>
    </html>
  );
}
