import {NavBar} from 'antd-mobile'
import {Switch, Route, Redirect} from 'dva/router'
import {Iconfont} from 'components'
import Detail from 'routes/detail'
import styles from './DetailLayout.less'

class DetailLayout extends React.Component {
  render() {
    const {history, match} = this.props

    return (
      <div className={styles.DetailLayout}>
        <NavBar
          icon={<Iconfont type="back"/>}
          onLeftClick={e => history.goBack()}
          rightContent={[
            <div key={0}>
              <Iconfont type="share" style={{marginRight: '30px'}}/>
              <Iconfont type="collect" style={{marginRight: '30px'}}/>
            </div>,
            <div key={1}>
              <Iconfont type="comment" style={{marginRight: '10px'}}>5</Iconfont>
              <Iconfont type="fabulous">50</Iconfont>
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
