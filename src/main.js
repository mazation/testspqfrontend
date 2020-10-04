import Vue from 'vue'
import App from './App.vue'
import router from './router'
import config from './config'
import store from './store'
import Paginate from 'vuejs-paginate'

new Vue({
  router,
  store,
  config,
  render: h => h(App),
}).$mount('#app')

Vue.component('paginate', Paginate)
