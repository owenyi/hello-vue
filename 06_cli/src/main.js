import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import StatusComponent from './Status'; // 전역으로 사용 가능한 Component 등록

Vue.component('AppStatus', StatusComponent) // 전역으로 사용 가능

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
