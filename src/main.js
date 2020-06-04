import App from './App.vue'
import router from './router'
import store from './store/index'
import api from './http/api'
import grade from './http/grade'
import onlineTest from './http/onlineTest'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.use(VueVideoPlayer)
Vue.prototype.$api = api
Vue.prototype.$grade = grade
Vue.prototype.$onlineTest = onlineTest
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
