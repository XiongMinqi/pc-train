import axios from 'axios'
axios.defaults.timeout = 10000
export default {
    //获取已提交的考试信息
    submitExam() {
        return axios.post('/ksExam/getMySubmitExam')
    },
    //获取科目名称
    getdict(){
        return axios.get(`getDict?keys=科目名称`)
    },
    //获取考试统计
    getStatistics(){
        return axios.get('ksExam/getMyStatistics')
    }
}