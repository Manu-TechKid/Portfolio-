export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: 'Full-Stack' | 'Frontend' | 'Backend & APIs' | 'Enterprise / Systems';
  accentColor: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  iconName: string;
  skills: string[];
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  points: string[];
  type: 'work' | 'education';
}

export interface StatItem {
  value: string;
  label: string;
  detail?: string;
}

export const PERSONAL_INFO = {
  name: "Emmanuel Kiprotich",
  initials: "EK",
  role: "Front-end and Back-end Developer",
  location: "Kenya",
  email: "techkid250@gmail.com",
  github: "https://github.com/Manu-TechKid",
  linkedin: "https://www.linkedin.com/in/emmanuel-kiprotich-16b516378/",
  cvPath: "/Emmanuel_Kiprotich_CV.pdf",
  bio: "I'm an Information Technology professional based in Kenya. I build responsive web applications, robust backend services, and business systems with a strong focus on usability, clean architecture, and practical solutions.",
  about: [
    "I am an Information Technology graduate with hands-on experience in backend and full-stack software development, web applications, system analysis, databases, software testing, and technical troubleshooting.",
    "My projects range from modular NestJS/TypeScript backend APIs and full-stack management platforms to agricultural tracking systems and C# MVC security architectures. I enjoy turning complex business requirements into intuitive interfaces and reliable backend workflows.",
    "I'm particularly passionate about backend engineering with NestJS & Node.js, modern front-end applications with React & TypeScript, RESTful API design, and continuously advancing my software craftsmanship."
  ],
  status: "Available for opportunities",
  focusAreas: ["NestJS & Node.js", "TypeScript", "React", "RESTful APIs", "MongoDB & SQL"]
};

export const STATS: StatItem[] = [
  { value: "18+", label: "GitHub Repositories", detail: "Active open-source work" },
  { value: "7+", label: "Featured Projects", detail: "End-to-end built applications" },
  { value: "2025", label: "Industry Attachment", detail: "Amtech Technologies Ltd" },
  { value: "2026", label: "BSc IT (Maseno University)", detail: "Coursework Completed" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    number: "01",
    title: "Backend & APIs",
    iconName: "Server",
    skills: ["TypeScript", "NestJS", "Node.js", "Express.js", "RESTful APIs", "C# ASP.NET MVC", "Authentication / JWT", "Mongoose", "Jest"],
    description: "Architecting modular, type-safe backend microservices, robust RESTful APIs, data validation, and automated testing."
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend Development",
    iconName: "Layout",
    skills: ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Vite", "Material UI", "Responsive Design"],
    description: "Creating accessible, responsive, and performance-oriented web interfaces with modular component architecture."
  },
  {
    id: "database",
    number: "03",
    title: "Databases & Storage",
    iconName: "Database",
    skills: ["MongoDB", "Mongoose", "MySQL", "Microsoft SQL Server", "SQLite", "Firebase", "Schema Design", "Query Optimization"],
    description: "Designing structured relational schemas and document stores with indexing, validation, and data integrity protections."
  },
  {
    id: "tools",
    number: "04",
    title: "Engineering Tools & DevOps",
    iconName: "Wrench",
    skills: ["Git & GitHub", "Postman", "MongoDB Compass", "Visual Studio Code", "Visual Studio", "Android Studio", "Draw.io", "Vercel / Netlify"],
    description: "Version control, API testing, database inspection, automated workflow deployment, and system architecture diagramming."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "pettrack",
    number: "01 / FEATURED",
    title: "PetTrack – Pet Health Management System",
    description: "A production-ready modular backend REST API system built with NestJS, TypeScript, and MongoDB (Mongoose) designed for pet owners, veterinarians, and clinics to identify common pet illnesses, track symptoms, manage medical treatments, and schedule vaccinations.",
    highlights: [
      "Modular NestJS architecture utilizing dependency injection, custom service modules, and DTOs with class-validator",
      "Dynamic multi-role access control (Pet Owner, Veterinarian, Admin) with granular endpoint permissions",
      "Robust state machine engine managing the complete health case lifecycle (REPORTED → UNDER_EXAMINATION → IN_TREATMENT → RECOVERED → CLOSED)",
      "Automated unit & integration test suites written in Jest; verified across Postman and MongoDB Compass"
    ],
    tags: ["NestJS", "TypeScript", "MongoDB", "Mongoose", "Node.js", "Jest", "RESTful APIs", "class-validator"],
    githubUrl: "https://github.com/Manu-TechKid/PetTrack-Pet-Health-Management-System",
    featured: true,
    category: "Backend & APIs",
    accentColor: "from-emerald-950/70 via-teal-900/60 to-slate-950/80"
  },
  {
    id: "smart-farm",
    number: "02 / FEATURED",
    title: "Smart Farm Management System",
    description: "An end-to-end smart agriculture and livestock management platform integrating a modern React frontend with a high-performance C# (.NET) Web API backend and Microsoft SQL Server for automated agricultural monitoring, livestock tracking, and farm operations management.",
    highlights: [
      "Modern React responsive dashboard interface with real-time operational metrics and farm telemetry",
      "Robust .NET Web API backend architecture handling business logic, authentication, and structured data flow",
      "Livestock, crop tracking, and farm inventory management modules with automated alerts",
      "Secure user authentication, role management, and live cloud deployment"
    ],
    tags: ["React", ".NET", "C#", "REST API", "Tailwind CSS", "TypeScript", "SQL Server"],
    liveUrl: "https://bett-smartfarm.duckdns.org/login",
    githubUrl: "https://github.com/Manu-TechKid/SMART-FARM-MANAGEMENT-SYSTEM",
    featured: true,
    category: "Full-Stack",
    accentColor: "from-teal-950/60 to-emerald-950/80"
  },
  {
    id: "construction-tracker",
    number: "03",
    title: "Construction Tracker",
    description: "A comprehensive full-stack construction management platform for organizing buildings, site workers, work orders, timelines, and operational activities.",
    highlights: [
      "Modern React-based user interface with rich state management",
      "RESTful API & Express backend for live resource tracking",
      "Secure user authentication and role-protected application areas",
      "MongoDB data persistence with optimized indexing"
    ],
    tags: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://admin.servicesdsj.com/",
    githubUrl: "https://github.com/Manu-TechKid/-construction-tracker",
    category: "Full-Stack",
    accentColor: "from-emerald-900/60 to-teal-950/80"
  },
  {
    id: "smart-season",
    number: "04",
    title: "SmartSeason Field Monitoring System",
    description: "A precision field-monitoring application built around data-rich dashboards, field operations logging, and structured reporting workflows.",
    highlights: [
      "TypeScript React frontend with strict type validation",
      "Responsive metric dashboard interface and live sensor stats",
      "Seamless API integration and asynchronous telemetry queries",
      "Interactive data visualizations and actionable insights"
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/Manu-TechKid/SmartSeason-Field-Monitoring-System",
    category: "Frontend",
    accentColor: "from-green-950/60 to-emerald-950/80"
  },
  {
    id: "medibanco-pro",
    number: "05",
    title: "MEDIBANCO PRO",
    description: "A dedicated digital workspace concept designed for organizing medical imaging cases, scans, diagnostic notes, and references in a structured modern interface.",
    highlights: [
      "TypeScript-based front-end architecture with reusable UI components",
      "Image-focused user workflows with zoom & inspection capabilities",
      "Firebase-backed cloud storage and real-time database sync",
      "Responsive, HIPAA-mindful UI layout and dark mode styling"
    ],
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Vite"],
    liveUrl: "https://medibanco-pro.web.app/",
    category: "Frontend",
    accentColor: "from-cyan-950/60 to-slate-950/80"
  },
  {
    id: "threat-detection",
    number: "06",
    title: "Web-Based Threat Detection & Monitoring System",
    description: "A C# ASP.NET MVC web application concept focused on monitoring network security events, presenting threat intelligence, and supporting structured incident analysis.",
    highlights: [
      "MVC-based enterprise web application architecture",
      "Security event monitoring workflow and alert status pipelines",
      "Database-driven system design utilizing Microsoft SQL Server",
      "Web dashboard approach for rapid incident triage"
    ],
    tags: ["C#", "ASP.NET MVC", "SQL Server", "Bootstrap", "Security"],
    githubUrl: "https://github.com/Manu-TechKid/Web-Based-Threat-Detection-Monitoring-System",
    category: "Enterprise / Systems",
    accentColor: "from-rose-950/50 to-slate-950/80"
  },
  {
    id: "hardware-inventory",
    number: "07",
    title: "Hardware Inventory Management System",
    description: "A full-stack inventory, sales, and operations management platform designed for hardware suppliers to track stock levels, monitor category budgets, manage staff, and streamline sales workflows.",
    highlights: [
      "Inventory tracking with automatic low-stock alerts, SKU management, and supplier categorization",
      "Sales transaction tracking pipeline with instant inventory deductions and staff performance analytics",
      "Role-based access control (Admin & Staff) secured with JWT authentication and bcrypt password hashing",
      "Budget management module monitoring monthly department spending against defined limits"
    ],
    tags: ["Node.js", "Express", "SQLite", "JavaScript", "JWT", "Bootstrap", "REST API"],
    githubUrl: "https://github.com/Manu-TechKid/hardware-inventory-system",
    category: "Full-Stack",
    accentColor: "from-amber-950/50 to-slate-950/80"
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: "MAY 2025 — AUG 2025",
    role: "IT Attachee",
    organization: "Amtech Technologies Limited",
    location: "Nairobi, Kenya",
    type: "work",
    points: [
      "Developed, tested, and deployed SACCO and financial industry software solutions.",
      "Designed, maintained, and optimized database schemas with data integrity protections.",
      "Conducted system analysis, requirement engineering, and created web frontend interfaces.",
      "Performed network troubleshooting, system maintenance, and user training sessions.",
      "Assisted in IT security reviews and backup resilience testing."
    ]
  },
  {
    period: "2022 — 2026",
    role: "BSc in Information Technology",
    organization: "Maseno University",
    location: "Kenya · Expected Graduation 2026",
    type: "education",
    points: [
      "Rigorous coursework in Software Engineering, Data Structures & Algorithms, and Web Development.",
      "Deep practical training in Relational Database Management Systems (RDBMS) & System Analysis.",
      "Collaborated on practical academic software engineering team projects and technical research."
    ]
  }
];
