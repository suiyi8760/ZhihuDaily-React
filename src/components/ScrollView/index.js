import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.less'

class ScrollView extends React.Component {

  static childContextTypes = {
    scrollEl: PropTypes.object,
    scrollAnimate: PropTypes.func
  }

  getChildContext() {
    return {
      scrollEl: this.scrollViewDom,
      scrollAnimate: (scrollTop, duration = 300, animateType = 'linear') => { //1s 60f duration:1s distance:scrollTop
        let startTime = Date.now()
        const animateFunc = {
          linear: () => {
            const p = Math.min(1, (Date.now() - startTime) / duration)

            this.scrollViewDom.scrollTop = scrollTop * p

            if (p < 1) return this.requestId = window.requestAnimationFrame(animateFunc[animateType])

            window.cancelAnimationFrame(this.requestId)
          },
          easeIn: () => {

          }
        }
        this.requestId = window.requestAnimationFrame(animateFunc[animateType])
      }
    }
  }

  componentWillUnMount(){
    console.log(this.requestId);
    window.cancelAnimationFrame(this.requestId)
  }

  render() {
    const {children, style, className} = this.props
    const defaultBodyStyle = {
      height: document.documentElement.clientHeight - 45
    }

    return (
      <div
        ref={el => this.scrollViewDom = el}
        className={classnames(styles.ScrollView, className)}
        style={
          style ? {...defaultBodyStyle, ...style} : defaultBodyStyle
        }
      >
        <div>{children}</div>
      </div>
    )
  }
}

export default ScrollView
