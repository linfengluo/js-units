# js-units

> 整理收集日常工作中常用的函数

# tips
该项目使用了ES6语法，为确保兼容性，请使用babel；

# install
```js
npm i -S js-units

//完整引入
import jsUnits from 'js-units'
// const jsUnits = require('js-units')

//按需引入
import {isMobile} from 'js-units'
```

# 功能函数
### Browser
* [getBriwser](https://github.com/linfengluo/js-units/blob/master/src/browser/src/getBrowser.js) 获取浏览器信息
* [getOs](https://github.com/linfengluo/js-units/blob/master/src/browser/src/getOs.js) 获取操作系统信息
* [isMobile](https://github.com/linfengluo/js-units/blob/master/src/browser/src/isMobile.js) 是否移动端
* [isWechat](https://github.com/linfengluo/js-units/blob/master/src/browser/src/isWechat.js) 是否微信浏览器

### Loader
* [loadScript](https://github.com/linfengluo/js-units/tree/master/src/loader/src/loadScript.js) 动态加载script
* [loadStyle](https://github.com/linfengluo/js-units/tree/master/src/loader/src/loadStyle.js) 动态加载style

### Math
* [floatAdd](https://github.com/linfengluo/js-units/tree/master/src/math/src/floatAdd.js) 浮点数加法
* [floatDiv](https://github.com/linfengluo/js-units/tree/master/src/math/src/floatDiv.js) 浮点数除法
* [floatMul](https://github.com/linfengluo/js-units/tree/master/src/math/src/floatMul.js) 浮点数乘法
* [floatSub](https://github.com/linfengluo/js-units/tree/master/src/math/src/floatSub.js) 浮点数减法

### Moment
* [formatDate](https://github.com/linfengluo/js-units/tree/master/src/moment/src/formatDate.js) 格式化时间
* [formatTimestamp](https://github.com/linfengluo/js-units/tree/master/src/moment/src/formatTimestamp.js) 格式化时间戳

### Regex
* [isEmail](https://github.com/linfengluo/js-units/tree/master/src/regex/src/email.js) 是否邮箱地址
* [isIdcard](https://github.com/linfengluo/js-units/tree/master/src/regex/src/idcard.js) 是否身份证号码
* [isTel](https://github.com/linfengluo/js-units/tree/master/src/regex/src/tel.js) 是否电话/手机
* [isUrl](https://github.com/linfengluo/js-units/tree/master/src/regex/src/url.js) 是否网址

### Storage
* [cookie](https://github.com/linfengluo/js-units/tree/master/src/storage/src/cookie.js) cookie操作
* [localstorage](https://github.com/linfengluo/js-units/tree/master/src/storage/src/localstorage.js) localstorage操作
* [sessionStorage](https://github.com/linfengluo/js-units/tree/master/src/storage/src/sessionStorage.js) sessionstorage 操作

### Url
* [getSingleQuery](https://github.com/linfengluo/js-units/tree/master/src/url/src/getSingleQuery.js) 获取单个url参数
* [getUrlQuerys](https://github.com/linfengluo/js-units/tree/master/src/url/src/getUrlQuerys.js) 获取url参数
* [stringfyQuerys](https://github.com/linfengluo/js-units/tree/master/src/url/src/stringfyQuerys.js) 系列化参数