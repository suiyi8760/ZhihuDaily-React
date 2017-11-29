import {NavBar} from 'antd-mobile'
import {connect} from 'dva'
import {Switch, Route, Redirect, Link} from 'dva/router'
import {Iconfont} from 'components'
import Detail from 'routes/detail'
import styles from './DetailLayout.less'

@connect(
  ({detail: {id}, comment: {comments, popularity}, loading}) => ({comments, popularity, id, loading})
)
class DetailLayout extends React.Component {
  render() {
    const {dispatch, loading, history, match, comments, popularity, id} = this.props
    const isLoading = loading.effects['comment/getExtraData']

    return (
      <div className={styles.DetailLayout}>
        <NavBar
          icon={<Iconfont type="back"/>}
          onLeftClick={e => {
            history.goBack()
            //返回时清空详情页的state
            dispatch({type: 'detail/clearDetail'})
          }}
          rightContent={[
            <Iconfont key={0} type="share" style={{marginRight: '30px'}}/>,
            <Iconfont key={1} type="collect" style={{marginRight: '30px'}}/>,
            <Link key={2} to={`/comment/${id}`}>
              <Iconfont type="comment" style={{marginRight: '14px'}}>
                {isLoading ? '...' : comments}
              </Iconfont>
            </Link>,
            <Iconfont key={3} type="fabulous">
              {isLoading ? '...' : popularity}
            </Iconfont>

          ]}
        />
        <Switch>
          <Route path={`${match.url}/:id`} component={Detail}/>
          <Route exact path={`${match.url}`} component={() => <Redirect to="/"/>}/>
        </Switch>
      </div>
    )
  }
}

export default DetailLayout
