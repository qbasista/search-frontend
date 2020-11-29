<template>
  <div id="app">
    <Header :title="title" />
    <Input placeholder="Search" />
    <List />
    <PopularWords />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";
import Input from "./components/Input.vue";
import List from "./components/List.vue";
import PopularWords from "./components/PopularWords.vue";

export default Vue.extend({
  name: "App",
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

<style lang="scss">
body {
  background-color: floralwhite;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  padding-inline-start: 0px;
}

li {
  list-style-type: none;
}
</style>
