import React from 'react'
import {ListView} from 'antd-mobile'
import NewsCarousel from './NewsCarousel'
import NewsList from './NewsList'

const News = () => {
  return (
    <div>
      <NewsCarousel/>
      <NewsList/>
    </div>
  )
}

export default News
