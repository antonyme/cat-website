import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Toasted from 'vue-toasted'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(Toasted, {
  position: 'bottom-right',
  theme: 'bubble',
  duration: 3000,
  singleton: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
