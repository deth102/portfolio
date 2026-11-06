import { getTranslations } from "next-intl/server";
import { experiences } from "@/data/experience";

// One row per position: role and period on the left, the organisation on the right.
export default async function Experience() {
  const t = await getTranslations("Experience");

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <h2 className="t-h2">{t("title")}</h2>

        <ol className="rows head-gap">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              className="grid gap-y-1 py-6 lg:grid-cols-12 lg:gap-x-6"
            >
              <div className="lg:col-span-5">
                <p className="t-card">{t(`items.${exp.id}.role`)}</p>
                <p className="t-small mt-1 text-muted">
                  {t(`items.${exp.id}.period`)}
                </p>
              </div>
              <p className="lg:col-span-6 lg:col-start-7 lg:pt-0.5">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link"
                  >
                    {t(`items.${exp.id}.company`)}
                  </a>
                ) : (
                  t(`items.${exp.id}.company`)
                )}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
