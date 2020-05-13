<template>
  <div class="home">
    <img
      v-for="(item,k) in image"
      :key="k"
      :alt="`Big image${k}`"
      :src="item.src"
      class="big-image"
      :style="{left:`${1243*(k - page)}px`}"
    />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-for="(item,k) in data.homepage" :key="item.titleCht" class="page" v-show="page === k">
      <div class="container">
        <transition name="fadeTitle">
          <div v-show="show && page === k" class="title">{{item.title}}</div>
        </transition>
        <transition name="fadeTitle">
          <div v-show="show && page === k" class="content">{{item.content}}</div>
        </transition>
        <div class="more-content" @click="showBottom = !showBottom">
          <img class="icon-more" src="@/assets/img/icons8-more-1_2x.png" alt="Icons8 more" />
          <span>更多內容</span>
        </div>
      </div>
      <transition name="fadeBottom">
        <div v-show="showBottom" class="bottom-content">
          <h1>{{item.titleCht}}</h1>
          <span>{{item.More}}</span>
        </div>
      </transition>
      <transition name="opacity">
        <div v-show="showBottom" class="background" @click="showBottom = false"></div>
      </transition>
    </div>
    <div class="img-btn">
      <div class="left-btn" @click="turnPage(-1);borderAnimation('left')">
        <img src="@/assets/img/icons8-expand_arrow_2x.png" alt="left-btn" />
        <span :class="{animateLeft:showLeftBtn}" class="left"></span>
        <span :class="{animateTop:showLeftBtn}" class="top"></span>
        <span :class="{animateRight:showLeftBtn}" class="right"></span>
        <span :class="{animateBottom:showLeftBtn}" class="bottom"></span>
      </div>
      <div class="right-btn" @click="turnPage(1);borderAnimation('right')">
        <img src="@/assets/img/icons8-expand_arrow_2x.png" alt="right-btn" />
        <span :class="{animateLeft:showRightBtn}" class="left"></span>
        <span :class="{animateTop:showRightBtn}" class="top"></span>
        <span :class="{animateRight:showRightBtn}" class="right"></span>
        <span :class="{animateBottom:showRightBtn}" class="bottom"></span>
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
      page: 0,
      showLeftBtn: false,
      showRightBtn: false,
      timer: null,
      image: [
        { src: require("@/assets/img/philosophy.jpg") },
        { src: require("@/assets/img/concept.jpg") },
        {
          src: require("@/assets/img/garrhet-sampson-JzNmtlSJ0wk-unsplash_2x.jpg")
        }
      ]
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    closeBottom() {
      this.showBottom = false;
    },
    turnPage(i) {
      this.closeBottom();
      this.page += i;
      if (this.page > this.image.length - 1) this.page = 0;
      if (this.page < 0) this.page = this.image.length - 1;
    },
    borderAnimation(p) {
      clearTimeout(this.timer);
      this.showLeftBtn = false;
      this.showRightBtn = false;
      if (p === "left") this.showLeftBtn = true;
      if (p === "right") this.showRightBtn = true;
      this.timer = setTimeout(() => {
        this.showLeftBtn = false;
        this.showRightBtn = false;
      }, 390);
    }
  },
  mounted() {
    var self = this;
    setTimeout(() => {
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
    transition: all 0.4s;
  }
  // .blur {
  //   -webkit-filter: blur(4px);
  //   -moz-filter: blur(4px);
  //   -o-filter: blur(4px);
  //   -ms-filter: blur(4px);
  //   filter: blur(4px);
  // }
  .page {
    .container {
      position: absolute;
      left: 30px;
      top: 100px;
      z-index: 2;
      .title {
        font-size: 80px;
        color: #fff;
        width: 400px;
        text-align: left;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      }
      .content {
        margin: 30px 0 40px;
        font-size: 30px;
        color: #fff;
        width: 400px;
        padding-left: 10px;
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
    .bottom-content {
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
      h1,span{
        font-size: 16px;
        margin: 70px auto 0;
        flex-direction: column;
        display: flex;
        width: 550px;
      }
      span{
        margin-top: 30px;
      }
    }
    .fadeBottom-enter-active,
    .fadeBottom-leave-active {
      transition: all 0.2s linear;
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
      background-color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
    .opacity-enter,
    .opacity-leave-to {
      opacity: 0;
    }
    .opacity-enter-active,
    .opacity-leave-active {
      transition: all 0.2s linear;
    }
  }
  .img-btn {
    width: 100px;
    // height: 43px;
    position: absolute;
    // background-color: #fff;
    right: 80px;
    top: 390px;
    display: flex;
    justify-content: space-between;
    .left-btn,
    .right-btn {
      width: 45px;
      height: 45px;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      img {
        width: 22px;
        height: 22px;
      }
      span {
        position: absolute;
        z-index: 111;
        background-color: rgba(255, 255, 255);
        opacity: 0.6;
      }
      .left {
        left: 0px;
        bottom: 0px;
        width: 2px;
      }
      .top {
        left: 2px;
        top: 0px;
        height: 2px;
      }
      .right {
        right: 0px;
        top: 2px;
        width: 2px;
      }
      .bottom {
        right: 2px;
        bottom: 0px;
        height: 2px;
      }
      .animateLeft {
        animation: animateLeft 0.1s linear 0s;
        animation-fill-mode: forwards;
      }
      .animateTop {
        animation: animateTop 0.08s linear 0.18s;
        animation-fill-mode: forwards;
      }
      .animateRight {
        animation: animateRight 0.06s linear 0.24s;
        animation-fill-mode: forwards;
      }
      .animateBottom {
        animation: animateBottom 0.04s linear 0.28s;
        animation-fill-mode: forwards;
      }
      @keyframes animateLeft {
        from {
          height: 0;
        }
        to {
          height: 45px;
        }
      }
      @keyframes animateTop {
        from {
          width: 0;
        }
        to {
          width: 43px;
        }
      }
      @keyframes animateRight {
        from {
          height: 0;
        }
        to {
          height: 43px;
        }
      }
      @keyframes animateBottom {
        from {
          width: 0;
        }
        to {
          width: 41px;
        }
      }
    }
    .left-btn img {
      transform: rotate(90deg);
    }
    .right-btn img {
      transform: rotate(-90deg);
    }
  }
}
</style>
