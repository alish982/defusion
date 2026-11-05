import type { Metadata } from 'next';
import Image from 'next/image';

import LayoutWrapper from '@/components/layouts/LayoutWrapper';
import { GRADIENT_BORDER_CLASSES } from '@/components/ui/Button';

import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — DEEPFUSION AI Labs',
  description:
    'Research collaborations, partnerships, press. Fill out the form and we will reply within two days.',
};

const EMAIL = 'info@deepfusion.ai';

const DETAILS = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Phone', value: '+977 970 112 2624', href: 'tel:+9779701122624' },
  { label: 'Office', value: 'Sanepa, Lalitpur, Nepal' },
];

const MAPS_URL = 'https://maps.google.com/?q=Sanepa,Lalitpur,Nepal';
const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=Sanepa,Lalitpur,Nepal&output=embed';

const CARD_CLASSES = `relative rounded-xl ${GRADIENT_BORDER_CLASSES} before:rounded-xl!`;

export default function ContactPage() {
  return (
    <main className="pt-24 pb-8 md:pt-43 md:pb-21">
      <LayoutWrapper>
        <div className="flex flex-col gap-10 md:gap-17">
          <div className="flex flex-col gap-[19px] md:flex-row md:items-end md:justify-between md:gap-4">
            <h1 className="w-full max-w-[390px] bg-gradient-to-r from-[#7F9AB4] from-[9.277%] to-[#F4F4F5] to-[66.538%] bg-clip-text font-creato text-[2.75rem] font-normal leading-[0.88] tracking-[-2px] text-transparent md:text-[64px]">
              Contact Us
            </h1>
            <p className="text-[14px] leading-[1.4] text-white/70 md:w-[380px] md:shrink-0 md:text-[16px] md:leading-[1.5] md:text-white/78">
              Research collaborations, partnerships, press.
              <br />
              Fill out the form and we will reply within two days.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <ContactForm email={EMAIL} />

            <aside className="flex flex-col gap-[18px] lg:w-[358px] lg:shrink-0 lg:gap-3">
              <div
                className={`${CARD_CLASSES} p-[16px] [background-image:radial-gradient(111.7%_409%_at_13.3%_2.7%,rgba(255,255,255,0.12)_19.33%,rgba(255,255,255,0.106)_28.46%,rgba(255,255,255,0)_100%)]`}
              >
                <Image
                  src="/icons/logo-horizontal.svg"
                  width={143}
                  height={36}
                  alt="DeepFusion AI Labs logo"
                  className="h-8 w-[127px] md:h-9 md:w-[143px]"
                />
                <dl className="mt-5 flex flex-col gap-4 leading-[1.5]">
                  {DETAILS.map(({ label, value, href }) => (
                    <div key={label} className="flex flex-col gap-1.5">
                      <dt className="text-[14px] text-white/70">{label}</dt>
                      <dd className="text-[16px] text-white">
                        {href ? (
                          <a href={href} className="hover:opacity-85">
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className={`${CARD_CLASSES} overflow-hidden before:z-10`}>
                <iframe
                  src={MAPS_EMBED_URL}
                  title="Map showing the DeepFusion AI Labs office in Sanepa, Lalitpur"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block aspect-356/182 w-full border-0"
                />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-[14px] text-[16px] leading-[1.5] text-white transition-opacity hover:opacity-85"
                >
                  Open in Google Maps
                </a>
              </div>
            </aside>
          </div>
        </div>
      </LayoutWrapper>
    </main>
  );
}
