import {List} from 'antd-mobile'
import {Iconfont} from 'components'
import classnames from 'classnames'
import moment from 'moment'
import styles from './CommentPanel.less'

class CommentPanel extends React.Component {
  state = {
    toggled: false
  }

  toggleComment = e => {
    e.stopPropagation()
    this.setState({toggled: !this.state.toggled})
  }

  componentDidMount() {
    if (this.reply) {
      const {offsetHeight} = this.reply

      if (offsetHeight > 64) {
        this.setState({toggled: true, showToggledBtn: true})
      }
    }
  }

  render() {

    const {avatar, author, likes, content, time, reply_to} = this.props
    const {showToggledBtn} = this.state

    return (
      <div className={styles.CommentPanel}>
        <List.Item
          wrap
          onClick={e => e}
          className={classnames({'am-list-item-active': false})}
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
                  <p ref={el => this.reply = el} className={classnames("reply_text", {toggled: this.state.toggled})}>
                    <strong>//{reply_to.author} :</strong>
                    <span> {reply_to.content}</span>
                  </p>
                }
              </div>
              <div className="comment_footer">
                <div className="comment_time">{moment.unix(time).format('MM-DD HH:MM')}</div>
              </div>
            </div>
          </div>
        </List.Item>
        {showToggledBtn && <div className={styles.comment_toggleBtn} onClick={this.toggleComment}>展开</div>}
      </div>
    )
  }
}

export default CommentPanel
