import { getTranslations, setRequestLocale } from "next-intl/server";
import HeroIntro from "@/components/HeroIntro";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Work from "@/components/Work";
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
      <HeroIntro
        greeting={t("greeting")}
        name={t("name")}
        tagline={t("tagline")}
        bio={t("bio")}
        availability={t("availability")}
        availabilityDetail={t("availabilityDetail")}
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
