import axiosInstance from "../Repository";
import { AxiosRequestConfig } from "axios";
import { SearchRepository } from "../types";

const searchRepository: SearchRepository = {
  resource: "search",

  search(value) {
    const config: AxiosRequestConfig = {
      params: {
        query: value,
      },
    };
    return axiosInstance.get(`${this.resource}`, config);
  },
};

export default searchRepository;
