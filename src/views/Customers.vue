<template>
  <div class="customers-body">
    <div class="top">
      <video v-if="screenwidth>810" class="sleep-video" autoplay muted loop>
        <source src="https://www.308262.com/vue/files/customers.mov" type="video/mp4" />
      </video>
      <img
        v-if="screenwidth<810"
        class="sleep-video"
        src="@/assets/img/customer.jpg"
        alt="customersImg"
      />
      <div class="bigLogo">Success Case</div>
      <div class="smallLogo">Our Customers</div>
      <div
        class="customer-content"
      >Wanlian has been involved in many projects, utilizing an amalgamation of various solutions.</div>
    </div>
    <div class="customers" ref="customers">
      <img src="@/assets/img/icons8-expand_arrow-3_2x.png" class="arrow" @click="toCustomers(step)" />
      <div v-for="(item, index) in data" :key="index" class="content">
        <div class="customers-list">
          <video class="sleep-video" v-if="item.videolist[0]" controls>
            <source :src="(baseDomain+item.videolist[0])" type="video/mp4" />
          </video>
          <img v-else-if="baseDomain" :src="(baseDomain + item.imgList[0])" />
          <transition name="spread-out">
            <div v-show="screenwidth>576 || showText === index" class="customers-content">
              <div class="content-cht">{{item.cn_content}}</div>
              <div
                v-show="screenwidth>810 || screenwidth<576"
                class="content-eng"
              >{{item.en_content}}</div>
            </div>
          </transition>
          <div class="mobile-btn" v-show="screenwidth<576" @click="showContent(index)">
            <img class="btn" src="@/assets/img/icons8-more-1_2x.png" alt="mobile-btn" />
          </div>
          <div v-show="screenwidth<810 && screenwidth>576" class="content-eng">{{item.en_content}}</div>
        </div>
      </div>
      <div class="footer">
        <div class="media">
          <img src="@/assets/img/icons8-facebook_new_2x.png" />
          <img src="@/assets/img/icons8-facebook_messenger_2x.png" />
        </div>
        <div class="company">WANLIAN TECHNOLOGY LIMITED</div>
      </div>
    </div>
  </div>
</template>

<script>
// import data from "@/assets/json/customers.json";
import { fetchCustomer } from "@/api/customerArticle";
export default {
  name: "Customers",
  created() {
    fetchCustomer([]).then(response => {
      if (response.success) {
        this.data = response.rows;
      }
    });
  },
  props: ["screenwidth"],
  data() {
    return {
      data: [],
      step: 50,
      baseDomain: process.env.VUE_APP_BASE_DOMAIN,
      showText: null
    };
  },
  components: {},
  methods: {
    showContent(index) {
      if (index === this.showText) this.showText = null;
      else this.showText = index;
    },
    toCustomers(i) {
      let height = this.$refs.customers.offsetTop;
      document.scrollingElement.scrollTop += i;
      let c;
      if (document.scrollingElement.scrollTop < height) {
        c = setTimeout(() => this.toCustomers(this.step), 16);
      } else {
        clearTimeout(c);
      }
    }
  },
  mounted() {},
  beforeDestroy() {
    document.scrollingElement.scrollTop = 0;
  }
};
</script>
<style scoped lang="scss">
@import "../assets/style/utils/_variables.scss";
@media screen and (min-width: $bigWidth) {
  .top {
    height: 90vh;
    .sleep-video {
      min-height: 100vh;
      min-width: 100vw;
      top: 40%;
      transform: translateX(-50%) translateY(-50%);
      left: 50%;
    }
    .bigLogo {
      font-size: 6rem;
      top: 7.5rem;
      left: 2.5rem;
    }
    .smallLogo {
      font-size: 4rem;
      top: 15rem;
      left: 3.125rem;
    }
    .customer-content {
      width: 25.8125rem;
      font-size: 1.5rem;
      bottom: 4.375rem;
      right: 3.125rem;
    }
  }
  .customers {
    margin-top: 90vh;
    .content {
      width: 100%;
    }
    .customers-list {
      display: flex;
      justify-content: center;
      padding: 1.25rem 1.875rem;
      video,
      img {
        width: 22.0625rem;
        // height: 16.5625rem;
        // min-width: 22.0625rem;
      }
      .customers-content {
        max-width: 43.75rem;
        display: flex;
        flex-direction: column;
        padding-top: 0.625rem;
        padding-left: 1.875rem;
        .content-eng {
          margin-top: auto;
          padding-top: 0.3125rem;
          padding-bottom: 0.9375rem;
        }
      }
    }
    .footer {
      .media {
        margin-top: 2.8125rem;
        margin-left: 9.0625rem;
        img {
          width: 2.5rem;
          margin-right: 1.875rem;
        }
      }
      .company {
        margin-top: 3.5rem;
        color: white;
        font-size: 1rem;
      }
    }
  }
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
  .top {
    height: 45vh;
    min-height: 25rem;
    .sleep-video {
      height: 45vh;
      min-height: 25rem;
      width: 100%;
      top: 0;
      left: 0;
    }
    .bigLogo {
      font-size: 3.4375rem;
      top: 5rem;
      left: 1.875rem;
    }
    .smallLogo {
      font-size: 1.625rem;
      top: 9.375rem;
      left: 1.875rem;
    }
    .customer-content {
      width: 11.25rem;
      font-size: 1rem;
      top: 16.875rem;
      right: 3.125rem;
    }
  }

  .customers {
    margin-top: 23.75rem;
    .content {
      width: 100%;
      .customers-list {
        display: flex;
        flex-wrap: wrap;
        margin: 1.25rem 1.875rem;
        video,
        img {
          width: 22.0625rem;
          // height: 16.5625rem;
          // min-width: 22.0625rem;
        }
        .customers-content {
          box-sizing: border-box;
          width: calc(100% - 22.0625rem);
          padding-top: 0.625rem;
          padding-left: 1.5625rem;
        }
        .content-eng {
          margin-top: 1.25rem;
          // padding: 3% 5%;
        }
      }
    }
    .footer {
      .media {
        margin-top: 2.8125rem;
        margin-left: 2.8125rem;
        img {
          width: 2.5rem;
          margin-right: 1.875rem;
        }
      }
      .company {
        margin-top: 3.5rem;
        color: white;
        font-size: 1rem;
      }
    }
  }
}
@media screen and (max-width: $smallWidth) {
  .top {
    height: 85vh;
    max-height: 40.625rem;
    min-height: 34.375rem;
    background-color: #000;
    width: 100%;

    .sleep-video {
      height: 15rem;
      width: 100%;
      top: 28%;
      left: 0;
    }
    .bigLogo {
      font-size: 2.8125rem;
      top: 12%;
      left: 5%;
    }
    .smallLogo {
      font-size: 1.625rem;
      top: 20%;
      left: 5%;
    }
    .customer-content {
      width: 11.25rem;
      font-size: 1rem;
      bottom: 3.125rem;
      right: 5%;
    }
  }
  .customers {
    margin-top: 80vh;
    padding-bottom: 3.75rem;
    .spread-out-enter-active,
    .spread-out-leave-active {
      transition: all .3s ease-in-out;
    }
    .spread-out-enter {
      max-height: 0 !important;
      opacity: 0;
    }
    .spread-out-leave-to {
      max-height: 0 !important;
      z-index: -1;
    }
    .customers-list {
      width: 85%;
      margin: auto;
      display: flex;
      flex-direction: column;
      video,
      img {
        width: 100%;
      }
      .customers-content {
        max-height: 25rem;
      }
      .content-cht {
        margin-top: 0.625rem;
      }
      .content-eng {
        margin: 0.625rem 0;
      }
      .mobile-btn {
        width: 100%;
        height: 1.875rem;
        background-color: rgba(0, 0, 0, 0.733);
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 1.5625rem;
          height: 1.5625rem;
        }
      }
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: center;
      .media {
        img {
          width: 2.5rem;
          margin-right: 1.25rem;
        }
      }
      .company {
        color: white;
        font-size: 0.875rem;
      }
    }
  }
}
.customers-body {
  .top {
    color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
    .sleep-video {
      position: absolute;
    }
    .bigLogo {
      position: absolute;
    }
    .smallLogo {
      position: absolute;
    }
    .customer-content {
      position: absolute;
      text-align: left;
    }
  }
  .customers {
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .arrow {
      margin-top: 0.9375rem;
      width: 2rem;
      cursor: pointer;
    }
    .content {
      margin-top: 2.5rem;
      .customers-list {
        .customers-content {
          box-sizing: border-box;
          text-align: left;
          .content-cht {
            font-size: 1rem;
          }
        }
        .content-eng {
          text-align: left;
          font-size: 0.75rem;
          color: rgb(145, 145, 145);
        }
      }
    }
  }
  .footer {
    height: 8.875rem;
    width: 100%;
    background-color: rgb(94, 94, 94);
    display: flex;
    margin: 1.25rem 0 0;
  }
}
</style>
