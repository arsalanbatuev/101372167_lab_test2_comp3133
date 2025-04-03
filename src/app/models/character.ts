export interface Character {
    name: string;
    house: string;
    image: string;
    actor?: string;
    species?: string;
    wizard?: boolean;
    ancestry?: string;
    wand?: {
      wood: string;
      core: string;
      length: number;
    };
  }
  