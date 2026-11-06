import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { person } from "@/data/profile";
import { researches } from "@/data/research";
import { workSlugs } from "@/data/work";
import {
  absoluteUrl,
  languageAlternates,
  localePath,
  researchPath,
  staticPaths,
  workPath,
  type SitePath,
} from "@/lib/seo";

// One entry per page per locale, each listing all its language alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths: SitePath[] = [
    ...staticPaths,
    ...researches.map((r) => researchPath(r.slug)),
    ...workSlugs.map(workPath),
  ];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority:
        path === "/" ? 1 : path.startsWith("/research/") ? 0.8 : 0.6,
      alternates: { languages: languageAlternates(path) },
      ...(path === "/" && { images: [absoluteUrl(person.image.path)] }),
    })),
  );
}
