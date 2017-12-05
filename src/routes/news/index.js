import React from 'react'
import {LoadingHOC} from 'components'
import NewsList from './NewsList'

const News = () => {
  return (
    <NewsList/>
  )
}

export default LoadingHOC(News, {loadingType: 'news/initNews', delay: 0})
