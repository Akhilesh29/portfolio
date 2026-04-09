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
    name: "health research ai",
    desc: "a full-stack health intelligence system using llm-driven symptom interpretation, postgresql-backed session tracking, and geolocation-based provider discovery to deliver structured clinical guidance.",
    tags: ["typescript", "next.js", "postgresql", "groq-api", "docker"],
    github: "https://github.com/Akhilesh29/Health-Research-AI",
    live: "https://healthresearchai.dpdns.org/",
  },
  {
    slug: "work-queue",
    name: "work queue",
    desc: "a distributed background task processing system written in go. it handles job scheduling, retries, and worker orchestration at scale.",
    tags: ["golang", "redis", "queues", "background-jobs"],
    github: "https://github.com/Akhilesh29/work-queue",
    live: null,
  },
  {
    slug: "ride-sharing-system-design",
    name: "ride sharing system design",
    desc: "a deep-dive into the backend architecture of ride-sharing platforms like uber and rapido. it includes matching algorithms, geohashing, and real-time scalability patterns.",
    tags: ["c++", "system design", "distributed systems"],
    github: "https://github.com/Akhilesh29/ride-sharing-system-design",
    live: null,
  },
  {
    slug: "nexus-ai-agent",
    name: "nexus ai agent",
    desc: "an ai agent with both cli and web ui interfaces. built with typescript + node.js + google gemini api. it runs agentic tasks end-to-end.",
    tags: ["typescript", "node.js", "gemini api", "ai agents"],
    github: "https://github.com/Akhilesh29/nexus-ai-agent",
    live: "https://nexus-ai-agent-1.onrender.com",
  },
  {
    slug: "upisettle-go-backend",
    name: "upisettle",
    desc: "backend for small offline merchants to reconcile upi and cash payments against orders and get a clear end-of-day settlement view.",
    tags: ["go", "postgresql", "upi", "jwt", "docker"],
    github: "https://github.com/Akhilesh29/upisettle-go-backend",
    live: null,
  },
  {
    slug: "fintech-engineering",
    name: "fintech engineering",
    desc: "knowledge notes on modern fintech systems: payments, ledger, kyc, risk, security, and operations, with mermaid diagrams in the readme.",
    tags: ["fintech", "system design", "payments", "engineering"],
    github: "https://github.com/Akhilesh29/fintech-engineering",
    live: null,
  },
  {
    slug: "campus-placement-sys",
    name: "campus placement sys",
    desc: "full-stack talent deployment orchestrator for students, recruiters, and placement admins, middleware between academic talent and hiring.",
    tags: ["react", "node.js", "express", "mysql"],
    github: "https://github.com/Akhilesh29/Campus-Placement-Sys",
    live: "https://drive.google.com/file/d/17sXc8SXBvqaihfVpRwjYZxPW0-ywg8IJ/view?usp=sharing",
  },
  {
    slug: "onelot",
    name: "onelot",
    desc: "backend service to reserve cars with timed holds, then confirm or cancel, with concurrency-safe postgres, idempotency, and reservation state machine.",
    tags: ["typescript", "node.js", "express", "postgresql"],
    github: "https://github.com/Akhilesh29/onelot",
    live: null,
  },
  {
    slug: "eatherlabs-project",
    name: "eatherlabs",
    desc: "ingests pdf and excel documents, extracts structured data from each, cross-compares them to surface contradictions, and generates downloadable reports.",
    tags: ["python", "fastapi", "typescript", "vite", "pdf", "excel"],
    github: "https://github.com/Akhilesh29/eatherlabs-project",
    live: "https://drive.google.com/file/d/1l8Uv-UL6lluVrqfPVbxhV08PAUg1rqAh/view?usp=sharing",
  },
  {
    slug: "microservices-arch",
    name: "microservices arch",
    desc: "spring boot microservices sample with service isolation, api gateway routing, and eureka-based service discovery.",
    tags: ["java", "spring boot", "docker", "eureka", "api gateway"],
    github: "https://github.com/Akhilesh29/microservices-arch",
    live: null,
  },
  {
    slug: "gittrace",
    name: "gittrace",
    desc: "surfaces a github user's activity, contribution heatmap, top repositories, language breakdown, and recent events.",
    tags: ["javascript", "github api", "graphql api"],
    github: "https://github.com/Akhilesh29/GitTrace",
    live: "https://git-trace-teal.vercel.app",
  },
  {
    slug: "design-patterns",
    name: "design patterns",
    desc: "c++ implementations and notes exploring classic design patterns with a cmake-based layout.",
    tags: ["c++", "cmake", "design patterns", "oop"],
    github: "https://github.com/Akhilesh29/design-patterns",
    live: null,
  },
];
