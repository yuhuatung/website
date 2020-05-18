<template>
  <div class="customers-body">
    <div class="top">
      <div class="bigLogo">Success Case
      </div>
      <div class="smallLogo">Our Customers
      </div>
      <div class="customer-content">
        Wanlian has been involved in many projects, utilizing an amalgamation of various solutions.
      </div>
    </div>
    <div class="customers"></div>
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
    height: 750px;
  }
  .tooter{

  }
}
</style>