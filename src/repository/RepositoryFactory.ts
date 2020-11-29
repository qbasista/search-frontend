import { Repositories } from "./types";
import searchRepository from "./SearchRepository/searchRepository";

const repositories: Repositories = {
  search: searchRepository,
};

export default {
  get: <K extends keyof Repositories>(key: K) => repositories[key],
};
