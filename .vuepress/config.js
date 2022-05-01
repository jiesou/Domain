module.exports = {
  head: [
    ['meta', { name: 'robots', content: 'index, nofollow' }]
  ],
  themeConfig: {
    sidebar: 'auto',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'LOLI IS TOP 萝莉赛高！',
        description: '萝莉二次元动漫图片API合集导航',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        lastUpdated: '上次更新',
        
      }
    }
  }
}