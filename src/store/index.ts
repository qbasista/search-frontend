import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);
import { RootState } from "./types";

export default new Vuex.Store<RootState>({
  state: {
    info: "Try!",
    input: "",
    totalResults: 0,
    results: [],
    popularWords: [],
  },
  mutations,
  actions,
  getters,
});
