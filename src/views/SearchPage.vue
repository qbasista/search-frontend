<template>
  <div id="search-view">
    <Header :title="title" />
    <Input placeholder="Search" />
    <template v-if="true">
      <List />
      <PopularWords />
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "../components/Header";
import Input from "../components/Input";
import List from "../components/List";
import PopularWords from "../components/PopularWords";

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
});
</script>

<style>
</style>