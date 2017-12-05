import {Accordion} from 'antd-mobile'
import {connect} from 'dva'
import {Iconfont} from 'components'
import CommentPanel from './CommentPanel'
import styles from './CommentBody.less'

const getCommentList = data => data.map(item => {
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

const Comment = ({commentType, commentsNum, commentData}) => {
  switch (commentType) {
    case 'short':
      return (
        <div className={styles.ShortComment}>
          <Accordion>
            <Accordion.Panel header={` ${commentsNum} 条短评`}>
              <div>
                {
                  getCommentList(commentData)
                }
              </div>
            </Accordion.Panel>
          </Accordion>
        </div>
      )
    case 'long':
      return (
        <div>
          <div className={styles.long_comment_title}> {commentsNum} 条长评</div>
          <div>
            {
              getCommentList(commentData)
            }
          </div>
        </div>
      )
    default:
      return null
  }
}

export default Comment
