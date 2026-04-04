export type Project = {
  slug: string;
  name: string;
  desc: string;
  tags: string[];
  github: string;
  live: string | null;
};

export const projects: Project[] = [
  {
    slug: "health-research-ai",
    name: "Health Research AI",
    desc: "A full-stack health intelligence system using LLM-driven symptom interpretation, PostgreSQL-backed session tracking, and geolocation-based provider discovery to deliver structured clinical guidance.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Groq-api", "Docker"],
    github: "https://github.com/Akhilesh29/Health-Research-AI",
    live: "https://healthresearchai.dpdns.org/",
  },
  {
    slug: "work-queue",
    name: "Work Queue",
    desc: "A distributed background task processing system written in Go. It handles job scheduling, retries, and worker orchestration at scale.",
    tags: ["Golang", "redis", "Queues", "Background-jobs"],
    github: "https://github.com/Akhilesh29/work-queue",
    live: null,
  },
  {
    slug: "ride-sharing-system-design",
    name: "Ride Sharing System Design",
    desc: "A deep-dive into the backend architecture of ride-sharing platforms like Uber and Rapido. It includes matching algorithms, geohashing, and real-time scalability patterns.",
    tags: ["C++", "System Design", "Distributed Systems"],
    github: "https://github.com/Akhilesh29/ride-sharing-system-design",
    live: null,
  },
  {
    slug: "nexus-ai-agent",
    name: "Nexus AI Agent",
    desc: "An AI agent with both CLI and Web UI interfaces. Built with TypeScript + Node.js + Google Gemini API. It runs agentic tasks end-to-end.",
    tags: ["TypeScript", "Node.js", "Gemini API", "AI Agents"],
    github: "https://github.com/Akhilesh29/nexus-ai-agent",
    live: "https://nexus-ai-agent-1.onrender.com",
  },
];
