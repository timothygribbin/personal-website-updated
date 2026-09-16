type Link = { label: string; href: string; external?: boolean };

export const portfolio = {
  introduction:
    "I build reliable full-stack products and backend systems, with experience shipping production software used by thousands of customers. I’m currently pursuing a B.S. in Computer Science at Northeastern University.",
  heroLinks: [
    {
      label: "GitHub",
      href: "https://github.com/timothygribbin",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/timothy-gribbin/",
      external: true,
    },
    { label: "Résumé", href: "/resume" },
    { label: "Email", href: "mailto:timothyjgribbin@gmail.com" },
  ] satisfies Link[],
  experience: [
    {
      company: "Videa",
      role: "Software Engineering Intern · Backend Integrations",
      dates: "May — August 2026",
      summary:
        "Built full-stack tools and third-party integrations supporting clinical data workflows for more than 6,500 dental practices.",
      highlights: [
        "Built a self-service Connector Console serving 6,500+ dental practices with TypeScript, Node.js, and React, exposing versions, regional distribution, platform roles, installers, and activation keys.",
        "Improved tooling used by 200+ employees with dark mode, standardized PostgreSQL location IDs, and an end-to-end notes feature spanning the frontend, REST APIs, and database persistence.",
      ],
    },
    {
      company: "Wrestling Reimagined",
      role: "Software Engineering Intern · Full Stack",
      dates: "September — December 2024",
      summary:
        "Developed and supported real-time tournament software used across more than 200 live events.",
      highlights: [
        "Built and deployed an event-driven badge recognition system with TypeScript, Node.js, and MySQL that automatically awarded achievements to 4,000+ wrestlers.",
        "Investigated and resolved production issues across real-time scoring and tournament data workflows to keep event processing reliable.",
      ],
    },
  ],
  projects: [
    {
      name: "PITSTOP",
      category: "Collaborative product",
      summary:
        "A full-stack road-trip planner for shared itineraries, expenses, voting, route-aware stop discovery, and collaborative playlists.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Express",
        "MySQL",
        "Google Maps",
        "Firebase",
      ],
      href: "https://github.com/timothygribbin/Pitstop",
    },
    {
      name: "AI UFC Judge",
      category: "Machine learning analytics",
      summary:
        "A round-scoring analytics platform that combines UFCStats, official scorecards, and machine learning to estimate who is winning an MMA round from fight statistics.",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "Vite",
        "scikit-learn",
        "Pydantic",
        "Sportradar",
      ],
      href: "",
    },
    {
      name: "HopperHelps",
      category: "1st place · HopperHacks",
      summary:
        "An AI-assisted journal and mood calendar that analyzes entries, visualizes emotional trends, and synchronizes sentiment data with user journals. Won 1st place among 230 participants.",
      technologies: ["OpenAI API", "Zustand", "Firebase Firestore"],
      href: "https://github.com/Algoltea/hopperhacksx",
    },
    {
      name: "Signature forgery detection",
      category: "Computer vision research",
      summary:
        "A custom CNN for writer-independent signature forgery detection that achieved approximately 91% classification accuracy on unseen test data. Presented at the SUNY Undergraduate Research Conference.",
      technologies: ["Python", "TensorFlow", "NumPy", "Pandas", "CNN"],
      href: "",
    },
  ],
  about: [
    "My path into software engineering was not a straight line. After high school, I worked delivering pizza without a clear idea of what I wanted to pursue. I eventually started Harvard’s CS50, committing to it for one hour every day. That small, consistent habit became the turning point that convinced me to take computer science seriously.",
    "I returned to school at Suffolk County Community College, where I became CS Club president, worked as a teaching assistant, participated in student research, and graduated with an A.S. in Computer Science in 2025. From there, I transferred to Northeastern University to continue toward a B.S. in Computer Science, expected in June 2027.",
    "Along the way, I moved from learning fundamentals to building software in production through full-stack and backend-focused internships. I’m now looking for software engineering opportunities where I can keep that momentum going by working on dependable systems, useful products, and problems that reward curiosity and persistence.",
  ],
  skills: [
    {
      label: "Languages",
      items: ["Java", "Python", "TypeScript", "JavaScript", "C"],
    },
    {
      label: "Application",
      items: ["Node.js", "Next.js", "React", "Express", "Tailwind CSS"],
    },
    {
      label: "Data & infrastructure",
      items: ["PostgreSQL", "MySQL", "Redis", "AWS", "Terraform", "Docker"],
    },
  ],
  resumeHref: "/Timothy-Gribbin-Resume.pdf",
  footerLinks: [
    { label: "Email", href: "mailto:timothyjgribbin@gmail.com" },
    {
      label: "GitHub",
      href: "https://github.com/timothygribbin",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/timothy-gribbin/",
      external: true,
    },
  ] satisfies Link[],
};
