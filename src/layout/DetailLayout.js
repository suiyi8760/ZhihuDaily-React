import {NavBar} from 'antd-mobile'
import {connect} from 'dva'
import {Switch, Route, Redirect} from 'dva/router'
import {Iconfont} from 'components'
import Detail from 'routes/detail'
import styles from './DetailLayout.less'

@connect(
  ({detail: {extra_data}, loading}) => ({...extra_data, loading})
)
class DetailLayout extends React.Component {
  render() {
    const {dispatch, loading, history, match, comments, popularity} = this.props
    const isLoading = loading.effects['detail/getDetail']

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
            <div key={0}>
              <Iconfont type="share" style={{marginRight: '30px'}}/>
              <Iconfont type="collect" style={{marginRight: '30px'}}/>
            </div>,
            <div key={1}>
              <Iconfont type="comment" style={{marginRight: '14px'}}>
                {isLoading ? '...' : comments}
                </Iconfont>
              <Iconfont type="fabulous">
                {isLoading ? '...' : popularity}
                </Iconfont>
            </div>
          ]}
        />
        <Switch>
          <Route path={`${match.url}/:id`} component={Detail}></Route>
          <Route exact path={`${match.url}`} component={() => <Redirect to="/"/>}></Route>
        </Switch>
      </div>
    )
  }
}

export default DetailLayout
