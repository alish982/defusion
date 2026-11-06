import type { LegalSection as LegalSectionData } from '@/data/legal';

export default function LegalSection({
  number,
  section,
}: {
  number: number;
  section: LegalSectionData;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-creato text-[22px] font-normal leading-[1.2] tracking-[-0.5px] text-white md:text-[28px]">
        {number}. {section.title}
      </h2>
      {section.blocks.map((block, i) =>
        typeof block === 'string' ? (
          <p key={i}>{block}</p>
        ) : (
          <ul key={i} className="flex list-disc flex-col gap-2 pl-5">
            {block.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      )}
    </section>
  );
}
