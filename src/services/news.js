import {request, config} from 'utils'

const {api} = config
const {news, news_extra} = api

export async function getNews(type) {
  return request(`${news}/${type}`, {
    methods: 'get'
  })
}

export async function getNewsExtra(id) {
  return request(`${news_extra}/${id}`, {
    methods: 'get'
  })
}
