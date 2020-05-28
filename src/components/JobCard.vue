<template>
  <div
    class="main"
    :class="selected === name?'selected':''"
    :style="{maxHeight:height}"
    @click="show()"
  >
    <img class="btn" :src="image" alt="showListBtn" v-show="screenwidth<576 && showList===false" />
    <div class="avatar">
      <img :src="`${baseDomain}/storage/jobs/icon_member-${quota}.png`" />
    </div>
    <div class="title">{{name}}</div>
    <div class="salary">
      NT
      <span class="num">{{salary}}</span>
      <i>↑</i>/ month
    </div>
    <transition name="opacity">
      <div class="requirement" v-show="showList || screenwidth>576">
        工作需求
        <span class="total">({{numOfRequirement}}項)</span>
      </div>
    </transition>
    <transition name="opacity">
      <div class="list" v-show="showList || screenwidth>576">
        <div v-for="(item, index) in requirementArray" :key="index" class="content">
          <div class="check">
            <input type="checkbox" />
          </div>
          <div class="item-list">{{item}}</div>
        </div>
      </div>
    </transition>
    <transition name="opacity">
      <div class="buttom" @click="openLink(link)" v-show="showList || screenwidth>576">
        <span class="apply">立即應徵</span>
      </div>
    </transition>
    <div class="bottom" v-show="screenwidth>576">請勾選工作需求後前往應徵。</div>
    <div class="close" @click.stop="showList = false" v-show="showList && screenwidth<576">
      <img src="@/assets/img/icons8-expand_arrow-1_2x.png" alt="closeBtn" />
    </div>
  </div>
</template>

<script>
import { getJsonParseOrArray } from "@/utils";

export default {
  name: "JobCard",
  props: [
    "name",
    "salary",
    "requirement",
    "priority",
    "selected",
    "link",
    "screenwidth",
    "quota"
  ],
  data() {
    return {
      baseDomain: process.env.VUE_APP_BASE_DOMAIN,
      showList: false,
      requirementArray: getJsonParseOrArray(this.requirement)
    };
  },
  computed: {
    numOfRequirement: function() {
      return this.requirementArray.length;
    },
    image() {
      let img = [
        { src: require("@/assets/img/icons8-more-1_2x.png") },
        { src: require("@/assets/img/icons8-more-4_2x.png") }
      ];
      let i = this.selected === this.name ? img[0].src : img[1].src;
      return i;
    },
    height() {
      let i = "603px";
      if (this.screenwidth < 576 && this.showList === false) i = "140px";
      return i;
    }
  },
  methods: {
    openLink: function(url) {
      window.open(url, "_blank");
    },
    show() {
      if (this.screenwidth < 576) this.showList = true;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/style/utils/_variables.scss";
@media screen and (min-width: $bigWidth) {
  .main {
    border: 0.375rem solid rgb(235, 235, 235);
  }
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
  .main {
    border: 0.375rem solid rgb(235, 235, 235);
  }
}
@media screen and (max-width: $smallWidth) {
  .main {
    border: 0.0625rem solid rgb(235, 235, 235);
  }
}
::-webkit-scrollbar {
  width: 0.125rem;
}
::-webkit-scrollbar-thumb {
  background: #d6d6d6;
  border-radius: 0.0625rem;
}
.main {
  .opacity-enter {
    opacity: 0;
  }
  .opacity-enter-active {
    transition: opacity 1s;
  }
  width: 20.125rem;
  height: 37.6875rem;
  border-radius: 0.625rem;
  margin: 1.875rem 0.9375rem 0;
  position: relative;
  transition: max-height 0.4s;
  .btn {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: -0.3125rem;
    width: 1.875rem;
    height: 1.875rem;
    transform: rotate(90deg);
  }
  .avatar {
    transform: translateX(2.1875rem) translateY(2.375rem) rotateY(0deg);
    width: 4rem;
    height: 4rem;
    position: absolute;
    border-radius: 0.625rem;
    box-shadow: rgb(192, 192, 192) 0rem 0rem 0.5rem inset;
  }
  .title {
    transform: translateX(7.0625rem) translateY(1.8125rem) rotateY(0deg);
    font-size: 1.125rem;
    padding: 0.5rem;
    width: 10.0625rem;
    height: 1.625rem;
    position: absolute;
    text-align: left;
    font-weight: 700;
    color: rgb(0, 0, 0);
  }
  .salary {
    transform: translateX(6.9375rem) translateY(4.0625rem) rotateY(0deg);
    width: 8.9375rem;
    height: 1.625rem;
    position: absolute;
    padding: 0.5rem;
    text-align: left;
    color: rgb(145, 145, 145);
    .num {
      font-size: 1.625rem;
      color: rgb(0, 0, 0);
    }
    i {
      vertical-align: top;
    }
  }
  .requirement {
    transform: translateX(2rem) translateY(7.25rem) rotateY(0deg);
    width: 15.75rem;
    height: 1.5625rem;
    position: absolute;
    padding: 0.5rem;
    text-align: left;
    color: rgb(0, 0, 0);
    font-family: "Noto Sans HK";
    font-weight: bold;
    border-bottom: 0.0625rem solid rgb(145, 145, 145);
    .total {
      font-weight: normal;
    }
  }
  .list {
    // transform: translateX(2rem) translateY(9.8125rem) rotateY(0deg);
    width: 16.75rem;
    height: 19.6875rem;
    // position: absolute;
    border-bottom: 0.0625rem solid rgb(145, 145, 145);
    overflow: auto;
    margin: 9.8125rem auto 0;
    .content {
      width: 15.625rem;
      text-align: left;
      padding: 0.9375rem 0.9375rem 0.9375rem 0;
      font-size: 0.875rem;
      display: flex;
      .check {
        width: 3.125rem;
        input[type="checkbox"] {
          position: relative;
          cursor: pointer;
          margin: 0.3125rem;
        }
        input[type="checkbox"]:before {
          content: "";
          display: block;
          position: absolute;
          background-color: white;
          width: 1.5rem;
          height: 1.5rem;
          top: -0.125rem;
          left: -0.125rem;
          border-radius: 0.1875rem;
          box-shadow: rgb(146, 146, 146) 0rem 0rem 0.25rem inset;
        }
        input[type="checkbox"]:checked:after {
          content: "";
          display: block;
          width: 0.25rem;
          height: 0.6875rem;
          border: solid #00bfff;
          border-width: 0 0.0938rem 0.0938rem 0;
          transform: rotate(45deg);
          position: absolute;
          top: 0.1875rem;
          left: 0.5rem;
        }
      }
      .item-list {
        width: 15.625rem;
      }
    }
  }
  .buttom {
    // transform: translateX(2.125rem) translateY(30.9375rem) rotateY(0deg);
    width: 16.25rem;
    height: 3rem;
    // position: absolute;
    margin: 1.5625rem auto 0;
    border-style: solid;
    border-width: 0.0625rem;
    border-radius: 0.3125rem;
    box-shadow: rgb(145, 145, 145) 0rem 0rem 0.1875rem;
    background-image: -webkit-linear-gradient(
      225deg,
      rgb(99, 179, 242),
      rgb(81, 117, 224)
    );
    border-color: rgb(0, 111, 216);
    cursor: pointer;
    .apply {
      transform: translateX(7.875rem) translateY(31.375rem) rotateY(0deg);
      font-size: 1rem;
      color: rgb(255, 255, 255);
      position: relative;
      top: 0.875rem;
    }
  }
  .bottom {
    // transform: translateX(5.3125rem) translateY(34.625rem) rotateY(0deg);
    // position: absolute;
    margin-top: 1.25rem;
    color: rgb(0, 0, 0);
    font-family: "Noto Sans HK";
    font-size: 0.75rem;
  }
}
.selected {
  background-color: unset;
  background-image: -webkit-linear-gradient(
    225deg,
    rgb(100, 182, 243),
    rgb(80, 116, 224)
  );
  border-radius: 0.625rem;
  border: 0.0625rem solid rgb(0, 150, 255);
  .avatar {
    box-shadow: unset;
    background-color: white;
  }
  .title,
  .requirement,
  .list,
  .salary,
  .salary .num,
  .bottom {
    color: white;
  }
  .requirement,
  .list {
    border-bottom: 0.0625rem solid white;
  }
  .list .content .check input[type="checkbox"]:before {
    box-shadow: unset;
  }
  .buttom {
    background-image: unset;
    background-color: white;
    box-shadow: rgb(0, 0, 0) 0rem 0rem 0.1875rem;
    .apply {
      color: rgb(0, 150, 255);
    }
  }
}
.close {
  width: 20.25rem;
  height: 2.125rem;
  position: absolute;
  bottom: -0.0625rem;
  left: -0.0625rem;
  background-color: rgb(232, 235, 237);
  border-bottom-left-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
  box-shadow: rgb(94, 94, 94) 0rem 0rem 0.0625rem inset;
  line-height: 2.125rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
    transform: rotate(180deg);
  }
}
</style>
