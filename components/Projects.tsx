import { getTranslations } from "next-intl/server";
import { projects } from "@/data/projects";

// Personal projects as a list of linked rows.
export default async function Projects() {
  const t = await getTranslations("Projects");

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2 className="t-h2">{t("title")}</h2>

        <ul className="rows head-gap">
          {projects.map((p) => (
            <li key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${p.title} — ${t("viewOnGithub")}`}
                className="group grid gap-y-3 py-6 lg:grid-cols-12 lg:gap-x-6"
              >
                <span className="lg:col-span-5">
                  <span className="t-card block transition-colors group-hover:text-brand">
                    {p.title}
                  </span>
                  {p.tags && p.tags.length > 0 && (
                    <span className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </span>
                  )}
                </span>
                <span className="lg:col-span-5 lg:col-start-7">{p.description}</span>
                <span className="hidden justify-self-end pt-1 text-muted transition-colors group-hover:text-brand lg:col-span-1 lg:col-start-12 lg:flex">
                  <svg viewBox="0 0 16 16" aria-hidden className="m-arrow h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 11 11 5M6 5h5v5" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
