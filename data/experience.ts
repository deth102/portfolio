export type Experience = {
  id: "researcher"|"teachingAssistant" | "backendDeveloper" | "phmResearcher";
  companyUrl?: string;   // optional — turns company name into a clickable link
};

// EDIT THIS FILE TO UPDATE YOUR EXPERIENCE TIMELINE.
// Items appear top → bottom (newest first is conventional).
export const experiences: Experience[] = [
    {
    id: "researcher",
    companyUrl: "https://www.nsrrc.org.tw/",
  },
  {
    id: "teachingAssistant",
    companyUrl: "https://sites.google.com/view/me-ncu-edu-tw-ptl/home",
  },
  {
    id: "backendDeveloper",
  },
  {
    id: "phmResearcher",
    companyUrl: "https://itdhust.com",
  },
];
