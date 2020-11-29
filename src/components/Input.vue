<template>
  <input class="search" type="text" />
</template>

<script lang='ts'>
import Vue from "vue";
export default Vue.extend({});
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