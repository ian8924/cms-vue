import axios from 'axios'
import { MessageBox } from 'element-ui'
import store from '@/store'
import { getCookie } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = `Bearer ${getCookie('token')}`
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(error) // for debug
    // token 錯誤或過期處理
    if (error.response.data.message === 'Unauthorized') {
      MessageBox.confirm('權限不足或過期,是否要重新登入', '權限不足', {
        confirmButtonText: '重新登入',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      })
    }
    return Promise.reject(error)
  }
)

export default service
