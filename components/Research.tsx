import { getTranslations } from "next-intl/server";
import { researches } from "@/data/research";

export default async function Research() {
  const t = await getTranslations("Research");

  if (researches.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {t("title")}
      </h2>

      <ul className="mt-8 grid grid-cols-1 gap-4">
        {researches.map((r) => (
          <li key={r.url}>
            <a
              href={r.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${r.title} — ${t("learnMore")}`}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-border/60 bg-card/40 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-card/70"
            >
              <span className="text-lg md:text-xl font-semibold tracking-tight leading-snug group-hover:text-brand">
                {r.title}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="mt-1 h-4 w-4 shrink-0 text-brand"
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
