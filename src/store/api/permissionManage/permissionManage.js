import request from '@/utils/request'

// 權限管理
export function get_roles_list(roleID) {
  return request({
    url: `/v1/admin/roles`,
    method: 'get'
  })
}

export function get_role_rights(roleID) {
  return request({
    url: `/v1/admin/roles/${roleID}/right`,
    method: 'get'
  })
}

export function add_roles(name) {
  return request({
    url: '/v1/admin/roles',
    method: 'post',
    data: name
  })
}

export function delete_role(roleID) {
  return request({
    url: `/v1/admin/roles/${roleID}`,
    method: 'delete'
  })
}

export function edit_right(roleID, data) {
  return request({
    url: `/v1/admin/roles/${roleID}/right`,
    method: 'put',
    data: data
  })
}

// 帳戶管理

export function get_account_list() {
  return request({
    url: `/v1/admin/users`,
    method: 'get'
  })
}

export function add_account(data) {
  return request({
    url: '/v1/admin/user/register',
    method: 'post',
    data: data
  })
}

export function edit_account_role(userID, data) {
  return request({
    url: `/v1/admin/users/${userID}/role`,
    method: 'put',
    data: data
  })
}

export function delete_account(userID) {
  return request({
    url: `/v1/admin/users/${userID}`,
    method: 'delete'
  })
}
