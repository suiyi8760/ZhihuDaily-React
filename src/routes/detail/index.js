import React from 'react'
import {connect} from 'dva'
import Helmet from 'react-helmet'
import {TitleMask, ScrollView, LoadingHOC} from 'components'
import styles from './index.less'

@connect(({detail}) => detail)
class Detail extends React.Component {

  componentWillUnmount(){
    console.log('componentWillUnMount Detail');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props && !nextProps.isLoading) {
      this.lv.innerHTML = nextProps.body || ''
    }
  }

  render() {

    const {css, image, image_source, title} = this.props

    return (
      <ScrollView
        className={styles.detailContent}
      >
        <Helmet>
          {
            css && css.map((item, index) => (
              <link key={index} rel="stylesheet" href={item}/>
            ))
          }
        </Helmet>
        <div className="imageTitle">
          <img src={image}/>
          <TitleMask title={title} copyright={image_source}/>
        </div>
        <div
          ref={el => this.lv = el}
        />
      </ScrollView>
    )
  }
}

export default LoadingHOC(Detail, {loadingType: 'detail/getDetail', delay: 600})
