import {request, config} from 'utils'

const {api} = config
const {themes} = api

export async function getThemes() {
  return request(themes, {
    methods: 'get'
  })
}
