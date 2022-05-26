---
title: 实用程序
---

> 请求收录请联系 i@mail.jiecs.top

> 支持我们请[点此](/donate.html)

## 必应每日壁纸 <Badge text="自建" /><Badge text="只支持302" />

```
https://api-jiesou.vercel.app/bingimg
```

是 `https://www.bing.com/HPImageArchive.aspx?format=js&n=1` 的封装，直接访问即可

可添加 idx 参数，如 `https://api-jiesou.vercel.app/bingimg?idx=1`

可添加 region 参数，用于指定跳转后链接的子域，如 `https://api-jiesou.vercel.app/bingimg?region=cn`，返回的链接将以 `https://cn.bing.com` 开始，不填写则为 `https://bing.com`

## Heroku-PagerMaid <Badge text="自写" />

<https://github.com/jiesou/Heroku-PagerMaid>

用 Heroku 在线免费搭建部署 Telegram UserBot - PagerMaid
