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
    <article className="mx-auto max-w-3xl px-6 py-14 md:py-20">
      <JsonLd data={researchStructuredData(r, locale as Locale)} />

      <Link
        href="/#publications"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand"
      >
        <span aria-hidden>←</span>
        {t("back")}
      </Link>

      <p className="mt-10 text-sm font-semibold uppercase tracking-[0.22em] text-brand">
        {t(r.venue.kind === "journal" ? "journalArticle" : "bookChapter")} ·{" "}
        {r.year}
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
        {r.title}
      </h1>

      <p className="mt-5 text-base text-muted">
        <AuthorList authors={r.authors} />
      </p>
      <p className="mt-3 text-sm italic text-muted">{venueLine(r)}</p>
      <p className="mt-1 text-sm text-muted">
        {t("publishedOnline")}: {published} · {r.publisher}
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-slate-950 transition-opacity hover:opacity-90"
        >
          {t("readOnPublisher")}
          <span aria-hidden>↗</span>
        </a>
        <a
          href={doiUrl(r)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-border/70 px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-brand/60 hover:text-brand"
        >
          DOI: {r.doi}
        </a>
        {r.license && (
          <a
            href={r.license.url}
            target="_blank"
            rel="noopener noreferrer license"
            className="inline-flex items-center rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold text-brand"
          >
            {t("openAccess")} · {r.license.name}
          </a>
        )}
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">{t("abstract")}</h2>
        <p className="mt-4 leading-relaxed text-foreground/90">{r.abstract}</p>
      </section>

      {r.keywords.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">
            {t("keywords")}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {r.keywords.map((k) => (
              <li
                key={k}
                className="rounded-full border border-border/70 bg-card/50 px-3 py-1 text-sm text-foreground/80"
              >
                {k}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">{t("cite")}</h2>
        <p className="mt-4 rounded-2xl border border-border/70 bg-card/40 p-5 text-sm leading-relaxed">
          {formatCitation(r)}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            BibTeX
          </h3>
          <CopyButton
            text={bib}
            labels={{ copy: t("copy"), copied: t("copied") }}
          />
        </div>
        <pre className="mt-3 overflow-x-auto rounded-2xl border border-border/70 bg-card/60 p-5 font-mono text-xs leading-relaxed">
          <code>{bib}</code>
        </pre>
      </section>
    </article>
  );
}
