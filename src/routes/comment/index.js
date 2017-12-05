import {connect} from 'dva'
import {ScrollView, LoadingHOC} from 'components'
import CommentBody from './CommentBody'

const Comment = ({long_comments, longCommentData, short_comments, shortCommentData}) => {
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
      />
    </ScrollView>
  )
}

export default connect(({comment}) => comment)(LoadingHOC(Comment, {loadingType: 'comment', loadingModel: 'models'}))
