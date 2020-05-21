import axios from 'axios'
axios.defaults.timeout = 10000
// axios.defaults.baseURL = "http://39.104.70.60:8080/"
const isProduction = process.env.NODE_ENV === "production"
// 接口基础路径
axios.defaults.baseURL = isProduction ? "http://39.104.70.60:8080" : "http://localhost:8080"
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
        return axios.post("system/addExerciseLog", {
            costSeconds: data.costSeconds,
            peopleId: data.peopleId,
            questionNumber: data.questionNumber,
            rightNumber: data.rightNumber
        })
    },
    //获取练习记录(一个月内)
    getPractiseRecord(data) {
        return axios.post("system/getExerciseLogByPage", {
            page: data.page,
            limit: data.limit,
            object: {
                peopleId: data.peopleId
            }
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
    }
}