import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Navbar() {
  const t = await getTranslations("Nav");

  return (
    <header className="w-full border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-tight text-brand"
        >
          {t("brand")}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            {t("about")}
          </Link>
          <LocaleSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
