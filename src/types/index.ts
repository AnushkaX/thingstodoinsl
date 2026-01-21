export type ActivityCategory = 
  | 'Beach'
  | 'Hiking'
  | 'Wildlife'
  | 'Culture'
  | 'Adventure'
  | 'Food'
  | 'Wellness'
  | 'Water Sports'
  | 'Nature'
  | 'Historical';

export interface Place {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  category: ActivityCategory;
  image?: string;
  bestSeason?: string;
  skillLevel?: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  districts: string[]; // District IDs where this activity is available
  places?: string[]; // Place IDs within districts
}

export interface District {
  id: string;
  name: string;
  description: string;
  image?: string;
  activities: string[]; // Activity IDs available in this district
  places?: Place[];
  coordinates?: {
    x: number;
    y: number;
  };
}

export interface SearchResult {
  type: 'activity' | 'district' | 'place';
  id: string;
  name: string;
  description: string;
  category?: ActivityCategory;
}