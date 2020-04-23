import axios from 'axios'
axios.defaults.timeout = 10000
// axios.defaults.baseURL = "http://39.104.70.60:8080/"
export default {
    getTestInfo(offset, limit) {
        return axios.get(`ksExam/getByMe?offset=${offset}&limit=${limit}`)
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