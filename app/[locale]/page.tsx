import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { homeStructuredData } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import HeroIntro from "@/components/HeroIntro";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Work from "@/components/Work";
import Projects from "@/components/Projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale as Locale, "/");
}

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
      <JsonLd data={homeStructuredData(locale as Locale)} />
      <HeroIntro
        greeting={t("greeting")}
        name={t("name")}
        tagline={t("tagline")}
        bio={t("bio")}
      />

      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Research />
      </Reveal>
      <Reveal>
        <Work />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
    </>
  );
}
