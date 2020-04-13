import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//样式文件一定要引入
Vue.use(ElementUI);
// 设置axios
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/apis'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

