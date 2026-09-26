export type Research = {
  title: string;
  authors: string[];
  url: string;
};

// Highlighted in the author list.
export const selfAuthor = "Manh-Cuong Nguyen";

// Publications listed on ORCID: https://orcid.org/0009-0008-3573-1221
// Titles stay in English across locales, matching the published papers.
export const researches: Research[] = [
  {
    title:
      "Toward trustworthy and explainable AI-driven industrial fault diagnosis: A data-to-deployment review",
    authors: [
      "Trong-Du Nguyen",
      "Manh-Cuong Nguyen",
      "Ngoc-Lam Ngo",
      "Minh-Quang Tran",
      "Viet Q. Vu",
    ],
    url: "https://doi.org/10.1016/j.rineng.2026.113189",
  },
  {
    title:
      "Lightweight Machine Learning for Edge-Based Machinery Fault Diagnosis",
    authors: [
      "Manh-Cuong Nguyen",
      "Quoc-Chien Truong",
      "Phuc-Tan Le",
      "Ngoc-Lam Ngo",
      "Phong-Dien Nguyen",
      "Trong-Du Nguyen",
    ],
    url: "https://link.springer.com/chapter/10.1007/978-3-032-29469-2_30",
  },
];
