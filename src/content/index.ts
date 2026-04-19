import { cvDataIt } from './cvData.it';
import { cvDataEn } from './cvData.en';
import { cvDataEs } from './cvData.es';
import { cvDataFr } from './cvData.fr';
import { CVData, PortfolioItem } from './types';
import { project1 } from './portfolio/project-1';
import { project2 } from './portfolio/project-2';
import { project3 } from './portfolio/project-3';

const getPortfolioItems = (_lang: string): PortfolioItem[] => {
  return [
    project1,
    project2,
    project3
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
