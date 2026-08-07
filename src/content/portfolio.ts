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
      "Entity Framework Core",
      "MVC",
      "Microservices",
      "REST",
      "CQRS",
    ],
  },
  {
    category: "Cloud, DevOps & CI/CD",
    skills: [
      "Microsoft Azure",
      "Azure Container Apps",
      "Containers",
      "Blob Storage",
      "Key Vault",
      "Application Insights",
      "GitHub Actions",
      "GitLab CI",
      "Team Foundation Server",
    ],
  },
  {
    category: "Database",
    skills: ["SQL Server", "T-SQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Testing, Security & Code Quality",
    skills: [
      "Unit Testing",
      "NUnit",
      "MSTest",
      "Swagger",
      "SonarQube",
      "Veracode",
      "StackHawk",
      "Snyk",
      "PGP",
      "SAST / DAST",
    ],
  },
  {
    category: "Development Tools",
    skills: [
      "Visual Studio",
      "VS Code",
      "GitHub",
      "Postman",
      "SoapUI",
      "Mockoon",
      "SSMS",
      "Fiddler",
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
      "Defined the technical roadmap for scalable, enterprise-grade applications integrated with Azure services and analytics, built on an Angular front end and .NET Core backend using REST, WCF, and microservices APIs.",
      "Adopted Azure Container Apps to streamline deployment of existing services and scale microservices across the cluster, improving deployment flexibility and reliability.",
      "Led strategic initiatives to modernize legacy APIs by migrating them to cloud-native microservices, significantly enhancing system reliability and reducing operational costs.",
      "Instrumented systems with Azure Application Insights for sharper diagnostics and more reliable monitoring across services.",
      "Drove development tool enhancements that improved API performance tuning by 30%, and influenced leadership to adopt AI-driven alert management — reducing alert fatigue and accelerating incident response.",
      "Led a globally distributed offshore team of 7 (developers, QA, support), owning sprint planning, code reviews, and technical mentorship with quality gates via SAST, DAST, and SonarQube.",
      "Coordinated cross-functional collaboration between onshore stakeholders and the offshore delivery team, aligning priorities, timelines, and technical decisions across time zones.",
      "Delivered multiple web portals and partner integrations, advising on performance optimization, cost efficiency, and serverless best practices for cost-effective scale.",
    ],
    stack: [
      "Angular",
      ".NET Core",
      "Azure Container Apps",
      "Application Insights",
      "Microservices",
      "SQL Server",
      "WCF",
    ],
  },
  {
    role: "Technology Analyst",
    company: "Infosys Limited",
    period: "Jan 2020 — Dec 2022",
    location: "Canada",
    points: [
      "Identified a broker-onboarding bottleneck in an insurance client's lender portals, designed a dedicated Broker Portal, and presented a working prototype and workflow analysis to stakeholders.",
      "Acted as lead developer for that Broker Portal — Angular UI with .NET Core microservices — now live and improving broker onboarding efficiency and user experience.",
      "Single-handedly built and delivered automated file transfer with PGP encryption, integrating it into the existing BizTalk application.",
      "Managed the full project lifecycle including sprint planning, team leadership, and production deployments.",
      "Enforced code quality and security through SonarQube and Veracode scans across releases.",
      "Partnered with Product Owners to define requirements, design solutions, lead development and testing, and support UAT against business objectives.",
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
      "Led the offshore development team and partnered with client architects to design and document the target architecture.",
      "Delivered multiple portals using .NET (WCF, WPF, Angular, Entity Framework) and managed SQL Server database objects.",
      "Built a custom automation tool with ASP.NET MVC and SQL Server stored procedures to eliminate repetitive manual tasks; the client approved and adopted it, increasing team productivity by 30–35%.",
      "Supported production through issue resolution and patch deployments.",
    ],
    stack: [
      ".NET",
      "WCF",
      "WPF",
      "Angular",
      "Entity Framework",
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
    title: "Legacy API Modernization",
    tagline: "Monolithic APIs → cloud-native microservices",
    description:
      "Led strategic initiatives to migrate legacy enterprise APIs to cloud-native microservices as part of an Azure transformation programme.",
    technologies: [".NET Core", "Azure", "Microservices", "REST", "WCF"],
    architecture:
      "Microservices exposed over REST, deployed as containers and scaled across an Azure Container Apps cluster.",
    challenges:
      "Migrating long-lived WCF and legacy service contracts without disrupting dependent enterprise consumers.",
    outcome:
      "Significantly improved system reliability and reduced operational costs.",
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
    title: "Enterprise Web Portals & Partner Integrations",
    tagline: "Plug-in integrations for partner products",
    description:
      "Designed and developed several web portals and integrations that plug seamlessly into partner company products to support broader business offerings.",
    technologies: [
      "Angular",
      ".NET Core",
      "SQL Server",
      "Azure Container Apps",
    ],
    architecture:
      "Containerized services on Azure Container Apps with serverless-friendly patterns and analytics integration.",
    challenges:
      "Balancing performance, cost efficiency, and scalability across integrations owned by multiple partners.",
    outcome:
      "Scalable, cost-effective deployments with greater flexibility and reliability.",
  },
  {
    title: "Automated File Transfer & PGP Encryption",
    tagline: "Secure automation inside BizTalk",
    description:
      "Single-handedly created and delivered an automated, PGP-encrypted file transfer capability integrated with an existing BizTalk application.",
    technologies: ["BizTalk", "PGP", ".NET", "SQL Server"],
    architecture:
      "Scheduled, encrypted transfer pipeline plugged into existing BizTalk orchestrations.",
    challenges:
      "Adding strong encryption and automation to a legacy integration platform already running in production.",
    outcome:
      "Manual, error-prone file handoffs replaced by a secure automated process.",
  },
  {
    title: "Productivity Automation Tool",
    tagline: "30–35% team productivity gain",
    description:
      "Identified repetitive manual tasks in offshore delivery and built a custom automation tool, then pitched it to the client, who approved and adopted it.",
    technologies: ["ASP.NET MVC", "SQL Server", "T-SQL"],
    architecture:
      "ASP.NET MVC application driving SQL Server stored procedures to automate recurring workflows.",
    challenges:
      "Making a bottom-up internal initiative credible enough for client-wide adoption.",
    outcome: "Increased team productivity by 30–35% after adoption.",
  },
  {
    title: "In-House Automation Tools & AI Agents",
    tagline: "AI-assisted operational efficiency",
    description:
      "Built in-house automation tools and AI agents that eliminated manual tasks across delivery and support workflows.",
    technologies: ["Angular", ".NET Core", "N8N"],
    architecture:
      "Agent-driven workflow automation orchestrated with N8N and custom .NET Core services behind an Angular console.",
    challenges:
      "Embedding AI-driven automation into established enterprise processes and gaining stakeholder trust.",
    outcome:
      "Reduced operational effort and cost while improving delivery speed and client satisfaction.",
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
  { label: "API Performance Tuning Gain", value: 30, suffix: "%" },
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
