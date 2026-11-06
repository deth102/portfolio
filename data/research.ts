// EDIT THIS FILE TO UPDATE YOUR PUBLICATIONS.
// Each entry gets its own page at /research/<slug>, Google Scholar citation_*
// meta tags, and a ScholarlyArticle JSON-LD node.
//
// Bibliographic data comes from the DOI record (Crossref/OpenAlex) and the
// published PDF. Titles and abstracts stay in English across locales,
// matching the published papers.
// Publications are also listed on ORCID: https://orcid.org/0009-0008-3573-1221

export type JournalVenue = {
  kind: "journal";
  journal: string;
  volume: string;
  articleNumber: string;
  issn: string;
};

export type ChapterVenue = {
  kind: "chapter";
  bookTitle: string;
  conference: string;
  series: string;
  seriesVolume: string;
  firstPage: string;
  lastPage: string;
};

export type Research = {
  slug: string;
  title: string;
  authors: string[];
  doi: string;
  // Publisher landing page.
  url: string;
  publisher: string;
  publisherPlace?: string;
  venue: JournalVenue | ChapterVenue;
  // First published online, YYYY-MM-DD.
  publishedOnline: string;
  // Year printed in the citation (the volume/book year).
  year: number;
  // Author keywords as printed in the paper. Leave empty if the paper has none.
  keywords: string[];
  abstract: string;
  // Set only for open-access papers.
  license?: { name: string; url: string };
};

// Highlighted in the author list.
export const selfAuthor = "Manh-Cuong Nguyen";

export const researches: Research[] = [
  {
    slug: "trustworthy-explainable-ai-fault-diagnosis-review",
    title:
      "Toward trustworthy and explainable AI-driven industrial fault diagnosis: A data-to-deployment review",
    authors: [
      "Trong-Du Nguyen",
      "Manh-Cuong Nguyen",
      "Ngoc-Lam Ngo",
      "Minh-Quang Tran",
      "Viet Q. Vu",
    ],
    doi: "10.1016/j.rineng.2026.113189",
    url: "https://www.sciencedirect.com/science/article/pii/S2590123026042003",
    publisher: "Elsevier",
    venue: {
      kind: "journal",
      journal: "Results in Engineering",
      volume: "32",
      articleNumber: "113189",
      issn: "2590-1230",
    },
    publishedOnline: "2026-09-24",
    year: 2026,
    keywords: [],
    abstract:
      "Intelligent fault diagnosis has achieved high benchmark accuracy, yet performance often deteriorates across machines, operating regimes, sensors, and time. This structured narrative review examines the literature through three connected concerns: the credibility of diagnostic evidence, the suitability and transferability of learning methods, and the assurance needed for industrial use. The reviewed evidence indicates that data leakage, class imbalance, sensor instability, and untested domain shift can make complex models appear more reliable than they are. Traditional machine learning remains valuable when physically meaningful features are stable and labeled data are limited. Deep learning is more suitable for complex raw, sequential, image, or multimodal signals, while transfer learning is useful only when source-target compatibility and negative transfer are evaluated. Explainability can support model checking and maintenance decisions, but explanations also require validation for fidelity, stability, physical plausibility, and usefulness to engineers. The literature further supports a staged route to deployment, progressing from independent validation and shadow operation to advisory use, bounded automation, and gradual fleet integration. Near-term research priorities should strengthen independent validation, uncertainty calibration, efficient edge deployment, and human evaluation. Long-term opportunities include safe lifelong adaptation, reliable fleet-level learning, validated digital twins, and human-centered automation. Overall, trustworthy fault diagnosis should be assessed across the full diagnostic lifecycle rather than inferred from benchmark accuracy alone.",
    license: {
      name: "CC BY 4.0",
      url: "https://creativecommons.org/licenses/by/4.0/",
    },
  },
  {
    slug: "lightweight-ml-edge-fault-diagnosis",
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
    doi: "10.1007/978-3-032-29469-2_30",
    url: "https://link.springer.com/chapter/10.1007/978-3-032-29469-2_30",
    publisher: "Springer Nature Switzerland",
    publisherPlace: "Cham",
    venue: {
      kind: "chapter",
      bookTitle: "Robotics and Mechatronics",
      conference: "ISRM 2026",
      series: "Mechanisms and Machine Science",
      seriesVolume: "213",
      firstPage: "293",
      lastPage: "302",
    },
    publishedOnline: "2026-07-03",
    year: 2027,
    keywords: [
      "Edge-Computing",
      "Machinery fault diagnosis",
      "Lightweight machine learning",
      "Vibration signal analysis",
    ],
    abstract:
      "Prognostics and Health Management (PHM) are crucial to ensuring the reliability and safety of production systems and machines. However, the widespread implementation of these technologies in practical systems remains challenging, especially in cost-sensitive environments. This study proposes a lightweight fault-diagnosis framework that focuses on frequency-domain feature extraction to minimise the memory footprint and optimise execution speed. Leveraging these features, optimised classical machine learning models are implemented independently of heavyweight libraries, facilitating seamless integration onto hardware-limited hardware. Experimental results show that the Random Forest model, utilising a minimal number of decision trees, can achieve acceptable classification performance and effectively avoid overfitting. Besides that, Softmax Regression achieves comparable accuracy while converging better. This research underscores that the combination of essential signal processing and lightweight machine learning provides an efficient and reliable solution for edge-based machinery fault diagnosis.",
  },
];

export function getResearch(slug: string): Research | undefined {
  return researches.find((r) => r.slug === slug);
}
