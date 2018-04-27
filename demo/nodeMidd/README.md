# nodejs quick start

Nodejs（请求转发）。

![node](http://7xtxh3.com1.z0.glb.clouddn.com/node/13417b7c8dd6daecb9fa4d7c38062421.jpg)

## 需求

明确用 `Node` 来干什么，很重要。
- 从后台读取对应的 API
- 处理读取的数据，并发给前端（自己）

很明显这样可以完全抛弃 `JSP` 语言，并由前端自己来完成。

## 开发

说完就撸起袖子干吧～～～，下文以「[blog中的demo](https://github.com/Hancoson/blog/tree/master/demo/nodeMidd)（已开源）」为例，引入 `Express` 框架。

### 目录机构

```js
.
├── app.js //入口文件
├── config //配置文件
├── controllers //控制器
├── logs //日志
├── models  //模型
├── node_modules //依赖
├── package.json
├── public //静态资源
├── routes //路由
├── services //服务
├── utils //工具方法
├── views //模版
│   └── index.html
└── yarn.lock
```

从目录机构开看是比较简单的，好了，我们来详细介绍一下比较主要的功能吧。
<!--more-->

### 创建入口文件

进入工程目录，新建文件 `app.js` ，输入如下：
```js

var express = require('express')
var http = require('http')
var path = require('path')
var ejs = require('ejs')
var router = require('./routes/index')
var app = express();
router(app); //拆分路由
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'))); //静态文件服务位置
app.engine('.html', ejs.__express);//使用.html做为后缀
app.set('view engine', 'html'); //使用ejs为模版引擎

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port http://localhost:' + app.get('port'));
});
```

### 拆分路由

新建文件 `/router.js`：

```js
var index = require('./../controllers/index')
module.exports = (app) => {
  app.get('/', index.index);
  app.get('/api/get', index.get);
}
```
以后，再添加其他的任何路由，只要修改 `router.js` 就是了。

### 拆分模型
模型 `model` 专门处理数据，无论是数据库，还是请求远程 `api` 资源，都应该是它的事。自然，我们可以把请求独立出来，这么做：

新建文件夹和文件 `/models/index.js` ,剪切粘贴下面的代码：

```js
var myFetch = require('./../utils/fetch')
var config = require('./../config/config')
var errCode = require('./../config/errCode')
var Index = {
  //get
  get: function (req, callback) {
    //这里使用了知乎日报API
    myFetch('https://news-at.zhihu.com/api/4/news/before/' + req.t, {}, function (err, data) {
      if (!err) {
        callback(null, data)
      } else {
        callback(null, errCode.SERVER_ERR)
      }
    })
  }
}
module.exports = Index
```

### 拆分控制器

控制器负责从模型请求数据，并把数据发送到前端，是前端和后台的调度员。这里，`app.get` 方法里的匿名函数便是，我们分别把他们抽取出来，放在 `/controllers/index.js` 里，并把请求 `Api` 的代码用模型代替，代码如下：

```js
var Indexs = require('./../models/index')
var Index = {
  //get '/'
  index: function (req, res, next) {
    res.render('index', { title: 'Express' });
  },
  //api/get
  get: function (req, res) {
    Indexs.get(req.query, function (err, data) {
      console.log(req.query, err, data)
      if (err) {
        res.json({ status: 500, msg: err })
      } else {
        res.json(data)
      }
    })
  }
}
module.exports = Index
```
说明：按照惯例，控制器的名称，通常是对应模型的名称（名词）的复数。

经过这样的模块化整理，我们轻松实现了一个简单的MVC框架，它的易用性、扩展性得到很大提升。我们已经可以快速添加更多的功能了。

## 总结

本文涉及的代码还是非常简单的，更多的高大上功能还需要自己去折腾吧。
> 本文的所有代码均来自我的 BOLG ，欢迎 STAR STAR STAR。[传送门>>](https://github.com/Hancoson/blog/tree/master/demo/nodeMidd)
> 原文地址：[传送门>>](https://github.com/Hancoson/blog/issues/28)