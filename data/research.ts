export type ApproachItem = {
  name: string;
  description: string;
};

export type Research = {
  title: string;
  role: string;
  period: string;
  problem: string;
  approach: ApproachItem[];
  url?: string;
};

// EDIT THIS FILE TO UPDATE YOUR RESEARCH TOPICS.
// Outer keys ("en", "vi", "zh") match locales in i18n/routing.ts.
export const researches: Record<"en" | "vi" | "zh", Research[]> = {
  en: [
    {
      title:
        "Fault Diagnosis of Planetary Roller Screws via Digital Twin + Transfer Learning",
      role: "Master's Researcher",
      period: "24 months (2026–2028)",
      problem:
        "Planetary Roller Screws (PRS) are high-precision actuators used in robotics, aerospace and CNC machines, but real-world failure data is extremely scarce, preventing direct training of conventional deep-learning models.",
      approach: [
        {
          name: "Analytical model",
          description:
            "Hertzian 3-body contact + 6-DOF Lagrangian dynamics; compute the characteristic frequencies RPF / RSF / NBF.",
        },
        {
          name: "Digital Twin",
          description:
            "Roller FEA in ANSYS → export MNF → rigid-flex integration in MSC Adams. Sweep fault parameters (pitting / crack / wear / preload loss), validated to <10% error vs. analytical frequencies.",
        },
        {
          name: "Simulation dataset",
          description:
            "48 scenarios × 100 s @ 20 kHz, 1 s sliding window with 90% overlap; physical features (kurtosis RPF/NBF, VMD) + 1D-CNN deep features.",
        },
        {
          name: "Transfer Learning",
          description:
            "Compare three strategy families: instance-based (TrAdaBoost+KLIEP), feature-based (MMD/CORAL/DANN-lite), adversarial (CDAN/MCD) to reduce the simulation↔real domain gap.",
        },
      ],
    },
  ],
  vi: [
    {
      title:
        "Chẩn đoán hỏng hóc Vít-me bi đũa hành tinh bằng Digital Twin + Transfer Learning",
      role: "Nghiên cứu sinh Thạc sĩ",
      period: "24 tháng (2025–2027)",
      problem:
        "Planetary Roller Screw (PRS) là cơ cấu truyền động chính xác cao dùng trong robot, hàng không, máy CNC nhưng dữ liệu hỏng thực tế cực kỳ khan hiếm, khiến các mô hình học sâu truyền thống không thể huấn luyện trực tiếp.",
      approach: [
        {
          name: "Mô hình giải tích",
          description:
            "Hertzian 3-body contact + 6-DOF Lagrangian dynamics, tính các tần số đặc trưng RPF / RSF / NBF.",
        },
        {
          name: "Digital Twin",
          description:
            "FEA con lăn trong ANSYS → xuất MNF → tích hợp rigid-flex trong MSC Adams; quét tham số hỏng (pitting / crack / wear / preload-loss), validate sai số <10% so với tần số giải tích.",
        },
        {
          name: "Bộ dữ liệu mô phỏng",
          description:
            "48 kịch bản × 100 s @ 20 kHz, cửa sổ trượt 1 s / 90% overlap; đặc trưng vật lý (kurtosis RPF/NBF, VMD) + đặc trưng học sâu 1D-CNN.",
        },
        {
          name: "Transfer Learning",
          description:
            "So sánh 3 nhóm chiến lược: instance-based (TrAdaBoost+KLIEP), feature-based (MMD/CORAL/DANN-lite), adversarial (CDAN/MCD) để giảm domain gap mô phỏng↔thực.",
        },
      ],
    },
  ],
  zh: [
    {
      title:
        "基于数字孪生 + 迁移学习的行星滚柱丝杠故障诊断",
      role: "硕士研究生",
      period: "24 个月 (2025–2027)",
      problem:
        "行星滚柱丝杠（PRS）是机器人、航空航天和 CNC 机床中使用的高精度传动机构，但真实故障数据极其稀缺，使得传统深度学习模型无法直接训练。",
      approach: [
        {
          name: "解析模型",
          description:
            "赫兹三体接触 + 6 自由度拉格朗日动力学；计算特征频率 RPF / RSF / NBF。",
        },
        {
          name: "数字孪生",
          description:
            "在 ANSYS 中对滚柱进行 FEA → 导出 MNF → 在 MSC Adams 中进行刚柔耦合；扫描故障参数（点蚀 / 裂纹 / 磨损 / 预紧力损失），相对解析频率误差 < 10%。",
        },
        {
          name: "仿真数据集",
          description:
            "48 个场景 × 100 秒 @ 20 kHz，1 秒滑动窗口 90% 重叠；物理特征（kurtosis RPF/NBF, VMD）+ 1D-CNN 深度特征。",
        },
        {
          name: "迁移学习",
          description:
            "比较三类策略：基于实例（TrAdaBoost+KLIEP）、基于特征（MMD/CORAL/DANN-lite）、对抗式（CDAN/MCD），以缩小仿真↔真实的域差距。",
        },
      ],
    },
  ],
};
