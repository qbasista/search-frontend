<template>
  <input class="search" type="text" v-model="input" />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    input: {
      get(): string {
        return this.$store.state.input;
      },
      set(value: any): void {
        this.$store.commit("UPDATE_INPUT", value);
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.search {
  max-width: 400px;
  width: 98%;
  height: 20px;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  border-bottom: #2c3e50 solid 2px;
  margin: 30px 0;
}

.search:focus {
  outline: none;
}
</style>
