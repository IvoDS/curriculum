import { CVData } from './types';

export const cvDataEn: CVData = {
  contact: {
    name: "Ivan De Stefani",
    role: "Senior Software Engineer",
    email: "ivan@example.com",
    phone: "+39 123 456 7890",
    location: "Milan, Italy",
    linkedin: "linkedin.com/in/ivandestefani",
    github: "github.com/ivandestefani"
  },
  experiences: [
    {
      company: "Tech Solutions S.p.A.",
      role: "Lead Developer",
      period: "2020 - Present",
      description: [
        "Development of scalable microservices architectures.",
        "Management of a team of 5 developers.",
        "Performance optimization of web applications."
      ],
      technologies: ["React", "Node.js", "Docker", "AWS"]
    },
    {
      company: "Web Agency Creative",
      role: "Full Stack Developer",
      period: "2018 - 2020",
      description: [
        "Creation of custom e-commerce websites.",
        "Integration of third-party payment systems.",
        "Collaboration with the design team for UI/UX."
      ],
      technologies: ["Vue.js", "PHP", "MySQL"]
    }
  ],
  workSkills: [
    { name: "TypeScript", level: 5, category: "Frontend" },
    { name: "React", level: 5, category: "Frontend" },
    { name: "Node.js", level: 4, category: "Backend" },
    { name: "SQL", level: 4, category: "Backend" },
    { name: "Docker", level: 3, category: "DevOps" }
  ],
  softSkills: [
    "Problem Solving",
    "Team Leadership",
    "Effective Communication",
    "Adaptability"
  ]
};
