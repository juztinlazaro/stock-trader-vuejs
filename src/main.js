import Vue from 'vue'

import App from '@/appRoot/App.vue';
import router from '@/appRoot/router/route.config';
import store from '@/store/store';

import './assets/css/main.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
