import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SocialIcons from "@/components/SocialIcons";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {t("greeting")}{" "}
              <span className="block md:inline">{t("name")}</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground/80">
              {t("tagline")}
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted">
              {t("bio")}
            </p>
            <div className="mt-8">
              <SocialIcons />
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <div className="h-56 w-56 md:h-72 md:w-72 rounded-full border border-border/60 overflow-hidden">
              <Image
                src="/me.jpg"
                alt={t("name")}
                width={288}
                height={288}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Education />
      <Experience />
      <Projects />
    </>
  );
}
