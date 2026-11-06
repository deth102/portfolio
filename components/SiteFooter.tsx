import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  person,
  personalProfiles,
  professionalProfiles,
} from "@/data/profile";

// The closing section on every page: the close (one heading, one line, the main
// action) and the directory with the legal row. Professional profiles carry
// rel="me" so search engines can tie them to this site.
export default async function SiteFooter() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  const pages = [
    { href: "/", label: tNav("home") },
    { href: "/#publications", label: tNav("publications") },
    { href: "/#work", label: tNav("work") },
    { href: "/about", label: tNav("about") },
  ];
  const profiles = [
    { href: professionalProfiles.googleScholar, label: "Google Scholar" },
    { href: professionalProfiles.orcid, label: "ORCID" },
    { href: professionalProfiles.researchGate, label: "ResearchGate" },
    { href: professionalProfiles.linkedin, label: "LinkedIn" },
    { href: professionalProfiles.github, label: "GitHub" },
  ];
  const social = [
    { href: personalProfiles.facebook, label: "Facebook" },
    { href: personalProfiles.instagram, label: "Instagram" },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="wrap pb-10 pt-[var(--padt)]">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-6">
            <h2 className="t-h2">{t("title")}</h2>
            <p className="t-lead mt-5 measure">{t("line")}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:col-start-7 lg:items-end lg:justify-end">
            <Link href="/about" className="btn btn--primary">
              {tNav("contact")}
              <svg viewBox="0 0 16 16" aria-hidden className="m-arrow" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 8h11M9 4l4 4-4 4" />
              </svg>
            </Link>
            <a href={`mailto:${person.email}`} className="btn btn--secondary">
              {t("emailMe")}
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-12">
          <FooterColumn title={t("pages")} className="lg:col-span-3">
            {pages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="link-bare">
                  {p.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn title={t("profiles")} className="lg:col-span-3 lg:col-start-7">
            {profiles.map((p) => (
              <li key={p.href}>
                <a href={p.href} target="_blank" rel="me noreferrer noopener" className="link-bare">
                  {p.label}
                </a>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn title={t("social")} className="lg:col-span-3">
            {social.map((p) => (
              <li key={p.href}>
                <a href={p.href} target="_blank" rel="noreferrer noopener" className="link-bare">
                  {p.label}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="t-small mt-16 flex flex-col gap-2 border-t border-border pt-6 text-muted sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {t("rights")}
          </span>
          <span>cuongnm.com</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h3 className="t-label">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-[15px]">{children}</ul>
    </div>
  );
}
