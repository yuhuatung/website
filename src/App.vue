<template>
  <div id="app">
    <div class="nav">
      <div>
        <Logo class="logo"/>
        <WanLian class="company"/>
      </div>
      <div class="link">
        <router-link to="/">首頁</router-link>
        <router-link to="/services">服務</router-link>
        <router-link to="/customers">顧客</router-link>
        <router-link to="/news">新聞</router-link>
        <router-link to="/jobs">人才招募</router-link>
        <router-link to="/contacts">聯繫</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Logo from '@/assets/svg/logo.svg';
import WanLian from '@/assets/svg/wanlian.svg';

export default {
  name: 'Home',
  components: {
    Logo,
    WanLian
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
.nav {
  // padding: 30px;
  margin: 0px auto;
  width: 1243px;
  height: 56px;
  opacity: 0.6;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  a {
    // font-weight: bold;
    color: #fff;
    text-decoration:none;
    margin-right: 40px;
    font-size: 12px;

    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
  .link{
     margin: 20px 65px auto;
  }
  .logo {
    width: 40px;
    height: 40px;
    margin: 10px;
  }
  .company {
    width: 69px;
    height: 40px;
    margin: 10px;
  }
}
</style>
