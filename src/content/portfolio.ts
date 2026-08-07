/**
 * ============================================================================
 * PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
 * ----------------------------------------------------------------------------
 * Every section of the site reads from this file. Content is sourced from
 * Siddhartha Sharma's resume — no component edits are needed to update copy.
 * ============================================================================
 */

import resumeAsset from "@/assets/resume.pdf.asset.json";

export const profile = {
  name: "Siddhartha Sharma",
  headline:
    "Team Lead & Lead Full Stack Developer | C# / .NET Core | Azure | Angular | Microservices",
  summary:
    "Lead Full Stack Developer with 12+ years designing enterprise-grade REST APIs, cloud-native microservices and distributed applications with C#, ASP.NET Core, Angular, Azure and SQL Server — modernizing legacy platforms, securing APIs with OAuth2/JWT and shipping through Azure DevOps CI/CD.",
  location: "Canada",
  email: "siddhartha.sharma0501@gmail.com",
  phone: "+1-905-601-2425",
  github: "https://github.com/apachesid",
  linkedin: "https://www.linkedin.com/in/siddharthasharma05",
  resumeUrl: resumeAsset.url,
};

/** Typing effect rotation in the hero. */
export const typingPhrases = [
  "Lead Full Stack Developer",
  "C# & .NET Core Architect",
  "Azure Cloud & Microservices",
  "Angular & TypeScript Engineer",
  "Legacy Modernization Lead",
];

export const about = {
  paragraphs: [
    "I'm a Lead Full Stack Developer with 12+ years of experience designing and developing enterprise-grade REST APIs, cloud-native microservices and distributed applications using C#, ASP.NET Core, Angular/React, Azure and SQL Server. I have extensive experience modernizing legacy applications into scalable microservices, building secure APIs with OAuth2/JWT, integrating BizTalk with APIs, containerizing workloads, and deploying cloud solutions through Azure services and CI/CD pipelines.",
    "My strength is designing and optimizing high-performance, scalable platforms that improve developer productivity, enhance system reliability and reduce operational cost — with proven success in cloud cost optimization and full-cycle delivery across cloud, backend, frontend and DevOps ecosystems (Azure, .NET, Angular, CI/CD, relational databases).",
    "Alongside hands-on architecture and engineering, I lead a distributed offshore team of 7 across development, QA and support — owning sprint planning, code reviews, technical mentorship and architectural standards. I'm recognized for strategic thinking and delivering complex, high-impact initiatives that accelerate innovation and business value.",
  ],
  highlights: [
    "12+ years building enterprise .NET and cloud-native platforms",
    "Cloud-native Property Search Portal driving an estimated 20–30% lift in commercial closing volumes",
    "Legacy WCF services modernized to microservices on Azure Container Apps",
    "60% faster incident detection and resolution via Application Insights",
    "Leads a distributed team of 7 (dev, QA, support)",
    "Domains: Insurance, Re-Insurance, Title Insurance, Banking",
  ],
};


export type SkillGroup = { category: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["C#", "TypeScript", "JavaScript"],
  },
  {
    category: "Web & Front-End",
    skills: [
      "Angular",
      "ASP.NET MVC / Razor Pages",
      "HTML",
      "CSS",
      "Bootstrap",
      "OIDC",
      "JWT",
      "OAuth 2.0",
    ],
  },
  {
    category: "Back-End & Frameworks",
    skills: [
      ".NET",
      ".NET Core",
      "ASP.NET",
      "Web API",
      "Microsoft BizTalk Server",
      "Microservices",
      "REST",
      "CQRS",
      "Entity Framework Core",
      "MVC",
    ],
  },
  {
    category: "Cloud, DevOps & CI/CD",
    skills: [
      "MS Azure",
      "Azure App Services",
      "Azure Container Apps",
      "Azure Functions",
      "Blob Storage",
      "Key Vault",
      "Azure App Insights",
      "Azure DevOps (CI/CD)",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    category: "Database",
    skills: ["SQL Server", "T-SQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Testing, Security & Code Quality",
    skills: [
      "OAuth",
      "OIDC",
      "JWT",
      "APIM",
      "NUnit",
      "MSTest",
      "Swagger",
      "Orchestration Debugger",
      "SonarQube",
      "Veracode",
      "PGP",
    ],
  },
  {
    category: "Development Tools",
    skills: [
      "Visual Studio",
      "VS Code",
      "BizTalk Server Administrator",
      "GitHub",
      "Postman",
      "SoapUI",
      "SSMS",
    ],
  },
  {
    category: "Enterprise & Legacy",
    skills: [
      "VB6",
      "VB.NET",
      "BizTalk",
      "WCF",
      "WPF",
      "WinForms",
      "jQuery",
      "AJAX",
    ],
  },
  {
    category: "Domain",
    skills: ["Insurance", "Re-Insurance", "Title Insurance", "Banking"],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Team Lead / Lead Software Developer",
    company: "Infosys Limited",
    period: "Jan 2023 — Present",
    location: "Canada",
    points: [
      "Leading development of a cloud-native Property Search Portal (Angular, .NET 8, Azure SQL Server, bilingual, AODA compliant) enabling the client to launch a new commercial title insurance offering for law firms across Canada, with an estimated 20–30% increase in commercial closing volumes.",
      "Designed and built a virtual document-signing workflow (Angular / .NET Core) integrating the client's legacy application with a third-party e-signature and verification vendor — eliminating manual signing and cutting deal processing time from 7 days to 3 days, accelerating revenue recognition.",
      "Modernized legacy .NET WCF services into cloud-native microservices (.NET Core) on Azure Container Apps, streamlining deployment and auto-scaling across clusters; instrumented Azure Application Insights for proactive diagnostics, reducing incident detection and resolution by 60%.",
      "Leading a distributed offshore team of 7 (developers, QA and support engineers) across sprint planning, code reviews and technical mentorship to ensure consistent delivery quality (DAST, SAST, SonarQube) and adherence to architectural standards.",
      "Re-engineered Screening Web Form submission through caching and optimized SQL Server stored procedures, reducing processing time from 58 seconds to under 7 seconds.",
    ],
    stack: [
      "Angular",
      ".NET 8",
      "Azure Container Apps",
      "Azure SQL Server",
      "Application Insights",
      "Microservices",
      "WCF",
    ],
  },
  {
    role: "Technology Analyst",
    company: "Infosys Limited",
    period: "Jan 2020 — Dec 2022",
    location: "Canada",
    points: [
      "Identified a broker-onboarding bottleneck within an insurance client's lender portals, proposed and designed a dedicated Broker Portal, and presented a functional prototype and workflow analysis; acted as lead developer implementing the Angular UI and .NET Core microservices — now live and improving broker onboarding efficiency and user experience.",
      "Implemented PGP encryption for secure B2B document transfers by configuring BizTalk send ports, custom send pipelines and PGP encoder components, ensuring secure, compliant and reliable file exchange with external partners.",
      "Managed the full project lifecycle including sprint planning, team leadership and production deployments, enforcing code quality and security through SonarQube and Veracode scans.",
      "Collaborated with Product Owners to define requirements, design solutions, lead development and testing, and support UAT against business objectives.",
    ],
    stack: [
      "Angular",
      ".NET Core",
      "Microservices",
      "BizTalk",
      "PGP",
      "SonarQube",
      "Veracode",
    ],
  },
  {
    role: "Technology Analyst / Senior Software Engineer",
    company: "Infosys Limited",
    period: "Jul 2014 — Dec 2019",
    location: "India",
    points: [
      "Led the offshore development team and worked with client architects to design and document the target architecture; delivered multiple portals using .NET (WCF, WPF, Angular, Entity Framework), managed SQL Server objects and supported production through issue resolution and patch deployments.",
      "Collaborated with the integration team to upgrade BizTalk Server 2010 to BizTalk Server 2016 — resolving .NET Framework and dependency issues, remediating XSLT maps, custom functoids, pipelines and orchestrations, and executing regression testing to ensure reliable message processing and business continuity.",
      "Identified repetitive manual tasks and developed a custom automation tool using ASP.NET MVC and SQL Server stored procedures; the client approved the tool, resulting in a 30–35% increase in productivity.",
    ],
    stack: [
      ".NET",
      "WCF",
      "WPF",
      "Angular",
      "Entity Framework",
      "BizTalk Server",
      "ASP.NET MVC",
      "SQL Server",
    ],
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

export const projects: Project[] = [
  {
    title: "Property Search Portal",
    tagline: "Cloud-native commercial title insurance platform",
    description:
      "Leading development of a bilingual, AODA-compliant Property Search Portal that enabled the client to launch a new commercial title insurance offering for law firms across Canada.",
    technologies: ["Angular", ".NET 8", "Azure SQL Server", "Azure"],
    architecture:
      "Cloud-native Angular front end over .NET 8 services backed by Azure SQL Server, built bilingual and AODA compliant from the ground up.",
    challenges:
      "Meeting bilingual and accessibility (AODA) requirements while delivering a new commercial offering at national scale.",
    outcome:
      "Estimated 20–30% increase in commercial closing volumes for the client.",
  },
  {
    title: "Virtual Document Signing Workflow",
    tagline: "7 days to 3 days deal processing",
    description:
      "Designed and built a virtual document-signing workflow integrating the client's legacy application with a third-party e-signature and identity verification vendor.",
    technologies: ["Angular", ".NET Core", "REST", "OAuth 2.0"],
    architecture:
      "Angular workflow UI and .NET Core integration services bridging a legacy application with an external e-signature and verification vendor.",
    challenges:
      "Replacing an entrenched manual signing process while integrating a third-party vendor with a legacy platform.",
    outcome:
      "Eliminated manual signing and cut deal processing time from 7 days to 3 days, accelerating revenue recognition.",
  },
  {
    title: "Legacy WCF → Microservices Modernization",
    tagline: "Azure Container Apps at enterprise scale",
    description:
      "Modernized legacy .NET WCF services into cloud-native .NET Core microservices deployed on Azure Container Apps, with full observability through Application Insights.",
    technologies: [
      ".NET Core",
      "Azure Container Apps",
      "Docker",
      "Application Insights",
      "WCF",
    ],
    architecture:
      "Containerized .NET Core microservices auto-scaling across an Azure Container Apps cluster, instrumented with Azure Application Insights.",
    challenges:
      "Migrating long-lived WCF service contracts without disrupting dependent enterprise consumers.",
    outcome:
      "Streamlined deployment and auto-scaling, with 60% faster incident detection and resolution.",
  },
  {
    title: "Screening Web Form Performance Re-engineering",
    tagline: "58 seconds to under 7 seconds",
    description:
      "Re-engineered the Screening Web Form submission path through caching and targeted SQL Server stored procedure optimization.",
    technologies: ["SQL Server", "T-SQL", ".NET Core", "Caching"],
    architecture:
      "Caching layer in front of optimized SQL Server stored procedures on the submission path.",
    challenges:
      "Diagnosing and removing bottlenecks in a production submission workflow without changing business rules.",
    outcome: "Processing time reduced from 58 seconds to under 7 seconds.",
  },
  {
    title: "Broker Portal",
    tagline: "Insurance broker onboarding, reimagined",
    description:
      "Spotted a broker-onboarding bottleneck inside existing lender portals, proposed a dedicated portal, and led its delivery end to end after presenting a prototype and workflow analysis to the client.",
    technologies: ["Angular", ".NET Core", "Microservices", "SQL Server"],
    architecture:
      "Angular single-page UI backed by .NET Core microservices with secure token-based authentication.",
    challenges:
      "Replacing an entrenched manual onboarding workflow while integrating with existing lender portal systems.",
    outcome:
      "Delivered and live in production, improving broker onboarding efficiency and user experience.",
  },
  {
    title: "Secure B2B Transfers & BizTalk Upgrade",
    tagline: "PGP encryption and a 2010 → 2016 migration",
    description:
      "Implemented PGP-encrypted B2B document transfer using BizTalk send ports, custom send pipelines and PGP encoder components, and helped upgrade BizTalk Server 2010 to 2016.",
    technologies: ["BizTalk Server", "PGP", ".NET", "XSLT"],
    architecture:
      "Custom BizTalk send pipelines with PGP encoder components, plus remediated XSLT maps, functoids, pipelines and orchestrations on BizTalk 2016.",
    challenges:
      "Adding strong encryption to a legacy integration platform and resolving .NET Framework and dependency issues during the version upgrade.",
    outcome:
      "Secure, compliant partner file exchange and a migration completed with reliable message processing and business continuity.",
  },
  {
    title: "In-House Automation Tools & AI Agents",
    tagline: "30–35% productivity gain",
    description:
      "Built a custom ASP.NET MVC automation tool adopted by the client, and in-house automation tools and AI agents that eliminated manual tasks across delivery and support workflows.",
    technologies: ["ASP.NET MVC", "SQL Server", "Angular", ".NET Core", "N8N"],
    architecture:
      "ASP.NET MVC application driving SQL Server stored procedures, plus agent-driven workflow automation orchestrated with N8N behind an Angular console.",
    challenges:
      "Making bottom-up internal initiatives credible enough for client-wide adoption.",
    outcome:
      "30–35% productivity increase, with reduced operational effort and cost and improved delivery speed and client satisfaction.",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  status: "earned" | "planned";
};

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified Professional",
    issuer: "Microsoft",
    year: "",
    status: "earned",
  },
  {
    name: "GitHub Copilot Certified",
    issuer: "GitHub",
    year: "",
    status: "earned",
  },
  {
    name: "Microservices & Event Driven Architecture",
    issuer: "Training",
    year: "",
    status: "earned",
  },
  {
    name: "Azure DevOps",
    issuer: "Training",
    year: "",
    status: "earned",
  },
];

export const achievements = [
  { label: "Years Experience", value: 12, suffix: "+" },
  { label: "Faster Incident Resolution", value: 60, suffix: "%" },
  { label: "Team Productivity Gain", value: 35, suffix: "%" },
  { label: "Engineers Led", value: 7, suffix: "" },
];

/** Education, awards and recognition — sourced directly from the resume. */
export const recognition = {
  education:
    "Bachelor's Degree (First Class with Distinction), Hindustan University, India",
  awards: [
    "Insurance Hi-Flyer Award — Infosys Limited",
    "INSTA Award — Infosys Limited",
    "Multiple Appreciation Awards for quality and delivery excellence — Infosys Limited",
  ],
};

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

