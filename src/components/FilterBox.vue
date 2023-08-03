<template>
  <div
    :style="{ backgroundImage: `url(${selectedImgUrl})` }"
    :class="`filter-item ${filter}`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    filter: String,
    selectedImgUrl: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
