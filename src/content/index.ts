import { cvDataIt } from './cvData.it';
import { cvDataEn } from './cvData.en';
import { CVData, PortfolioItem } from './types';
import { project1 } from './portfolio/project-1';

const portfolio: PortfolioItem[] = [
  project1
];

export const getCVData = (lang: string): CVData => {
  switch (lang) {
    case 'en':
      return cvDataEn;
    case 'it':
    default:
      return cvDataIt;
  }
};

export const getPortfolio = (): PortfolioItem[] => {
  return portfolio;
};

export * from './types';
