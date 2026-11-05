export type Citation = {
  key: string;
  authors: string;
  venue: string;
};

export function formatBibtex({
  title,
  date,
  citation,
}: {
  title: string;
  /** Publication date ending in the year, such as "Aug 2026". */
  date: string;
  citation: Citation;
}) {
  return [
    `@article{${citation.key},`,
    `  title   = {${title}},`,
    `  author  = {${citation.authors}},`,
    `  journal = {${citation.venue}},`,
    `  year    = {${date.split(" ").pop()}}`,
    "}",
  ].join("\n");
}
