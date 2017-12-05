import {connect} from 'dva'
import {ScrollView, LoadingHOC} from 'components'
import CommentBody from './CommentBody'

const Comment = ({
                   long_comments,
                   longCommentData,
                   short_comments,
                   shortCommentData,
                   dispatch,
                   match
                 }) => {
  const {id} = match.params
  return (
    <ScrollView>
      <CommentBody
        commentType="long"
        commentsNum={long_comments}
        commentData={longCommentData}
      />
      <CommentBody
        commentType="short"
        commentsNum={short_comments}
        commentData={shortCommentData}
        onChange={keys => {
          if (keys[0]) {
            dispatch({
              type: 'comment/getComments', payload: {
                id,
                type: 'short'
              }
            })
          }
        }}
      />
    </ScrollView>
  )
}

export default connect(({comment}) => comment)(
  LoadingHOC(Comment, {loadingType: 'comment', loadingModel: 'models'})
)
