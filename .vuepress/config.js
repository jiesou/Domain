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
    ['script', {}, 'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?69df9203fa509c9541b75ea58bf2de0d";var s = document.getElementsByTagName("script")[0];  s.parentNode.insertBefore(hm, s);})();'],
    ['script', {}, '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "bqn7j88cgx");'],
    ['script', {}, 'let sc=document.createElement("script");sc.async=true;sc.src="https://www.googletagmanager.com/gtag/js?id=G-W28PHGH59Y";document.body.appendChild(sc);window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-W28PHGH59Y");']
  ],
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: '萝莉色图', link: '/setu.html'},
      { text: '赞助', link: '/donate.html'},
    ],
     lastUpdated: '上次更新'
  },
  plugins: {
    'autometa': {
      site: {
        name: 'LOLI IS TOP | 萝莉赛高 - 聚合导航',
      },
      canonical_base: 'https://loliis.top',
    },
    'sitemap': {
      hostname: 'https://loliis.top',
      exclude: [
        '/404.html'
      ],
      urls: [
        { url: '/index.html', changefreq: 'montly'}
      ]
    }
  }
}