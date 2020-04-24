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
        return axios.get(`getDict?keys=科目名称&keys=专业名称`)
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
    }
}