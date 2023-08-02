<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publishPost()">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <app-container
    :postData="postData"
    :step="step"
    :selectedImgUrl="selectedImgUrl"
    @inputValue="changePostContent"
  ></app-container>

  <button @click="getPost">MORE</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        accept="image/*"
        @change="upload"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import postData from "./assets/data.js";
import AppContainer from "./components/AppContainer.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      step: 0, // 현재 페이지 상태
      contentValue: "",
      selectedImgUrl: null,
      postData: postData,
      serverNum: 0,
    };
  },
  methods: {
    changePostContent(e) {
      this.contentValue = e;
    },
    publishPost() {
      let newPost = {
        name: "Anna",
        userImage: "https://picsum.photos/100?random=7",
        postImage: this.selectedImgUrl,
        likes: 3600,
        date: "May 15",
        liked: false,
        content: this.contentValue,
        filter: "perpetua",
      };
      console.log(newPost.content);
      postData.unshift(newPost);
      console.log(`======> ${this.postData}`);
      this.step = 0;
    },
    upload(e) {
      let imgFile = e.target.files;
      console.log(imgFile);
      let url = URL.createObjectURL(imgFile[0]);
      console.log(url);
      this.selectedImgUrl = url;
      // console.log(`selectedImgUrl : ${this.selectedImgUrl}`);
      this.step++;
    },
    getPost() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.serverNum}.json`)
        .then((result) => {
          this.postData.push(result.data);
          if (this.serverNum === 0) {
            this.serverNum = 1;
          } else {
            this.serverNum = 0;
          }
        });
    },
  },
  components: {
    AppContainer,
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
