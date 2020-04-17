import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/index'
import api from './http/api'
import grade from './http/grade'
import onlineTest from './http/onlineTest'
import Axios from 'axios'
import dayjs from 'dayjs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; //样式文件一定要引入

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$api = api
Vue.prototype.$grade = grade
Vue.prototype.$onlineTest = onlineTest
// 设置axios
Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '/apis'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
