<template>
  <div class="services-body">
    <div class="top">
      <video v-if="screenwidth>810" class="sleep-video" autoplay muted loop>
        <source src="https://www.308262.com/vue/files/service.mov" type="video/mp4" />
      </video>
      <img v-if="screenwidth<810" class="sleep-video" :src="bigImage" alt="contactsImg" />
      <div class="bigLogo">WeAre</div>
      <div class="smallLogo">professional</div>
      <div class="our-service" @click="toService()">
        <img src="@/assets/img/icons8-expand_arrow-4_2x.png" />Our Service
      </div>
      <div
        class="service-content"
      >對於企業客戶，每一個決定都會產生影響，我們在這裡可以幫助您指導遷移或啟動過程中的動盪和壓力。 我們首先研究您的要求和需求，然後與我們經驗豐富的技術人員團隊一起開發可行的解決方案以及部署策略。</div>
    </div>
    <div class="services">
      <div v-for="(item, index) in services" :key="index" class="services-item" ref="servicesItem">
        <img :src="(baseDomain +'/storage/service/'+ item.img)" />
        <div class="mask">
          <div class="services-title">{{item.title}}</div>
          <div class="services-content">{{item.content}}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div
        class="footer-left"
      >For Enterprise clients every decision has repercussions and we are here to help guide you through the turbulence and stress involved in migrations or start-ups. We start by delving into your requirements and needs, then working with our team of experienced technicians to develop a working solution as well as a deployment strategy.</div>
      <div
        class="footer-right"
      >Consultation Services (Standardization, Strategic Technology and Adoption Assessment, Evaluation, POC, Mentoring) Implementation Services (Design, Architect, Plan and Build) Training Services (Standard or Customize) Managed Services (7/24 round the clock remote/on-site project nursing residency or support) Development Services (Java and Enterprise System Integration) Enterprise</div>
    </div>
  </div>
</template>

<script>
import { fetchService } from "@/api/serviceArticle";

export default {
  name: "Services",
  props: ["screenwidth"],
  created() {
    fetchService([]).then(response => {
      if (response.success) {
        this.services = response.rows;
      }
    });
  },
  data() {
    return {
      baseDomain: process.env.VUE_APP_BASE_DOMAIN,
      stepBottom: 50, //此数据是控制动画快慢的
      services: []
    };
  },
  computed: {
    bigImage() {
      let img = { src: require("@/assets/img/service.jpg") };
      if (this.screenwidth < 576) {
        img = { src: require("@/assets/img/service.jpg") };
      }
      return img.src;
    }
  },
  methods: {
    toService() {
      let clientHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      let height = scrollHeight - clientHeight - 10;
      if (this.screenwidth < 576) {
        height = this.$refs.servicesItem[0].offsetTop - 80;
      }
      this.toServiceCard(this.stepBottom, height);
    },
    toServiceCard(i, height) {
      document.scrollingElement.scrollTop += i;
      let c;
      if (document.scrollingElement.scrollTop < height) {
        c = setTimeout(() => this.toServiceCard(i, height), 16);
      } else {
        clearTimeout(c);
      }
    },
    toBottom(i) {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      let height = scrollHeight - clientHeight - 10; //超出窗口上界的值就是底部的scrolTop的值
      document.scrollingElement.scrollTop += i;
      let c;
      if (document.scrollingElement.scrollTop < height) {
        c = setTimeout(() => this.toBottom(i), 16);
      } else {
        clearTimeout(c);
      }
    },
    getImgUrl(image) {
      return require("@/assets/img/" + image);
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
  .services-body {
    .top {
      width: 100vw;
      height: 100vh;
      position: relative;
      .sleep-video {
        min-height: 100vh;
        min-width: 100vw;
        position: fixed;
        height: auto;
        width: auto;
        left: 50%;
        transform: translate(-50%);
        top: 0;
        z-index: -1;
      }
      .bigLogo {
        font-size: 6rem;
        top: 5rem;
        left: 2.5rem;
      }
      .smallLogo {
        font-size: 4rem;
        top: 11.25rem;
        left: 3.125rem;
      }
      .our-service {
        font-size: 1rem;
        position: absolute;
        width: 9.375rem;
        height: 3.5rem;
        right: 19.5rem;
        bottom: 11.25rem;
        img {
          width: 2rem;
          padding-right: .625rem;
        }
      }
      .service-content {
        position: absolute;
        bottom: 5rem;
        right: 3.125rem;
        max-width: 25.8125rem;
        font-size: .875rem;
      }
    }
    .services {
      min-width: 66rem;
      padding: 0 1.25rem;
      width: 100%;
      .services-item {
        margin: 0 .25rem .5rem;
        display: flex;
        position: relative;
        img,
        .mask {
          max-width: 21.5rem;
          height: 14.3125rem;
        }
        .mask {
          opacity: 0;
          transition: opacity 0.3s;
          .services-title {
            margin-top: 20%;
          }
          .services-content {
            margin-top: 8%;
          }
        }
        .mask:hover {
          opacity: 1;
        }
      }
    }
    .footer {
      min-width: 65.625rem;
      text-align: left;
      margin: 3.75rem auto 1.875rem;
      max-width: 65.625rem;
      padding: 0 1.25rem;
      width: 100%;
      justify-content: center;
      .footer-left {
        flex: 1;
        margin-right: 1.25rem;
      }
      .footer-right {
        flex: 1;
      }
    }
  }
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
  .services-body {
    background-color: rgb(3, 16, 47);
    .top {
      width: 100vw;
      position: relative;
      .sleep-video {
        width: 100vw;
      }
      .bigLogo {
        font-size: 6rem;
        top: 5rem;
        left: 2.5rem;
      }
      .smallLogo {
        font-size: 4rem;
        top: 11.25rem;
        left: 3.125rem;
      }
      .our-service {
        font-size: 1rem;
        position: absolute;
        width: 9.375rem;
        height: 3.5rem;
        right: 1.875rem;
        bottom: 9.375rem;
        img {
          width: 2rem;
          padding-right: .625rem;
        }
      }
      .service-content {
        margin: 3.75rem auto;
        max-width: 25.8125rem;
        font-size: .875rem;
      }
    }
    .services {
      width: 100%;
      .services-item {
        margin: .625rem;
        img,
        .mask {
          max-width: 21.5rem;
        }
        .mask {
          bottom: 0;
          .services-title {
            margin-top: .9375rem;
          }
          .services-content {
            margin-top: .9375rem;
            margin-bottom: .9375rem;
          }
        }
      }
    }
    .footer {
      margin: 0 auto;
      justify-content: center;
      flex-wrap: wrap;
      .footer-left,
      .footer-right {
        box-sizing: border-box;
        width: 21.5rem;
        padding: 0 .1875rem;
        margin: .625rem;
      }
    }
  }
}
@media screen and (max-width: $smallWidth) {
  .services-body {
    background-color: rgb(3, 16, 47);
    padding-bottom: 3.75rem;
    .top {
      width: 100vw;
      position: relative;
      .sleep-video {
        width: 100vw;
      }
      .bigLogo {
        font-size: 1.5rem;
        top: 6.25rem;
        left: 1.25rem;
      }
      .smallLogo {
        font-size: 1.5rem;
        top: 8.125rem;
        left: 1.25rem;
      }
      .our-service {
        font-size: .75rem;
        bottom: 5.625rem;
        right: 1.875rem;
        // width: 116px;
        padding: .4375rem;
        img {
          width: .9375rem;
          margin-right: .3125rem;
        }
      }
      .service-content {
        margin: 1.25rem auto;
        max-width: 85%;
        font-size: .75rem;
      }
    }
    .services {
      width: 90%;
      .services-item {
        margin: .625rem;
        width: 100%;
        img,
        .mask {
          width: 100%;
          height: 100%;
        }
        .mask {
          height: auto;
          bottom: 0;
          .services-title {
            margin-top: .9375rem;
          }
          .services-content {
            margin-top: .9375rem;
            margin-bottom: .9375rem;
          }
        }
      }
    }
    .footer {
      margin: 0 auto;
      justify-content: center;
      flex-wrap: wrap;
      width: 90%;
      .footer-left,
      .footer-right {
        box-sizing: border-box;
        width: 100%;
        padding: 0 .1875rem;
        margin: .625rem;
      }
    }
  }
}
.services-body {
  width: 100%;
  .top {
    color: white;
    .bigLogo,
    .smallLogo {
      position: absolute;
    }
    .our-service {
      position: absolute;
      background-color: rgba(232, 235, 237, 0.5);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .service-content {
      width: 100%;
      text-align: left;
    }
  }
  .services {
    max-width: 68.25rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    .services-item {
      color: rgb(255, 255, 255);
      display: flex;
      position: relative;
      img,
      .mask {
        width: 100%;
      }
      .mask {
        position: absolute;
        background: rgba(0, 150, 255, 0.8);
        .services-title {
          font-size: 1rem;
        }
        .services-content {
          font-size: .75rem;
        }
      }
    }
  }
  .footer {
    font-size: .75rem;
    color: white;
    text-align: left;
    display: flex;
    align-items: center;
  }
}
</style>
