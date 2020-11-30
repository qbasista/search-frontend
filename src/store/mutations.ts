import { RootState } from "./types";

import { MutationTree } from "vuex";
import { GetSearchResponse } from "@/repository/SearchRepository/types";

const mutations: MutationTree<RootState> = {
  ADD_RESULT(state, res: GetSearchResponse) {
    const {
      items,
      query: { total_result },
      popular_words,
    } = res;

    state.popularWords = popular_words;
    state.totalResults = total_result;
    state.results = items.map((item) => item.fields);
  },
  REMOVE_RESULT(state) {
    state.popularWords = [];
    state.totalResults = 0;
    state.results = [];
  },
  SET_STATUS(state, payload: string) {
    state.info = payload;
  },
  UPDATE_INPUT(state, payload: string) {
    state.input = payload.trim();
  },
};

export default mutations;
