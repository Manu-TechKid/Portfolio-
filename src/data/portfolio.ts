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
  category: 'Full-Stack' | 'Frontend' | 'Enterprise / Systems';
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
  role: "Junior Front-end Developer",
  location: "Kenya",
  email: "techkid250@gmail.com",
  github: "https://github.com/Manu-TechKid",
  linkedin: "https://www.linkedin.com/in/emmanuel-kiprotich-16b516378/",
  cvPath: "/Emmanuel_Kiprotich_CV.pdf",
  bio: "I'm an Information Technology professional based in Kenya. I build responsive web applications and business systems with a strong focus on usability, clean interfaces, and practical solutions.",
  about: [
    "I am an Information Technology student with hands-on experience in software development, web development, system analysis, databases, software testing, and technical troubleshooting.",
    "My projects range from full-stack management platforms and monitoring dashboards to medical-image organization and C# MVC security systems. I enjoy turning complex requirements into intuitive interfaces and reliable application workflows.",
    "I'm particularly passionate about front-end engineering, modern web applications, API design, and continuously pushing my software craftsmanship forward."
  ],
  status: "Available for opportunities",
  focusAreas: ["Web Apps", "Responsive UI", "REST APIs", "Modern Tooling"]
};

export const STATS: StatItem[] = [
  { value: "18+", label: "GitHub Repositories", detail: "Active open-source work" },
  { value: "4+", label: "Featured Projects", detail: "End-to-end built applications" },
  { value: "2025", label: "Industry Attachment", detail: "Amtech Technologies Ltd" },
  { value: "2026", label: "BSc IT Graduation", detail: "Maseno University" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Development",
    iconName: "Layout",
    skills: ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Vite", "Material UI", "Responsive Design"],
    description: "Creating accessible, responsive, and performance-oriented web interfaces with modular architecture."
  },
  {
    id: "backend",
    number: "02",
    title: "Backend & APIs",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "C# ASP.NET MVC", "PHP", "RESTful APIs", "Authentication / JWT", "CRUD Workflows"],
    description: "Building scalable server logic, secure backend endpoints, and seamless API data flow."
  },
  {
    id: "database",
    number: "03",
    title: "Databases & Storage",
    iconName: "Database",
    skills: ["MongoDB", "MySQL", "SQL Server", "SQLite", "Firebase", "Schema Design", "Query Optimization"],
    description: "Designing structured relational databases and modern NoSQL persistent document stores."
  },
  {
    id: "tools",
    number: "04",
    title: "Engineering Tools",
    iconName: "Wrench",
    skills: ["Git & GitHub", "Visual Studio Code", "Visual Studio", "Android Studio", "Postman", "Draw.io", "Vercel / Netlify"],
    description: "Version control, automated workflow deployment, debugging, and system architecture diagramming."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "construction-tracker",
    number: "01 / FEATURED",
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
    featured: true,
    category: "Full-Stack",
    accentColor: "from-emerald-900/60 to-teal-950/80"
  },
  {
    id: "smart-season",
    number: "02",
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
    number: "03",
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
    number: "04",
    title: "Web-Based Threat Detection & Monitoring System",
    description: "A C# ASP.NET MVC web application concept focused on monitoring network security events, presenting threat intelligence, and supporting structured incident analysis.",
    highlights: [
      "MVC-based enterprise web application architecture",
      "Security event monitoring workflow and alert status pipelines",
      "Database-driven system design utilizing Microsoft SQL Server",
      "Web dashboard approach for rapid incident triage"
    ],
    tags: ["C#", "ASP.NET MVC", "SQL Server", "Bootstrap", "Security"],
    githubUrl: "https://github.com/Manu-TechKid",
    category: "Enterprise / Systems",
    accentColor: "from-rose-950/50 to-slate-950/80"
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
