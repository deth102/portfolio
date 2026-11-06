import type { Locale } from "@/i18n/routing";
import {
  organizations,
  person,
  professionalProfiles,
  seoText,
  siteUrl,
} from "@/data/profile";
import { researches, selfAuthor } from "@/data/research";
import { absoluteUrl, localePath } from "@/lib/seo";

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

function organization(org: { name: string; url: string; alternateName?: string }) {
  return { "@type": "Organization", ...org };
}

function university(org: { name: string; url: string; alternateName?: string }) {
  return { "@type": "CollegeOrUniversity", ...org };
}

function doiOf(url: string): string | undefined {
  return url.match(/10\.\d{4,9}\/[^\s?#]+/)?.[0];
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
    worksFor: [
      organization(organizations.nsrrc),
      {
        ...organization(organizations.itdLab),
        parentOrganization: university(organizations.hust),
      },
    ],
    affiliation: university(organizations.ncu),
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

  const articleNodes = researches.map((r) => {
    const doi = doiOf(r.url);
    return {
      "@type": "ScholarlyArticle",
      "@id": doi ? `https://doi.org/${doi}` : r.url,
      headline: r.title,
      name: r.title,
      url: r.url,
      ...(doi && {
        identifier: { "@type": "PropertyValue", propertyID: "DOI", value: doi },
        sameAs: `https://doi.org/${doi}`,
      }),
      author: r.authors.map((name) =>
        name === selfAuthor
          ? { "@id": personId }
          : { "@type": "Person", name },
      ),
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [personNode, websiteNode, profilePageNode, ...articleNodes],
  };
}
