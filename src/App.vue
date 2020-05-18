<template>
  <div id="app">
    <div class="nav" ref="navWidth">
      <div class="logo">
        <Logo class="logo-img" />
        <router-link to="/"><WanLian class="company" /></router-link>
      </div>
      <div class="link">
        <router-link to="/services">服務</router-link>
        <router-link to="/customers">顧客</router-link>
        <!-- <router-link to="/news">新聞</router-link> -->
        <router-link to="/jobs">招募</router-link>
        <router-link to="/contacts">聯繫</router-link>
      </div>
    </div>
    <router-view :screenHight="screenHight" :screenwidth="screenwidth" />
  </div>
</template>
<script>
import Logo from "@/assets/svg/logo.svg";
import WanLian from "@/assets/svg/wanlian.svg";

export default {
  name: "Home",
  components: {
    Logo,
    WanLian
  },
  data() {
    return {
      screenHight: 0,
      screenwidth: 0,
    };
  },
  mounted() {
    let vm = this;
    vm.screenHight = document.documentElement.clientHeight;
    vm.screenwidth = vm.$refs.navWidth.offsetWidth;
    window.onresize = () => {
      // 通過捕獲系統的onresize事件觸發我們需要執行的事件
      vm.screenwidth = vm.$refs.navWidth.offsetWidth;
    };
  }
};
</script>
<style lang="scss">
@import "./assets/style/utils/_variables.scss";

*,
*::before,
*::after {
  box-sizing: unset;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #d6d6d6;
  border-radius: 1px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  line-height: unset;
}
@media screen and (min-width: $bigWidth) {
  .nav {
    width: 100vw;
    min-width: 1243px;
    justify-content: space-between;
    .link {
      a {
        color: #fff;
        margin-right: 40px;
      }
    }
  }
}
@media screen and (min-width: $smallWidth) and (max-width: $bigWidth) {
  .nav {
    width: 100vw;
    justify-content: space-between;
    .link {
      a + a {
        border-left: 1px solid #fff;
      }
      a {
        color: #fff;
        padding: 2px 20px;
      }
    }
  }
}
@media screen and (max-width: $smallWidth) {
  .nav {
    width: 100vw;
    justify-content: center;
    .link {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 60px;
      box-shadow: rgb(0, 0, 0) 0px 0px 1px inset;
      background-color: rgba(255, 255, 255, 0.9);
      justify-content: center;
      a + a {
        border-left: 1.5px solid rgb(214, 214, 214);
      }
      a {
        color: rgb(121, 121, 121);
        padding: 3px 4%;
      }
    }
  }
}
.nav {
  box-sizing: border-box;
  padding: 0 20px;
  margin: 0px auto;
  height: 56px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  a {
    // font-weight: bold;
    text-decoration: none;
    font-size: 12px;
    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
  .link {
    display: flex;
    align-items: center;
  }
  .logo {
    display: flex;
    align-items: center;
    .logo-img {
      width: 40px;
      height: 40px;
      // margin: 10px;
    }
    .company {
      width: 69px;
      height: 40px;
      // margin: 10px;
    }
  }
}
</style>
