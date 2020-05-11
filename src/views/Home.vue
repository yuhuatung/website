<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/philosophy.jpg">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="title">{{myJson.homepage[0].title}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import json from '@/assets/json/home.json'

export default {
  name: 'Home',
  data(){
    return{
      myJson: json
    }
  },
  components: {
    // HelloWorld
  },
  mounted(){
    console.log(this.myJson)
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
    left: 100px;
    top: 100px;
  }
}
</style>
