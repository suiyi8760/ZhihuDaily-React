import pathToRegexp from 'path-to-regexp'
import {getExtra, getLongComment, getShortComment} from "services/comment"

const typeMapFunc = {
  long: getLongComment,
  short: getShortComment
}

export default {

  namespace: 'comment',

  state: {
    longCommentData: [],
    shortCommentData: []
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen(({pathname}) => {
        const match = pathToRegexp('/comment/:id').exec(pathname)
        if (match) {
          const id = match[1]
          dispatch({type: 'getExtraData', payload: id})
          dispatch({type: 'getComments', payload: {id, type: 'long'}})
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
    * getComments({payload: {id, type}}, {call, put}) {
      const {data: {comments}} = yield call(typeMapFunc[type], id)

      yield put({
        type: 'setCommentData',
        payload: {
          type,
          data: comments
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
    setCommentData(state, {payload: {type, data}}) {
      return {
        ...state,
        [`${type}CommentData`]: data
      }
    },
    clearComments() {
      return {
        longCommentData: [],
        shortCommentData: []
      }
    }
  },

}
