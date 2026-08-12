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

const publicationUrl =
  "https://link.springer.com/chapter/10.1007/978-3-032-29469-2_30";

// Outer keys ("en", "vi", "zh") match locales in i18n/routing.ts.
export const researches: Record<"en" | "vi" | "zh", Research[]> = {
  en: [
    {
      title: "Lightweight Machine Learning for Edge-Based Machinery Fault Diagnosis",
      role: "First author",
      period: "ISRM 2026 · Springer Nature, 2027",
      problem:
        "Deploying machinery fault diagnosis on affordable edge devices is constrained by the memory, latency, and computational demands of heavyweight AI. This study presents a compact framework that combines frequency-domain signal features with optimized classical machine-learning models for fast, on-device diagnosis without relying on the cloud.",
      approach: [
        {
          name: "Signal processing",
          description:
            "Two-axis vibration signals sampled at 25.6 kHz are divided into non-overlapping 8,192-sample windows. FFT is then used to extract ten compact spectral features.",
        },
        {
          name: "Lightweight models",
          description:
            "An optimized Random Forest and Softmax Regression classify five machine conditions: normal, rotor unbalance, shaft misalignment, inner-race fault, and outer-race fault.",
        },
        {
          name: "Results",
          description:
            "The 10-tree Random Forest achieves 99.52% test accuracy using 194,380 bytes of RAM, with an estimated latency of 33.6 ms per window on an ESP32. Optimization cuts both memory use and inference latency by more than 50%.",
        },
      ],
      url: publicationUrl,
    },
  ],
  vi: [
    {
      title: "Học máy nhẹ cho chẩn đoán lỗi máy móc trên thiết bị biên",
      role: "Tác giả đầu tiên",
      period: "ISRM 2026 · Springer Nature, 2027",
      problem:
        "Việc đưa chẩn đoán lỗi máy móc lên các thiết bị biên giá rẻ bị giới hạn bởi bộ nhớ, độ trễ và chi phí tính toán của các mô hình AI nặng. Nghiên cứu đề xuất một khung nhỏ gọn, kết hợp đặc trưng tín hiệu miền tần số với các mô hình học máy cổ điển được tối ưu để chẩn đoán nhanh ngay trên thiết bị mà không phụ thuộc vào đám mây.",
      approach: [
        {
          name: "Xử lý tín hiệu",
          description:
            "Tín hiệu rung hai trục lấy mẫu ở 25,6 kHz được chia thành các cửa sổ 8.192 mẫu không chồng lấn; FFT sau đó trích xuất 10 đặc trưng phổ nhỏ gọn.",
        },
        {
          name: "Mô hình nhẹ",
          description:
            "Random Forest tối ưu và Softmax Regression phân loại 5 trạng thái: bình thường, mất cân bằng rôto, lệch trục, lỗi vòng trong và lỗi vòng ngoài ổ lăn.",
        },
        {
          name: "Kết quả",
          description:
            "Random Forest với 10 cây đạt độ chính xác kiểm thử 99,52%, sử dụng 194.380 byte RAM và có độ trễ ước tính 33,6 ms mỗi cửa sổ trên ESP32. Quá trình tối ưu giảm hơn 50% bộ nhớ và thời gian suy luận.",
        },
      ],
      url: publicationUrl,
    },
  ],
  zh: [
    {
      title: "面向边缘机械故障诊断的轻量级机器学习",
      role: "第一作者",
      period: "ISRM 2026 · Springer Nature，2027",
      problem:
        "在低成本边缘设备上部署机械故障诊断，往往受到大型 AI 模型在内存、延迟和计算量方面的限制。本研究提出一种紧凑框架，将频域信号特征与经过优化的经典机器学习模型相结合，在不依赖云端的情况下实现快速的设备端诊断。",
      approach: [
        {
          name: "信号处理",
          description:
            "将采样率为 25.6 kHz 的双轴振动信号划分为不重叠的 8,192 点窗口，并通过 FFT 提取 10 个紧凑的频谱特征。",
        },
        {
          name: "轻量级模型",
          description:
            "采用优化后的随机森林和 Softmax 回归，对正常、转子不平衡、轴不对中、轴承内圈故障和外圈故障五种机械状态进行分类。",
        },
        {
          name: "实验结果",
          description:
            "由 10 棵树组成的随机森林测试准确率达到 99.52%，占用 194,380 字节 RAM，在 ESP32 上的估算单窗口延迟为 33.6 ms。优化后，内存占用和推理延迟均降低了 50% 以上。",
        },
      ],
      url: publicationUrl,
    },
  ],
};
