// src/types/types.ts

export interface User {
    id: string;
    username: string;
    email: string;
    password: string; 
  }
  
  export interface Series {
    id: string;
    name: string;
    description: string;
    totalEpisodes: number;
    releaseYear: number;
    rating: number; // Del 1 al 5
  }
  
  export interface SeriesStatus {
    userId: string;
    seriesId: string;
    status: 'Not Started' | 'In Progress' | 'Completed';
    currentEpisode?: number; // opcional
  }
  
  export interface SeriesList {
    id: string;
    userId: string;
    name: string;
    isPublic: boolean;
  }
  