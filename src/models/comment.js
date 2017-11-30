import pathToRegexp from 'path-to-regexp'
import {getExtra, getLongComment, getShortComment} from "services/comment"

export default {

  namespace: 'comment',

  state: {
    longComment: [],
    shortComment: []
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen(({pathname}) => {
        const match = pathToRegexp('/comment/:id').exec(pathname)
        if (match) {
          const id = match[1]
          dispatch({type: 'getExtraData', payload: id})
          dispatch({type: 'getComments', payload: id})
        }
      })
    }
  },

  effects: {
    * getExtraData({payload}, {call, put}) {
      //获取评论、点赞等额外信息
      const data = yield call(getExtra, payload)

      yield put({
        type: 'setExtraData',
        payload: data.data
      })
    },
    * getComments({payload}, {call, put}) {
      const {data: longComment} = yield call(getLongComment, payload)
      const {data: shortComment} = yield call(getShortComment, payload)

      yield put({
        type: 'setCommentData',
        payload: {
          longComment,
          shortComment
        }
      })
    }
  },

  reducers: {
    setExtraData(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },
    setCommentData(state, {payload: {longComment, shortComment}}) {
      return {
        ...state,
        longComment,
        shortComment
      }
    },
    clearComments() {
      return {}
    }
  },

}
