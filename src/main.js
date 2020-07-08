import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import router from './router'
import store from './store/index'
import api from './http/api'
import grade from './http/grade'
import onlineTest from './http/onlineTest'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import "./assets/common.css"
import 'vue-video-player/src/custom-theme.css'

//
import Axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vuex);



Vue.use(VueVideoPlayer)
//
Vue.prototype.$axios = Axios



Vue.prototype.$api = api
Vue.prototype.$grade = grade
Vue.prototype.$onlineTest = onlineTest
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
