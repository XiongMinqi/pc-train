import axios from 'axios'
axios.defaults.timeout = 10000
// axios.defaults.baseURL = "http://39.104.70.60:8080/"
const isProduction = process.env.NODE_ENV === "production"
// 接口基础路径
axios.defaults.baseURL = isProduction ? "http://39.104.70.60:8080" : "http://localhost:8081"
export default {
    getTestInfo(page, pageSize) {
        return axios.get(`ksExam/getByMe?page=${page}&limit=${pageSize}`)
    },
    //考试页面
    onlineTest(id) {
        return axios.get(`tkPaper/getWithDefaultChapterQuestionById?id=${id}`)
    },
    //提交试卷
    submitPaper(data) {
        return axios.post('ksExam/submitExam', data)
    }
}