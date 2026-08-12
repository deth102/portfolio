import {getTranslations, setRequestLocale} from "next-intl/server";
import QuickMessageForm from "@/components/QuickMessageForm";

const recipient = "cuongnm003@gmail.com";

const contacts = [
  {
    labelKey: "emailLabel" as const,
    value: recipient,
    href: `mailto:${recipient}`,
    icon: "email",
  },
  {
    labelKey: "phoneLabel" as const,
    value: "+84 8790 999 48",
    href: "tel:+84879099948",
    icon: "phone",
  },
  {
    labelKey: "githubLabel" as const,
    value: "github.com/deth102",
    href: "https://github.com/deth102",
    icon: "github",
  },
  {
    labelKey: "linkedinLabel" as const,
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/cuongnm1812/",
    icon: "linkedin",
  },
  {
    labelKey: "facebookLabel" as const,
    value: "Facebook",
    href: "https://www.facebook.com/deth1812/",
    icon: "facebook",
  },
];

function ContactIcon({type}: {type: string}) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.07 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M12 .7A11.5 11.5 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-36 top-20 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-brand/5 blur-3xl" />

      <div className="relative max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
          {t("eyebrow")}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">
          {t("intro")}
        </p>
      </div>

      <div className="relative mt-12 grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <QuickMessageForm
          recipient={recipient}
          labels={{
            title: t("formTitle"),
            description: t("formDescription"),
            name: t("nameLabel"),
            namePlaceholder: t("namePlaceholder"),
            email: t("emailLabel"),
            emailPlaceholder: t("emailPlaceholder"),
            message: t("messageLabel"),
            messagePlaceholder: t("messagePlaceholder"),
            submit: t("sendMessage"),
            privacy: t("privacyNote"),
            opened: t("emailOpened"),
            subjectPrefix: t("subjectPrefix"),
          }}
        />

        <aside className="rounded-[2rem] border border-border/70 bg-background/50 p-6 backdrop-blur-sm md:p-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-brand" />
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
              {t("detailsTitle")}
            </h2>
          </div>

          <div className="mt-6 space-y-3">
            {contacts.map((contact) => (
              <a
                key={contact.labelKey}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition hover:border-border/80 hover:bg-card/70"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/12 text-brand transition group-hover:bg-brand group-hover:text-slate-950">
                  <ContactIcon type={contact.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                    {t(contact.labelKey)}
                  </span>
                  <span className="mt-1 block truncate font-medium group-hover:text-brand">
                    {contact.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-brand/20 bg-brand/8 p-5">
            <p className="font-semibold">{t("responseTitle")}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {t("responseDescription")}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
