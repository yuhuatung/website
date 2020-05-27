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
      font-size: 96px;
      top: 120px;
      left: 40px;
    }
    .smallLogo {
      font-size: 64px;
      top: 240px;
      left: 50px;
    }
    .customer-content {
      width: 413px;
      font-size: 24px;
      bottom: 70px;
      right: 50px;
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
      padding: 20px 30px;
      video,
      img {
        width: 353px;
        // height: 265px;
        // min-width: 353px;
      }
      .customers-content {
        max-width: 700px;
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        padding-left: 30px;
        .content-eng {
          margin-top: auto;
          padding-top: 5px;
          padding-bottom: 15px;
        }
      }
    }
    .footer {
      .media {
        margin-top: 45px;
        margin-left: 145px;
        img {
          width: 40px;
          margin-right: 30px;
        }
      }
      .company {
        margin-top: 56px;
        color: white;
        font-size: 16px;
      }
    }
  }
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
  .top {
    height: 45vh;
    min-height: 400px;
    .sleep-video {
      height: 45vh;
      min-height: 400px;
      width: 100%;
      top: 0;
      left: 0;
    }
    .bigLogo {
      font-size: 55px;
      top: 80px;
      left: 30px;
    }
    .smallLogo {
      font-size: 26px;
      top: 150px;
      left: 30px;
    }
    .customer-content {
      width: 180px;
      font-size: 16px;
      top: 270px;
      right: 50px;
    }
  }

  .customers {
    margin-top: 380px;
    .content {
      width: 100%;
      .customers-list {
        display: flex;
        flex-wrap: wrap;
        margin: 20px 30px;
        video,
        img {
          width: 353px;
          // height: 265px;
          // min-width: 353px;
        }
        .customers-content {
          box-sizing: border-box;
          width: calc(100% - 353px);
          padding-top: 10px;
          padding-left: 25px;
        }
        .content-eng {
          margin-top: 20px;
          // padding: 3% 5%;
        }
      }
    }
    .footer {
      .media {
        margin-top: 45px;
        margin-left: 45px;
        img {
          width: 40px;
          margin-right: 30px;
        }
      }
      .company {
        margin-top: 56px;
        color: white;
        font-size: 16px;
      }
    }
  }
}
@media screen and (max-width: $smallWidth) {
  .top {
    height: 85vh;
    max-height: 650px;
    min-height: 550px;
    background-color: #000;
    width: 100%;

    .sleep-video {
      height: 240px;
      width: 100%;
      top: 28%;
      left: 0;
    }
    .bigLogo {
      font-size: 45px;
      top: 12%;
      left: 5%;
    }
    .smallLogo {
      font-size: 26px;
      top: 20%;
      left: 5%;
    }
    .customer-content {
      width: 180px;
      font-size: 16px;
      bottom: 50px;
      right: 5%;
    }
  }
  .customers {
    margin-top: 85vh;
    padding-bottom: 60px;
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
        max-height: 400px;
      }
      .content-cht {
        margin-top: 10px;
      }
      .content-eng {
        margin: 10px 0;
      }
      .mobile-btn {
        width: 100%;
        height: 20px;
        background-color: rgba(0, 0, 0, 0.733);
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: center;
      .media {
        img {
          width: 40px;
          margin-right: 20px;
        }
      }
      .company {
        color: white;
        font-size: 14px;
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
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .arrow {
      margin-top: 15px;
      width: 32px;
      cursor: pointer;
    }
    .content {
      margin-top: 40px;
      .customers-list {
        .customers-content {
          box-sizing: border-box;
          text-align: left;
          .content-cht {
            font-size: 16px;
          }
        }
        .content-eng {
          text-align: left;
          font-size: 12px;
          color: rgb(145, 145, 145);
        }
      }
    }
  }
  .footer {
    height: 142px;
    width: 100%;
    background-color: rgb(94, 94, 94);
    display: flex;
    margin: 20px 0 0;
  }
}
</style>
