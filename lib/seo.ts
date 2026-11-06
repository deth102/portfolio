import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { person, seoText, siteUrl } from "@/data/profile";

// Fixed pages that exist under every locale. Add new routes here so they get
// hreflang alternates and a sitemap entry. Paper pages are added from
// data/research.ts in app/sitemap.ts.
export const staticPaths = ["/", "/about"] as const;
export type SitePath =
  | (typeof staticPaths)[number]
  | `/research/${string}`;

export function researchPath(slug: string): SitePath {
  return `/research/${slug}`;
}

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

// Cut text to a meta-description length at a word boundary.
export function summarize(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

type PageInfo = {
  title: string;
  description: string;
  // Set for paper pages: Open Graph type becomes "article".
  article?: { publishedTime: string; authors: string[] };
};

// Full per-page metadata. Next merges metadata shallowly, so each page returns
// complete `openGraph`/`twitter` objects rather than relying on the layout.
// Omit `page` for the home page, which uses the locale's home title/description.
export function pageMetadata(
  locale: Locale,
  path: SitePath,
  page?: PageInfo,
): Metadata {
  const text = seoText[locale];
  const title = page ? `${page.title} | ${text.siteName}` : text.homeTitle;
  const description = page?.description ?? text.homeDescription;

  const common = {
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
  };

  return {
    title: { absolute: title },
    description,
    alternates: pageAlternates(locale, path),
    openGraph: page?.article
      ? {
          ...common,
          type: "article",
          publishedTime: page.article.publishedTime,
          authors: page.article.authors,
        }
      : {
          ...common,
          type: "profile",
          firstName: person.givenName,
          lastName: person.familyName,
        },
    twitter: {
      card: "summary",
      title,
      description,
      images: [person.image.path],
    },
  };
}
