<template>
  <div id="list">
    <p>Total: {{ query.total_tesult }}</p>
    <ul v-if="results.length">
      <ListItem
        v-for="({ fields }, index) in results"
        :result="fields"
        :key="index"
      />
    </ul>
    <Info info="Not found" v-else />
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { mapState } from "vuex";
import ListItem from "./ListItem.vue";
import Info from "./Info.vue";

export default Vue.extend({
  name: "List",
  components: {
    ListItem,
    Info,
  },
  computed: {
    ...mapState(["results", "query"]),
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