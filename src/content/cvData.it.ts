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
                "Sviluppo di soluzioni server per la gestione della distribuzione automatizzata dei DPI.",
                "Sviluppo di soluzioni software su SoC per distributori e magazzini automatizzati."
            ],
            technologies: ["React", "Node.js", "Docker", "Firmware", "Laravel", "Vue", "MySQL", "SQLite", "Git"]
        },
        {
            company: "Col Giovanni Paolo S.p.A.",
            role: "Firmware Developer",
            period: "Luglio 2022 - Ottobre 2023",
            description: [
                "Sviluppo di firmware per microcontrollori STMicroelectronics ARM Cortex M3.",
                "Sviluppo di sistemi di calibrazione in linguaggio C#.",
                "Integrazione con sistemi già esistenti di monitoraggio dell'energia elettrica."
            ],
            technologies: ["Firmware (C)", "C#", "Redis", "SVN"]
        },
        {
            company: "Lanzi Group S.r.l.",
            role: "Impiegato Ricerca e Sviluppo",
            period: "Settembre 2017 - Giugno 2022",
            description: [
                "Sviluppo di firmware per microcontrollori Atmel con architettura AVR.",
                "Sviluppo di sistemi di debug in linguaggio C#.",
                "Assistenza a clienti finali italiani ed esteri.",
                "Disegno meccanico con software CAD Rhinoceros 5"
            ],
            technologies: ["Firmware (C)", "C#", "Redis", "SVN"]
        }
    ],
    workSkills: [
        { name: "TypeScript", level: 5, category: "Frontend" },
        { name: "React", level: 2, category: "Frontend" },
        { name: "Node.js", level: 5, category: "Backend" },
        { name: "SQL", level: 4, category: "Backend" },
        { name: "Docker", level: 3, category: "DevOps" },
        { name: "Firmware", level: 5, category: "Embedded" },

    ],
    softSkills: [
        "Problem Solving",
        "Lavoro in team",
        "Comunicazione Efficace",
        "Adattabilità"
    ]
};
