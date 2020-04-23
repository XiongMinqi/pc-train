import axios from 'axios'
axios.defaults.timeout = 10000
// axios.defaults.baseURL = "http://39.104.70.60:8080/"
export default {
    //获取已提交的考试信息
    submitExam() {
        return axios.post('ksExam/getMySubmitExam')
    },
    //获取科目名称
    getdict() {
        return axios.get(`getDict?keys=科目名称`)
    },
    //获取考试统计
    getStatistics() {
        return axios.get('ksExam/getMyStatistics')
    },
    //获取考试记录
    getExam() {
        return axios.post('ksExam/getMySubmitExam')
    },
    //获取已提交试卷
    getSubmitPaper(id) {
        return axios.get(`ksExam/getSubmitPaper?submitId=${id}`)
    }
}