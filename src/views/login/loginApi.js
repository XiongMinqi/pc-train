/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import store from '../store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; //样式文件一定要引入
Vue.use(ElementUI);

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export default {
    //登录
    login(params) {
        return axios.post('/login', params)
    }
}