import React from 'react'
import styles from './index.less'

const TitleMask = ({title, copyright}) => {
  return (
    <div className={styles.TitleMask}>
      <h2>{title}</h2>
      {copyright && <h4>{copyright}</h4>}
    </div>
  )
}

export default TitleMask
