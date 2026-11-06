import type { Locale } from "@/i18n/routing";

// Single source of truth for identity, profile links and SEO text.
// SocialIcons, the About page, page metadata and the JSON-LD all read from here,
// so a link changed here changes everywhere at once.

export const siteUrl = "https://cuongnm.com";

export const person = {
  name: "Nguyen Manh Cuong",
  givenName: "Cuong",
  additionalName: "Manh",
  familyName: "Nguyen",
  // Every spelling people (and papers) use for the same person.
  // "Manh-Cuong Nguyen" is the byline on the publications — keep it.
  alternateNames: [
    "Nguyễn Mạnh Cường",
    "Manh-Cuong Nguyen",
    "Cuong Nguyen",
    "Cuong (Henry) Nguyen",
    "Henry Cuong",
    "阮孟强",
  ],
  jobTitle: "AI Engineer & PHM Researcher",
  email: "cuongnm003@gmail.com",
  image: { path: "/me.jpg", width: 787, height: 1102 },
  orcidId: "0009-0008-3573-1221",
  knowsAbout: [
    "Vibration Analysis",
    "Machinery Fault Diagnosis",
    "Prognostics and Health Management (PHM)",
    "Remaining Useful Life (RUL) Prediction",
    "Condition Monitoring",
    "Signal Processing",
    "Edge AI",
    "Machine Learning",
    "Explainable AI",
    "Transfer Learning",
  ],
};

// Professional profiles — these go into JSON-LD `sameAs` and get rel="me".
export const professionalProfiles = {
  linkedin: "https://www.linkedin.com/in/cuongnm1812/",
  github: "https://github.com/deth102",
  googleScholar: "https://scholar.google.com/citations?user=6d8KpFQAAAAJ",
  researchGate: "https://www.researchgate.net/profile/Cuong-Nguyen-343",
  orcid: `https://orcid.org/${person.orcidId}`,
};

// Personal accounts — shown on the site, deliberately kept out of `sameAs`.
export const personalProfiles = {
  facebook: "https://www.facebook.com/deth1812/",
  instagram: "https://www.instagram.com/nmcphd/",
};

export const organizations = {
  nsrrc: {
    name: "National Synchrotron Radiation Research Center",
    alternateName: "NSRRC",
    url: "https://www.nsrrc.org.tw/",
  },
  itdLab: {
    name: "ITD Lab",
    url: "https://itdhust.com",
  },
  ptl: {
    name: "Precision Transmission Lab",
    alternateName: "PTL",
    url: "https://sites.google.com/view/me-ncu-edu-tw-ptl/home",
  },
  ncu: {
    name: "National Central University",
    alternateName: "NCU",
    url: "https://www.ncu.edu.tw/",
  },
  hust: {
    name: "Hanoi University of Science and Technology",
    alternateName: "HUST",
    url: "https://hust.edu.vn/",
  },
};

// Paste the code from Google Search Console's "HTML tag" method here if you
// verify that way. Not needed when verifying the domain with a DNS TXT record.
export const googleSiteVerification: string | undefined = undefined;

type SeoText = {
  siteName: string;
  homeTitle: string;
  homeDescription: string;
  aboutDescription: string;
  ogLocale: string;
};

export const seoText: Record<Locale, SeoText> = {
  en: {
    siteName: "Nguyen Manh Cuong",
    homeTitle: "Nguyen Manh Cuong (Henry) — AI Engineer & PHM Researcher",
    homeDescription:
      "Nguyen Manh Cuong (Manh-Cuong Nguyen) is an AI engineer and PHM researcher working on vibration-based fault diagnosis, condition monitoring and edge AI for rotating machinery.",
    aboutDescription:
      "Get in touch with Nguyen Manh Cuong — AI engineer and PHM researcher in vibration-based machinery fault diagnosis.",
    ogLocale: "en_US",
  },
  vi: {
    siteName: "Nguyễn Mạnh Cường",
    homeTitle: "Nguyễn Mạnh Cường — Kỹ sư AI & Nghiên cứu viên PHM",
    homeDescription:
      "Nguyễn Mạnh Cường (Manh-Cuong Nguyen) là kỹ sư AI, nghiên cứu chẩn đoán hư hỏng máy quay dựa trên tín hiệu rung động, giám sát tình trạng thiết bị và Edge AI.",
    aboutDescription:
      "Liên hệ với Nguyễn Mạnh Cường — kỹ sư AI, nghiên cứu chẩn đoán hư hỏng thiết bị cơ khí dựa trên tín hiệu rung động.",
    ogLocale: "vi_VN",
  },
  zh: {
    siteName: "阮孟强 (Nguyen Manh Cuong)",
    homeTitle: "阮孟强 (Nguyen Manh Cuong) — AI 工程师 & PHM 研究员",
    homeDescription:
      "阮孟强（Manh-Cuong Nguyen）是一名 AI 工程师与 PHM 研究员，专注于基于振动信号的旋转机械故障诊断、状态监测与边缘 AI。",
    aboutDescription:
      "联系阮孟强（Nguyen Manh Cuong）— 专注于基于振动信号的机械故障诊断的 AI 工程师。",
    ogLocale: "zh_CN",
  },
};
