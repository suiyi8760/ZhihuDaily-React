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
          const id = match[1]
          dispatch({type: 'getDetail', payload: id})
          dispatch({type: 'comment/getExtraData', payload: id})
        }
      })
    }
  },

  effects: {
    * getDetail({payload}, {call, put}) {
      const data = yield call(getNews, payload)

      yield put({
        type: 'setDetail',
        payload: data.data
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
