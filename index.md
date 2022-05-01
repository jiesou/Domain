## 萝莉色图
> loli 图片相关 API 合集 欢迎使用

### lolicon 封装

```
https://lolicon.jiecs.workers.dev
```

是[loliconAPI](https://api.lolicon.app/#/setu)的封装

比原 API 加了个 302 跳转，自动跳转到第一张图片，指定多个清晰度时跳转第一个

所有参数、用法都与原 API 一样，例如原 API 的：

`https://api.lolicon.app/setu/v2?proxy=i.pixiv.re&size=regular&r18=0&tag=萝莉&tag=白丝`

只要换成

`https://lolicon.jiecs.workers.dev/?proxy=i.pixiv.re&size=regular&r18=0&tag=萝莉&tag=白丝`

即可
