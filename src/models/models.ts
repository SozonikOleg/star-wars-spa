export interface IHero {
  name: string;
  id: string;
  birth_year: string;
  eye_color: string;
  gender: string;
}

export interface ServerResponse<T> {
  count: number;
  next: number;
  previous: number | null;
  results: T[];
}

export interface IFilterHeroes {
  eye_color: string;
  gender: string;
  height: string;
}
