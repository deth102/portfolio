import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
        {t("intro")}
      </p>

      <h2 className="mt-12 text-2xl font-semibold">{t("whatIDo")}</h2>
      <ul className="mt-4 list-disc pl-6 text-foreground/80 space-y-2">
        <li>{t("items.backend")}</li>
        <li>{t("items.indie")}</li>
        <li>{t("items.writing")}</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">{t("contactHeading")}</h2>
      <p className="mt-4 text-foreground/80">
        {t("contactBody")}{" "}
        <a
          href="mailto:cuongnm003@gmail.com"
          className="text-brand underline-offset-4 hover:underline"
        >
          {t("contactLink")}
        </a>
        .
      </p>
    </section>
  );
}
