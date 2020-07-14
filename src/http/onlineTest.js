import axios from 'axios'


axios.defaults.timeout = 10000
const isProduction = process.env.NODE_ENV === "production"
// 接口基础路径
axios.defaults.baseURL = isProduction ? "../" : ""
export default {
    getTestInfo(data) {
        return axios.post(`ksExam/getByMe`, data)
    },
    //考试页面
    onlineTest(id) {
        return axios.get(`tkPaper/getWithDefaultChapterQuestionById?id=${id}`)
    },
    //提交试卷
    submitPaper(data) {
        return axios.post('ksExam/submitExamByMe', data)
    }
}