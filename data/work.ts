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
      tagline: "Bilingual lab site, every animation handwritten",
      description:
        "Designed and built itdhust.com for the Intelligent Technical Diagnostics Lab at HUST. Six bilingual pages (EN / VI): a publications archive driven by BibTeX, an auto-translated news feed, member directory, admissions, and an events gallery. Every animation is hand-written in GSAP — scroll reveals, a cursor spotlight, 3D-tilt cards, magnetic buttons, an aurora background, and a partner marquee.",
      role: "Built it solo: design, frontend, content schema, SEO, deployment.",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "Publications page reads a single BibTeX string. Paste an entry, it parses and groups by year — no manual list to maintain.",
        "News and event captions are written in Vietnamese; English is generated on the fly via Google Translate and cached forever.",
        "Vietnamese names are reordered to Western form automatically (PGS.TS Nguyễn Trọng Du → A/Prof Trong-Du Nguyen), with academic titles mapped to English.",
        "Sitemap with hreflang, robots.txt, ownership verified on Google Search Console.",
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
      tagline: "Trang lab song ngữ, animation tự viết tay",
      description:
        "Tự xây itdhust.com cho lab Intelligent Technical Diagnostics ở HUST. Sáu trang song ngữ Anh – Việt: trang publications đọc trực tiếp từ BibTeX, news tự dịch sang tiếng Anh, danh sách thành viên, trang tuyển sinh và gallery sự kiện. Mọi animation viết tay bằng GSAP: scroll reveal, spotlight bám cursor, thẻ tilt 3D, nút magnetic, nền aurora, marquee partner.",
      role: "Một mình từ đầu đến cuối: thiết kế, frontend, cấu trúc nội dung, SEO, deploy.",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "Trang publications đọc thẳng một chuỗi BibTeX. Dán entry vào là parse xong và group theo năm — không phải maintain list thủ công.",
        "News và caption sự kiện viết bằng tiếng Việt; bản tiếng Anh tự sinh qua Google Translate và cache vĩnh viễn.",
        "Tên Việt tự sắp xếp theo thứ tự Western (PGS.TS Nguyễn Trọng Du → A/Prof Trong-Du Nguyen), chức danh học thuật map sang tiếng Anh.",
        "Sitemap có hreflang, robots.txt, đã verify ownership trên Google Search Console.",
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
      tagline: "双语实验室网站，所有动效手写",
      description:
        "独立设计并开发 itdhust.com，河内科技大学（HUST）Intelligent Technical Diagnostics Lab 的官方网站。六个双语（英语 / 越南语）页面：论文页直接读取 BibTeX、新闻自动翻译、成员列表、招生页面、活动相册。所有动效用 GSAP 手写：滚动揭示、跟随鼠标的聚光灯、3D 倾斜卡片、磁吸按钮、极光背景、合作机构走马灯。",
      role: "一个人从头做到尾：设计、前端、内容结构、SEO、部署上线。",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "论文页直接读取一段 BibTeX 字符串。粘一个 entry 进去就自动解析、按年份分组，不用手动维护列表。",
        "新闻和活动文案用越南语写，英文版本通过 Google Translate 实时生成并永久缓存。",
        "越南语姓名自动转成西方顺序（PGS.TS Nguyễn Trọng Du → A/Prof Trong-Du Nguyen），学术头衔也映射成英文。",
        "Sitemap 带 hreflang、robots.txt，已在 Google Search Console 通过站点验证。",
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
