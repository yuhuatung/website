<template>
  <div class="home">
    <img
      v-for="(item,k) in image"
      :key="k"
      :alt="`Big image${k}`"
      :src="item.src"
      class="big-image"
      :class="{blur:showBottom}"
      :style="{left:`${1243*(k - firstPage)}px`}"
    />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <transition name="fadeTitle">
        <div v-show="show" class="title">{{data.homepage[0].title}}</div>
      </transition>
      <transition name="fadeTitle">
        <div v-show="show" class="content">{{data.homepage[0].content}}</div>
      </transition>
      <div class="more-content" @click="showBottom = !showBottom">
        <img class="icon-more" src="@/assets/img/icons8-more-1_2x.png" alt="Icons8 more" />
        <span>更多內容</span>
      </div>
    </div>
    <transition name="fadeBottom">
      <div v-show="showBottom" class="bottom">
        <h1>企業理念</h1>
        <span>萬聯科技，是由一群曾在知名系統與網路公司的核心技術菁英人才而組成的團隊，公司致力於軟體及應用程式研發與系統建置開發設計服務於一體的平台型公司，服務各大網站及手機APP營運商。</span>
      </div>
    </transition>
    <transition name="opacity">
      <div v-show="showBottom" class="background" @click="showBottom = false"></div>
    </transition>
    <div class="img-btn">
      <div class="left" @click="turnPage(-1)">
        <img src="@/assets/img/icons8-expand_arrow_2x.png" alt="left-btn" />
      </div>
      <div class="right" @click="turnPage(1)">
        <img src="@/assets/img/icons8-expand_arrow_2x.png" alt="right-btn" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import data from "@/assets/json/home.json";

export default {
  name: "Home",
  data() {
    return {
      data: data,
      show: false,
      showBottom: false,
      firstPage: 0,
      image: [
        { src: require("@/assets/img/philosophy.jpg") },
        { src: require("@/assets/img/concept.jpg") },
        { src: require("@/assets/img/recruitment.jpg") }
      ]
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    turnPage(i) {
      this.firstPage += i;
      if (this.firstPage < 0) this.firstPage = 0;
      if (this.firstPage > this.image.length - 1)
        this.firstPage = this.image.length - 1;
    }
  },
  mounted() {
    var self = this;
    setInterval(function() {
      self.show = true;
    }, 100);
  }
};
</script>

<style lang="scss">
.home {
  margin: 0 auto;
  width: 1243px;
  height: 800px;
  position: relative;
  overflow: hidden;
  .big-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 1243px;
    height: 800px;
    transition: all 0.3s;
  }
  .blur {
    -webkit-filter: blur(4px);
    -moz-filter: blur(4px);
    -o-filter: blur(4px);
    -ms-filter: blur(4px);
    filter: blur(4px);
  }
  .container {
    position: absolute;
    left: 30px;
    top: 80px;
    z-index: 2;
    .title {
      font-size: 80px;
      color: #fff;
      width: 400px;
      text-align: left;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
    .content {
      margin: 20px 0 30px;
      font-size: 30px;
      color: #fff;
      width: 400px;
      text-align: left;
      font-size: 16px;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
    .fadeTitle-enter-active {
      transition: all 0.5s ease-out;
    }
    .fadeTitle-enter {
      clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
      transform: translate(0%, 100%);
    }
    .more-content {
      font-size: 30px;
      color: #fff;
      width: 129px;
      height: 40px;
      border: 1px solid rgb(255, 255, 255);
      border-radius: 20px;
      box-shadow: rgb(0, 0, 0) 0px 0px 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .icon-more {
        width: 24px;
        height: 24px;
        margin-right: 7px;
      }
      span {
        font-size: 16px;
        font-weight: 100;
      }
    }
  }
  .bottom {
    width: 1243px;
    height: 300px;
    transform: translateX(0px) translateY(500px) rotateY(0deg);
    opacity: 0.9;
    background-color: rgb(255, 255, 255);
    border-width: 0px;
    border-color: rgb(216, 221, 228);
    overflow: visible;
    position: absolute;
    z-index: 2;
    box-shadow: rgb(0, 0, 0) 0px 0px 1px;
  }
  .fadeBottom-enter-active,
  .fadeBottom-leave-active {
    transition: all 0.3s;
  }
  .fadeBottom-enter,
  .fadeBottom-leave-to {
    transform: translateX(0px) translateY(800px) rotateY(0deg);
  }
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .opacity-enter,
  .opacity-leave-to {
    opacity: 0;
  }
  .opacity-enter-active,
  .opacity-leave-active {
    transition: all 0.3s;
  }
  .img-btn {
    width: 96px;
    // height: 43px;
    position: absolute;
    // background-color: #fff;
    right: 20px;
    top: 250px;
    display: flex;
    justify-content: space-between;
    .left,
    .right {
      width: 45px;
      height: 45px;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 22px;
        height: 22px;
      }
    }
    .left img {
      transform: rotate(90deg);
    }
    .right img {
      transform: rotate(-90deg);
    }
  }
}
</style>
