import {List} from 'antd-mobile'
import {Iconfont} from 'components'
import moment from 'moment'
import styles from './CommentPanel.less'

const CommentPanel = ({avatar, author, likes, content, time, reply_to}) => {
  return (
    <List.Item
      wrap
      onClick={e => e}
      className={styles.CommentPanel}
    >
      <div className="content_left">
        <img src={avatar}/>
      </div>
      <div className="content_right">
        <div className="comment_header">
          <div className="comment_header_left">
            <span>{author}</span>
          </div>
          <div className="comment_header_right">
            <Iconfont type="fabulous" size="xs">{likes}</Iconfont>
          </div>
        </div>
        <div className="comment_body">
          <div className="comment_content">
            <p>{content}</p>
            {
              reply_to &&
              <p>
                <strong>//{reply_to.author}:</strong>{reply_to.content}
              </p>
            }
          </div>
          <div className="comment_footer">
            <div className="comment_time">{moment.unix(time).format('MM-DD HH:MM')}</div>
          </div>
        </div>
      </div>
    </List.Item>
  )
}

export default CommentPanel
