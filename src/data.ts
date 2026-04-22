import { v4 as uuid } from 'uuid';
import { TimelineEvent, VisualEnvironment } from './types';

export const initialEvents: TimelineEvent[] = [
  {
    id: uuid(),
    title: 'Council of Nicaea',
    year: 325,
    description: 'The council established a unified Christological confession and clarified doctrine.',
    category: 'Ecumenical Councils',
    impact: 5
  },
  {
    id: uuid(),
    title: 'The Great Schism',
    year: 1054,
    description: 'Formal split between Eastern Orthodox and Roman Catholic churches.',
    category: 'Middle Ages',
    impact: 4
  },
  {
    id: uuid(),
    title: 'Luther and the Ninety-Five Theses',
    year: 1517,
    description: 'Triggered profound reform debates and movements across Europe.',
    category: 'Reformation',
    impact: 5
  }
];

export const visualEnvironments: VisualEnvironment[] = [
  {
    id: 'manuscript',
    name: 'Ancient Manuscript',
    accentColor: '#c084fc',
    backgroundClass: 'scene-manuscript'
  },
  {
    id: 'cathedral',
    name: 'Cathedral Glass',
    accentColor: '#38bdf8',
    backgroundClass: 'scene-cathedral'
  },
  {
    id: 'mission',
    name: 'Global Mission',
    accentColor: '#34d399',
    backgroundClass: 'scene-mission'
  }
];

export const categories = [
  'Foundational Era',
  'Ecumenical Councils',
  'Middle Ages',
  'Reformation',
  'Modern Missions',
  'Contemporary Movements'
] as const;
