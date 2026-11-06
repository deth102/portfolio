import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { works } from "@/data/work";
import { routing } from "@/i18n/routing";
import { workPath } from "@/lib/seo";

// Work and events as a grid of cards: photograph, date, name and a short muted
// note. Each card opens the item's own page with the full details.
export default async function Work() {
  const t = await getTranslations("Work");
  const locale = (await getLocale()) as (typeof routing.locales)[number];
  const list = works[locale] ?? works[routing.defaultLocale];

  if (list.length === 0) return null;

  return (
    <section id="work" className="section">
      <div className="wrap">
        <h2 className="t-h2">{t("title")}</h2>

        <ul className="head-gap grid gap-[var(--card-gap)] sm:grid-cols-2 xl:grid-cols-4">
          {list.map((w) => (
            <li key={w.slug}>
              <Link
                href={workPath(w.slug)}
                className="card card--link group flex h-full flex-col overflow-hidden"
              >
                <span className="m-zoom relative block aspect-[4/3] border-b border-border bg-background">
                  {w.image ? (
                    <Image
                      src={w.image.src}
                      alt={w.image.alt}
                      fill
                      sizes="(min-width: 1280px) 302px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    // No photograph yet: a quiet tile, not the name a second time.
                    <span aria-hidden className="absolute inset-0 grid place-items-center text-muted/60">
                      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
                        <path d="m3 13 9 5 9-5" />
                      </svg>
                    </span>
                  )}
                </span>

                <span className="flex flex-1 flex-col p-5">
                  <span className="t-label block">{w.period ?? " "}</span>
                  <span className="t-card mt-2 block transition-colors group-hover:text-brand">
                    {w.name}
                  </span>
                  <span className="t-small mt-2 block text-muted line-clamp-3">
                    {w.tagline}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
