export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;   // optional — turns company name into a clickable link
  period: string;
  description: string;
};

// EDIT THIS FILE TO UPDATE YOUR EXPERIENCE TIMELINE.
// Items appear top → bottom (newest first is conventional).
export const experiences: Experience[] = [
  {
    role: "Backend Developer",
    company: "Aladin",
    period: "in 2026",
    description: "",
  },
  {
    role: "PHM Researcher",
    company: "ITD Lab — Hanoi University of Science and Technology",
    companyUrl: "https://itdhust.com",
    period: "2025 - Present",
    description: "",
  },
];
