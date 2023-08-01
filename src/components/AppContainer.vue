<template>
  THIS IS CONTAINER
  <post-item
    :postData="post"
    v-for="(post, idx) in postData"
    :key="idx"
  ></post-item>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: {
    PostItem,
  },
  props: {
    postData: Array,
  },
};
</script>

<style></style>
