import React from 'react'
import classnames from 'classnames'
import styles from './index.less'

const ScrollView = ({children, style, className}) => {

  const defaultBodyStyle = {
    height: document.documentElement.clientHeight - 45
  }

  return (
    <div
      className={classnames(styles.ScrollView, className)}
      style={
        style ? {...defaultBodyStyle, ...style} : defaultBodyStyle
      }
    >
      <div>{children}</div>
    </div>
  )
}

export default ScrollView
