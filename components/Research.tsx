import { getLocale, getTranslations } from "next-intl/server";
import { researches } from "@/data/research";
import { routing } from "@/i18n/routing";

export default async function Research() {
  const t = await getTranslations("Research");
  const locale = (await getLocale()) as (typeof routing.locales)[number];
  const list = researches[locale] ?? researches[routing.defaultLocale];

  if (list.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {t("title")}
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6">
        {list.map((r, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-card/70"
          >
            <header>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {r.role} · {r.period}
              </p>
            </header>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand">
                {t("problemLabel")}
              </h4>
              <p className="mt-2 text-foreground/80 leading-relaxed">
                {r.problem}
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand">
                {t("approachLabel")}
              </h4>
              <ul className="mt-3 space-y-3">
                {r.approach.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    />
                    <p className="text-foreground/80 leading-relaxed">
                      <span className="font-medium text-foreground">
                        {a.name}.
                      </span>{" "}
                      {a.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {r.url && (
              <a
                href={r.url}
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
