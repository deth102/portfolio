import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";
import NavMenu from "./NavMenu";

// The home page's sections, in page order.
const sections = [
  { href: "/#background", key: "background" },
  { href: "/#experience", key: "experience" },
  { href: "/#publications", key: "publications" },
  { href: "/#work", key: "work" },
  { href: "/#projects", key: "projects" },
] as const;

export default async function Navbar() {
  const t = await getTranslations("Nav");
  const links = sections.map((s) => ({ href: s.href, label: t(s.key) }));
  // A plain link, not a button: the hero already carries the "Send a message" button.
  const contact = { href: "/about", label: t("about") };

  return (
    <header className="fixed inset-x-0 top-0 z-10 h-[var(--nav)] border-b border-border bg-background">
      <div className="wrap flex h-full items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-[22px] leading-none tracking-[-0.01em] text-foreground"
        >
          {t("brand")}
        </Link>

        <nav aria-label={t("menu")} className="hidden items-center gap-6 lg:flex xl:gap-8">
          {[...links, contact].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-bare whitespace-nowrap text-[15px] font-medium text-foreground/80 hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <LocaleSwitcher />
            <ThemeToggle label={t("theme")} />
          </div>
          <NavMenu
            links={links}
            contact={contact}
            labels={{ menu: t("menu"), close: t("close"), theme: t("theme") }}
          />
        </div>
      </div>
    </header>
  );
}
