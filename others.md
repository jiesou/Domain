---
title: 实用程序
---
# 实用程序

> 请求收录请联系 i@jiecs.top

> 支持我们请[点此](/donate.html)

## 必应每日壁纸 <Badge text="自建" /><Badge text="只支持302" />

```
https://api.jiecs.top/bingimg
```

是 `https://www.bing.com/HPImageArchive.aspx?format=js&n=1` 的封装，直接访问即可

可用参数：

idx 如 `https://api.jiecs.top/bingimg?idx=1`，指定图片索引（通常是指几天前的图片）

region 用于指定跳转后链接的子域，如 `https://api-jiesou.vercel.app/bingimg?region=cn`，返回的链接将以 `https://cn.bing.com` 开始，不填写则为 `https://bing.com`

resize 可设置任何内容来设置跳转图片大小为 1280x720，默认是 1920x1080。适用于 Web 场景加速下载


## Heroku-PagerMaid <Badge text="自写" />

<https://github.com/jiesou/Heroku-PagerMaid>

用 Heroku 在线免费搭建部署 Telegram UserBot - PagerMaid
