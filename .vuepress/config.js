module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'LOLI IS TOP 萝莉赛高！'
    }
  },
  markdown:{
    externalLinks: { target: '_blank', rel: 'noopener noreferrer nofollow' }
  },
  head: [
    ['meta', { name: 'robots', content: 'index' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge'}],
    ['link', { rel: 'icon', href: '/favicon.ico'}],
    ['script', {}, 'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?69df9203fa509c9541b75ea58bf2de0d";var s = document.getElementsByTagName("script")[0];  s.parentNode.insertBefore(hm, s);})();']
  ],
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: '萝莉色图', link: '/setu.html'},
      { text: '实用程序', link: '/others.html'},
      { text: '图片代理', link: '/proxy.html'},
      { text: '赞助我们', link: '/donate.html'},
      { text: '推荐翻墙工具(AD)', link: '/donate.html#机场'},
    ],
     lastUpdated: '上次更新'
  },
  plugins: {
    'autometa': {
      site: {
        name: 'LOLI IS TOP | 萝莉赛高 - 聚合导航',
      },
    },
    '@vuepress/last-updated':{
      transformer: (timestamp, lang) => {
        return new Date(timestamp).toLocaleDateString();
      }
    },
    'sitemap': {
      hostname: 'https://loliis.top',
      exclude: [
        '/404.html'
      ],
      urls: [
        { url: '/index.html', changefreq: 'monthly'}
      ]
    }
  }
}