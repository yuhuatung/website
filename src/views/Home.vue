<template>
  <div class="home">
    <img
      v-for="(item,k) in image"
      :key="k"
      :alt="`Big image${k}`"
      :src="item.src"
      class="big-image"
      :style="{left:`${imageWidth*(k - page)}px`}"
      ref="imageWidth"
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
      <div class="left-btn" @click="turnPage(-1);borderAnimation('left')" v-show="showLeftBtn">
        <img src="@/assets/img/icons8-expand_arrow_2x.png" alt="left-btn" />
        <span :class="{animateLeft:showLeftBtnBorder}" class="left"></span>
        <span :class="{animateTop:showLeftBtnBorder}" class="top"></span>
        <span :class="{animateRight:showLeftBtnBorder}" class="right"></span>
        <span :class="{animateBottom:showLeftBtnBorder}" class="bottom"></span>
      </div>
      <div class="right-btn" @click="turnPage(1);borderAnimation('right')" v-show="showRightBtn">
        <img src="@/assets/img/icons8-expand_arrow_2x.png" alt="right-btn" />
        <span :class="{animateLeft:showRightBtnBorder}" class="left"></span>
        <span :class="{animateTop:showRightBtnBorder}" class="top"></span>
        <span :class="{animateRight:showRightBtnBorder}" class="right"></span>
        <span :class="{animateBottom:showRightBtnBorder}" class="bottom"></span>
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
      showLeftBtnBorder: false,
      showRightBtnBorder: false,
      timer: null,
      imageWidth: 1243
      // image: [
      //   { src: require("@/assets/img/philosophy.jpg") },
      //   { src: require("@/assets/img/concept.jpg") },
      //   {
      //     src: require("@/assets/img/garrhet-sampson-JzNmtlSJ0wk-unsplash_2x.jpg")
      //   }
      // ]
    };
  },
  components: {
    // HelloWorld
  },
  computed: {
    image() {
      let img = [
        { src: require("@/assets/img/philosophy.jpg") },
        { src: require("@/assets/img/concept.jpg") },
        {
          src: require("@/assets/img/garrhet-sampson-JzNmtlSJ0wk-unsplash_2x.jpg")
        }
      ];
      if (this.imageWidth < 810 && this.imageWidth > 576) {
        img = [
          { src: require("@/assets/img/philosophy1.jpg") },
          { src: require("@/assets/img/concept1.jpg") },
          {
            src: require("@/assets/img/garrhet-sampson-JzNmtlSJ0wk-unsplash_2x1.jpg")
          }
        ];
      }
      if (this.imageWidth < 576) {
        img = [
          { src: require("@/assets/img/philosophy2.jpg") },
          { src: require("@/assets/img/concept2.jpg") },
          {
            src: require("@/assets/img/garrhet-sampson-JzNmtlSJ0wk-unsplash_2x2.jpg")
          }
        ];
      }
      return img;
    },
    showLeftBtn() {
      let show = true;
      if (this.page === 0 && this.imageWidth < 810) {
        show = false;
      }
      return show;
    },
    showRightBtn() {
      let show = true;
      if (this.page === this.image.length - 1 && this.imageWidth < 810) {
        show = false;
      }
      return show;
    }
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
      this.showLeftBtnBorder = false;
      this.showRightBtnBorder = false;
      if (p === "left") this.showLeftBtnBorder = true;
      if (p === "right") this.showRightBtnBorder = true;
      this.timer = setTimeout(() => {
        this.showLeftBtnBorder = false;
        this.showRightBtnBorder = false;
      }, 500);
    }
  },
  mounted() {
    var self = this;
    setTimeout(() => {
      self.show = true;
    }, 100);
    self.imageWidth = this.$refs.imageWidth[0].offsetWidth;
    window.onresize = () => {
      // 通過捕獲系統的onresize事件觸發我們需要執行的事件
      self.imageWidth = this.$refs.imageWidth[0].offsetWidth;
    };
  }
};
</script>

<style lang="scss">
@import "../assets/style/utils/_variables.scss";
@media screen and (min-width: $bigWidth) {
  .home {
    width: 1243px;
    height: 800px;
    .big-image {
      height: 800px;
    }
    .page {
      .container {
        left: 30px;
        width: 400px;
        .title {
          font-size: 80px;
        }
        .content {
          margin: 30px 0 40px;
          font-size: 16px;
        }
        .more-content {
          height: 40px;
          box-shadow: rgb(0, 0, 0) 0px 0px 2px;
        }
      }
    }
    .bottom-content {
      h1,
      span {
        width: 50%;
      }
    }
    .img-btn {
      top: 390px;
      right: 80px;
      .left-btn,
      .right-btn {
        span {
          opacity: 0.6;
        }
      }
    }
  }
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
  .home {
    width: 100%;
    height: 1000px;
    .page {
      .container {
        left: 30px;
        width: 400px;
        .title {
          font-size: 80px;
        }
        .content {
          margin: 30px 0 40px;
          font-size: 16px;
        }
        .more-content {
          height: 40px;
          box-shadow: rgb(0, 0, 0) 0px 0px 2px;
        }
      }
    }
    .bottom-content {
      h1,
      span {
        width: 70%;
      }
    }
    .img-btn {
      top: 480px;
      right: 80px;
    }
  }
}
@media screen and (max-width: $smallWidth) {
  .home {
    width: 100%;
    height: 800px;
    .page {
      .container {
        left: 15px;
        width: 80%;
        padding-top: 35px;
        .title {
          font-size: 24px;
        }
        .content {
          margin: 15px 0 20px;
          font-size: 14px;
        }
        .more-content {
          height: 32px;
          margin-left: 8px;
        }
      }
    }
    .bottom-content {
      h1,
      span {
        width: 85%;
      }
    }
    .img-btn {
      top: 300px;
      right: 30px;
    }
  }
}
.home {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  .big-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: left 0.5s;
    background-size: contain;
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
      top: 100px;
      z-index: 2;
      .title {
        color: #fff;
        width: 100%;
        text-align: left;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      }
      .content {
        color: #fff;
        width: 100%;
        padding-left: 10px;
        text-align: left;
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
        border: 1px solid rgb(255, 255, 255);
        border-radius: 20px;
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
      width: 100%;
      height: 300px;
      opacity: 0.9;
      background-color: rgb(255, 255, 255);
      border-width: 0px;
      border-color: rgb(216, 221, 228);
      position: absolute;
      z-index: 2;
      box-shadow: rgb(0, 0, 0) 0px 0px 1px;
      bottom: 0px;
      h1,
      span {
        font-size: 16px;
        margin: 40px auto 0;
        flex-direction: column;
        display: flex;
      }
      span {
        margin-top: 20px;
      }
    }
    .fadeBottom-enter-active,
    .fadeBottom-leave-active {
      transition: bottom 0.2s linear;
    }
    .fadeBottom-enter,
    .fadeBottom-leave-to {
      bottom: -300px;
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
        background-color: rgb(255, 255, 255);
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
        animation: animateRight 0.08s linear 0.26s;
        animation-fill-mode: forwards;
      }
      .animateBottom {
        animation: animateBottom 0.06s linear 0.32s;
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
    .right-btn {
      margin-left: auto;
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
