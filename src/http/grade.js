// import axios from 'axios'
axios.defaults.timeout = 10000
// axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token')
axios.interceptors.request.use(
    config => {
        let token = localStorage.getItem("token")
            // 每次请求 都在请求头带上token
        if (token) {
            config.headers['x-auth-token'] = token
        }
        return config
    },
    err => {
        console.log(err)
        return Promise.reject(err)
    }
)
const isProduction = process.env.NODE_ENV === "production"
// 接口基础路径
axios.defaults.baseURL = isProduction ? "http://39.104.70.60:8080" : ""
export default {
    //获取已提交的考试信息
    submitExam() {
        return axios.post('ksExam/getMySubmitExam')
    },
    //获取科目名称
    getdict() {
        return axios.get(`getDict?keys=科目名称&keys=专业名称&keys=题目类型&keys=部门名称`)
    },
    //获取考试统计
    getStatistics() {
        return axios.get('ksExam/getMyStatistics')
    },
    //获取考试记录
    getExam(page, pageSize, status) {
        return axios.post(`ksExam/getMySubmitExam`, {
            page: page,
            limit: pageSize,
            object: {
                status: status
            }
        })
    },
    //获取考试记录数目
    gettestNumber() {
        return axios.get(`ksExam/getMyTotalExamCount`)
    },
    //获取已提交试卷
    getSubmitPaper(id) {
        return axios.get(`ksExam/getSubmitPaper?submitId=${id}`)
    },
    //获取错题集
    getMistake(page, limit, questionType) {
        return axios.post("ksExam/getMyWrongQuestion", {
            page: page,
            limit: limit,
            object: {
                questionType: questionType
            }
        })
    },
    //获取所有题目类型
    getAllQuestionType() {
        return axios.get(`getDict?keys=题目类型`)
    },
    //根据id获取题目具体详情
    getErrorDetail(id) {
        return axios.get(`tkQuestion/getByIdWithOptionAndAnswer?id=${id}`)
    },
    //提交练习
    submitPractise(data) {
        return axios.post("me/addExerciseLog", {
            costSeconds: data.costSeconds,
            questionNumber: data.questionNumber,
            rightNumber: data.rightNumber
        })
    },
    //获取练习记录(一个月内)
    getPractiseRecord(data) {
        return axios.post("me/getExerciseLogByPage", {
            page: data.page,
            limit: data.limit,
            object: {}
        })
    },
    //储存考试数据到服务器
    saveExamRunningData(str) {
        return axios.post("me/saveExamRunningData", {
            data: str
        })
    },
    //获取考试数据
    getExamRunningData() {
        return axios.get("me/getExamRunningData")
    },
    //获取课程表
    getCourseList() {
        return axios.post("planCourse/listByTime", {
            timeRange: 1
        })
    },
    //根据id获取课程
    getDetailById(id) {
        return axios.get(`planCourse/getById?id=${id}`)
    },
    //获取人员头像
    getPicture(id) {
        return axios.get(`people/getAvatarURL?peopleId=${id}`)
    },
    //是否参加过课程
    isJoinCourse(id) {
        return axios.get(`me/isAttendedPlanCourse?planCourseId=${id}`)
    },
    //是否评论过课程
    isCommentCourse(id) {
        return axios.get(`me/isCommentedPlanCourse?planCourseId=${id}`)
    },
    //提交评论
    submitComment(data) {
        return axios.post("me/commentPlanCourse", {
            comment: data.comment,
            planCourseId: data.planCourseId,
            score: data.score,
            teacherScore: data.teacherScore
        })
    },
    //查看全部评价
    checkAllComments(data){
        return axios.post("planCourse/pageCommentByPlanCourse",data)
    },
    //查看积分
    checkScore(){
        return axios.get("me/sumRewardPoint")
    },
    //获取我的积分记录
    getMyScoreList(data){
        return axios.post("me/listRewardPointLog",data)
    },
    //获取积分排名
    getScoreRank(){
        return axios.get("people/getRewardPointRank")
    },
    //查看全部评论概况
    getTotalCommentsRank(id){
        return axios.get(`planCourse/analyzeComment?planCourseId=${id}`)
    }
}