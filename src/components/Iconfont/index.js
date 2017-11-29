import React from 'react'
import classnames from 'classnames'
import styles from './index.less'

const Iconfont = ({type, size = 'md', children, style}) => {
  return (
    <div className={styles.Iconfont} style={style}>
      <svg className={classnames('icon', `icon-${size}`)} aria-hidden="true">
        <use xlinkHref={`#icon-${type}`}></use>
      </svg>
      {/*区分undefined和Number0*/}
      {(children !== undefined ? true : null) && <span>{children}</span>}
    </div>
  )

  // return <i className={classnames('antdadmin', [`icon-${type}`], className)} />
}

export default Iconfont
