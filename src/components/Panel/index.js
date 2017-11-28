import {List} from 'antd-mobile'
import {Link} from 'dva/router'
import {Iconfont} from 'components'
import styles from './index.less'

const Panel = ({rowData, isMultiPics, detailId}) => {

  const extraBox = (
    <div className="extra_box">
      <img style={{width: 75, height: 70}} src={rowData.images[0]}/>
      {
        isMultiPics ? (
          <div className="multi-tips">
            <Iconfont type="multi-pics" size="sm"/>
            多图
          </div>
        ) : null
      }
    </div>
  )

  return (
    <div className={styles.panel}>
      <Link to={`/detail/${detailId}`}>
        <List.Item
          onClick={e => e}
          wrap
          extra={extraBox}
        >
          {rowData.title}
        </List.Item>
      </Link>
    </div>
  )
}

export default Panel
