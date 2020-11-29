import { AxiosResponse } from "axios";
import { GetSearchResponse } from "./SearchRepository/types";

export interface Repositories {
  search: SearchRepository;
}

interface Repository {
  resource: string;
}

export interface SearchRepository extends Repository {
  search: (value: string) => Promise<AxiosResponse<GetSearchResponse>>;
}
