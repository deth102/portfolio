import { getTranslations } from "next-intl/server";

export default async function Skills() {
  const t = await getTranslations("Skills");

  const groups = [
    { title: t("languages"), items: t("languagesList") },
    { title: t("web"), items: t("webList") },
    { title: t("tools"), items: t("toolsList") },
    { title: t("research"), items: t("researchList") },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {t("title")}
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-border/60 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-card/70"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
              {g.title}
            </h3>
            <p className="mt-3 text-foreground/80 leading-relaxed">
              {g.items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
