import {getNews} from 'services/news'

export default {

  namespace: 'news',

  state: {
    latestLoad: '',
    top_stories: [],
    stories: {}
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen(({pathname}) => {
        if (pathname === '/news') {
          dispatch({type: 'getLatestNews'})
        }
      })
    }
  },

  effects: {
    * getLatestNews(_, {call, put}) {
      const data = yield call(getNews, 'latest')
      //初始化时分别获取今天、昨天、前天的热闻
      yield put({
        type: 'setLatestNews',
        payload: data.data
      })
      yield put({
        type: 'getBeforeNews',
        payload: data.data.date
      })
      yield put({
        type: 'getBeforeNews',
        payload: data.data.date - 1
      })
    },
    * getBeforeNews({payload}, {call, put}) {
      const data = yield call(getNews, `before/${payload}`)
      yield put({
        type: 'setBeforeNews',
        payload: data.data
      })
    }
  },

  reducers: {
    setLatestNews(state, {payload}) {
      return {
        ...state,
        latestLoad: payload.date,
        top_stories: payload.top_stories,
        stories: {
          ...state.stories,
          [payload.date]: payload.stories
        }
      }
    },
    setBeforeNews(state, {payload}) {
      return {
        ...state,
        latestLoad: payload.date,
        stories: {
          ...state.stories,
          [payload.date]: payload.stories
        }
      }
    }
  },

}
