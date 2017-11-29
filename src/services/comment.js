import {request, config} from 'utils'

const {api} = config
const {newsExtra, comment} = api

export async function getExtra(id) {
  return request(`${newsExtra}/${id}`, {
    methods: 'get'
  })
}

export async function getLongComment(id) {
  return request(`${comment}/${id}/long-comments`, {
    methods: 'get'
  })
}

export async function getShortComment(id) {
  return request(`${comment}/${id}/short-comments`, {
    methods: 'get'
  })
}
