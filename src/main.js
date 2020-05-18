// import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/index'
import api from './http/api'
import grade from './http/grade'
import onlineTest from './http/onlineTest'
// import Axios from 'axios'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'; //样式文件一定要引入
// import vueVideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.use(VueVideoPlayer)
// Vue.use(ElementUI);
// Vue.use(Vuex);
Vue.prototype.$api = api
Vue.prototype.$grade = grade
Vue.prototype.$onlineTest = onlineTest
// 设置axios
// Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = "http://39.104.70.60:8080/"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
