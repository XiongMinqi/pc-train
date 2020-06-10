// import axios from "axios"
axios.defaults.timeout = 10000
// axios.defaults.baseURL = "http://39.104.70.60:8080/"
const isProduction = process.env.NODE_ENV === "production"
// 接口基础路径
axios.defaults.baseURL = isProduction ? "http://39.104.70.60:8080" : ""
export default {
    // 登录
    login(data) {
        return axios({
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            // baseURL: 'http://39.104.70.60:8080/',
            params: {
                username: data.username,
                password: data.password,
                "remember-me": data["remember-me"]
            },
            url: `login`
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
    checkNumber() {
        return axios.get('people/isPhoneNumberDuplicate')
    },
    //获取我的看板数据
    getMyMsg() {
        return axios.get('ksExam/getKanbanByMe')
    },
    //获取在线学习附件
    getLearn(data) {
        return axios.post('courseware/page', data)
    },
    //获取课件的url
    geturl(id) {
        return axios.get(`courseware/getAttachmentURL?coursewareId=${id}`)
    },
    // 随机生成题目
    getRandomQuestion(data) {
        return axios.post("me/listQuestionByRandom", data)
    },
    //获取我的学习记录
    getStudyRecord(page, limit) {
        return axios.get(`me/listCoursewareLog?page=${page}&limit=${limit}`)
    },
    //保存我的学习记录
    saveMyLog(data) {
        return axios.get(`me/saveCoursewareLog?coursewareId=${data.coursewareId}&minutes=${data.minutes}`)
    },
    //统计在线人数，给后台发信息
    sendInfo() {
        return axios.get('heartbeat')
    },
    //新闻公告
    getNews(data){
        return axios.post("news/getAll",data)
    }
}