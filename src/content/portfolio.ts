/**
 * ============================================================================
 * PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
 * ----------------------------------------------------------------------------
 * Everything on the site reads from this file. To personalize the portfolio,
 * replace the placeholder values below with details from your resume.
 * No component edits are required for content changes.
 * ============================================================================
 */

export const profile = {
  // TODO: Replace with your full name as it appears on your resume.
  name: "Alexander Grant",
  // Professional headline shown under the name in the hero.
  headline:
    "Senior Full Stack .NET Developer | Azure Cloud | Angular | Microservices",
  // Short elevator pitch (2–3 lines max).
  summary:
    "I design and ship enterprise-grade systems on .NET and Azure — modernizing legacy platforms, breaking monoliths into resilient microservices, and delivering software that measurably moves the business.",
  location: "Toronto, Ontario, Canada", // TODO: your city
  email: "hello@example.com", // TODO: your email
  github: "https://github.com/your-handle", // TODO: your GitHub
  linkedin: "https://linkedin.com/in/your-handle", // TODO: your LinkedIn
  // Place your PDF in /public and point this at it, e.g. "/resume.pdf".
  resumeUrl: "/resume.pdf",
};

/** Typing effect rotation in the hero. TODO: adjust to your specialties. */
export const typingPhrases = [
  "Senior Full Stack .NET Developer",
  "Azure Cloud Engineer",
  "Microservices Architect",
  "Angular & TypeScript Developer",
];

/** About section paragraphs. TODO: rewrite in your own voice. */
export const about = {
  paragraphs: [
    "With 11+ years building software for regulated, high-volume enterprises, I specialize in the backend: domain modelling, API design, data access, and the unglamorous performance work that keeps mission-critical systems fast under load.",
    "My recent work centers on cloud-native .NET — App Services, Azure Functions, API Management and event-driven messaging — paired with Angular front ends that make complex workflows feel simple for the people who use them all day.",
    "I care most about solving real business problems: cutting manual processing time, retiring brittle legacy code, and giving teams an architecture they can keep extending. I learn continuously, write things down, and mentor the engineers around me.",
  ],
  highlights: [
    "11+ years shipping enterprise software",
    "Backend & distributed systems specialist",
    "Azure cloud migration and cost optimization",
    "Clean Architecture, SOLID, testable code",
  ],
};

export type SkillGroup = { category: string; skills: string[] };

/** TODO: add/remove technologies to match your resume. */
export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: [
      "C#",
      ".NET Framework",
      ".NET Core",
      "ASP.NET Core",
      "REST APIs",
      "Entity Framework",
      "LINQ",
    ],
  },
  {
    category: "Frontend",
    skills: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    category: "Cloud",
    skills: [
      "Azure",
      "App Service",
      "Azure Functions",
      "API Management",
      "Key Vault",
      "Application Insights",
      "Azure SQL",
      "Storage Accounts",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "Microservices",
      "Clean Architecture",
      "Dependency Injection",
      "SOLID Principles",
      "Design Patterns",
      "Event Driven Architecture",
    ],
  },
  { category: "Database", skills: ["SQL Server", "Stored Procedures"] },
  { category: "DevOps", skills: ["Git", "Azure DevOps", "CI/CD"] },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  stack: string[];
};

/**
 * TODO: replace these placeholder roles with your actual experience.
 * The timeline renders in the order listed (most recent first).
 */
export const experience: ExperienceItem[] = [
  {
    role: "Senior Full Stack .NET Developer",
    company: "Enterprise Client — Financial Services",
    period: "2021 — Present",
    location: "Toronto, ON",
    points: [
      "Lead backend architecture for a multi-tenant platform serving thousands of daily transactions.",
      "Decomposed a monolith into independently deployable .NET microservices with event-driven messaging.",
      "Introduced CI/CD pipelines in Azure DevOps, cutting release cycles from weeks to days.",
    ],
    stack: [".NET Core", "Azure", "Angular", "SQL Server"],
  },
  {
    role: "Full Stack .NET Developer",
    company: "Enterprise Client — Real Estate Technology",
    period: "2017 — 2021",
    location: "Toronto, ON",
    points: [
      "Built REST APIs and Angular interfaces for document-heavy title and property workflows.",
      "Migrated on-premise workloads to Azure App Service and Azure SQL with zero downtime cutover.",
      "Tuned SQL Server queries and stored procedures, reducing report generation time significantly.",
    ],
    stack: ["ASP.NET Core", "Angular", "Azure SQL", "Entity Framework"],
  },
  {
    role: ".NET Developer",
    company: "Software Consultancy",
    period: "2014 — 2017",
    location: "Remote",
    points: [
      "Delivered line-of-business applications on .NET Framework for logistics and insurance clients.",
      "Modernized legacy VB codebases into maintainable, layered C# solutions.",
    ],
    stack: ["C#", ".NET Framework", "JavaScript", "SQL Server"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  architecture: string;
  challenges: string;
  outcome: string;
};

/** TODO: swap in real project details, metrics and outcomes. */
export const projects: Project[] = [
  {
    title: "Legacy Modernization",
    tagline: "VB/.NET → modern .NET",
    description:
      "Incremental rewrite of a decade-old VB/.NET line-of-business suite into a modular .NET solution without pausing feature delivery.",
    technologies: ["C#", ".NET Core", "Entity Framework", "SQL Server"],
    architecture:
      "Strangler-fig migration behind a routing façade; layered Clean Architecture with clear domain boundaries.",
    challenges:
      "No test coverage, undocumented business rules, and a hard requirement of zero downtime for daily operations.",
    outcome:
      "Legacy surface retired module by module with a maintainable codebase and dramatically lower defect rates.",
  },
  {
    title: "Microservices Platform",
    tagline: "Scalable independent services",
    description:
      "A suite of independently deployable services exposing versioned REST APIs behind a shared gateway.",
    technologies: ["ASP.NET Core", "API Management", "Azure Functions"],
    architecture:
      "Event-driven services with asynchronous messaging, per-service data ownership and centralized observability.",
    challenges:
      "Distributed transactions, idempotency, and keeping contracts stable across independently shipping teams.",
    outcome:
      "Teams deploy on their own cadence; peak-load scaling handled per service rather than for the whole system.",
  },
  {
    title: "Azure Migration",
    tagline: "On-premise → cloud",
    description:
      "Lift-and-improve migration of enterprise workloads from on-premise servers to Azure.",
    technologies: ["App Service", "Azure SQL", "Key Vault", "App Insights"],
    architecture:
      "Infrastructure-as-code deployments, managed identities for secretless access, and end-to-end telemetry.",
    challenges:
      "Hard-coded configuration, network-bound integrations and a strict maintenance window for cutover.",
    outcome:
      "Elastic capacity, secrets consolidated in Key Vault, and reduced infrastructure operating cost.",
  },
  {
    title: "Document Processing Platform",
    tagline: "High-volume automation",
    description:
      "Pipeline that ingests, classifies and extracts structured data from large volumes of business documents.",
    technologies: ["Azure Functions", "Storage Accounts", "C#", "SQL Server"],
    architecture:
      "Queue-triggered serverless workers with retry and dead-letter handling; durable audit trail per document.",
    challenges:
      "Bursty ingestion volumes, inconsistent source formats and strict traceability requirements.",
    outcome:
      "Manual review effort cut sharply while throughput scaled automatically with demand.",
  },
  {
    title: "Title Search Platform",
    tagline: "Domain-heavy workflows",
    description:
      "End-to-end platform supporting title search operations, from order intake through examination and delivery.",
    technologies: ["Angular", "ASP.NET Core", "Entity Framework", "Azure"],
    architecture:
      "Domain-driven services with role-based access control and a workflow engine for order state.",
    challenges:
      "Complex jurisdiction-specific rules and integrations with external registry data sources.",
    outcome:
      "One system replaced fragmented manual tooling, shortening turnaround time per order.",
  },
  {
    title: "Property Search Service",
    tagline: "Fast, resilient lookups",
    description:
      "Search service aggregating property data from multiple providers behind one resilient API.",
    technologies: ["REST APIs", ".NET Core", "Azure SQL", "Caching"],
    architecture:
      "Provider abstraction with circuit breakers, response caching and normalized result contracts.",
    challenges:
      "Unreliable upstream providers, varied schemas and demanding latency expectations.",
    outcome:
      "Consistent sub-second responses with graceful degradation when a provider is unavailable.",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  status: "earned" | "planned";
};

/** TODO: add your certifications and target dates. */
export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2023",
    status: "earned",
  },
  {
    name: "Azure Developer Associate (AZ-204)",
    issuer: "Microsoft",
    year: "Planned",
    status: "planned",
  },
  {
    name: "Azure Solutions Architect Expert (AZ-305)",
    issuer: "Microsoft",
    year: "Planned",
    status: "planned",
  },
];

/** TODO: update counters with your real numbers. */
export const achievements = [
  { label: "Years Experience", value: 11, suffix: "+" },
  { label: "Projects Delivered", value: 40, suffix: "+" },
  { label: "APIs Built", value: 120, suffix: "+" },
  { label: "Enterprise Applications", value: 15, suffix: "+" },
];

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
