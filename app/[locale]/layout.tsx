import type { Metadata } from "next";
import { Libre_Franklin, Source_Serif_4 } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { routing } from "@/i18n/routing";
import {
  googleSiteVerification,
  person,
  seoText,
  siteUrl,
} from "@/data/profile";

// The dealt pairing (tasteskill start.mjs, type "source-serif"): a serif for
// headings, a sans for text. Both carry the Vietnamese subset.
const serif = Source_Serif_4({
  variable: "--font-serif-src",
  subsets: ["latin", "latin-ext", "vietnamese"],
  axes: ["opsz"],
  display: "swap",
});

const sans = Libre_Franklin({
  variable: "--font-sans-src",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
});

// Site-wide defaults. Each page sets its own title, canonical, hreflang and
// Open Graph via `pageMetadata` in lib/seo.ts.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const text =
    seoText[hasLocale(routing.locales, locale) ? locale : routing.defaultLocale];

  return {
    metadataBase: new URL(siteUrl),
    title: text.homeTitle,
    description: text.homeDescription,
    applicationName: text.siteName,
    authors: [{ name: person.name, url: siteUrl }],
    creator: person.name,
    ...(googleSiteVerification && {
      verification: { google: googleSiteVerification },
    }),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const themeInit = `(() => {
  try {
    const t = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (t === 'dark' || (!t && prefersDark)) document.documentElement.classList.add('dark');
  } catch (e) {}
})();`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-radius="soft"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <NextIntlClientProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
