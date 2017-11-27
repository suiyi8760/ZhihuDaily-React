import {Drawer, List, NavBar} from 'antd-mobile'
import {connect} from 'dva'
import {Switch, Route, Redirect} from 'dva/router'
import classnames from 'classnames'
import Iconfont from 'components/Iconfont'
import {config} from 'utils'
import styles from './BasicLayout.less'
import News from 'routes/news'

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
        <NavBar
          icon={<Iconfont type="list"/>}
          onLeftClick={this.onOpenChange}
        >
          {curTheme === 'home' ? config.name : curTheme}
        </NavBar>
        <Drawer
          className={styles.my_drawer}
          style={{minHeight: document.documentElement.clientHeight - 45}}
          enableDragHandle
          sidebar={sidebar}
          open={this.state.drawerOpen}
          onOpenChange={this.onOpenChange}
        >
          <Switch>
            {/*<Route path="/themes" component={Themes}/>*/}
            <Route path="/news" component={News}/>
            <Redirect to="/news"/>
          </Switch>
        </Drawer>

      </div>
    )
  }
}

export default BasicLayout
