import request from '@/utils/request'

// 專案管理
export function get_project_list() {
  return request(
    {
      url: '/v1/edm/campaigns',
      method: 'get'
    }
  )
}

export function get_project_content(id) {
  return request({
    url: `/v1/edm/campaigns/${id}`,
    method: 'get'
  })
}

export function edit_project_content(id, content) {
  return request({
    url: `/v1/edm/campaigns/${id}`,
    method: 'put',
    data: content
  })
}

export function add_project_content(content) {
  return request({
    url: `/v1/edm/campaigns`,
    method: 'post',
    data: content
  })
}

// EDM管理
export function get_EDM_list(id) {
  return request({
    url: `/v1/edm/campaigns/${id}/emails`,
    method: 'get'
  })
}

export function upload_EDM_template(projectID, edmID) {
  return `${process.env.VUE_APP_BASE_API}/v1/edm/campaigns/${projectID}/emails/${edmID}/template`
}

export function add_EDM(projectID, content) {
  return request({
    url: `/v1/edm/campaigns/${projectID}/emails`,
    method: 'post',
    data: content
  })
}

export function get_EDM_content(project_id, edm_id) {
  return request({
    url: `/v1/edm/campaigns/${project_id}/emails/${edm_id}`,
    method: 'get'
  })
}

export function edit_EDM(project_id, edm_id, content) {
  return request({
    url: `/v1/edm/campaigns/${project_id}/emails/${edm_id}`,
    method: 'put',
    data: content
  })
}

export function send_EDM(project_id, edm_id, content) {
  return request({
    url: `/v1/edm/campaigns/${project_id}/emails/${edm_id}/send`,
    method: 'post',
    data: content
  })
}
// Email 群組管理
export function get_Email_nameList() {
  return request({
    url: `/v1/edm/contacts/groups`,
    method: 'get'
  })
}

export function add_Email_group(content) {
  return request({
    url: `/v1/edm/contacts/groups`,
    method: 'post',
    data: content
  })
}

export function get_Email_nameList_content(groupID) {
  return request({
    url: `/v1/edm/contacts/groups/${groupID}`,
    method: 'get'
  })
}

export function delete_Email_nameList(groupID) {
  return request({
    url: `/v1/edm/contacts/groups/${groupID}`,
    method: 'delete'
  })
}

// 黑名單

export function get_edm_blackList() {
  return request({
    url: `/v1/edm/contacts/blacklist`,
    method: 'get'
  })
}

export function get_failure_list() {
  return request({
    url: `/v1/edm/failure`,
    method: 'get'
  })
}

export function add_black_list(content) {
  return request({
    url: `/v1/edm/contacts/blacklist`,
    method: 'post',
    data: content
  })
}

export function add_failure(content) {
  return request({
    url: `/v1/edm/failure`,
    method: 'post',
    data: content
  })
}

