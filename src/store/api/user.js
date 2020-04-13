import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/v1/admin/user/login',
    method: 'post',
    data
  })
}

export function getUserRole(userID) {
  return request({
    url: `/v1/admin/users/${userID}/role`,
    method: 'get'
  })
}
