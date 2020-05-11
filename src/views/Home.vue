<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/philosophy.jpg">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <transition name="fadeTitle">
      <div v-show="show" class="container title">
        {{data.homepage[0].title}}
      </div>
    </transition>
    <transition name="fadeTitle">
      <div v-show="show" class="container content">
        {{data.homepage[0].content}}
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import data from '@/assets/json/home.json'

export default {
  name: 'Home',
  data(){
    return{
      data: data,
      show: false
    }
  },
  components: {
    // HelloWorld
  },
  mounted() {
    var self = this;
    setInterval(function () {
      self.show = true;
    }, 100);
  }
}
</script>

<style lang="scss">
.home{
  margin: -56px auto;
  width: 1243px;
  height: 800px;
  position: relative;
  z-index: -1;
  img{
    width: 1243px;
    height: 800px;
  }
  .title{
    position: absolute;
    left: 20px;
    top: 135px;
    font-size: 80px;
    color:#fff;
    width: 400px;
    text-align: left;
  }
  .content{
    position: absolute;
    left: 20px;
    top: 335px;
    font-size: 30px;
    color:#fff;
    width: 400px;
    text-align: left;
  }
  .container {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  .fadeTitle-enter-active {
    transition: all .5s ease-out;
  }
  .fadeTitle-enter {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    transform: translate(0%, 100%);
  }
}
</style>
