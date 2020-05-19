<template>
  <div class="customers-body">
    <div class="top">
      <video class="sleep-video" autoplay muted loop>
        <source src="https://www.308262.com/frontend/files/customers.mov" type="video/mp4">
      </video>
      <div class="bigLogo">Success Case
      </div>
      <div class="smallLogo">Our Customers
      </div>
      <div class="customer-content">
        Wanlian has been involved in many projects, utilizing an amalgamation of various solutions.
      </div>
    </div>
    <div class="customers">
      <img src="@/assets/img/icons8-expand_arrow-3_2x.png" class="arrow" />
    </div>
    <div class="footer">
      <div class="media">
        <img src="@/assets/img/icons8-facebook_new_2x.png" />
        <img src="@/assets/img/icons8-facebook_messenger_2x.png" />
      </div>
      <div class="company">WANLIAN TECHNOLOGY LIMITED</div>
    </div>
  </div>
</template>

<script>
</script>
<style lang="scss">
@import "../assets/style/utils/_variables.scss";
@media screen and (min-width: $bigWidth) {
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
}
@media screen and (max-width: $smallWidth) {
}
.customers-body {
  .top{
    height: 750px;
    color: white;
    position: relative;
    .sleep-video {
      left: 0;
      top: 0;
      position: fixed;
      // width: 100%;
      min-height: 100vh;
      min-width: 100vw;
      z-index: -20;
    }
    .bigLogo{
      font-size: 96px;
      position: absolute;
      top: 120px;
      left: 40px;
    }
    .smallLogo{
      font-size: 64px;
      position: absolute;
      top: 240px;
      left: 50px;
    }
    .customer-content{
      font-size: 24px;
      position: absolute;
      bottom: 80px;
      right: 50px;
      width: 413px;
      text-align: left;
    }
  }
  .customers{
    height: 1500px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #fff;
    .arrow{
      margin-top: 15px;
      width: 32px;
    }
  }
  .footer{
    height: 142px;
    background-color: rgb(94, 94, 94);
    display: flex;
    .media{
      margin-top: 45px;
      margin-left: 145px;
      img{
        width: 40px;
        margin-right: 30px;
      }
    }.company{
      margin-top: 56px;
      color: white;
      font-size: 16px;
    }
  }
}
</style>