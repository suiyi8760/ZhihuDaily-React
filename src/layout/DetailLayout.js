import {NavBar} from 'antd-mobile'
import {Switch, Route, Redirect} from 'dva/router'
import Iconfont from 'components/Iconfont'
import Detail from 'routes/detail'

const DetailLayout = ({history, match}) => {
  return (
    <div>
      <NavBar
        icon={<Iconfont type="back"/>}
        onLeftClick={e => history.goBack()}
        rightContent={[
          <div key={0}>
            <Iconfont type="share" style={{marginRight: '16px'}}/>
            <Iconfont type="collect"/>
          </div>,
          <div key={1}>
            <Iconfont type="comment"/>
            <Iconfont type="fabulous"/>
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

export default DetailLayout
