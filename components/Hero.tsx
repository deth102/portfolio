import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { person } from "@/data/profile";

// The first screen: the words on the left, the round portrait beside them from
// 768px up, centred in the screen; the research fields close it along the
// bottom. On a phone the portrait sits above the words.
export default async function Hero() {
  const t = await getTranslations("Home");
  const tNav = await getTranslations("Nav");
  const tSkills = await getTranslations("Skills");
  const fields = tSkills.raw("researchFields") as string[];

  return (
    <section className="flex min-h-[100svh] flex-col pb-[var(--hpadb)] pt-[calc(var(--nav)+var(--hgap))]">
      <div className="wrap flex flex-1 flex-col">
        <div className="my-auto grid items-center gap-y-10 md:grid-cols-12 md:gap-x-6">
          <div className="md:col-span-7 lg:col-span-6">
            <p className="t-small text-muted">{t("notice")}</p>
            <h1 className="t-h1 mt-4">{t("name")}</h1>
            <p className="t-lead mt-6 max-w-[42ch]">{t("lead")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/about" className="btn btn--primary">
                {tNav("contact")}
                <svg viewBox="0 0 16 16" aria-hidden className="m-arrow" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 8h11M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link href="/#publications" className="btn btn--secondary">
                {t("readPublications")}
              </Link>
            </div>
          </div>

          <div className="order-first md:order-none md:col-span-5 md:col-start-8 md:justify-self-end">
            <div className="relative size-40 overflow-hidden rounded-full border border-border bg-card md:size-64 lg:size-80 xl:size-[400px]">
              <Image
                src={person.image.path}
                alt={t("name")}
                fill
                priority
                sizes="(min-width: 1280px) 400px, (min-width: 1024px) 320px, (min-width: 768px) 256px, 160px"
                className="object-cover object-[50%_10%]"
              />
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="t-label">{tSkills("research")}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 md:grid-cols-4">
            {fields.map((f) => (
              <li
                key={f}
                className="border-t border-line-strong pb-5 pt-3 text-[15px] font-medium leading-snug"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
