import {getThemes} from 'services/global'

export default {

  namespace: 'global',

  state: {
    themeList: []
  },

  subscriptions: {
    setup({dispatch}) {
      dispatch({type: 'getThemeList'})
    }
  },

  effects: {
    * getThemeList(_, {put, call}) {
      const {data} = yield call(getThemes)
      yield put({type: 'setThemes', payload: data.others})
    }
  },

  reducers: {
    setThemes(state, {payload}) {
      return {
        ...state,
        themeList: payload
      }
    }
  },

}
