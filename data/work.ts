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

// EDIT THIS FILE TO UPDATE YOUR WORK PROJECTS.
// These are projects done with a team / at a company — distinct from personal projects.
export const works: Work[] = [
  {
    name: "Aladata",
    tagline: "Conversational Text-to-SQL (tiếng Việt)",
    description:
      "Hệ thống chat tiếng Việt giúp nhân viên hỏi số liệu doanh thu bằng ngôn ngữ tự nhiên, tự sinh SQL truy vấn ClickHouse và trả lời. Hỗ trợ 3 dạng câu hỏi: đơn (Single), tiếp nối (Follow-up), chuyển ngữ cảnh (Context Switching).",
    role:
      "Backend Engineer — sở hữu tầng Memory (Redis + Postgres + Graphiti/Neo4j), FastAPI service, và 7/20 node trong pipeline LangGraph (N01, N03–N07, N15).",
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
      "Mục tiêu >95% accuracy trên 1,600 test case",
      "Owns toàn bộ tầng Memory: Redis (short-term) + Postgres (long-term) + Graphiti/Neo4j (knowledge graph)",
      "Phụ trách 7/20 node của pipeline LangGraph",
    ],
  },
];
