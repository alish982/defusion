import Image from "next/image";

type PublicationCardProps = {
  date: string;
  tag: string;
  title: string;
  desc: string;
  image?: string;
  imageAlt?: string;
  accent?: string;
};

export default function PublicationCard({
  date,
  tag,
  title,
  desc,
  image = "/image1.png",
  imageAlt = "",
  accent,
}: PublicationCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border hairline bg-surface">
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={imageAlt} fill className="object-cover" />
      </div>
      <div className="bg-[#181818] p-5">
        <p className="text-[12px] uppercase tracking-wide text-muted-2">
          {tag}
          {"  "}- {date}
        </p>
        <h3 className="mt-3 font-creato text-[18px] font-medium leading-snug">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[16px] text-muted-2">{desc}</p>
        <div className="mt-4 inline-block border-b border-[#5CAEFF] pb-1.5 text-[16px] font-normal text-[#5CAEFF] hover:opacity-80">
          Read the Paper{" "}
          <Image
            src="/arrow.svg"
            alt=""
            width={20}
            height={20}
            className="inline-block"
            style={{
              filter:
                "invert(48%) sepia(90%) saturate(1000%) hue-rotate(190deg)",
            }}
          />
        </div>
      </div>
    </article>
  );
}
