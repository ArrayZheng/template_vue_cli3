import Vue from 'vue'

// locale
import i18n from '@/locales'

// router and store
import router from './router'
import store from './store'

// global utils
// ui library
import './utils/element-ui.demand'
// regist custom global components
// import './utils/registerGlobal'

// main component
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
