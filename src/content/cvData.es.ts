import { CVData } from './types';

export const cvDataEs: CVData = {
    contact: {
        name: "Ivan De Stefani",
        role: "Embedded Software Developer",
        email: "ivandestefani@outlook.com",
        phone: "+39 334 11 88 440",
        location: "Turín, Italia",
        linkedin: "https://www.linkedin.com/in/ivan-de-stefani-8a81a1ba/",
        github: "github.com/ivandestefani"
    },
    experiences: [
        {
            company: "Lanzi Group S.r.l.",
            role: "Software Developer",
            period: "Octubre 2023 - Presente",
            description: [
                "Desarrollo de firmware escalable para microcontroladores con arquitectura de 8 y 32 bits (Microchip y STMicroelectronics).",
                "Desarrollo de soluciones de servidor para la gestión de la distribución automatizada de EPI.",
                "Desarrollo de soluciones de software en SoC para distribuidores y almacenes automatizados."
            ],
            technologies: ["React", "Node.js", "Docker", "Firmware", "Laravel", "Vue", "MySQL", "SQLite", "Git"]
        },
        {
            company: "Col Giovanni Paolo S.p.A.",
            role: "Firmware Developer",
            period: "Julio 2022 - Octubre 2023",
            description: [
                "Desarrollo de firmware para microcontroladores STMicroelectronics ARM Cortex M3.",
                "Desarrollo de sistemas de calibración en lenguaje C#.",
                "Integración con sistemas existentes de monitorización de energía eléctrica."
            ],
            technologies: ["Firmware (C)", "C#", "Redis", "SVN"]
        },
        {
            company: "Lanzi Group S.r.l.",
            role: "Empleado en I+D",
            period: "Septiembre 2017 - Junio 2022",
            description: [
                "Desarrollo de firmware para microcontroladores Atmel con arquitectura AVR.",
                "Desarrollo de sistemas de depuración en lenguaje C#.",
                "Asistencia técnica a clientes finales nacionales y extranjeros.",
                "Diseño mecánico con software CAD Rhinoceros 5."
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
        "Resolución de problemas",
        "Trabajo en equipo",
        "Comunicación efectiva",
        "Adaptabilidad"
    ]
};
