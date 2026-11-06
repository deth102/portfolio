import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import { homeStructuredData } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/Hero";
import Background from "@/components/Background";
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

  // Bio (with research fields), background, experience, publications, work and events,
  // personal projects; the closing section is the site footer.
  return (
    <>
      <JsonLd data={homeStructuredData(locale as Locale)} />
      <Hero />
      <Background />
      <Experience />
      <Research />
      <Work />
      <Projects />
    </>
  );
}
