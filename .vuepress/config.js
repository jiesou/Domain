module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'LOLI IS TOP 萝莉赛高！',
    }
  },
  head: [
    ['meta', { name: 'robots', content: 'index' }]
  ],
  themeConfig: {
    nav: [
      {text: '萝莉色图', link: '/setu.html'},
      {text: '赞助', link: '/donate.html'},
    ],
     lastUpdated: '上次更新'
  },
  plugins: {
    'sitemap': {
      hostname: 'https://loliis.top',
      exclude: [
        '/404.html'
      ],
      urls: [
        { url: '/index.html', changefreq: 'montly'}
      ]
    },
    'autometa': {
      site: {
        name: 'LOLI IS TOP | 萝莉赛高 - 聚合导航',
      },
      canonical_base: 'https://loliis.top',
    }
  }
}