import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getResearch, researches } from "@/data/research";
import {
  bibtex,
  citationMeta,
  doiUrl,
  formatCitation,
  venueLine,
} from "@/lib/citation";
import {
  absoluteUrl,
  localePath,
  pageMetadata,
  researchPath,
  summarize,
} from "@/lib/seo";
import { researchStructuredData } from "@/lib/structured-data";
import AuthorList from "@/components/AuthorList";
import CopyButton from "@/components/CopyButton";
import JsonLd from "@/components/JsonLd";

type Params = Promise<{ locale: string; slug: string }>;

// Only the papers in data/research.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return researches.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const r = getResearch(slug);
  if (!r) return {};

  const path = researchPath(r.slug);
  return {
    ...pageMetadata(locale as Locale, path, {
      title: r.title,
      description: summarize(r.abstract),
      article: { publishedTime: r.publishedOnline, authors: r.authors },
    }),
    other: citationMeta(r, absoluteUrl(localePath(locale as Locale, path))),
  };
}

export default async function ResearchPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const r = getResearch(slug);
  if (!r) notFound();

  const t = await getTranslations("Paper");
  const bib = bibtex(r);
  const published = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(r.publishedOnline));

  return (
    <article className="page-top">
      <JsonLd data={researchStructuredData(r, locale as Locale)} />
      <div className="wrap">
        <div className="max-w-[760px]">
          <Link
            href="/#publications"
            className="link-bare t-small inline-flex items-center gap-2 text-muted hover:text-foreground"
          >
            <span aria-hidden>←</span>
            {t("back")}
          </Link>

          <p className="t-label mt-10">
            {t(r.venue.kind === "journal" ? "journalArticle" : "bookChapter")} · {r.year}
          </p>
          <h1 className="t-h2 mt-3">{r.title}</h1>

          <p className="mt-6">
            <AuthorList authors={r.authors} />
          </p>
          <p className="t-small mt-3 text-muted">
            {venueLine(r)}
            <br />
            {t("publishedOnline")}: {published} · {r.publisher}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              {t("readOnPublisher")}
              <svg viewBox="0 0 16 16" aria-hidden className="m-arrow" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 11 11 5M6 5h5v5" />
              </svg>
            </a>
            <a
              href={doiUrl(r)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              DOI: {r.doi}
            </a>
            {r.license && (
              <a
                href={r.license.url}
                target="_blank"
                rel="noopener noreferrer license"
                className="tag self-start sm:self-auto"
              >
                {t("openAccess")} · {r.license.name}
              </a>
            )}
          </div>

          <section className="mt-16">
            <h2 className="t-h3">{t("abstract")}</h2>
            <p className="mt-4">{r.abstract}</p>
          </section>

          {r.keywords.length > 0 && (
            <section className="mt-12">
              <h2 className="t-h3">{t("keywords")}</h2>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {r.keywords.map((k) => (
                  <li key={k} className="tag">
                    {k}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-16">
            <h2 className="t-h3">{t("cite")}</h2>
            <p className="card t-small mt-4 p-5">{formatCitation(r)}</p>

            <div className="mt-8 flex items-center justify-between gap-4">
              <h3 className="t-label">BibTeX</h3>
              <CopyButton
                text={bib}
                labels={{ copy: t("copy"), copied: t("copied") }}
              />
            </div>
            <pre className="card mt-3 overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>{bib}</code>
            </pre>
          </section>
        </div>
      </div>
    </article>
  );
}
