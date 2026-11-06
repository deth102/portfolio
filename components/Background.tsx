import { getTranslations } from "next-intl/server";
import { educations } from "@/data/education";

// Background: education and language on the left, skills as label/value rows on the right.
export default async function Background() {
  const t = await getTranslations("Education");
  const tSkills = await getTranslations("Skills");

  const languages = t.raw("languages") as { name: string; level: string }[];
  const skills = [
    { label: tSkills("languages"), value: tSkills("languagesList") },
    { label: tSkills("tools"), value: tSkills("toolsList") },
  ];

  return (
    <section id="background" className="section">
      <div className="wrap">
        <h2 className="t-h2">{t("sectionTitle")}</h2>

        <div className="head-gap grid gap-y-14 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <h3 className="t-h3 mb-6">{t("title")}</h3>
            <ol className="rows">
              {educations.map((edu) => (
                <li key={edu.id} className="py-5">
                  <p className="t-card">{t(`items.${edu.id}.degree`)}</p>
                  <p className="mt-1">
                    {t(`items.${edu.id}.school`)}, {t(`items.${edu.id}.location`)}
                  </p>
                  <p className="t-small mt-1 text-muted">
                    {t(`items.${edu.id}.period`)}
                    {/* a note can be empty in one language */}
                    {edu.hasNote && t(`items.${edu.id}.note`) && (
                      <> · {t(`items.${edu.id}.note`)}</>
                    )}
                  </p>
                </li>
              ))}
            </ol>

            <h3 className="t-h3 mb-6 mt-14">{t("languageTitle")}</h3>
            <dl className="rows">
              {languages.map((l) => (
                <div key={l.name} className="py-5">
                  <dt className="t-card">{l.name}</dt>
                  <dd className="mt-1">{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="t-h3 mb-6">{tSkills("title")}</h3>
            <dl className="rows">
              {skills.map((s) => (
                <div key={s.label} className="py-5">
                  <dt className="t-card">{s.label}</dt>
                  <dd className="mt-1">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
