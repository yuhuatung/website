import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Dropdown, Menu, Icon, Button } from 'ant-design-vue';

Vue.use(Dropdown);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
