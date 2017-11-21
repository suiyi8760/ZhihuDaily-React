import {Drawer, List, NavBar, PullToRefresh} from 'antd-mobile'
import {connect} from 'dva'
import {Switch, Route, Redirect} from 'dva/router'
import Helmet from 'react-helmet'
import classnames from 'classnames'
import Iconfont from 'components/Iconfont'
import {config} from 'utils'
import styles from './BasicLayout.less'
import News from 'routes/news'

const {iconFontJS, iconFontCSS} = config

@connect(({global}) => global)
class BasicLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }

  onOpenChange = () => {
    this.setState({drawerOpen: !this.state.drawerOpen})
  }

  themeClick = e => e

  render() {

    const {themeList, curTheme} = this.props

    const sidebar = (
      <List>
        <List.Item className={
          classnames(styles.theme_home, {
              [styles.active_theme]: curTheme === 'home'
            }
          )}
        >
          <span style={{marginRight: 20}}>
            <Iconfont type="home"/>
          </span>首 页
        </List.Item>
        {
          themeList.map((item, index) => {
            return (
              <List.Item
                arrow="horizontal"
                key={index}
                onClick={this.themeClick}
                className={classnames({
                  [styles.active_theme]: curTheme === item.name
                })}
              >
                {item.name}
              </List.Item>
            )
          })
        }
      </List>
    )

    return (
      <div>
        <Helmet>
          {iconFontJS && <script src={iconFontJS}/>}
          {iconFontCSS && <link rel="stylesheet" href={iconFontCSS}/>}
        </Helmet>
        <NavBar
          icon={<Iconfont type="list"/>}
          onLeftClick={this.onOpenChange}
        >
          {curTheme === 'home' ? config.name : curTheme}
        </NavBar>
        <Drawer
          className={styles.my_drawer}
          style={{minHeight: document.documentElement.clientHeight}}
          contentStyle={{color: '#A6A6A6'}}
          enableDragHandle
          sidebar={sidebar}
          open={this.state.drawerOpen}
          onOpenChange={this.onOpenChange}
        >
          <PullToRefresh>
            <Switch>
              <Route path="/news" component={News}/>
              <Redirect to="/news"/>
            </Switch>
          </PullToRefresh>
        </Drawer>

      </div>
    )
  }
}

export default BasicLayout
