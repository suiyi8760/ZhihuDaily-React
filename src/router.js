import React from 'react'
import {dynamic} from 'dva'
import {Switch, Route, Redirect, Router} from 'dva/router'
import Helmet from 'react-helmet'
import {config} from 'utils'
import {BasicLayout, DetailLayout, CommentLayout} from 'layout'

const {iconFontJS, iconFontCSS} = config

const Routers = ({history}) => {
  return (
    <div>
      <Helmet>
        {iconFontJS && <script src={iconFontJS}/>}
        {iconFontCSS && <link rel="stylesheet" href={iconFontCSS}/>}
      </Helmet>
      <Router history={history}>
        <Switch>
          <Route path="/comment" component={CommentLayout}/>
          <Route path="/detail" component={DetailLayout}/>
          <Route path="/" component={BasicLayout}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  )
}

export default Routers
