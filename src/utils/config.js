const apiUrl = '/api/4'

export default {
  name: '知乎日报',
  apiUrl,
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  api: {
    themes: `${apiUrl}/themes`,
    news: `${apiUrl}/news`,
    newsExtra: `${apiUrl}/story-extra`,
    comment: `${apiUrl}/story`
  },
  layoutSize: {
    navHeight: 45,
    commentTitleHeight: 43
  }
}
