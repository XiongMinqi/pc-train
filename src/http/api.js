// import axios from "axios"
axios.defaults.timeout = 10000
// axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token')
const isProduction = process.env.NODE_ENV === "production"
// axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token')
// axios.interceptors.request.use(
//     config => {
//         let token = localStorage.getItem("token")
//             // 每次请求 都在请求头带上token
//         if (token) {
//             config.headers['x-auth-token'] = token
//         }
//         return config
//     },
//     err => {
//         console.log(err)
//         return Promise.reject(err)
//     }
// )
// 接口基础路径
axios.defaults.baseURL = isProduction ? "../" : ""
export default {
    // 登录
    login(data) {
        return axios({
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'x-auth-token':null
            },
            method: "POST",
            // baseURL: 'http://39.104.70.60:8080/',
            params: data,
            url: `../../login`
        })
    },
    //首页请求未读消息
    getNumber() {
        return axios.post('me/listUnreadNotify')
    },
    //一键全读
    allRead(){
        return axios.post('me/readAllNotify')
    },
    //根据Id获取消息详情
    newsDetail(id){
        return axios.get(`system/getNotifyById?id=${id}`)
    },
    //标记消息为已读
    alreadyRead(id){
        return axios.get(`me/readNotify?notifyId=${id}`)
    },
    //查看历史消息
    checkHistory(data){
        return axios.post("me/pageNotify",data)
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
    //修改密码
    changePassword(data){
        return axios.post("people/resetMyPassword",data)
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
        return axios.post("me/pageNews",data)
    },
    //首页课程进度
    getCouese(data){
        return axios.post('me/countTodoPlanCourse',data)
    },
    //首页获取总积分
    getTotalScore(){
        return axios.get("me/sumRewardPoint")
    },
    //待完成学习任务
    getUndoMission(data){
        return axios.post('me/listAssignment',data)
    },
    //获取课件
    getCourseware(id){
        return axios.get(`assignment/listCourseware?assignmentId=${id}`)
    },
    //获取练习题
    getQuestion(id){
        return axios.get(`assignment/listQuestion?assignmentId=${id}`)
    },
    //提交学习任务课件时长
    submitTime(data){
        return axios.post("me/learnAssignmentCourseware",data)
    },
    //提交练习题
    submitPratise(data){
        return axios.post("me/submitAssignmentAnswer",data)
    },
    //获取提交练习答案
    getAnswer(id){
        return axios.get(`me/listAssignmentAnswers?assignmentId=${id}`)
    },
    //任务统计
    statistmission(data){
        return axios.post("me/listMyAssignmentLineChartItem",data)
    }
}