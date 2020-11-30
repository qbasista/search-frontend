import { GetterTree } from "vuex";
import { RootState } from "./types";

const getters: GetterTree<RootState, any> = {
  areResults(state) {
    return !!state.results.length;
  },
};

export default getters;
