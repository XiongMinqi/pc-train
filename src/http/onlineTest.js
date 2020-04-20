import axios from 'axios'
axios.defaults.timeout = 10000
export default {
    getTestInfo(offset, limit) {
        return axios.get(`ksExam/getByMe?offset=${offset}&limit=${limit}`)
    },
    //考试页面
    onlineTest(id) {
        return axios.get(`tkPaper/getWithDefaultChapterQuestionById?id=${id}`)
    },
}