export type Work = {
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  highlights?: string[];
  url?: string;
  period?: string;
};

// EDIT THIS FILE TO UPDATE YOUR WORK PROJECTS (team / company projects).
// The outer keys ("en", "vi", "zh") match the locales in i18n/routing.ts.
// `name` and `stack` stay the same across languages; only translate text fields.
export const works: Record<"en" | "vi" | "zh", Work[]> = {
  en: [
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
