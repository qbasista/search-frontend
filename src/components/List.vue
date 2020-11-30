<template>
  <div id="list">
    <p v-if="areResults">Total: {{ totalResults }}</p>
    <ul v-if="areResults">
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
import { mapActions, mapGetters, mapState } from "vuex";
import ListItem from "./ListItem.vue";
import Info from "./Info.vue";

export default Vue.extend({
  name: "List",
  components: {
    ListItem,
    Info,
  },
  data() {
    return {
      timer: 0,
    };
  },
  computed: {
    ...mapState(["results", "totalResults", "input"]),
    ...mapGetters(["areResults"]),
  },
  methods: {
    ...mapActions(["search"]),
    searchTimeOut() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = 0;
      }
      this.timer = setTimeout(() => {
        this.search(this.input);
      }, 500);
    },
  },
  watch: {
    input() {
      this.searchTimeOut();
    },
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
