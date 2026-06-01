import { getTranslations, setRequestLocale } from "next-intl/server";

const contacts = [
  {
    labelKey: "emailLabel" as const,
    value: "cuongnm003@gmail.com",
    href: "mailto:cuongnm003@gmail.com",
  },
  {
    labelKey: "phoneLabel" as const,
    value: "+84 8790 999 48",
    href: "tel:+84879099948",
  },
  {
    labelKey: "githubLabel" as const,
    value: "github.com/deth102",
    href: "https://github.com/deth102",
  },
  {
    labelKey: "linkedinLabel" as const,
    value: "linkedin.com/in/cuongmanhnguyen",
    href: "https://www.linkedin.com/in/cuongnm1812/",
  },
  {
    labelKey: "facebookLabel" as const,
    value: "facebook.com/deth1812/",
    href: "https://www.facebook.com/deth1812/",
  },
];

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

      <dl className="mt-10 divide-y divide-border/60 border-y border-border/60">
        {contacts.map((c) => (
          <div
            key={c.labelKey}
            className="grid grid-cols-3 gap-4 py-4 items-baseline"
          >
            <dt className="text-sm font-medium uppercase tracking-wider text-muted">
              {t(c.labelKey)}
            </dt>
            <dd className="col-span-2">
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noreferrer noopener" : undefined
                }
                className="text-foreground hover:text-brand underline-offset-4 hover:underline break-all"
              >
                {c.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
