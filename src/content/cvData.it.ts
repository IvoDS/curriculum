import { CVData } from './types';

export const cvDataIt: CVData = {
  contact: {
    name: "Ivan De Stefani",
    role: "Embedded Software Developer",
    email: "ivandestefani@outlook.com",
    phone: "+39 334 11 88 440",
    location: "Torino, Italia",
    linkedin: "https://www.linkedin.com/in/ivan-de-stefani-8a81a1ba/",
    github: "github.com/ivandestefani"
  },
  experiences: [
    {
      company: "Lanzi Group S.r.l.",
      role: "Software Developer",
      period: "Ottobre 2023 - Presente",
      description: [
        "Sviluppo di firmware scalabili per microcontrollori ad architettura 8 e 32 bit (Microchip e STMicroelectronics).",
        "Gestione di un team di 5 sviluppatori.",
        "Ottimizzazione delle performance delle applicazioni web."
      ],
      technologies: ["React", "Node.js", "Docker", "Firmware", "Laravel", ]
    },
    {
      company: "Web Agency Creative",
      role: "Full Stack Developer",
      period: "2018 - 2020",
      description: [
        "Creazione di siti web e-commerce personalizzati.",
        "Integrazione di sistemi di pagamento di terze parti.",
        "Collaborazione con il team di design per UI/UX."
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
    "Comunicazione Efficace",
    "Adattabilità"
  ]
};
