export interface GetSearchResponse {
  query: Query;
  items: Item[];
  popular_words: string[];
}

export interface Query {
  name: string;
  total_result: number;
  created: string;
}

export interface Fields {
  position: number;
  link: string;
  title: string;
  desc: string;
  query: number;
}

export interface Item {
  model: string;
  pk: number;
  fields: Fields;
}
