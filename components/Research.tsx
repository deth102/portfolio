import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { researches } from "@/data/research";
import { venueShort } from "@/lib/citation";
import { researchPath } from "@/lib/seo";
import AuthorList from "./AuthorList";

export default async function Research() {
  const t = await getTranslations("Research");

  if (researches.length === 0) return null;

  return (
    <section id="publications" className="section">
      <div className="wrap">
        <h2 className="t-h2">{t("title")}</h2>

        <div className="head-gap">
          <ul className="grid gap-[var(--card-gap)] md:grid-cols-2">
            {researches.map((r) => (
              <li key={r.slug}>
                <Link
                  href={researchPath(r.slug)}
                  className="card card--link group flex h-full flex-col p-6"
                >
                  <span className="t-label block">
                    {venueShort(r)} · {r.year}
                  </span>
                  <span className="t-card mt-3 block">{r.title}</span>
                  <span className="t-small mt-3 block text-muted">
                    <AuthorList authors={r.authors} />
                  </span>
                  <span className="mt-auto inline-flex items-center self-start pt-5 gap-2 text-[15px] font-medium text-brand">
                    {t("learnMore")}
                    <svg viewBox="0 0 16 16" aria-hidden className="m-arrow" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 8h11M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
