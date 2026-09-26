import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { works } from "@/data/work";
import { routing } from "@/i18n/routing";

export default async function Work() {
  const t = await getTranslations("Work");
  const locale = (await getLocale()) as (typeof routing.locales)[number];
  const list = works[locale] ?? works[routing.defaultLocale];

  if (list.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("title")}
        </h2>
        <span aria-hidden className="text-sm text-muted">
          {t("scrollHint")} →
        </span>
      </div>

      <div
        tabIndex={0}
        aria-label={t("title")}
        className="-mx-6 mt-8 flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto px-6 pb-4 pt-2 focus-visible:outline-2 focus-visible:outline-brand"
      >
        {list.map((w) => (
          <article
            key={w.name}
            className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-card/70 sm:w-[70%] lg:w-[calc(50%-0.75rem)]"
          >
            {w.image && (
              <div className="relative aspect-[4/3] w-full border-b border-border/60">
                <Image
                  src={w.image.src}
                  alt={w.image.alt}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 560px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col p-6 md:p-8">
              <header>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {w.name}
                </h3>
                <p className="mt-1 text-brand">{w.tagline}</p>
                {w.period && (
                  <p className="mt-1 text-sm text-muted">{w.period}</p>
                )}
              </header>

              <p className="mt-5 text-foreground/80 leading-relaxed">
                {w.description}
              </p>

              {w.role && (
                <>
                  <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">
                    {t("roleLabel")}
                  </h4>
                  <p className="mt-2 text-foreground/80 leading-relaxed">
                    {w.role}
                  </p>
                </>
              )}

              {w.highlights && w.highlights.length > 0 && (
                <>
                  <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">
                    {t("highlightsLabel")}
                  </h4>
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-foreground/80">
                    {w.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </>
              )}

              {w.stack && w.stack.length > 0 && (
                <>
                  <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">
                    {t("stackLabel")}
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {w.stack.map((s) => (
                      <li
                        key={s}
                        className="inline-block rounded-full border border-border/60 px-2.5 py-0.5 text-xs text-foreground/80"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {w.url && (
                <a
                  href={w.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-brand hover:underline underline-offset-4"
                >
                  {t("learnMore")}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
