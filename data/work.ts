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
      tagline: "Bilingual lab site with rich animations",
      description:
        "Designed and built itdhust.com from scratch for ITD Lab at HUST. A six-page bilingual (English / Vietnamese) site featuring a BibTeX-driven publications page, an auto-translated news feed, member profiles, recruiting page, and an events gallery. Heavy interaction polish: GSAP scroll reveals, 3D-tilt cards, magnetic CTAs, mouse-tracking spotlight, animated aurora background, and a partner marquee.",
      role:
        "Solo full-stack developer: design, frontend, content modeling, SEO and deployment.",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "BibTeX parser: paste any BibTeX entry and the page renders it automatically, grouped by year.",
        "Auto-translation pipeline: Vietnamese news and event captions translate on demand and are cached forever.",
        "Vietnamese name auto-westernization (e.g. PGS.TS Nguyễn Trọng Du → A/Prof Trong-Du Nguyen) with academic titles mapped to English.",
        "SEO ready: i18n sitemap with hreflang, robots.txt, Google Search Console verified.",
      ],
      url: "https://itdhust.com",
      period: "2026",
    },
    {
      name: "Aladata",
      tagline: "Conversational Text-to-SQL (Vietnamese)",
      description:
        "A Vietnamese chat system that lets staff ask revenue questions in natural language; it auto-generates SQL, queries ClickHouse and returns answers. Supports three question types: Single, Follow-up, and Context Switching.",
      role:
        "Backend Engineer who owns the Memory layer (Redis + Postgres + Graphiti/Neo4j) and the FastAPI service.",
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
        "Owns the full Memory layer: Redis (short-term) + Postgres (long-term) + Graphiti/Neo4j (knowledge graph)",
      ],
    },
  ],
  vi: [
    {
      name: "Website ITD Lab",
      tagline: "Trang lab song ngữ với nhiều animation",
      description:
        "Tự thiết kế và xây dựng itdhust.com từ đầu cho ITD Lab (HUST). Trang sáu mục, song ngữ Anh/Việt: trang Publications tự parse BibTeX, News auto-dịch, hồ sơ thành viên, trang Tuyển sinh và Gallery sự kiện. Đẩy mạnh tương tác: GSAP scroll reveals, card tilt 3D, magnetic CTA, spotlight đuổi theo cursor, aurora background xoay nhẹ, marquee partner.",
      role:
        "Solo full-stack developer: thiết kế, frontend, content modeling, SEO và deploy.",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "BibTeX parser: paste 1 entry BibTeX bất kỳ là page tự render, group theo năm.",
        "Pipeline auto-dịch: news và caption sự kiện tiếng Việt được dịch on-demand và cache vĩnh viễn.",
        "Tự đảo tên Việt sang dạng Western (vd PGS.TS Nguyễn Trọng Du → A/Prof Trong-Du Nguyen) kèm map chức danh học thuật sang English.",
        "Sẵn sàng SEO: sitemap i18n với hreflang, robots.txt, đã verify Google Search Console.",
      ],
      url: "https://itdhust.com",
      period: "2026",
    },
    {
      name: "Aladata",
      tagline: "Conversational Text-to-SQL (tiếng Việt)",
      description:
        "Hệ thống chat tiếng Việt giúp nhân viên hỏi số liệu doanh thu bằng ngôn ngữ tự nhiên, tự sinh SQL truy vấn ClickHouse và trả lời. Hỗ trợ 3 dạng câu hỏi: đơn (Single), tiếp nối (Follow-up), chuyển ngữ cảnh (Context Switching).",
      role:
        "Backend Engineer, sở hữu tầng Memory (Redis + Postgres + Graphiti/Neo4j) và FastAPI service.",
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
        "Phụ trách toàn bộ tầng Memory: Redis (short-term) + Postgres (long-term) + Graphiti/Neo4j (knowledge graph)",
      ],
    },
  ],
  zh: [
    {
      name: "ITD Lab 网站",
      tagline: "双语实验室网站，包含丰富动效",
      description:
        "从零设计并构建 itdhust.com（河内科技大学 ITD Lab）。六个主要页面，双语（英语 / 越南语）：BibTeX 驱动的论文页、自动翻译的新闻流、成员页、招生页和事件画廊。强交互打磨：GSAP 滚动揭示、3D 倾斜卡片、磁吸 CTA、跟随鼠标的聚光灯、缓慢旋转的极光背景以及合作机构走马灯。",
      role: "独立全栈开发者 — 设计、前端、内容建模、SEO 与部署。",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "BibTeX 解析器：粘贴任意 BibTeX 条目即可自动渲染，按年份分组。",
        "自动翻译管线：越南语新闻与事件标题按需翻译并永久缓存。",
        "越南语姓名自动西方化（如 PGS.TS Nguyễn Trọng Du → A/Prof Trong-Du Nguyen），学术头衔映射为英文。",
        "SEO 就绪：带 hreflang 的多语言 sitemap、robots.txt、已通过 Google Search Console 验证。",
      ],
      url: "https://itdhust.com",
      period: "2026",
    },
    {
      name: "Aladata",
      tagline: "对话式 Text-to-SQL（越南语）",
      description:
        "一个越南语聊天系统，员工可用自然语言提问营收数据，系统自动生成 SQL、查询 ClickHouse 并返回结果。支持三种问题类型：单一（Single）、后续（Follow-up）、上下文切换（Context Switching）。",
      role:
        "后端工程师，负责 Memory 层（Redis + Postgres + Graphiti/Neo4j）及 FastAPI 服务。",
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
        "负责整个 Memory 层：Redis（短期）+ Postgres（长期）+ Graphiti/Neo4j（知识图谱）",
      ],
    },
  ],
};
