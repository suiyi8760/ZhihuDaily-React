import {Component} from 'react'
import {connect} from 'dva'
import {Link} from 'dva/router'
import {Carousel} from 'antd-mobile'
import styles from './NewsCarcousel.less'

@connect(({news}) => news)

export default class NewsCarousel extends Component {
  state = {
    initialHeight: '30vh'
  }

  render() {

    const hProp = this.state.initialHeight ? {height: this.state.initialHeight} : {}
    const {top_stories} = this.props

    return (
      <Carousel
        className={styles.news_carousel}
        autoplay={true}
        autoplayInterval={5000}
        resetAutoplay={false}
        infinite
      >
        {
          top_stories.map(item => (
            <Link to="/" key={item} style={hProp}>
              <img
                src={item.image}
                alt=""
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'))
                }}
              />
              <div className="carousel_mask">
                <h2>{item.title}</h2>
              </div>
            </Link>
          ))
        }
      </Carousel>
    )
  }
}
