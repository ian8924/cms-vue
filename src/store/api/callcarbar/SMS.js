import request from '@/utils/request'

export function send_SMS(data) {
  return request({
    url: `/v1/sms`,
    method: 'post',
    data: data
  })
}

export function get_sms_list() {
  return request({
    url: `/v1/sms`,
    method: 'get'
  })
}

export function send_SMS_batch(data) {
  return request({
    url: `/v1/sms/batch`,
    method: 'post',
    data: data
  })
}
