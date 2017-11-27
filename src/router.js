import React from 'react'
import {dynamic} from 'dva'
import {Switch, Route, Redirect, Router} from 'dva/router'
import {BasicLayout, DetailLayout} from 'layout'

const Routers = ({history}) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/detail" component={DetailLayout}/>
        <Route path="/" component={BasicLayout}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  )
}

export default Routers
