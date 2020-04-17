import axios from 'axios'
axios.defaults.timeout = 10000
export default {
    getTestInfo(offset,limit){
        return axios.get(`ksExam/getByMe?offset=${offset}&limit=${limit}`)
    }
}