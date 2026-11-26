import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import LayoutWrapper from "@/components/layouts/LayoutWrapper";
import { getPublicationBySlug, publications } from "@/data/publications";
import PublicationBody from "./components/PublicationBody";

type PublicationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publications.map((publication) => ({ slug: publication.slug }));
}

export async function generateMetadata({
  params,
}: PublicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);

  if (!publication) return {};

  return {
    title: `${publication.title} — DEEPFUSION AI Labs`,
    description: publication.summary,
  };
}

export default async function PublicationPage({
  params,
}: PublicationPageProps) {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);

  if (!publication) notFound();

  return (
    <main className="min-h-screen w-full bg-black px-4 pt-[112px] pb-16 text-white sm:px-6 md:pt-[144px] lg:pt-[176px] lg:pb-20">
      <div className="mx-auto flex w-full flex-col items-center">
        <div className="text-center">
          <p className="text-[12px] uppercase text-[#FFFFFFB2] md:text-[14px]">
            {publication.category}
          </p>
          <h1 className="mt-4 max-w-[720px] font-creato text-[28px] leading-[1.1] sm:text-[32px] md:mt-6 md:text-[40px]">
            {publication.title}
          </h1>
        </div>

     <div className="relative mx-auto mt-8 aspect-[16/10] w-full max-w-[840px] overflow-hidden rounded-lg sm:aspect-[2/1] md:mt-12 md:rounded-lg">
  <Image
    alt={publication.title}
    src="/images/image1.png"
    fill
    className="object-cover"
  />
</div>

        <LayoutWrapper>
          {publication.sections && publication.sections.length > 0 ? (
            <div className="mt-10 md:mt-14 lg:mt-20">
              <PublicationBody sections={publication.sections} />
            </div>
          ) : null}
        </LayoutWrapper>
      </div>
    </main>
  );
}
