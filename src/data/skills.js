export const skillGroups = [
  {
    number: "01",
    category: "FRONTEND",
    description: "Core specialization in creating fast, scalable, and intuitive client-side applications.",
    isPrimary: true,
    skills: [
      { name: "React.js", highlighted: true, tag: "Primary" },
      { name: "JavaScript", highlighted: true },
      { name: "HTML", highlighted: false },
      { name: "CSS", highlighted: false },
      { name: "Responsive Design", highlighted: true }
    ]
  },
  {
    number: "02",
    category: "BACKEND",
    description: "Server-side foundations for application logic and APIs.",
    isPrimary: false,
    skills: [
      { name: "Node.js", highlighted: true },
      { name: "PHP", highlighted: false },
      { name: "C# / .NET", highlighted: false }
    ]
  },
  {
    number: "03",
    category: "DATABASE",
    description: "Relational data structuring and query management.",
    isPrimary: false,
    skills: [
      { name: "SQL", highlighted: true },
      { name: "MySQL", highlighted: true },
      { name: "Database Management", highlighted: false }
    ]
  },
  {
    number: "04",
    category: "DEVELOPMENT TOOLS",
    description: "Modern build tooling, styling frameworks, and version control.",
    isPrimary: false,
    skills: [
      { name: "Vite", highlighted: true },
      { name: "Tailwind CSS", highlighted: true },
      { name: "XAMPP", highlighted: false },
      { name: "PHPMyAdmin", highlighted: false },
      { name: "GitHub", highlighted: true }
    ]
  },
  {
    number: "05",
    category: "UI/UX",
    description: "User research, wireframing, and component prototyping for polished usability.",
    isPrimary: false,
    isSecondaryStrength: true,
    skills: [
      { name: "Figma", highlighted: true, tag: "Design" },
      { name: "Wireframing", highlighted: false },
      { name: "Prototyping", highlighted: false },
      { name: "UX Research", highlighted: false },
      { name: "Mobile App UI", highlighted: true },
      { name: "Branding", highlighted: false }
    ]
  },
  {
    number: "06",
    category: "CREATIVE TOOLS",
    description: "Visual design assets, illustration, and generative AI workflow utilities.",
    isPrimary: false,
    skills: [
      { name: "Canva", highlighted: false },
      { name: "Adobe Photoshop", highlighted: true },
      { name: "Adobe Illustrator", highlighted: false },
      { name: "AI Tools", highlighted: true }
    ]
  }
];
