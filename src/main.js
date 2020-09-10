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
Vue.prototype.timeFormat = (time) => {
  let clock = "";
  let d = new Date(time);
  let year = d.getFullYear(); //年
  let month = d.getMonth() + 1; //月
  let day = d.getDate(); //日
  let hh = d.getHours(); //时
  let mm = d.getMinutes(); //分
  let ss = d.getSeconds(); //秒
  clock += year + "/";
  if (month < 10) clock += "0";
  clock += month + "/";
  if (day < 10) clock += "0";
  clock += day + " ";
  if (hh < 10) clock += "0";
  clock += hh + ":";
  if (mm < 10) clock += "0";
  clock += mm;
  return clock;
}



Vue.prototype.$api = api
Vue.prototype.$grade = grade
Vue.prototype.$onlineTest = onlineTest
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')