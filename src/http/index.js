import axios from "axios"
import router from "../router"

// 创建axios配置对象
const service = axios.create()

// 接口基础路径
service.defaults.baseURL = "http://localhost:8080"

// 超时时间
service.defaults.timeout = 10000
    // 请求头类型
service.defaults.headers.post["Content-Type"] = "application/json"

// 请求拦截器
service.interceptors.request.use(
    config => {
        let token = localStorage.getItem("token")
            // 每次请求 都在请求头带上token
        if (token) {
            config.headers['x-auth-token'] = "Bearer " + token
        }
        return config
    },
    err => {
        console.log(err)
        return Promise.reject(err)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    err => {
        if (err.response.status === 401) {
            router.push("/login")
        }
    }
)

service.req = function(...params) {
    if (params.length === 1) {
        return service.get(params[0])
    }
    if (params.length === 2) {
        console.log(params,111)
        return service.post(params[0], params[1])
    }
}

export default service