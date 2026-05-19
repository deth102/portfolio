import { getTranslations } from "next-intl/server";
import { works } from "@/data/work";

export default async function Work() {
  const t = await getTranslations("Work");

  if (works.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {t("title")}
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6">
        {works.map((w) => (
          <article
            key={w.name}
            className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8"
          >
            <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {w.name}
                </h3>
                <p className="mt-1 text-brand">{w.tagline}</p>
              </div>
              {w.period && (
                <span className="text-sm text-muted">{w.period}</span>
              )}
            </header>

            <p className="mt-5 text-foreground/80 leading-relaxed">
              {w.description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr]">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {t("roleLabel")}
                </h4>
                <p className="mt-2 text-foreground/80 leading-relaxed">
                  {w.role}
                </p>

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
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
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
              </div>
            </div>

            {w.url && (
              <a
                href={w.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline underline-offset-4"
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
          </article>
        ))}
      </div>
    </section>
  );
}
