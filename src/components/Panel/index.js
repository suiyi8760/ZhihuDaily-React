import {List} from 'antd-mobile'
import styles from './index.less'


const Panel = ({rowData}) => {

  const extraBox = () => {
    return (
      <div>
        <img style={{width: 75, height: 70}} src={rowData.images[0]}/>
      </div>
    )
  }

  return (
    <div className={styles.panel}>
      <List.Item
        wrap={true}
        extra={extraBox()}
      >
        {rowData.title}
      </List.Item>
    </div>
  )
}

export default Panel
