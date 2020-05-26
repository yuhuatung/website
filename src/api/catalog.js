import request from '../utils/request'

export function fetchAllCatalog(query) {
  return request({
    url: '/api/front/v1/catalog',
    method: 'get',
    data: query
  })
}

