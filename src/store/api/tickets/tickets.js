import request from '@/utils/request'

// 票卡管理
export function get_tickets_all(data) {
  return request({
    url: '/v1/data/wallet/rowdata',
    method: 'post',
    data: data
  })
}

export function get_tickets_all_total(data) {
  return request({
    url: '/v1/data/wallet/totalcount',
    method: 'post',
    data: data
  })
}

export function get_tickets_opened(data) {
  return request({
    url: '/v1/data/wallet/open',
    method: 'post',
    data: data
  })
}

export function get_tickets_download(data) {
  return request({
    url: '/v1/data/wallet/download',
    method: 'post',
    data: data
  })
}

export function get_tickets_googlepay_download(data) {
  return request({
    url: '/v1/data/wallet/googlepay',
    method: 'post',
    data: data
  })
}

export function get_tickets_writtenoff(data) {
  return request({
    url: '/v1/data/wallet/qrcode',
    method: 'post',
    data: data
  })
}

export function get_tickets_writtenoff_total(data) {
  return request({
    url: '/v1/data/wallet/exchange',
    method: 'post',
    data: data
  })
}

export function get_tickets_roamingbar(data) {
  return request({
    url: '/v1/data/wallet/roaminbar',
    method: 'post',
    data: data
  })
}
