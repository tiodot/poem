import Vue from 'vue'
import AV from 'leancloud-storage'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

AV.init({
  appId: "9pq709je4y36ubi10xphdpovula77enqrz27idozgry7x644",
  appKey: "364g5iu6q1f3hhwz8wruvmayu3vsap995wh4ws7tszor43np",
  serverURLs: 'https://avoscloud.com'
})

AV.setProduction(false)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
