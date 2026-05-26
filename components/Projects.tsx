import { getTranslations } from "next-intl/server";
import { projects } from "@/data/projects";

export default async function Projects() {
  const t = await getTranslations("Projects");

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {t("title")}
      </h2>

      <div className="mt-8 -mx-6 px-6 overflow-x-auto scroll-px-6 snap-x snap-mandatory">
        <ul className="flex gap-5 pb-4">
          {projects.map((p) => (
            <li
              key={p.url}
              className="snap-start shrink-0 w-72 md:w-80 rounded-2xl border border-border/60 bg-card/40 p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-card/70"
            >
              <h3 className="text-base font-semibold leading-snug">
                {p.title}
              </h3>
              {p.tags && p.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full border border-border/60 px-2 py-0.5 text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed flex-1">
                {p.description}
              </p>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline underline-offset-4"
              >
                {t("viewOnGithub")}
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
