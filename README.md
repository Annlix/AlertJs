[AlertJS](https://github.com/Annlix/AlertJs/blob/master/README.md)
=======

`AlertJS` 是一种 `Javascript` 弹窗的解决方案。

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

依赖
---

- JQuery v3.4.0 +：[Jquery](https://jquery.com/)
- Font Awesome v5.8.1 +：[Font Awesome](https://fontawesome.com/)

使用
---

1. 首先，您需要引入JQuery、Font Awesome。
```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.4.0.min.js"></script>
```

2. 使用
该类已经自动实例化，您只需要使用 `__ALERT__.func()` 即可使用。

---
- 加载
`__ALERT__.load()`
参数

| 参数 | 说明 | 默认值 |
|-----|------|--------|
| cover.background | 遮罩背景颜色 | #ffffff |
| box.background | 弹窗背景颜色 | rgba(16,16,16,.5) |
| box.size | 弹窗大小 | 100px |
| img.size | 图片大小 | 100px |
| timeout | 超时（单位：s） | 3 |

```
__ALERT__.load({
    cover:{
        background:"#ffffff"
    },
    box:{
        background:"rgba(16,16,16.5)",
        size:"100px"
    },
    img:{
        size:"100px"
    },
    timeout:3
})
```
---
- 隐藏加载
`__ALERT__.hideLoad()`
参数：该方法无任何参数
---
- 提示（用于操作成功提示）
`__ALERT__.toast()`
参数

| 参数 | 说明 | 默认值 |
| content | 提示内容 | 操作成功 |
| fn | 回调函数 | `()=>{}` |
| timeout | 超时(单位：s) | 3 |

```
__ALERT__.toast({
    content:"成功",
    fn:()=>{
        window.location.href="https://cn.bing.com"
    },
    timeout: 3
})
```
---
- 隐藏提示
`__ALERT__.hideToast()`
参数：该方法无任何参数
---
- 弹窗（用于警告、告知错误）
`__ALERT__.notice()`
参数

| 参数 | 说明 | 默认值 |
|------|-----|--------|
| title | 弹窗标题 | 警告 |
| maintip | 主要提示 | 发生错误了！ |
| secondarytip | 次要提示 | 我们遇到了一个未知的错误！ |
| positivetext | 积极按钮文字 | 好的，我明白了！ |
| positiveoption | 积极回调 | `()=>{$("#ALERTJS_alertNoticeBox").hide();$("#ALERTJS_alertNoticeBox").remove();}` |
| negativetext | 消极按钮文字 | 关闭 |
| negativeoption | 消极回调 | `()=>{$("#ALERTJS_alertNoticeBox").hide();$("#ALERTJS_alertNoticeBox").remove();}` |

```
__ALERT__.notice({
    title:"提示",
    maintip:"操作失败！",
    secondarytip:"服务器发生了一个错误！",
    positivetext:"确定",
    positiveoption:()=>{$("#ALERTJS_alertNoticeBox").hide();$("#ALERTJS_alertNoticeBox").remove();},
    negativetext:"取消",
    negativeoption:()=>{$("#ALERTJS_alertNoticeBox").hide();$("#ALERTJS_alertNoticeBox").remove();}
})
```
---
- 隐藏弹窗
`__ALERT__.hideNotice()`
参数：该方法无任何参数
---
- 提示（用于告知错误，仅作提示，无需用户交互）
`__ALERT__.tip()`
参数

| 参数 | 说明 | 默认值 |
|------|-----|--------|
| content | 内容 | 输入不可为空！ |
| fn | 回调 | 必须参数，无默认值 |
| timeout | 超时 | 单位：s |

```
__ALERT__.tip({
    content:"输入错误！",
    fn:()=>{__ALERT__.hideTip()},
    timeout:3
})
```
---
- 隐藏提示
`__ALERT__.hideTip()`
参数：该方法无任何参数