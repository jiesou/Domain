---
title: 图片代理
---

> 都是自建的图片代理，可以统一 https、反代、加速访问等

> 支持我们请[点此](/donate.html)

## Pixiv

```
https://pixiv.jiecs.workers.dev
```

类似 `i.pixiv.cat` 所有路径都与原 `i.pximg.net` 一样，例如原链接：

`https://i.pximg.net/img-original/img/2021/12/19/20/41/55/94880347_p0.jpg`

只要换域名

`https://pixiv.jiecs.workers.dev/img-original/img/2021/12/19/20/41/55/94880347_p0.jpg`

即可


## 通用

```
https://image-jiesou.vercel.app/?url=
```

支持不指定 https/http 协议

支持 SVG：设置 svg 参数为 True，例如 `https://image-jiesou.vercel.app/?svg=True&url=https://www.w3school.com.cn/svg/path2.svg`

参数 url 为图片原链接，例如原链接：

`https://www.google.com/images/branding/product/1x/gsa_android_144dp.png`

只要在前面加上代理链接

`https://image-jiesou.vercel.app/?url=https://www.google.com/images/branding/product/1x/gsa_android_144dp.png`

即可
