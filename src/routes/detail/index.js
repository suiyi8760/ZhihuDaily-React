import React from 'react'
import {connect} from 'dva'
import Helmet from 'react-helmet'
import {TitleMask} from 'components'
import styles from './index.less'

@connect(({detail}) => detail)
class Detail extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.body !== this.props.body) {
      this.lv.innerHTML = nextProps.body
    }
  }

  render() {

    const {css, image,image_source, title} = this.props

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
        <div className="imageTitle">
          <img src={image}/>
          <TitleMask title={title} copyright={image_source}/>
        </div>
        <div
          ref={el => this.lv = el}
          className="detailBody"
        />
      </div>
    )
  }
}

export default Detail
