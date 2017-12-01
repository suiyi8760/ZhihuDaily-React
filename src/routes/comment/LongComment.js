import {connect} from 'dva'
import {Iconfont} from 'components'
import CommentPanel from './CommentPanel'
import styles from './LongComment.less'

@connect(({comment}) => comment)
class LongComment extends React.Component {
  render() {

    const {long_comments, longCommentData} = this.props

    return (
      <div>
        <div className={styles.long_comment_title}> {long_comments} 条长评</div>
        <div>
          {
            longCommentData && longCommentData.map(item => {
              const {id, avatar, author, likes, content, time, reply_to} = item
              const commentPanelProps = {
                avatar,
                author,
                likes,
                content,
                time,
                reply_to
              }

              return (
                <CommentPanel
                  key={id}
                  {...commentPanelProps}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default LongComment
