<template>
  <div id="list">
    <p>Total: {{ totalResult }}</p>
    <ul v-if="results.length">
      <ListItem
        v-for="(result, index) in results"
        :result="result"
        :key="index"
      />
    </ul>
    <Info info="Not found" v-else />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import ListItem from "./ListItem.vue";
import Info from "./Info.vue";

export default Vue.extend({
  name: "List",
  components: {
    ListItem,
    Info,
  },
  computed: {
    ...mapState(["results", "totalResult"]),
  },
  methods: {
    ...mapActions(["search"]),
  },
  created() {
    this.search("books");
  },
});
</script>

<style lang="scss" scoped>
.list {
  padding: 0 5px;
}

p {
  text-align: left;
}
</style>
