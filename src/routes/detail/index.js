import React from 'react'
import {connect} from 'dva'
import Helmet from 'react-helmet'
import styles from './index.less'

@connect(({detail}) => detail)
class Detail extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.lv.innerHTML = nextProps.body
  }

  render() {

    const {css} = this.props

    return (
      <div
        className={styles.detailContent}
        style={{height: document.documentElement.clientHeight - 45}}
      >
        <Helmet>
          {css && css.map((item, index) => (
            <link key={index} rel="stylesheet" href={item}/>
          ))}
        </Helmet>
        <div
          ref={el => this.lv = el}
          className="detailBody"
        ></div>
      </div>
    )
  }
}

export default Detail
