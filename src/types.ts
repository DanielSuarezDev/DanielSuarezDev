export type ChurchCategory =
  | 'Foundational Era'
  | 'Ecumenical Councils'
  | 'Middle Ages'
  | 'Reformation'
  | 'Modern Missions'
  | 'Contemporary Movements';

export interface TimelineEvent {
  id: string;
  title: string;
  year: number;
  description: string;
  category: ChurchCategory;
  impact: 1 | 2 | 3 | 4 | 5;
}

export interface VisualEnvironment {
  id: string;
  name: string;
  accentColor: string;
  backgroundClass: string;
}
