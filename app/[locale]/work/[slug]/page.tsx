import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getWork, workSlugs } from "@/data/work";
import { pageMetadata, summarize, workPath } from "@/lib/seo";
import { workStructuredData } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";

type Params = Promise<{ locale: string; slug: string }>;

// Only the items in data/work.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return workSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const w = getWork(locale as Locale, slug);
  if (!w) return {};

  return pageMetadata(locale as Locale, workPath(w.slug), {
    title: w.name,
    description: summarize(w.description),
    ...(w.image && { image: { url: w.image.src, alt: w.image.alt } }),
  });
}

export default async function WorkPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const w = getWork(locale as Locale, slug);
  if (!w) notFound();

  const t = await getTranslations("Work");

  return (
    <article className="page-top">
      <JsonLd data={workStructuredData(w, locale as Locale)} />
      <div className="wrap">
        <div className="max-w-[760px]">
          <Link
            href="/#work"
            className="link-bare t-small inline-flex items-center gap-2 text-muted hover:text-foreground"
          >
            <span aria-hidden>←</span>
            {t("back")}
          </Link>

          {w.period && <p className="t-label mt-10">{w.period}</p>}
          <h1 className={`t-h2 ${w.period ? "mt-3" : "mt-10"}`}>{w.name}</h1>
          <p className="t-lead mt-4 text-muted">{w.tagline}</p>

          {w.image && (
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[var(--r-lg)] border border-border bg-card">
              <Image
                src={w.image.src}
                alt={w.image.alt}
                fill
                priority
                sizes="(min-width: 840px) 760px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <p className="mt-10">{w.description}</p>

          {w.role && (
            <section className="mt-12">
              <h2 className="t-h3">{t("roleLabel")}</h2>
              <p className="mt-4">{w.role}</p>
            </section>
          )}

          {w.highlights && w.highlights.length > 0 && (
            <section className="mt-12">
              <h2 className="t-h3">{t("highlightsLabel")}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-muted">
                {w.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </section>
          )}

          {w.stack && w.stack.length > 0 && (
            <section className="mt-12">
              <h2 className="t-h3">{t("stackLabel")}</h2>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {w.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {w.url && (
            <a
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary mt-12"
            >
              {t("learnMore")}
              <svg viewBox="0 0 16 16" aria-hidden className="m-arrow" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 11 11 5M6 5h5v5" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
