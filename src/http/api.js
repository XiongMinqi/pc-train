import axios from "axios"
axios.defaults.timeout = 10000
export default {
    // 登录
    login(data) {
        return axios({
            Headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method:"POST",
            url:`login?username=${data.username}&password=${data.password}&"remeber-me"=${data["remeber-me"]}`
        })
    },
    //首页请求消息条数
    getNumber() {
        return axios.get('ksExam/getByMeCount')
    },
    //查看个人信息
    checkUser(id) {
        return axios.get(`people/getById?id=${id}`)
    },
    //获取个人信息
    getUser() {
        return axios.get('people/getByMe')
    },
    //获取部门和专业
    getSubject() {
        return axios.get('getDict?keys=部门名称&keys=专业名称')
    },
    //修改个人信息
    resetPersonalMsg(data) {
        return axios.post('people/update', data)
    },
    //退出登录
    logout() {
        return axios.post('logout')
    },
    //手机号是否重复
    checkNumber(){
        return axios.get('/people/isPhoneNumberDuplicate')
    }
}