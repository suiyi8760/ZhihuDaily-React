import {Drawer, List, NavBar, Icon} from 'antd-mobile'
import {config} from 'utils'
import styles from './BasicLayout.less'

class BasicLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }

  onOpenChange = (event) => {
    console.log(event);
    this.setState({drawerOpen: !this.state.drawerOpen})
  }

  render() {

    const sidebar = (
      <List>
        {[...Array(20).keys()].map((i, index) => {
          if (index === 0) {
            return (<List.Item key={index}
                               thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                               multipleLine
            >Category</List.Item>)
          }
          return (<List.Item key={index}
                             thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          >Category{index}</List.Item>)
        })}
      </List>
    )

    return (
      <div>
        <NavBar
          icon={<Icon type="ellipsis"/>}
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
          Click upper-left corner
        </Drawer>

      </div>
    )
  }
}

export default BasicLayout
