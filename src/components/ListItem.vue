<template functional>
  <li>
    <a :href="props.result.url">
      <h2 class="title">{{ props.result.title }}</h2>
      <p class="position">Position: {{ props.result.position }}</p>
      <p>{{ props.result.desc }}</p>
    </a>
  </li>
</template>

<script lang='ts'>
export default {
  name: "ItemList",
};
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