<template>
  <div id="list">
    <p>Total: 99,888,777,666</p>
    <ul>
      <ListItem
        v-for="(result, index) in results"
        :result="result"
        :key="index"
      />
    </ul>
  </div>
</template>

<script lang='ts'>
import ListItem from "./ListItem.vue";

export default {
  name: "List",
  components: {
    ListItem,
  },
  data() {
    return {
      results: [
        {
          title: "Some title",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          position: 1,
          url: "https://www.google.com",
        },
        {
          title: "Some title",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          position: 2,
          url: "https://www.google.com",
        },
        {
          title: "Some title",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          position: 3,
          url: "https://www.google.com",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0 5px;
}

p {
  text-align: left;
}
</style>