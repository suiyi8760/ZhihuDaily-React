import React from 'react'
import {Switch, Route, Redirect, Router} from 'dva/router'
import BasicLayout from 'layout/BasicLayout'

const Routers = ({history}) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={BasicLayout}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  )
}

export default Routers
