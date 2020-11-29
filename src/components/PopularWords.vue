<template>
  <div>
    <h2>Popular words</h2>
    <ul class="popular">
      <li v-for="word in popularWords" :key="word">{{ word }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "PopularWords",
  computed: {
    ...mapState(["popularWords"]),
  },
});
</script>

<style lang="scss" scoped>
ul {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  max-width: 400px;
  margin: 0 auto;
}
</style>
