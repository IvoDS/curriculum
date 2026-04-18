import { CVData } from './types';

export const cvDataEn: CVData = {
    contact: {
        name: "Ivan De Stefani",
        role: "Embedded Software Developer",
        email: "ivandestefani@outlook.com",
        phone: "+39 334 11 88 440",
        location: "Turin, Italy",
        linkedin: "https://www.linkedin.com/in/ivan-de-stefani-8a81a1ba/",
        github: "github.com/ivandestefani"
    },
    experiences: [
        {
            company: "Lanzi Group S.r.l.",
            role: "Software Developer",
            period: "October 2023 - Present",
            description: [
                "Development of scalable firmware for 8 and 32-bit architecture microcontrollers (Microchip and STMicroelectronics).",
                "Development of server solutions for PPE automated distribution management.",
                "Development of software solutions on SoC for vending machines and automated warehouses."
            ],
            technologies: ["React", "Node.js", "Docker", "Firmware", "Laravel", "Vue", "MySQL", "SQLite", "Git"]
        },
        {
            company: "Col Giovanni Paolo S.p.A.",
            role: "Firmware Developer",
            period: "July 2022 - October 2023",
            description: [
                "Development of firmware for STMicroelectronics ARM Cortex M3 microcontrollers.",
                "Development of calibration systems using C# language.",
                "Integration with existing electrical energy monitoring systems."
            ],
            technologies: ["Firmware (C)", "C#", "Redis", "SVN"]
        },
        {
            company: "Lanzi Group S.r.l.",
            role: "R&D Specialist",
            period: "September 2017 - June 2022",
            description: [
                "Development of firmware for Atmel microcontrollers with AVR architecture.",
                "Development of debug systems using C# language.",
                "Technical support for domestic and international end customers.",
                "Mechanical design with Rhinoceros 5 CAD software."
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
        "Teamwork",
        "Effective Communication",
        "Adaptability"
    ]
};
