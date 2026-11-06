import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { person } from "@/data/profile";
import {
  absoluteUrl,
  languageAlternates,
  localePath,
  sitePaths,
} from "@/lib/seo";

// One entry per page per locale, each listing all its language alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitePaths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.6,
      alternates: { languages: languageAlternates(path) },
      ...(path === "/" && { images: [absoluteUrl(person.image.path)] }),
    })),
  );
}
