import { ActionTree } from "vuex";
import { RootState } from "./types";
import factory from "./../repository/RepositoryFactory";

const searchRepository = factory.get("search");

const actions: ActionTree<RootState, any> = {
  async search({ commit }, payload: string) {
    console.log("work");
    try {
      const res = await searchRepository.search(payload);
      commit("ADD_RESULT", res.data);
      if (res.data.items.length) {
        commit("SET_STATUS", "Try!");
      } else {
        commit("SET_STATUS", "Not found!");
      }
    } catch (err) {
      commit("REMOVE_RESULT");
      commit("SET_STATUS", "Service is not available! Please try later");
    }
  },
};

export default actions;
