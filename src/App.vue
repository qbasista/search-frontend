<template>
  <div id="app">
    <SearchView />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchView from "./views/SearchPage.vue";

export default Vue.extend({
  name: "App",
  components: {
    SearchView,
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
