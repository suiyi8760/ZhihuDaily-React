import {List} from 'antd-mobile'
import Iconfont from 'components/Iconfont'
import styles from './index.less'

const Panel = ({rowData, isMultiPics}) => {

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
      <List.Item
        wrap={true}
        extra={extraBox}
      >
        {rowData.title}
      </List.Item>
    </div>
  )
}

export default Panel
