import request from '../utils/request'

export function sendContact(query) {
  return request({
    url: '/api/front/v1/contact',
    method: 'post',
    data: query
  })
}

