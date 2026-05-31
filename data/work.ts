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
      tagline: "Bilingual lab site with hand-tuned interactions",
      description:
        "End-to-end design and development of itdhust.com, the official site for the Intelligent Technical Diagnostics Lab at HUST. The release ships six fully bilingual pages (English / Vietnamese): a BibTeX-driven publications archive, an automatically translated news timeline, a member directory, a recruiting page, and an events gallery. The interaction layer was hand-tuned with GSAP scroll reveals, a mouse-tracking spotlight, 3D-tilt cards, magnetic CTAs, an animated aurora background, and a partner marquee.",
      role:
        "Sole engineer and designer. Owned the visual direction, frontend implementation, content schema, SEO and production deployment.",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "BibTeX-first publications pipeline: any pasted entry is parsed and grouped by year automatically, eliminating manual list maintenance.",
        "On-demand translation layer that converts Vietnamese-authored news and event captions into English, with persistent caching to keep latency and cost negligible.",
        "Automatic Vietnamese-to-Western name conversion (e.g. PGS.TS Nguyễn Trọng Du → A/Prof Trong-Du Nguyen), including a mapping for academic titles.",
        "Production-grade SEO: hreflang sitemap, robots policy, and verified site ownership through Google Search Console.",
      ],
      url: "https://itdhust.com",
      period: "2026",
    },
    {
      name: "Aladata",
      tagline: "Conversational Text-to-SQL (Vietnamese)",
      description:
        "A Vietnamese natural-language interface that turns business questions into SQL: the system parses the question, generates the query, executes it against ClickHouse, and returns the result. Three interaction modes are supported — single-shot questions, follow-ups, and context switching between topics.",
      role:
        "Backend Engineer responsible for the Memory subsystem (Redis + Postgres + Graphiti/Neo4j) and the FastAPI service that ties the pipeline together.",
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
        "Designed and own the full Memory stack: Redis for short-term context, Postgres for long-term persistence, and Graphiti/Neo4j as the knowledge-graph backbone.",
      ],
    },
  ],
  vi: [
    {
      name: "Website ITD Lab",
      tagline: "Trang lab song ngữ với tương tác được tinh chỉnh thủ công",
      description:
        "Thiết kế và phát triển end-to-end itdhust.com, trang chính thức của Intelligent Technical Diagnostics Lab thuộc HUST. Bản phát hành gồm sáu trang song ngữ Anh – Việt: kho công bố khoa học vận hành dựa trên BibTeX, dòng tin tức được dịch tự động, danh bạ thành viên, trang tuyển sinh, và thư viện hình ảnh sự kiện. Tầng tương tác được tinh chỉnh thủ công với GSAP scroll reveal, spotlight bám theo con trỏ, thẻ tilt 3D, nút CTA hiệu ứng từ tính, nền aurora chuyển động, và băng partner cuộn ngang.",
      role:
        "Kỹ sư duy nhất của dự án, phụ trách định hướng thiết kế, triển khai frontend, mô hình hóa nội dung, SEO và đưa sản phẩm lên production.",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "Pipeline công bố khoa học hoạt động hoàn toàn dựa trên BibTeX: chỉ cần dán một entry, hệ thống tự phân tích cú pháp và nhóm theo năm, loại bỏ công sức bảo trì danh sách thủ công.",
        "Cơ chế dịch on-demand chuyển nội dung tin tức và chú thích sự kiện viết bằng tiếng Việt sang tiếng Anh, kèm cache bền vững để đưa độ trễ và chi phí về mức không đáng kể.",
        "Tự động chuyển đổi tên Việt sang dạng Western (vd PGS.TS Nguyễn Trọng Du → A/Prof Trong-Du Nguyen), kèm bảng ánh xạ chức danh học thuật sang tiếng Anh.",
        "SEO ở mức production: sitemap đa ngôn ngữ với hreflang, robots policy, và đã xác thực quyền sở hữu qua Google Search Console.",
      ],
      url: "https://itdhust.com",
      period: "2026",
    },
    {
      name: "Aladata",
      tagline: "Conversational Text-to-SQL (tiếng Việt)",
      description:
        "Giao diện ngôn ngữ tự nhiên tiếng Việt cho phép nhân viên truy vấn dữ liệu doanh thu mà không cần viết SQL: hệ thống phân tích câu hỏi, sinh truy vấn tương ứng, thực thi trên ClickHouse và trả về kết quả. Hỗ trợ ba dạng tương tác: câu hỏi đơn, câu hỏi tiếp nối, và chuyển ngữ cảnh giữa các chủ đề.",
      role:
        "Backend Engineer phụ trách hệ thống Memory (Redis + Postgres + Graphiti/Neo4j) và FastAPI service kết nối toàn bộ pipeline.",
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
        "Thiết kế và làm chủ toàn bộ tầng Memory: Redis cho ngữ cảnh ngắn hạn, Postgres cho lưu trữ dài hạn, và Graphiti/Neo4j làm xương sống cho knowledge graph.",
      ],
    },
  ],
  zh: [
    {
      name: "ITD Lab 网站",
      tagline: "双语实验室站点，交互均为手工打磨",
      description:
        "端到端设计与开发 itdhust.com，河内科技大学（HUST）Intelligent Technical Diagnostics Lab 的官方站点。首个版本包含六个完全双语（英语 / 越南语）页面：基于 BibTeX 的论文归档、自动翻译的新闻时间线、成员目录、招生页面，以及活动图库。交互层经过精心打磨：GSAP 滚动揭示、跟随鼠标的聚光灯、3D 倾斜卡片、磁吸 CTA、动态极光背景与合作机构走马灯。",
      role:
        "项目唯一的工程师与设计师，主导视觉方向、前端实现、内容模型、SEO 与生产部署。",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind v4",
        "GSAP",
        "next-intl",
        "Vercel",
      ],
      highlights: [
        "BibTeX 优先的论文管线：任意粘贴的 BibTeX 条目会被自动解析并按年份分组，从而省去手工维护列表的成本。",
        "按需翻译管线：将越南语撰写的新闻与活动文案自动转换为英语，并通过持久化缓存将延迟与费用压至可忽略水平。",
        "越南语姓名自动西方化（如 PGS.TS Nguyễn Trọng Du → A/Prof Trong-Du Nguyen），并包含学术头衔的英文映射。",
        "面向生产的 SEO 配置：多语言 sitemap 携带 hreflang、robots 策略，并已在 Google Search Console 通过站点验证。",
      ],
      url: "https://itdhust.com",
      period: "2026",
    },
    {
      name: "Aladata",
      tagline: "对话式 Text-to-SQL（越南语）",
      description:
        "面向越南语的自然语言接口，使员工无需编写 SQL 即可查询业务数据：系统解析问题、生成对应查询、在 ClickHouse 上执行并返回结果。支持三种交互模式——单一问题、后续追问，以及在不同主题之间的上下文切换。",
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
        "设计并完全负责 Memory 栈：Redis 承载短期上下文、Postgres 提供长期持久化，Graphiti/Neo4j 作为知识图谱的核心骨架。",
      ],
    },
  ],
};
