import pathToRegexp from 'path-to-regexp'
import {getNews, getNewsExtra} from "services/news"

export default {

  namespace: 'detail',

  state: {},

  subscriptions: {
    setup({dispatch, history}) {
      history.listen(({pathname}) => {
        const match = pathToRegexp('/detail/:id').exec(pathname)
        if (match) {
          dispatch({type: 'getDetail', payload: match[1]})
        }
      })
    }
  },

  effects: {
    * getDetail({payload}, {call, put}) {
      const data = yield call(getNews, payload)
      //获取评论、点赞等额外信息
      const extraData = yield call(getNewsExtra, data.data.id)

      yield put({
        type: 'setDetail',
        payload: {
          ...data.data,
          extra_data: {
            ...extraData.data
          }
        }
      })
    }
  },

  reducers: {
    setDetail(_, {payload}) {
      return {...payload}
    },
    clearDetail() {
      return {}
    }
  },

}
