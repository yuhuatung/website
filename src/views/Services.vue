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
        <img :src="getImgUrl(item.image)" >
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
// import { fetchService } from "@/api/serviceArticle";

export default {
  name: "Services",
  props: ["screenwidth"],
  created() {
    // fetchService([]).then(response => {
    //   if (response.success) {
    //     this.services = response.rows;
    //   }
    // });
  },
  data() {
    return {
      stepBottom: 50, //此数据是控制动画快慢的
      services: [
        {
          "title": "諮詢服務",
          "content": "標準化/戰略技術/採用評估/決策/POC/指導",
          "image": "service_imge_step01.jpg"
        },
        {
          "title": "實施服務",
          "content": "設計/架構師/計劃/構建",
          "image": "service_imge_step02.jpeg"
        },
        {
          "title": "培訓服務",
          "content": "標准/定制/限制條件",
          "image": "service_imge_step03.jpg"
        },
        {
          "title": "託管服務",
          "content": "全天候24小時/遠程與現場/項目維護駐留或支持",
          "image": "service_imge_step04.jpeg"
        },
        {
          "title": "測試服務",
          "content": "取得修正資訊創造更好的成果",
          "image": "service_imge_step05.jpeg"
        },
        {
          "title": "開發服務",
          "content": "Java和企業系統集成",
          "image": "service_imge_step06.jpg"
        }]
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
        font-size: 96px;
        top: 80px;
        left: 40px;
      }
      .smallLogo {
        font-size: 64px;
        top: 180px;
        left: 50px;
      }
      .our-service {
        font-size: 16px;
        position: absolute;
        width: 150px;
        height: 56px;
        right: 312px;
        bottom: 180px;
        img {
          width: 32px;
          padding-right: 10px;
        }
      }
      .service-content {
        position: absolute;
        bottom: 80px;
        right: 50px;
        max-width: 413px;
        font-size: 14px;
      }
    }
    .services {
      min-width: 1056px;
      padding: 0 20px;
      width: 100%;
      .services-item {
        margin: 0 4px 8px;
        display: flex;
        position: relative;
        img,
        .mask {
          max-width: 344px;
          height: 229px;
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
      min-width: 1050px;
      text-align: left;
      margin: 60px auto 30px;
      max-width: 1050px;
      padding: 0 20px;
      width: 100%;
      justify-content: center;
      .footer-left {
        flex: 1;
        margin-right: 20px;
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
        font-size: 96px;
        top: 80px;
        left: 40px;
      }
      .smallLogo {
        font-size: 64px;
        top: 180px;
        left: 50px;
      }
      .our-service {
        font-size: 16px;
        position: absolute;
        width: 150px;
        height: 56px;
        right: 30px;
        bottom: 150px;
        img {
          width: 32px;
          padding-right: 10px;
        }
      }
      .service-content {
        margin: 60px auto;
        max-width: 413px;
        font-size: 14px;
      }
    }
    .services {
      width: 100%;
      .services-item {
        margin: 10px;
        img,
        .mask {
          max-width: 344px;
        }
        .mask {
          bottom: 0;
          .services-title {
            margin-top: 15px;
          }
          .services-content {
            margin-top: 15px;
            margin-bottom: 15px;
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
        width: 344px;
        padding: 0 3px;
        margin: 10px;
      }
    }
  }
}
@media screen and (max-width: $smallWidth) {
  .services-body {
    background-color: rgb(3, 16, 47);
    padding-bottom: 60px;
    .top {
      width: 100vw;
      position: relative;
      .sleep-video {
        width: 100vw;
      }
      .bigLogo {
        font-size: 24px;
        top: 100px;
        left: 20px;
      }
      .smallLogo {
        font-size: 24px;
        top: 130px;
        left: 20px;
      }
      .our-service {
        font-size: 12px;
        bottom: 90px;
        right: 30px;
        // width: 116px;
        padding: 7px;
        img {
          width: 15px;
          margin-right: 5px;
        }
      }
      .service-content {
        margin: 20px auto;
        max-width: 85%;
        font-size: 12px;
      }
    }
    .services {
      width: 90%;
      .services-item {
        margin: 10px;
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
            margin-top: 15px;
          }
          .services-content {
            margin-top: 15px;
            margin-bottom: 15px;
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
        padding: 0 3px;
        margin: 10px;
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
    max-width: 1092px;
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
          font-size: 16px;
        }
        .services-content {
          font-size: 12px;
        }
      }
    }
  }
  .footer {
    font-size: 12px;
    color: white;
    text-align: left;
    display: flex;
    align-items: center;
  }
}
</style>