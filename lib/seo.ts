import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { person, seoText, siteUrl } from "@/data/profile";

// Pages that exist under every locale. Add new routes here so they get
// hreflang alternates and a sitemap entry.
export const sitePaths = ["/", "/about"] as const;
export type SitePath = (typeof sitePaths)[number];

// Mirrors `localePrefix: "as-needed"`: the default locale has no prefix.
export function localePath(locale: Locale, path: SitePath): string {
  if (locale === routing.defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function absoluteUrl(path: string): string {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

export function languageAlternates(path: SitePath): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = absoluteUrl(localePath(locale, path));
  }
  languages["x-default"] = absoluteUrl(localePath(routing.defaultLocale, path));
  return languages;
}

export function pageAlternates(
  locale: Locale,
  path: SitePath,
): Metadata["alternates"] {
  return {
    canonical: absoluteUrl(localePath(locale, path)),
    languages: languageAlternates(path),
  };
}

// Full per-page metadata. Next merges metadata shallowly, so each page returns
// complete `openGraph`/`twitter` objects rather than relying on the layout.
// Omit `page` for the home page, which uses the locale's home title/description.
export function pageMetadata(
  locale: Locale,
  path: SitePath,
  page?: { title: string; description: string },
): Metadata {
  const text = seoText[locale];
  const title = page ? `${page.title} | ${text.siteName}` : text.homeTitle;
  const description = page?.description ?? text.homeDescription;

  return {
    title: { absolute: title },
    description,
    alternates: pageAlternates(locale, path),
    openGraph: {
      type: "profile",
      firstName: person.givenName,
      lastName: person.familyName,
      url: absoluteUrl(localePath(locale, path)),
      title,
      description,
      siteName: text.siteName,
      locale: text.ogLocale,
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => seoText[l].ogLocale),
      images: [
        {
          url: person.image.path,
          width: person.image.width,
          height: person.image.height,
          alt: person.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [person.image.path],
    },
  };
}
