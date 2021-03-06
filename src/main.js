import Vue from 'vue'
import App from './App.vue'
import router from './router'
import config from './config'
import store from './store'


new Vue({
  router,
  store,
  config,
  render: h => h(App),
}).$mount('#app')

