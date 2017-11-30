import {NavBar} from 'antd-mobile'
import {connect} from 'dva'
import {Switch, Route, Redirect} from 'dva/router'
import {Iconfont} from 'components'
import Comment from 'routes/comment'
import styles from './CommentLayout.less'

@connect(({comment: {comments}, loading}) => ({comments, loading}))
class CommentLayout extends React.Component {
  render() {

    const {match, history, dispatch, comments, loading} = this.props
    const isLoading = loading.effects['comment/getExtraData']

    return (
      <div className={styles.CommentLayout}>
        <NavBar
          icon={<Iconfont type="back"/>}
          onLeftClick={e => {
            history.goBack()
            dispatch({type:'comment/clearComments'})
          }}
          rightContent={[
            <Iconfont key={0} type="comment-pen"/>
          ]}
        >
          {/*当comments为空时产生加载状态*/}
          {
            comments === undefined ?
              (isLoading ? '...' : comments) : comments
          } 条评论
        </NavBar>
        <Switch>
          <Route path={`${match.url}/:id`} component={Comment}/>
          <Route exact path={`${match.url}`} component={() => <Redirect to="/"/>}/>
        </Switch>
      </div>
    )
  }
}

export default CommentLayout
