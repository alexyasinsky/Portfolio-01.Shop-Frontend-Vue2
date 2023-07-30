import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'

import Vue from 'vue'
import store from './store/index.js';
import App from './App.vue'


// import './layout/styles/style.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
