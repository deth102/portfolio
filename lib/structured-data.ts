import type { Locale } from "@/i18n/routing";
import {
  organizations,
  person,
  professionalProfiles,
  seoText,
  siteUrl,
} from "@/data/profile";
import { researches, selfAuthor, type Research } from "@/data/research";
import { doiUrl } from "@/lib/citation";
import { absoluteUrl, localePath, researchPath } from "@/lib/seo";

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

function organization(org: { name: string; url: string; alternateName?: string }) {
  return { "@type": "Organization", ...org };
}

function university(org: { name: string; url: string; alternateName?: string }) {
  return { "@type": "CollegeOrUniversity", ...org };
}

// ScholarlyArticle node, shared by the home page and the paper's own page.
// The author entry for the site owner points at the Person `@id`.
export function articleNode(r: Research) {
  const v = r.venue;
  return {
    "@type": "ScholarlyArticle",
    "@id": doiUrl(r),
    headline: r.title,
    name: r.title,
    url: r.url,
    sameAs: doiUrl(r),
    mainEntityOfPage: absoluteUrl(researchPath(r.slug)),
    identifier: { "@type": "PropertyValue", propertyID: "DOI", value: r.doi },
    abstract: r.abstract,
    ...(r.keywords.length > 0 && { keywords: r.keywords }),
    datePublished: r.publishedOnline,
    inLanguage: "en",
    author: r.authors.map((name) =>
      name === selfAuthor ? { "@id": personId } : { "@type": "Person", name },
    ),
    publisher: { "@type": "Organization", name: r.publisher },
    ...(v.kind === "journal"
      ? {
          pagination: v.articleNumber,
          isPartOf: {
            "@type": "PublicationVolume",
            volumeNumber: v.volume,
            isPartOf: { "@type": "Periodical", name: v.journal, issn: v.issn },
          },
        }
      : {
          pageStart: v.firstPage,
          pageEnd: v.lastPage,
          isPartOf: {
            "@type": "Book",
            name: v.bookTitle,
            isPartOf: { "@type": "BookSeries", name: v.series },
          },
        }),
    ...(r.license && {
      license: r.license.url,
      isAccessibleForFree: true,
    }),
  };
}

// Schema.org graph for a paper page: the article, the page about it, and a
// breadcrumb back to the home page.
export function researchStructuredData(r: Research, locale: Locale) {
  const pageUrl = absoluteUrl(localePath(locale, researchPath(r.slug)));
  const homeUrl = absoluteUrl(localePath(locale, "/"));

  return {
    "@context": "https://schema.org",
    "@graph": [
      articleNode(r),
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: r.title,
        inLanguage: locale,
        isPartOf: { "@id": websiteId },
        about: { "@id": doiUrl(r) },
        author: { "@id": personId },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: seoText[locale].siteName,
            item: homeUrl,
          },
          { "@type": "ListItem", position: 2, name: r.title, item: pageUrl },
        ],
      },
      {
        "@type": "Person",
        "@id": personId,
        name: person.name,
        url: siteUrl,
      },
    ],
  };
}

// Schema.org graph for the home page: who the person is, which profiles are
// theirs (`sameAs`), and which papers they wrote — all tied to one `@id`.
export function homeStructuredData(locale: Locale) {
  const pageUrl = absoluteUrl(localePath(locale, "/"));

  const personNode = {
    "@type": "Person",
    "@id": personId,
    name: person.name,
    alternateName: person.alternateNames,
    givenName: person.givenName,
    additionalName: person.additionalName,
    familyName: person.familyName,
    url: siteUrl,
    image: absoluteUrl(person.image.path),
    email: `mailto:${person.email}`,
    jobTitle: person.jobTitle,
    description: seoText[locale].homeDescription,
    disambiguatingDescription: person.disambiguatingDescription,
    worksFor: {
      ...organization(organizations.itdLab),
      parentOrganization: university(organizations.hust),
    },
    memberOf: {
      ...organization(organizations.ptl),
      parentOrganization: university(organizations.ncu),
    },
    // NSRRC is a research collaboration, not employment.
    affiliation: [
      university(organizations.ncu),
      organization(organizations.nsrrc),
    ],
    alumniOf: university(organizations.hust),
    knowsAbout: person.knowsAbout,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ORCID",
      value: person.orcidId,
    },
    sameAs: Object.values(professionalProfiles),
  };

  const websiteNode = {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: seoText.en.siteName,
    inLanguage: ["en", "vi", "zh"],
    author: { "@id": personId },
    publisher: { "@id": personId },
  };

  const profilePageNode = {
    "@type": "ProfilePage",
    "@id": `${pageUrl}#profilepage`,
    url: pageUrl,
    name: seoText[locale].homeTitle,
    inLanguage: locale,
    isPartOf: { "@id": websiteId },
    mainEntity: { "@id": personId },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode,
      websiteNode,
      profilePageNode,
      ...researches.map(articleNode),
    ],
  };
}
