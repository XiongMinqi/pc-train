import service from './index'

export default {
    // 登录
    login(data) {
        return service.req('login',
            data
        )
    },
    //首页请求消息条数
    getNumber() {
        return service.req('ksExam/getByMeCount')
    },
    //查看个人信息
    checkUser(id){
        return service.req(`people/getById?id=${id}`)
    }
}