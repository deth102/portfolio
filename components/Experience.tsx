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
              {exp.company} • {exp.period}
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
