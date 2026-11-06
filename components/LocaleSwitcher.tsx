"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const onChange = (next: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- pathname is typed by next-intl, dynamic params pass-through
        { pathname, params },
        { locale: next as (typeof routing.locales)[number] }
      );
    });
  };

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t("label")}</span>
      <select
        value={locale}
        onChange={(e) => onChange(e.target.value)}
        disabled={isPending}
        className="h-[var(--btn-h-sm)] cursor-pointer appearance-none rounded-[var(--r-btn)] border border-line-strong bg-transparent pl-3 pr-8 text-[15px] font-medium text-foreground transition-colors hover:bg-foreground/5 disabled:cursor-wait"
        aria-label={t("label")}
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc} className="bg-background text-foreground">
            {t(loc)}
          </option>
        ))}
      </select>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute right-2.5 h-4 w-4 text-muted"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </label>
  );
}
