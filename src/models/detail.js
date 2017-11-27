import pathToRegexp from 'path-to-regexp'
import {getNews} from "services/news"

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
      yield put({type: 'setDetail', payload: data.data})
    }
  },

  reducers: {
    setDetail(state, {payload}) {
      return {...payload}
    }
  },

}
