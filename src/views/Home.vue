<template>
  <div class="home">
    <transition-group :name="slideDirection" tag="div">
      <img
        v-for="(item,k) in data"
        :key="item.img"
        :alt="`Big image${k}`"
        :src="(baseDomain +'/storage/home/'+ item.img)"
        class="big-image"
        v-show="page === k"
        v-touch:swipeleft="slideLeft"
        v-touch:swiperight="slideRight"
      />
    </transition-group>

    <!-- <img
      v-for="(item,k) in image"
      :key="'image'+k"
      :alt="`Big image${k}`"
      :src="(baseDomain +'/storage/home/'+ item)"
      class="big-image"
      :style="{left:`${screenwidth*(k - page)}px`}"
      v-touch:swipeleft="slideLeft"
      v-touch:swiperight="slideRight"
    />-->
    <div v-for="(item,k) in data" :key="'text'+item.id" class="page" v-show="page === k">
      <div class="container">
        <transition name="fadeTitle">
          <div v-show="show && page === k" class="title">{{item.main_title}}</div>
        </transition>
        <transition name="fadeTitle">
          <div v-show="show && page === k" class="content">{{item.main_content}}</div>
        </transition>
        <div class="more-content" @click="showBottom = !showBottom">
          <img class="icon-more" src="@/assets/img/icons8-more-1_2x.png" alt="Icons8 more" />
          <span>更多內容</span>
        </div>
      </div>
      <transition name="fadeBottom">
        <div v-show="showBottom" class="bottom-content">
          <h1>{{item.subtitle}}</h1>
          <span>{{item.subcontent}}</span>
        </div>
      </transition>
      <transition name="opacity">
        <div v-show="showBottom" class="background" @click="showBottom = false"></div>
      </transition>
    </div>
    <div class="img-btn">
      <div class="left-btn" @click="slideRight()" v-show="showLeftBtn">
        <img src="@/assets/img/icons8-expand_arrow_2x.png" alt="left-btn" />
        <span :class="{animateLeft:showLeftBtnBorder}" class="left"></span>
        <span :class="{animateTop:showLeftBtnBorder}" class="top"></span>
        <span :class="{animateRight:showLeftBtnBorder}" class="right"></span>
        <span :class="{animateBottom:showLeftBtnBorder}" class="bottom"></span>
      </div>
      <div class="right-btn" @click="slideLeft()" v-show="showRightBtn">
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
import { fetchHome } from "@/api/home";

export default {
  name: "Home",
  props: ["screenwidth"],
  created() {
    fetchHome([]).then(response => {
      console.log(response);
      if (response.success) {
        this.data = response.rows;
      }
    });
  },
  data() {
    return {
      baseDomain: process.env.VUE_APP_BASE_DOMAIN,
      data: [],
      show: false,
      showBottom: false,
      page: 0,
      showLeftBtnBorder: false,
      showRightBtnBorder: false,
      timer: null,
      listDirection: ""
    };
  },
  components: {
    // HelloWorld
  },
  computed: {
    image() {
      let img = this.data.map(item => item.pcImg);
      if (this.screenwidth < 810 && this.screenwidth > 576) {
        img = this.data.map(item => item.midImg);
      }
      if (this.screenwidth < 576) {
        img = this.data.map(item => item.mobileImg);
      }
      return img;
    },
    showLeftBtn() {
      let show = true;
      if (this.page === 0 && this.screenwidth < 810) {
        show = false;
      }
      return show;
    },
    showRightBtn() {
      let show = true;
      if (this.page === this.image.length - 1 && this.screenwidth < 810) {
        show = false;
      }
      return show;
    }
  },
  methods: {
    slideLeft() {
      this.turnPage(1);
      this.slideDirection = "slideLeft";
      this.borderAnimation("right");
    },
    slideRight() {
      this.turnPage(-1);
      this.slideDirection = "slideRight";
      this.borderAnimation("left");
    },
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
    let self = this;
    setTimeout(() => {
      self.show = true;
    }, 100);
  }
};
</script>

<style scoped lang="scss">
@import "../assets/style/utils/_variables.scss";
@media screen and (min-width: $bigWidth) {
  .home {
    width: 100%;
    min-width: 77.6875rem;
    .page {
      .container {
        left: 1.875rem;
        width: 25rem;
        .title {
          font-size: 5rem;
        }
        .content {
          margin: 1.875rem 0 2.5rem;
          font-size: 1rem;
        }
        .more-content {
          height: 2.5rem;
          box-shadow: rgb(0, 0, 0) 0rem 0rem .125rem;
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
      top: 24.375rem;
      right: 5rem;
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
    .page {
      .container {
        left: 1.875rem;
        width: 25rem;
        .title {
          font-size: 5rem;
        }
        .content {
          margin: 1.875rem 0 2.5rem;
          font-size: 1rem;
        }
        .more-content {
          height: 2.5rem;
          box-shadow: rgb(0, 0, 0) 0rem 0rem .125rem;
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
      top: 30rem;
      right: 5rem;
    }
  }
}
@media screen and (max-width: $smallWidth) {
  .home {
    width: 100%;
    .page {
      .container {
        left: .9375rem;
        width: 80%;
        padding-top: 2.1875rem;
        .title {
          font-size: 1.5rem;
        }
        .content {
          margin: .9375rem 0 1.25rem;
          font-size: .875rem;
        }
        .more-content {
          height: 2rem;
          margin-left: .5rem;
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
      top: 18.75rem;
      right: 1.875rem;
    }
  }
}

.home {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  height: 100vh;
  .big-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .slideLeft-enter-to {
    transition: all .5s ease;
    transform: translateX(0);
  }
  .slideLeft-leave-active {
    transition: all .5s ease;
    transform: translateX(-100%);
  }
  .slideLeft-enter {
    transform: translateX(100%);
  }
  .slideLeft-leave {
    transform: translateX(0);
  }
  .slideRight-enter-to {
    transition: all .5s ease;
    transform: translateX(0);
  }
  .slideRight-leave-active {
    transition: all .5s ease;
    transform: translateX(100%);
  }
  .slideRight-enter {
    transform: translateX(-100%);
  }
  .slideRight-leave {
    transform: translateX(0);
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
      top: 6.25rem;
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
        padding-left: .625rem;
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
        font-size: 1.875rem;
        color: #fff;
        width: 8.0625rem;
        border: .0625rem solid rgb(255, 255, 255);
        border-radius: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .icon-more {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: .4375rem;
        }
        span {
          font-size: 1rem;
          font-weight: 100;
        }
      }
    }
    .bottom-content {
      width: 100%;
      height: 18.75rem;
      opacity: 0.9;
      background-color: rgb(255, 255, 255);
      border-width: 0rem;
      border-color: rgb(216, 221, 228);
      position: absolute;
      z-index: 2;
      box-shadow: rgb(0, 0, 0) 0rem 0rem .0625rem;
      bottom: 0rem;
      h1,
      span {
        font-size: 1rem;
        margin: 2.5rem auto 0;
        flex-direction: column;
        display: flex;
      }
      span {
        margin-top: 1.25rem;
        font-size: .875rem;
      }
    }
    .fadeBottom-enter-active,
    .fadeBottom-leave-active {
      transition: bottom 0.2s linear;
    }
    .fadeBottom-enter,
    .fadeBottom-leave-to {
      bottom: -18.75rem;
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
    width: 6.25rem;
    // height: 43px;
    position: absolute;
    // background-color: #fff;
    display: flex;
    justify-content: space-between;
    .left-btn,
    .right-btn {
      width: 2.8125rem;
      height: 2.8125rem;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      img {
        width: 1.375rem;
        height: 1.375rem;
      }
      span {
        position: absolute;
        z-index: 111;
        background-color: rgb(255, 255, 255);
      }
      .left {
        left: 0rem;
        bottom: 0rem;
        width: .125rem;
      }
      .top {
        left: .125rem;
        top: 0rem;
        height: .125rem;
      }
      .right {
        right: 0rem;
        top: .125rem;
        width: .125rem;
      }
      .bottom {
        right: .125rem;
        bottom: 0rem;
        height: .125rem;
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
          height: 2.8125rem;
        }
      }
      @keyframes animateTop {
        from {
          width: 0;
        }
        to {
          width: 2.6875rem;
        }
      }
      @keyframes animateRight {
        from {
          height: 0;
        }
        to {
          height: 2.6875rem;
        }
      }
      @keyframes animateBottom {
        from {
          width: 0;
        }
        to {
          width: 2.5625rem;
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
