import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import { createProvider } from './vue-apollo'
import vuetify from './plugins/vuetify'
import '@/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  vuetify,
  render: h => h(App)
}).$mount('#app')
