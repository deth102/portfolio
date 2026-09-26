export type Work = {
  name: string;
  tagline: string;
  description: string;
  role?: string;
  stack?: string[];
  highlights?: string[];
  url?: string;
  period?: string;
  image?: { src: string; alt: string };
};

const pt500Image = "/PT500.jpg";
const vicemImage = "/vicemteaching.jpg";
const vicemUrl = "https://itdhust.com/partnership";
const vicemStack = ["Python", "Google Colab", "scikit-learn", "SHAP"];

// EDIT THIS FILE TO UPDATE YOUR WORK PROJECTS (team / company projects).
// The outer keys ("en", "vi", "zh") match the locales in i18n/routing.ts.
// `name` and `stack` stay the same across languages; only translate text fields.
export const works: Record<"en" | "vi" | "zh", Work[]> = {
  en: [
    {
      name: "PT500 Vibration Test Rig",
      tagline: "Hands-on vibration experiments on rotating machinery",
      description:
        "I have practical vibration experience with the PT500 machinery diagnostics rig at ITD Lab. I selected and installed the experimental setup, then carried out vibration measurements on the rig to collect data for fault diagnosis research.",
      role:
        "I chose the rig configuration, assembled and mounted the components and sensors, and ran the vibration measurements.",
      highlights: [
        "Selected and installed the experimental setup on the PT500 rig.",
        "Mounted sensors and connected the data acquisition system.",
        "Carried out vibration measurements and recorded data for analysis.",
      ],
      period: "July 2026",
      image: {
        src: pt500Image,
        alt: "PT500 vibration test rig with sensors and data acquisition at ITD Lab",
      },
    },
    {
      name: "Training at VICEM",
      tagline:
        "Intelligent vibration monitoring & AI-based predictive maintenance for rotating equipment",
      description:
        "ITD Lab and the VICEM Institute of Cement Technology ran a 5-day intensive course (code VCN.VC.2026.13) for 18 engineers from 7 VICEM member units, going from vibration theory to AI methods for diagnostics and predictive maintenance.",
      role: "Instructor",
      highlights: [
        "Vibration monitoring foundations, maintenance strategies, the ISO 20816 standard, and an introduction to PHM and AI.",
        "Gear and rolling-bearing fault diagnosis (GMF, BPFO/BPFI/BSF/FTF, envelope spectrum) and vertical roller mill (VRM) diagnosis.",
        "Machine learning for bearing fault diagnosis (SVM, Random Forest, SHAP) and a RAG-based smart maintenance assistant.",
        "Dynamic unbalance identification and field balancing practice.",
      ],
      stack: vicemStack,
      url: vicemUrl,
      period: "June 8–12, 2026 · Hanoi",
      image: {
        src: vicemImage,
        alt: "Teaching the machine-learning practice session at VICEM",
      },
    },
    {
      name: "ITD Lab Website",
      tagline: "A bilingual home for ITD Lab",
      description:
        "I built this website to give ITD Lab a clear place to share its research, members, publications, and activities. It is available in Vietnamese and English, helping students and research partners quickly understand what the lab does and how to get in touch.",
      role:
        "I handled the project from design and development to organizing the content and deploying the finished website.",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "Publications are updated from BibTeX and automatically organized by year, making new papers quick to add.",
        "News, events, member profiles, and admissions information each have a clear place and are easy to update.",
        "The site works well on phones, supports Vietnamese and English, and is prepared for search engines.",
      ],
      url: "https://itdhust.com",
      period: "2026",
    },
    {
      name: "Aladata",
      tagline: "Conversational Text-to-SQL (Vietnamese)",
      description:
        "A Vietnamese-language interface for asking business-data questions without writing SQL. The system parses the question, generates the query, runs it on ClickHouse, and returns the result. Three modes: single questions, follow-ups, and switching context between topics.",
      role:
        "Backend Engineer. I own the Memory subsystem (Redis + Postgres + Graphiti/Neo4j) and the FastAPI service that wires the pipeline together.",
      stack: [
        "Python",
        "FastAPI",
        "LangGraph",
        "Redis",
        "PostgreSQL",
        "Neo4j",
        "Qdrant",
        "ClickHouse",
        "Docker",
        "LangFuse",
      ],
      highlights: [
        "Built and own the full Memory stack: Redis for short-term context, Postgres for long-term storage, Graphiti/Neo4j for the knowledge graph.",
      ],
    },
  ],
  vi: [
    {
      name: "Bộ thí nghiệm rung động PT500",
      tagline: "Thực nghiệm rung động trên máy quay",
      description:
        "Tôi có kinh nghiệm thực nghiệm rung động với bộ thí nghiệm chẩn đoán máy PT500 tại ITD Lab. Tôi đã chọn và lắp đặt cấu hình thí nghiệm, sau đó tiến hành đo rung trên bộ này để thu thập dữ liệu phục vụ nghiên cứu chẩn đoán lỗi.",
      role:
        "Tôi chọn cấu hình thí nghiệm, lắp đặt các bộ phận và cảm biến, rồi trực tiếp tiến hành đo rung.",
      highlights: [
        "Chọn và lắp đặt cấu hình thí nghiệm trên bộ PT500.",
        "Gắn cảm biến và kết nối hệ thống thu thập dữ liệu.",
        "Tiến hành đo rung và ghi dữ liệu để phân tích.",
      ],
      period: "07/2026",
      image: {
        src: pt500Image,
        alt: "Bộ thí nghiệm rung động PT500 cùng cảm biến và hệ thống thu dữ liệu tại ITD Lab",
      },
    },
    {
      name: "Đào tạo tại VICEM",
      tagline:
        "Giám sát rung động thông minh & bảo trì dự đoán dựa trên AI cho thiết bị quay",
      description:
        "ITD Lab phối hợp với Viện Công nghệ Xi măng VICEM tổ chức khóa đào tạo chuyên sâu 5 ngày (mã VCN.VC.2026.13) cho 18 kỹ sư đến từ 7 đơn vị thành viên của VICEM, đi từ lý thuyết rung động đến các phương pháp AI cho chẩn đoán và bảo trì dự đoán.",
      role: "Giảng viên",
      highlights: [
        "Nền tảng giám sát rung động, các chiến lược bảo trì, tiêu chuẩn ISO 20816, giới thiệu PHM và AI.",
        "Chẩn đoán hư hỏng bánh răng, ổ lăn (GMF, BPFO/BPFI/BSF/FTF, phổ đường bao) và máy nghiền đứng (VRM).",
        "Học máy chẩn đoán hư hỏng ổ lăn (SVM, Random Forest, SHAP) và trợ lý bảo trì thông minh dùng RAG.",
        "Nhận diện mất cân bằng động và thực hành cân bằng động tại hiện trường.",
      ],
      stack: vicemStack,
      url: vicemUrl,
      period: "8–12/6/2026 · Hà Nội",
      image: {
        src: vicemImage,
        alt: "Giảng dạy buổi thực hành học máy tại VICEM",
      },
    },
    {
      name: "Website ITD Lab",
      tagline: "Nơi giới thiệu phòng thí nghiệm ITD",
      description:
        "Tôi xây dựng website này để phòng thí nghiệm ITD có một nơi giới thiệu các hướng nghiên cứu, thành viên, bài báo và hoạt động của nhóm. Trang có cả tiếng Việt và tiếng Anh, giúp sinh viên cũng như các nhóm nghiên cứu dễ tìm hiểu và liên hệ với phòng thí nghiệm.",
      role:
        "Tôi tự thiết kế và phát triển website, sắp xếp nội dung, tối ưu hiển thị trên điện thoại và đưa trang lên hoạt động.",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "Bài báo được cập nhật từ BibTeX và tự sắp xếp theo năm, nên việc bổ sung công bố mới khá nhanh.",
        "Tin tức, sự kiện, thông tin thành viên và tuyển sinh được trình bày rõ ràng, dễ tìm và dễ cập nhật.",
        "Website hiển thị tốt trên điện thoại, có hai ngôn ngữ Việt - Anh và được chuẩn bị để dễ xuất hiện trên Google.",
      ],
      url: "https://itdhust.com",
      period: "2026",
    },
    {
      name: "Aladata",
      tagline: "Conversational Text-to-SQL (tiếng Việt)",
      description:
        "Giao diện tiếng Việt để nhân viên hỏi dữ liệu doanh thu mà không cần viết SQL. Hệ thống parse câu hỏi, sinh SQL, chạy trên ClickHouse rồi trả về kết quả. Ba dạng tương tác: câu đơn, câu tiếp nối, và đổi ngữ cảnh giữa các chủ đề.",
      role:
        "Backend Engineer. Tôi phụ trách tầng Memory (Redis + Postgres + Graphiti/Neo4j) và FastAPI service kết nối cả pipeline.",
      stack: [
        "Python",
        "FastAPI",
        "LangGraph",
        "Redis",
        "PostgreSQL",
        "Neo4j",
        "Qdrant",
        "ClickHouse",
        "Docker",
        "LangFuse",
      ],
      highlights: [
        "Tự thiết kế toàn bộ tầng Memory: Redis cho short-term context, Postgres cho long-term storage, Graphiti/Neo4j cho knowledge graph.",
      ],
    },
  ],
  zh: [
    {
      name: "PT500 振动试验台",
      tagline: "旋转机械振动实验",
      description:
        "我在 ITD 实验室有使用 PT500 机械诊断试验台进行振动实验的实际经验：负责选型和安装实验装置，并在该试验台上进行振动测量，为故障诊断研究采集数据。",
      role: "我负责选定试验台配置、安装部件和传感器，并亲自完成振动测量。",
      highlights: [
        "在 PT500 试验台上选型并安装实验装置。",
        "安装传感器并连接数据采集系统。",
        "进行振动测量并记录数据用于分析。",
      ],
      period: "2026年7月",
      image: {
        src: pt500Image,
        alt: "ITD 实验室的 PT500 振动试验台及传感器、数据采集设备",
      },
    },
    {
      name: "VICEM 培训",
      tagline: "旋转设备智能振动监测与基于 AI 的预测性维护",
      description:
        "ITD 实验室与 VICEM 水泥技术研究院合作，为来自 7 家 VICEM 成员单位的 18 名工程师举办了为期 5 天的专题培训（编号 VCN.VC.2026.13），内容从振动理论延伸到用于诊断和预测性维护的 AI 方法。",
      role: "讲师",
      highlights: [
        "振动监测基础、维护策略、ISO 20816 标准，以及 PHM 与 AI 入门。",
        "齿轮与滚动轴承故障诊断（GMF、BPFO/BPFI/BSF/FTF、包络谱）以及立磨（VRM）诊断。",
        "基于机器学习的轴承故障诊断（SVM、随机森林、SHAP）和基于 RAG 的智能维护助手。",
        "动不平衡识别与现场动平衡实践。",
      ],
      stack: vicemStack,
      url: vicemUrl,
      period: "2026年6月8–12日 · 河内",
      image: {
        src: vicemImage,
        alt: "在 VICEM 讲授机器学习实践课",
      },
    },
    {
      name: "ITD Lab 网站",
      tagline: "ITD 实验室的双语主页",
      description:
        "我为 ITD 实验室搭建了这个网站，用来集中介绍研究方向、团队成员、论文和日常活动。网站提供越南语和英语版本，方便学生与合作团队了解实验室，并快速找到联系方式。",
      role: "我独立完成了网站设计、开发、内容整理、移动端适配和上线部署。",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "论文信息从 BibTeX 更新并自动按年份整理，添加新论文更方便。",
        "新闻、活动、成员介绍和招生信息分类清楚，查找和维护都比较简单。",
        "网站适配手机，支持越南语和英语，并针对搜索引擎做了基础优化。",
      ],
      url: "https://itdhust.com",
      period: "2026",
    },
    {
      name: "Aladata",
      tagline: "对话式 Text-to-SQL（越南语）",
      description:
        "越南语自然语言接口，员工不用写 SQL 也能查业务数据。系统解析问题、生成 SQL、在 ClickHouse 上执行、返回结果。三种模式：单个问题、追问、跨主题切换。",
      role:
        "后端工程师，负责 Memory 子系统（Redis + Postgres + Graphiti/Neo4j）以及串联整条管线的 FastAPI 服务。",
      stack: [
        "Python",
        "FastAPI",
        "LangGraph",
        "Redis",
        "PostgreSQL",
        "Neo4j",
        "Qdrant",
        "ClickHouse",
        "Docker",
        "LangFuse",
      ],
      highlights: [
        "设计并维护整个 Memory 栈：Redis 处理短期上下文、Postgres 长期存储、Graphiti/Neo4j 做知识图谱。",
      ],
    },
  ],
};
