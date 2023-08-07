<template>
  <h1>{{ step }}</h1>

  <!-- 메인페이지 step: 0 -->
  <section v-if="step === 0">
    <post-item
      :postData="post"
      v-for="(post, idx) in postData"
      :key="idx"
    ></post-item>
  </section>

  <!-- 필터선택페이지 step: 1 -->
  <section v-if="step === 1">
    <div
      class="upload-image"
      :style="{ backgroundImage: `url(${selectedImgUrl})` }"
    ></div>
    <div class="filters">
      <filter-box
        v-for="filter in imgFilters"
        :key="filter"
        :selectedImgUrl="selectedImgUrl"
        :filter="filter"
        >{{ filter }}</filter-box
      >
    </div>
  </section>

  <!-- 글작성페이지 step:2 -->
  <section v-if="step === 2">
    <div
      class="upload-image"
      :style="{ backgroundImage: `url(${selectedImgUrl})` }"
    ></div>
    <div class="write">
      <textarea @input="handleInputChange" class="write-box">write!</textarea>
    </div>
  </section>
</template>

<script>
import PostItem from "./PostItem.vue";
import FilterBox from "./FilterBox.vue";
import imgFilters from "../assets/imgFilters.js";

export default {
  data() {
    return {
      inputValue: "",
      imgFilters: imgFilters,
      selectedFilter: "",
    };
  },
  methods: {
    handleInputChange(e) {
      let inputValue = e.target.value;
      this.inputValue = inputValue;
      this.$emit("inputValue", this.inputValue);
      // console.log(inputValue);
    },
  },
  mounted() {
    this.emitter.on("emittedFilter", (selectedFilter) => {
      // 데이터수신시 실행할 코드
      // a는 출력해보면 데이터 출력됨
      console.log(`selectedFilter: ${selectedFilter}`);
      this.selectedFilter = selectedFilter;
    });
  },
  components: {
    PostItem,
    FilterBox,
  },
  props: {
    step: Number,
    postData: Array,
    selectedImgUrl: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
