import React from 'react'
import classnames from 'classnames'
import './iconfont.less'

const Iconfont = ({type, size = 'md'}) => {
  return (
    <svg className={classnames('icon', `icon-${size}`)} aria-hidden="true">
      <use xlinkHref={`#icon-${type}`}></use>
    </svg>
  )

  // return <i className={classnames('antdadmin', [`icon-${type}`], className)} />
}

export default Iconfont
