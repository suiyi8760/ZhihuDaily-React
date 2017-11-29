import React from 'react'
import {connect} from 'dva'
import Helmet from 'react-helmet'
import {TitleMask, ScrollView} from 'components'
import styles from './index.less'

@connect(({detail}) => detail)
class Detail extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.lv.innerHTML = nextProps.body
    }
  }

  render() {

    const {css, image, image_source, title} = this.props

    return (
      <ScrollView
        className={styles.detailContent}
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
          // className="detailBody"
        />
      </ScrollView>
    )
  }
}

export default Detail
