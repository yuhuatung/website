import request from '../utils/request'

export function addJobSubscriber(query) {
  console.log(query)
  return request({
    url: '/api/front/v1/jobs/subscribe',
    method: 'post',
    data: query
  })
}

