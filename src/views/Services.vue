<template>
  <div class="services-body">
    <div class="top">
      <div class="bigLogo">WeAre
      </div>
      <div class="smallLogo">professional
      </div>
      <div class="our-service" @click="toBottom(stepBottom)">
        Our Service
      </div>
      <div class="service-content">
        對於企業客戶，每一個決定都會產生影響，我們在這裡可以幫助您指導遷移或啟動過程中的動盪和壓力。 我們首先研究您的要求和需求，然後與我們經驗豐富的技術人員團隊一起開發可行的解決方案以及部署策略。
      </div>
    </div>
    <div class="services"></div>
    <div class="footer">
      <div class="footer-left">For Enterprise clients every decision has repercussions and we are here to help guide you through the turbulence and stress involved in migrations or start-ups. We start by delving into your requirements and needs, then working with our team of experienced technicians to develop a working solution as well as a deployment strategy.</div>
      <div class="footer-right">Consultation Services (Standardization, Strategic Technology and Adoption Assessment, Evaluation, POC, Mentoring) Implementation Services (Design, Architect, Plan and Build) Training Services (Standard or Customize) Managed Services (7/24 round the clock remote/on-site project nursing residency or support) Development Services (Java and Enterprise System Integration) Enterprise</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      stepBottom: 100, //此数据是控制动画快慢的
    };
  },
  computed: {
  },
  methods: {
    toBottom(i) {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      let height = scrollHeight - clientHeight - 10; //超出窗口上界的值就是底部的scrolTop的值
      document.documentElement.scrollTop += i;
      let c;
      if (document.documentElement.scrollTop < height) {
        c = setTimeout(() => this.toBottom(i), 16);
      } else {
        clearTimeout(c);
      }
    },
  },
  mounted() {}
};
</script>
<style lang="scss">
@import "../assets/style/utils/_variables.scss";
@media screen and (min-width: $bigWidth) {
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
}
@media screen and (max-width: $smallWidth) {
}
.services-body {
  background-image:url("~@/assets/img/recruitment.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%;
  .top{
    height: 750px;
    color: white;
    position: relative;
    .bigLogo{
      font-size: 96px;
      position: absolute;
      top: 80px;
      left: 40px;
    }
    .smallLogo{
      font-size: 64px;
      position: absolute;
      top: 180px;
      left: 50px;
    }
    .our-service{
      font-size: 16px;
      position: absolute;
      bottom: 180px;
      right: 300px;
      width: 150px;
      height: 56px;
      background-color: rgba(232, 235, 237, 0.5);
      line-height: 56px;
      padding-left: 10px;
      cursor: pointer;
    }
    .service-content{
      font-size: 14px;
      position: absolute;
      bottom: 80px;
      right: 50px;
      width: 413px;
      text-align: left;
    }
  }
  .services{
    height: 750px;
  }
  .tooter{

  }
}
</style>