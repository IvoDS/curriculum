import { cvDataIt } from './cvData.it';
import { cvDataEn } from './cvData.en';
import { cvDataEs } from './cvData.es';
import { cvDataFr } from './cvData.fr';
import { CVData, PortfolioItem } from './types';

const getPortfolioItems = (lang: string): PortfolioItem[] => {
  const titles: Record<string, string> = {
    it: 'Curriculum Vitae',
    en: 'Curriculum Vitae',
    es: 'Curriculum Vitae',
    fr: 'Curriculum Vitae'
  };

  const descriptions: Record<string, string> = {
    it: 'Questo progetto è sviluppato in React con Vite e TypeScript.',
    en: 'This project is developed in React with Vite and TypeScript.',
    es: 'Este proyecto está desarrollado en React con Vite y TypeScript.',
    fr: 'Ce projet est développé en React avec Vite et TypeScript.'
  };

  return [
    {
      id: 'curriculum-react',
      title: titles[lang] || titles['it'],
      description: descriptions[lang] || descriptions['it'],
      logo: '/assets/logo.png',
      link: 'https://github.com/ivandestefani/curriculum',
      tags: ['React', 'TypeScript', 'Vite', 'CSS Modules']
    }
  ];
};

export const getCVData = (lang: string): CVData => {
  switch (lang) {
    case 'en':
      return cvDataEn;
    case 'es':
      return cvDataEs;
    case 'fr':
      return cvDataFr;
    case 'it':
    default:
      return cvDataIt;
  }
};

export const getPortfolio = (lang: string): PortfolioItem[] => {
  return getPortfolioItems(lang);
};

export * from './types';
