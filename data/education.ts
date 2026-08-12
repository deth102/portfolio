export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  note?: string;
};

// EDIT THIS FILE TO UPDATE YOUR EDUCATION TIMELINE.
export const educations: Education[] = [
    {
    degree: "Thạc sĩ Kỹ thuật Cơ khí",
    school: "Đại học Quốc lập Trung ương",
    location: "Đài Loan",
    period: "2026 - nay",
  },
  {
    degree: "Kỹ sư Cơ điện tử",
    school: "Đại học Bách khoa Hà Nội",
    location: "Hà Nội, Việt Nam",
    period: "2021 - 2025",
    note: "Tốt nghiệp loại Khá · Tiếng Anh B2",
  },
];
