export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-5 or just a description
  category?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  logo: string;
  link: string;
  tags: string[];
}

export interface CVData {
  contact: ContactInfo;
  experiences: Experience[];
  workSkills: Skill[];
  softSkills: string[];
}
