import Image from "next/image";

import GradientButton from "@/components/ui/Button";

type PublicationCardProps = {
  date: string;
  tag: string;
  title: string;
  desc: string;
  image?: string;
  imageAlt?: string;
  accent?: string;
  readHref?: string;
  citeHref?: string;
};

export default function PublicationCard({
  date,
  tag,
  title,
  desc,
  image = "/images/image1.png",
  imageAlt = "",
  accent,
  readHref = "#",
  citeHref = "#",
}: PublicationCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border hairline bg-[#181818]">
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[12px] uppercase tracking-wide text-muted-2">
          {tag}
          {"  "}- {date}
        </p>
        <h3 className="mt-3 font-creato text-[18px] font-medium leading-snug">
          {title}
        </h3>
        {/* <p className="mt-2 line-clamp-2 text-[16px] text-muted-2">{desc}</p> */}
        <div className="mt-auto grid grid-cols-2 gap-[13px] pt-4">
          <GradientButton
            as="a"
            variant="subtle"
            href={readHref}
            className="h-11! min-w-0 px-2!"
          >
            Read
          </GradientButton>
          <GradientButton
            as="a"
            variant="outline"
            href={citeHref}
            className="h-11! min-w-0 px-2!"
          >
            Cite
          </GradientButton>
        </div>
      </div>
    </article>
  );
}
