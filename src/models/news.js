import {getNews} from 'services/news'
import {effects} from 'dva/saga'

const {call, put} = effects

function* getNewsData({payload: {type, date}}) {
  const {data} = yield call(getNews, `${type}${date ? `/${date}` : ''}`)
  if (type === 'latest') {
    yield put({
      type: 'news/setLatestNews',
      payload: data
    })
  } else {
    yield put({
      type: 'news/setBeforeNews',
      payload: data
    })
  }
  return data.date
}

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
          dispatch({type: 'initNews'})
        }
      })
    }
  },

  effects: {

    * initNews(_, {call}) {
      //初始化时分别获取今天、昨天、前天的热闻
      const date_latest = yield call(getNewsData, {
        payload: {
          type: 'latest'
        }
      })

      const date_before = yield call(getNewsData, {
        payload: {
          type: 'before',
          date: date_latest
        }
      })

      yield call(getNewsData, {
        payload: {
          type: 'before',
          date: date_before
        }
      })
    },
    * getNews({payload}, {call}) {
      yield call(getNewsData, {
        payload: {
          type: 'before',
          date: payload
        }
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
