import {Accordion} from 'antd-mobile'
import {connect} from 'dva'
import {Iconfont} from 'components'
import CommentPanel from './CommentPanel'
import styles from './ShortComment.less'

@connect(({comment}) => comment)
class LongComment extends React.Component {
  render() {

    const {short_comments, shortCommentData} = this.props

    return (
      <div className={styles.ShortComment}>
        <Accordion>
          <Accordion.Panel header={` ${short_comments} 条短评`}>
            <div>
              {
                shortCommentData && shortCommentData.map(item => {
                  const {id, avatar, author, likes, content, time} = item
                  const commentPanelProps = {
                    avatar,
                    author,
                    likes,
                    content,
                    time
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
          </Accordion.Panel>
        </Accordion>
      </div>
    )
  }
}

export default LongComment
