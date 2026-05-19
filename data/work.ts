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
