import {NavBar} from 'antd-mobile'
import {connect} from 'dva'
import {Switch, Route} from 'dva/router'
import {Iconfont} from 'components'

class CommentLayout extends React.Component {
  render() {
    return (
      <div>
        <NavBar
          icon={<Iconfont type="back"/>}
          onLeftClick={e => e}
          rightContent={[
            <Iconfont key={0} type="comment-pen"/>
          ]}
        />
      </div>
    )
  }
}

export default CommentLayout
