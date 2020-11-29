export interface RootState {
  info: string;
  input: string;
  totalResults: number;
  results: Result[];
  popularWords: string[];
}

export interface Result {
  position: number;
  link: string;
  title: string;
  desc: string;
  query: number;
}
