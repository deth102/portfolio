import { getTranslations } from "next-intl/server";
import { experiences } from "@/data/experience";

export default async function Experience() {
  const t = await getTranslations("Experience");

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {t("title")}
      </h2>

      <ol className="mt-10 relative border-l-2 border-border/60 ml-3 space-y-10">
        {experiences.map((exp, i) => (
          <li key={i} className="pl-8 relative">
            <span
              aria-hidden
              className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-foreground border-4 border-background"
            />
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="mt-1 text-sm text-muted">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-foreground hover:text-brand underline-offset-4 hover:underline transition-colors"
                >
                  {exp.company}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                    aria-hidden
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              ) : (
                <span>{exp.company}</span>
              )}{" "}
              • {exp.period}
            </p>
            <p className="mt-3 text-foreground/80 leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
