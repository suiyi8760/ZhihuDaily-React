import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {easing} from 'utils'
import styles from './index.less'

class ScrollView extends React.Component {

  static childContextTypes = {
    scrollEl: PropTypes.object,
    scrollAnimate: PropTypes.func
  }

  getChildContext() {
    return {
      scrollEl: this.scrollViewDom,
      scrollAnimate: (scrollTop, duration = 2000, animateType = 'easeInOutQuad') => {
        let startTime = Date.now()
        const animateFunc = {
          linear: () => {
            const p = Math.min(1, (Date.now() - startTime) / duration)
            this.scrollViewDom.scrollTop = scrollTop * easing[animateType](p)
            if (p < 1) {
              return this.requestId = window.requestAnimationFrame(animateFunc[animateType])
            }
            window.cancelAnimationFrame(this.requestId)
          },
          easeInOutQuad: () => {
            const p = Math.min(1.0, (Date.now() - startTime) / duration)
            this.scrollViewDom.scrollTop += Math.ceil((scrollTop - this.scrollViewDom.scrollTop) * easing[animateType](p))
            // this.scrollViewDom.scrollTop = scrollTop * easing[animateType](p)
            console.log(this.scrollViewDom.scrollTop);
            if (p < 1) {
              return this.requestId = window.requestAnimationFrame(animateFunc[animateType])
            }
            window.cancelAnimationFrame(this.requestId)
          }
        }
        this.requestId = window.requestAnimationFrame(animateFunc[animateType])
      }
    }
  }

  componentWillUnmount() {
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
