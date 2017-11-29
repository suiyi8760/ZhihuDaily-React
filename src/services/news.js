import {request, config} from 'utils'

const {api} = config
const {news} = api

export async function getNews(type) {
  return request(`${news}/${type}`, {
    methods: 'get'
  })
}
