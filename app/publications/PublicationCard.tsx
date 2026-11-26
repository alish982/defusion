import Image from "next/image";

import GradientButton from "@/components/ui/Button";
import { formatBibtex, type Citation } from "@/utils/bibtex";

import CiteButton from "./CiteButton";
import ArrowIcon from "@/components/icons/ArrowIcon";

type PublicationCardProps = {
  date: string;
  tag: string;
  title: string;
  desc: string;
  image?: string;
  imageAlt?: string;
  accent?: string;
  readHref?: string;
  citation: Citation;
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
  citation,
}: PublicationCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border hairline bg-[#181818]">
      <div className="relative aspect-[393/224]">
        <Image src={image} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className=" flex w-full justify-between items-center">
          <p className="text-[14px] uppercase  text-muted-2 flex gap-2 items-center">
            {tag}
            {"  "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
            >
              <circle cx="3" cy="3" r="3" fill="white" fillOpacity="0.5" />
            </svg>
            {date}
          </p>
          {/* <div className="text-[#5CAEFF] flex gap-1.5 items-center border-b cursor-pointer hover:text-[#1f8efd] transition-all duration-300 ease-in-out">
            <span className=" text-[14px] lg:text-[16px] tracking-[-0.312px] ">Cite</span>
            <ArrowIcon className=" max-lg:w-[14px] max-lg:h-[14px]" />
          </div> */}
          <CiteButton bibtex={formatBibtex({ title, date, citation })} linkbutton />
        </div>
        <h3 className="mt-6 font-creato text-[18px] font-medium leading-snug">
          {title}
        </h3>
        {/* <p className="mt-2 line-clamp-2 text-[16px] text-muted-2">{desc}</p> */}
        <div className="mt-auto   pt-8">
          <GradientButton
            as="a"
            variant="subtle"
            href={readHref}
            className="h-12! w-full px-2!"
          >
            Read the Article
          </GradientButton>
          {/* <CiteButton bibtex={formatBibtex({ title, date, citation })} /> */}
        </div>
      </div>
    </article>
  );
}
