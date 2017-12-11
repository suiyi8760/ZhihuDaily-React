import {Accordion} from 'antd-mobile'
import PropTypes from 'prop-types'
import {Iconfont} from 'components'
import {config} from 'utils'
import CommentPanel from './CommentPanel'
import styles from './CommentBody.less'

const {layoutSize: {navHeight, commentTitleHeight}} = config

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

const NoneComment = () => (
  <div className={styles.NoneComment}
       style={{height: document.documentElement.clientHeight - navHeight - commentTitleHeight * 2}}>
    <Iconfont type="sofa" size="lg"/>
    <span>深度长评虚位以待</span>
  </div>
)

class Comment extends React.Component {

  static contextTypes = {
    scrollEl: PropTypes.object,
    scrollAnimate: PropTypes.func
  }

  state = {
    keysChanged: false,
    keys: []
  }

  componentWillReceiveProps(nextProps) {
    const {scrollEl, scrollAnimate} = this.context
    console.log(this.state.keysChanged);
    if (nextProps.commentData !== this.props.commentData && this.state.keys[0] && this.state.keysChanged) {
      this.setState({keysChanged: false})
      setTimeout(() => {
        console.log(scrollEl, this.ShortComment.offsetTop)
        scrollAnimate(this.ShortComment.offsetTop)
      })
    }
  }

  render() {
    const {commentType, commentsNum, commentData, onChange} = this.props
    switch (commentType) {
      case 'short':
        return (
          <div className={styles.ShortComment} ref={el => this.ShortComment = el}>
            <Accordion onChange={keys => {
              this.setState({keys})
              if (keys[0] && !this.state.keysChanged) {
                this.setState({keysChanged: true})
              }
              onChange(keys)
            }}>
              <Accordion.Panel header={` ${commentsNum !== undefined ? commentsNum : '0'} 条短评`}>
                <div>
                  {getCommentList(commentData)}
                </div>
              </Accordion.Panel>
            </Accordion>
          </div>
        )
      case 'long':
        return (
          <div>
            <div className={styles.long_comment_title}> {commentsNum !== undefined ? commentsNum : '0'} 条长评</div>
            {
              commentsNum ?
                <div>{getCommentList(commentData)}</div> : <NoneComment/>
            }
          </div>
        )
      default:
        return null
    }
  }
}

export default Comment
