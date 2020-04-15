import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import grade from './http/grade'
import Axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; //样式文件一定要引入
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
Vue.prototype.$api = api
Vue.prototype.$grade = grade
Vue.use(ElementUI);
// 设置axios
Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '/apis'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')