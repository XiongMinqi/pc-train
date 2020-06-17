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
    getTestInfo(page, pageSize) {
        return axios.get(`ksExam/getByMe?page=${page}&limit=${pageSize}`)
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