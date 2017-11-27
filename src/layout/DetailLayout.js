import {NavBar} from 'antd-mobile'
import {Switch, Route, Redirect} from 'dva/router'
import Detail from 'routes/detail'

const DetailLayout = ({match}) => {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path={`${match.url}/:id`} component={Detail}></Route>
        <Route exact path={`${match.url}`} component={() => <Redirect to="/"/>}></Route>
      </Switch>
    </div>
  )
}

export default DetailLayout
