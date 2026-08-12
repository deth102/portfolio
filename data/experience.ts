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
    role: "Trợ lý nghiên cứu",
    company: "Phòng thí nghiệm Truyền động Chính xác",
    companyUrl: "https://sites.google.com/view/me-ncu-edu-tw-ptl/home",
    period: "từ tháng 9/2026",
    description: "",
  },
  {
    role: "Lập trình viên Backend",
    company: "Aladin",
    period: "năm 2026",
    description: "",
  },
  {
    role: "Nghiên cứu viên PHM",
    company: "ITD Lab — Đại học Bách khoa Hà Nội",
    companyUrl: "https://itdhust.com",
    period: "2025 - nay",
    description: "",
  },
];
