import {NavBar} from 'antd-mobile'
import {connect} from 'dva'
import {Switch, Route, Redirect} from 'dva/router'
import {Iconfont} from 'components'
import Comment from 'routes/comment'
import styles from './CommentLayout.less'

@connect(({comment: {comments}}) => ({comments}) || {})
class CommentLayout extends React.Component {
  render() {

    const {match, history, comments} = this.props

    console.log(this.props);

    return (
      <div className={styles.CommentLayout}>
        <NavBar
          icon={<Iconfont type="back"/>}
          onLeftClick={e => {
            history.goBack()
          }}
          rightContent={[
            <Iconfont key={0} type="comment-pen"/>
          ]}
        >
          {comments} 条评论
        </NavBar>
        <Switch>
          <Route path={`${match}/:id`} component={Comment}/>
          <Route exact path={`${match.url}`} component={() => <Redirect to="/"/>}/>
        </Switch>
      </div>
    )
  }
}

export default CommentLayout
