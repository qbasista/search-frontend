<template>
  <div id="search-view">
    <Header :title="title" />
    <Input placeholder="Search" />
    <List />
    <PopularWords v-if="areResults" />
  </div>
</template>

<script>
import Vue from "vue";
import Header from "../components/Header";
import Input from "../components/Input";
import List from "../components/List";
import PopularWords from "../components/PopularWords";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "SearchView",
  components: {
    Header,
    Input,
    List,
    PopularWords,
  },
  data() {
    return {
      title: "AppChance",
    };
  },
  computed: {
    ...mapGetters(["areResults"]),
  },
});
</script>

<style></style>
