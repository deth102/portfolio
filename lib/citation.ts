import type { Research } from "@/data/research";

// "Trong-Du Nguyen" → { given: "Trong-Du", family: "Nguyen" }.
// Names in data/research.ts are written "Given Family" with a one-word family name.
function splitName(name: string) {
  const parts = name.trim().split(/\s+/);
  return { family: parts.at(-1) ?? name, given: parts.slice(0, -1).join(" ") };
}

// "Trong-Du" → "T.-D.", "Viet Q." → "V. Q."
function initials(given: string): string {
  return given
    .split(/\s+/)
    .map((word) =>
      word
        .split("-")
        .map((p) => `${p.charAt(0)}.`)
        .join("-"),
    )
    .join(" ");
}

export function doiUrl(r: Research): string {
  return `https://doi.org/${r.doi}`;
}

// One-line venue, e.g. "Results in Engineering, 32, 113189".
export function venueLine(r: Research): string {
  const v = r.venue;
  if (v.kind === "journal") {
    return `${v.journal}, ${v.volume}, ${v.articleNumber}`;
  }
  return `${v.bookTitle} (${v.conference}), ${v.series}, vol. ${v.seriesVolume}, pp. ${v.firstPage}–${v.lastPage}`;
}

// Short venue for the publication list on the home page.
export function venueShort(r: Research): string {
  const v = r.venue;
  return v.kind === "journal" ? v.journal : `${v.bookTitle} (${v.conference})`;
}

// APA 7 style reference.
export function formatCitation(r: Research): string {
  const names = r.authors.map((a) => {
    const { family, given } = splitName(a);
    return `${family}, ${initials(given)}`;
  });
  const authors =
    names.length > 1
      ? `${names.slice(0, -1).join(", ")}, & ${names.at(-1)}`
      : names[0];
  const v = r.venue;
  const source =
    v.kind === "journal"
      ? `${v.journal}, ${v.volume}, ${v.articleNumber}.`
      : `In ${v.bookTitle} (${v.conference}) (${v.series}, Vol. ${v.seriesVolume}, pp. ${v.firstPage}–${v.lastPage}). ${r.publisher}.`;
  return `${authors} (${r.year}). ${r.title}. ${source} ${doiUrl(r)}`;
}

export function bibtex(r: Research): string {
  const first = splitName(r.authors[0]).family.toLowerCase();
  const word = r.title.split(/\s+/)[0].toLowerCase().replace(/[^a-z0-9]/g, "");
  const key = `${first}${r.year}${word}`;
  const authors = r.authors
    .map((a) => {
      const { family, given } = splitName(a);
      return `${family}, ${given}`;
    })
    .join(" and ");

  const v = r.venue;
  const fields: [string, string][] =
    v.kind === "journal"
      ? [
          ["title", r.title],
          ["author", authors],
          ["journal", v.journal],
          ["volume", v.volume],
          ["pages", v.articleNumber],
          ["year", String(r.year)],
          ["publisher", r.publisher],
          ["doi", r.doi],
        ]
      : [
          ["title", r.title],
          ["author", authors],
          ["booktitle", `${v.bookTitle} (${v.conference})`],
          ["series", v.series],
          ["volume", v.seriesVolume],
          ["pages", `${v.firstPage}--${v.lastPage}`],
          ["year", String(r.year)],
          ["publisher", r.publisher],
          ...(r.publisherPlace
            ? ([["address", r.publisherPlace]] as [string, string][])
            : []),
          ["doi", r.doi],
        ];

  const width = Math.max(...fields.map(([k]) => k.length));
  const body = fields
    .map(([k, val]) => `  ${k.padEnd(width)} = {${val}}`)
    .join(",\n");
  const type = v.kind === "journal" ? "article" : "inproceedings";
  return `@${type}{${key},\n${body}\n}`;
}

// Highwire Press tags read by Google Scholar
// (https://scholar.google.com/intl/en/scholar/inclusion.html#indexing).
export function citationMeta(
  r: Research,
  pageUrl: string,
): Record<string, string | string[]> {
  const date = r.publishedOnline.replaceAll("-", "/");
  const v = r.venue;
  const meta: Record<string, string | string[]> = {
    citation_title: r.title,
    citation_author: r.authors,
    citation_publication_date: date,
    citation_online_date: date,
    citation_doi: r.doi,
    citation_publisher: r.publisher,
    citation_language: "en",
    citation_abstract_html_url: pageUrl,
  };

  if (v.kind === "journal") {
    meta.citation_journal_title = v.journal;
    meta.citation_volume = v.volume;
    meta.citation_firstpage = v.articleNumber;
    meta.citation_issn = v.issn;
  } else {
    meta.citation_inbook_title = v.bookTitle;
    meta.citation_conference_title = v.conference;
    meta.citation_series_title = v.series;
    meta.citation_volume = v.seriesVolume;
    meta.citation_firstpage = v.firstPage;
    meta.citation_lastpage = v.lastPage;
  }

  if (r.keywords.length > 0) meta.citation_keywords = r.keywords;
  return meta;
}
