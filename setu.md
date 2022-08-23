---
title: 萝莉色图
---
# 萝莉色图

> 请求收录请联系 i@mail.jiecs.top

> 支持我们请[点此](/donate.html)

## lolicon <Badge text="可设置R18" type="warning"/>

### 302封装 <Badge text="自建" /><Badge text="只支持302" />

```
https://api-jiesou.vercel.app/lolicon
```

是原版的封装

比原 API 加了个 302 跳转，只支持在 URL 中添加查询字符串传参。自动跳转到第一张图片，不支持指定多个清晰度

所有参数、用法都与原 API 一样，例如原 API 的：

`https://api.lolicon.app/setu/v2?proxy=i.pixiv.re&size=regular&r18=0&tag=萝莉&tag=白丝`

只要换为

`https://api-jiesou.vercel.app/lolicon?proxy=i.pixiv.re&size=regular&r18=0&tag=萝莉&tag=白丝`

即可

### 原版 <Badge text="只支持JSON" />

```
https://api.lolicon.app/setu/v2
```

:::tip 来源
<https://api.lolicon.app/#/setu>
:::

可设置项较多，详细使用方式参见来源文档

:::details 响应示例
```json
{
  "error": "",
  "data": [
    {
      "pid": 96295224,
      "p": 0,
      "uid": 15536546,
      "title": "バレンタイン白上",
      "author": "陽ノかぐつき",
      "r18": false,
      "width": 1240,
      "height": 1754,
      "tags": [
        "バーチャルYouTuber",
        "虚拟YouTuber",
        "ホロライブ",
        "Hololive",
        "白上フブキ",
        "白上吹雪"
      ],
      "ext": "png",
      "uploadDate": 1644985289000,
      "urls": {
        "original": "https://i.pixiv.cat/img-original/img/2022/02/16/13/21/29/96295224_p0.png"
      }
    }
  ]
}
```
:::


## 樱花 - 随机二次元图片

```
https://www.dmoe.cc/random.php
```

:::tip 来源
<https://www.dmoe.cc>
:::

可添加参数 `type=json` 即 `https://www.dmoe.cc/random.php?return=json`

:::details 响应示例
```json
{
    "code":"200"
    "acgurl":"https:\/\/ws1.sinaimg.cn\/large\/0072Vf1pgy1foxkfy08umj31kw0w0nng.jpg"
    "width":"2048"
    "height":"1152"
}
```
:::

## 小歪 - 二次元动漫

```
https://api.ixiaowai.cn/api/api.php
```

:::tip 来源
<https://api.ixiaowai.cn>
:::

可添加参数 `type=json` 即 `https://api.ixiaowai.cn/api/api.php?return=json`

:::details 响应示例
```json
{
    "code":"200"
    "acgurl":"https:\/\/ws1.sinaimg.cn\/large\/0072Vf1pgy1foxkjcneg1j31kw0w0hbs.jpg"
    "width":"2048"
    "height":"1152"
}
```
:::

## 韩小韩 - 随机二次元图片

```
https://api.vvhan.com/api/acgimg
```

:::tip 来源
<https://api.vvhan.com/dongman.html>
:::

可添加参数 `type=json` 即 `https://api.vvhan.com/api/acgimg?type=json`

:::details 响应示例
```json
{
  "code": "200",
  "acgurl": "http://url.vvhan.com/viewimg/api.vvhan.com[16].jpg",
  "width": "2048",
  "height": "1152",
  "size": "jpg"
}
```
:::

## EEE.DOG - 随机二次元图片 <Badge text="只支持302" /><Badge text="可设置R18" type="warning"/>

```
https://api.yimian.xyz/img?type=moe
```

:::tip 来源
<https://www.eee.dog/tech/rand-pic-api.html>
:::

可设置项较多，详细使用方式参见来源文档

## 惜染 - 随机动漫图片 <Badge text="只支持302" />

### 手机端

```
https://api.hefollo.com/API/dongman.php
```

:::tip 来源
<https://api.hefollo.com/?action=doc&id=27>
:::

### PC端

```
https://api.hefollo.com/API/dongmanpc.php
```

:::tip 来源
<https://api.hefollo.com/?action=doc&id=15>
:::

### PC端4K

```
https://api.hefollo.com/API/4k.php
```

:::tip 来源
<https://api.hefollo.com/?action=doc&id=14>
:::

## Ten API - 随机二次元动漫图片

```
https://tenapi.cn/acg
```

:::tip 来源
<https://docs.tenapi.cn/img.html>
:::

可添加参数 `type=json` 即 `https://tenapi.cn/acg?return=json`

:::details 响应示例
```json
{
  "code": 200,
  "imgurl": "https://tva1.sinaimg.cn/large/0072Vf1pgy1fodqncwm01j31hc10xb29.jpg",
  "width": "1920",
  "height": "1329"
}
```
:::

## eees.cc - 随机图片

```
https://tuapi.eees.cc/api.php?category=dongman&type=302
```

:::tip 来源
<https://tuapi.eees.cc>
:::

可设置项较多，详细使用方式参见来源文档

:::details 响应示例
```json
{
    "error": 0,
    "result": 200,
    "width": 1920,
    "height": 1080,
    "img": "https:\/\/tuapi.eees.cc\/meinv\/img716697716697716697.jpg"
}
```
:::