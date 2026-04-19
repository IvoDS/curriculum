import { CVData } from './types';

export const cvDataFr: CVData = {
    contact: {
        name: "Ivan De Stefani",
        role: "Embedded Software Developer",
        email: "ivandestefani@outlook.com",
        phone: "+39 334 11 88 440",
        location: "Turin, Italie",
        linkedin: "https://www.linkedin.com/in/ivan-de-stefani-8a81a1ba/",
        github: "github.com/ivandestefani"
    },
    experiences: [
        {
            company: "Lanzi Group S.r.l.",
            role: "Software Developer",
            period: "Octobre 2023 - Présent",
            description: [
                "Développement de firmware évolutif pour microcontrôleurs à architecture 8 et 32 bits (Microchip et STMicroelectronics).",
                "Développement de solutions serveur pour la gestion de la distribution automatisée des EPI.",
                "Développement de solutions logicielles sur SoC pour les distributeurs et entrepôts automatisés."
            ],
            technologies: ["React", "Node.js", "Docker", "Firmware", "Laravel", "Vue", "MySQL", "SQLite", "Git"]
        },
        {
            company: "Col Giovanni Paolo S.p.A.",
            role: "Firmware Developer",
            period: "Juillet 2022 - Octobre 2023",
            description: [
                "Développement de firmware pour microcontrôleurs STMicroelectronics ARM Cortex M3.",
                "Développement de systèmes d'étalonnage en langage C#.",
                "Intégration aux systèmes de surveillance de l'énergie électrique existants."
            ],
            technologies: ["Firmware (C)", "C#", "Redis", "SVN"]
        },
        {
            company: "Lanzi Group S.r.l.",
            role: "Employé R&D",
            period: "Septembre 2017 - Juin 2022",
            description: [
                "Développement de firmware pour microcontrôleurs Atmel avec architecture AVR.",
                "Développement de systèmes de débogage en langage C#.",
                "Assistance technique aux clients finaux nationaux et étrangers.",
                "Conception mécanique avec le logiciel CAO Rhinoceros 5."
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
        "Résolution de problèmes",
        "Travail d'équipe",
        "Communication efficace",
        "Adaptabilité"
    ]
};
