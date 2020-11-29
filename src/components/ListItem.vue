<template functional>
  <li>
    <a :href="props.result.link">
      <h3 class="title">{{ props.result.title }}</h3>
      <p class="position">Position: {{ props.result.position }}</p>
      <p>{{ props.result.desc }}</p>
    </a>
  </li>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "ItemList",
});
</script>

<style lang="scss" scoped>
li {
  text-align: left;
}
.title {
  margin-block-end: 0em;
  color: #1a0dab;
}
.position {
  font-size: 0.8rem;
  margin-block-start: 0em;
  margin-block-end: 0em;
}

a {
  color: inherit;
  text-decoration: inherit;
}
</style>