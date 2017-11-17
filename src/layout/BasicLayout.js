import {Drawer, List, NavBar, Icon} from 'antd-mobile'
import {connect} from 'dva'
import {Switch, Route, Redirect} from 'dva/router'
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

    const {themeList} = this.props

    const sidebar = (
      <List>
        <List.Item>首 页</List.Item>
        {
          themeList.map((item, index) => {
            return (
              <List.Item
                arrow="horizontal"
                key={index}
                onClick={this.themeClick}
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
          icon={<Icon type="bars"/>}
          onLeftClick={this.onOpenChange}
        >
          {config.name}
        </NavBar>
        <Drawer
          className={styles.my_drawer}
          style={{minHeight: document.documentElement.clientHeight}}
          contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42}}
          enableDragHandle
          sidebar={sidebar}
          open={this.state.drawerOpen}
          onOpenChange={this.onOpenChange}
        >
          <Switch>
            <Route path="/news" component={News}/>
            <Redirect to="/news"/>
          </Switch>
        </Drawer>

      </div>
    )
  }
}

export default BasicLayout
