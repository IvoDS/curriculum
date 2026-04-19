import { PortfolioItem } from '../../types';
import logo from './logo.png';

export const project2: PortfolioItem = {
  id: 'project-2',
  title: 'Initializer',
  description: 'Initializer app for Unix, network-discovered SoC devices.' +
               ' Built with a React frontend served by a Node.js backend server' +
               ' and managed with PM2.',
  logo: logo,
  link: 'https://initializer.ivandestefani.it',
  tags: ['React.js', 'Node.js', 'PM2', 'SQlite']
};
