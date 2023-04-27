---
title: 图片代理
---

> 都是自建的图片代理，可以统一 https、反代、加速访问等

> 支持我们请[点此](/donate.html)

## Pixiv <Badge text="被墙" type="warning"/>

```
https://pixiv.jiecs.workers.dev
```

类似 `i.pixiv.cat` 所有路径都与原 `i.pximg.net` 一样，例如原链接：

`https://i.pximg.net/img-original/img/2021/12/19/20/41/55/94880347_p0.jpg`

只要换域名

`https://pixiv.jiecs.workers.dev/img-original/img/2021/12/19/20/41/55/94880347_p0.jpg`

即可

## 通用

> 严禁滥用，用以科学上网

> 随便操，操不死，无限制，[开源](https://github.com/jiesou/Deta-Proxy)

使用示例：

`https://see.loliis.top/www.google.com/favicon.ico`

### 旧版 <Badge text="暂停开放" type="error"/>

```
https://proxy-jiesou.vercel.app/
```

可代理一切静态资源，但不会替换内容中的超链接（包括 CSS 样式等）**无法拿来翻墙**

不指定 https/http 时发送 http 请求

使用示例：

`https://www.google.com/images/branding/product/1x/gsa_android_144dp.png`

只要在前面加上代理链接

`https://proxy-jiesou.vercel.app/https://www.google.com/images/branding/product/1x/gsa_android_144dp.png`

即可

也可是：

`https://proxy-jiesou.vercel.app/www.google.com/images/branding/product/1x/gsa_android_144dp.png`

也可用来代理 WebAPI，例如：

`https://proxy-jiesou.vercel.app/https://api.telegram.org/bot654321:AAAAAAA/sendMessage?chat_id=123456&text=test`

### 旧版 <Badge text="已弃用" type="warning"/>

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
