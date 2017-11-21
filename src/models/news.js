import {getNews} from 'services/news'

export default {

  namespace: 'news',

  state: {
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
      const data = yield call(getNews, '/latest')
      console.log(data)
      yield put({
        type: 'setLatestNews',
        payload: data.data
      })
    }
  },

  reducers: {
    setLatestNews(state, {payload}) {
      return {
        ...state,
        top_stories: payload.top_stories,
        stories: {
          ...state.stories,
          [payload.date]: payload.stories
        }
      }
    }
  },

}
