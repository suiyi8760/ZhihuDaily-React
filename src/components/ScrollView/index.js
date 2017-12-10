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
      scrollAnimate: (scrollTop) => {
        this.scrollViewDom.scrollTop = scrollTop
      }
    }
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
