##一.目录结构

![目录结构](http://7vij4f.com2.z0.glb.qiniucdn.com/20150512172549.png)
- App—存放需要引入jQuery的项目；
- spApp—存放不需要引入jQuery的项目；
- 特殊情况的项目需要单独新建文件夹，类似share项目；

```
├── partial                    //脚本
│   └── active-partial         //具体页面          
├── services                   //服务
│   └── services.js     
└── spapp.js                   //路由文件 
```
---
##二.生产环境
H5项目是基于**Grunt+bower+AngularJs**

Gruntfile.js
```
- build-ngapp (在dist中生成ngapp项目压缩的代码)
- build-share (在dist中生成share项目压缩的代码)
- build-spapp (在dist中生成spapp项目压缩的代码)
- run-dev (本地未压缩环境服务启动命令)
- run-dist (本地已压缩环境服务启动命令)
```
---
##三.命名规则##


###1.项目名###
项目名全部采用小写方式， 以中划线分隔。 比如：kaowo-intro

###2.HTML文件命名###
采用小写方式,多个单词组成时，采用中划线连接方式，比如说: kaowo-intro.html

###3.js文件命名###
- 控制器:小写+Ctrl,比如说:procertiCtrl.js
- 服务:项目简称+Services,比如说:spService.js
- 路由:项目名称,比如说:spapp.js

###4.css文件命名###
采用小写方式,多个单词组成时，采用中划线连接方式，比如说: kaowo-intro.css
---
##四.语法规则##
###1.HTML###

**语法**
- 使用四个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一方式。
- 嵌套的节点应该缩进（四个空格）。
- 在属性上，使用双引号，不要使用单引号。
- 不要在自动闭合标签结尾处使用斜线 - HTML5 规范 指出他们是可选的。
- 不要忽略可选的关闭标签（例如，</li> 和 </body>）。

**HTML5 doctype**
- 在每个 HTML 页面开头使用这个简单地 doctype 来启用标准模式，使其每个浏览器中尽可能一致的展现。
- 虽然doctype不区分大小写，但是按照惯例，doctype大写 关于html属性，大写还是小写的一片文章

**字符编码**
- 通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式。

```
<head>
    <meta charset="UTF-8">
</head>
```
**属性顺序**
- HTML 属性应该按照特定的顺序出现以保证易读性。

```
id
class
name
data-*
src, for, type, href
title, alt
aria-*, role
```
- Classes 是为高可复用组件设计的，理论上他们应处在第一位。Ids 更加具体而且应该尽量少使用（例如, 页内书签），所以他们处在第二位。但为了突出id的重要性， 把id放到了第一位。

**减少标签数量**
- 在编写 HTML 代码时，需要尽量避免多余的父节点。很多时候，需要通过迭代和重构来使 HTML 变得更少。 参考下面的示例:

```
<!-- Not so great -->
<span class="avatar">
    <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">

```


###2.css###
H5项目中所有的css全部使用less通过grunt编译生成。

**语法**
- 使用组合选择器时，保持每个独立的选择器占用一行。
为了代码的易读性，在每个声明的左括号前增加一个空格。
- 声明块的右括号应该另起一行。
- 尽可能使用短的十六进制数值，例如使用 #fff 替代 #ffffff。
- 为选择器中的属性取值添加引号，例如 input[type="text"]。 他们只在某些情况下可有可无，所以都使用引号可以增加一致性。
- 不要为 0 指明单位，比如使用 margin: 0; 而不是 margin: 0px;。


**声明顺序：**
1. Positioning
1. Box model 盒模型
1. Typographic 排版
1. Visual 外观

Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。盒模型紧跟其后，因为他决定了一个组件的大小和位置。

**Class 命名**
- 保持 Class 命名为全小写，可以使用短划线（不要使用下划线和 camelCase 命名）。短划线应该作为相关类的自然间断。(例如，.btn 和 .btn-danger)。
- 避免过度使用简写。.btn 可以很好地描述 button，但是 .s 不能代表任何元素。
- Class 的命名应该尽量短，也要尽量明确。
- 命名时使用最近的父节点或者父 class 作为前缀。
- 使用 .js-* classes 来表示行为(相对于样式)，但是不要在 CSS 中包含这些 classes

###3.javaScript###
完全避免 == != 的使用， 用严格比较条件 === !==

**缩进 分号 空行**
- 一律使用4个空格
- Statement 之后一律以分号结束， 不可以省略
- 方法之间加
- 单行或多行注释前加
- 逻辑块之间加空行增加可读性

**变量 常量**
- 标准变量采用驼峰标识
- 使用的ID的地方一定全大写
- 使用的URL的地方一定全大写, 比如说 reportURL
- 构造函数，大写第一个字母
- 一般情况下统一使用 '' 单引号

**Object Literals**
```
// Good  semi colon 采用 Followed by space 的形式
var team = {
    title: "AlloyTeam",
    count: 25
};
```

**Array Literals**
```
// Good
var colors = [ "red", "green", "blue" ];
var numbers = [ 1, 2, 3, 4 ];
```
**注释**
- 单行注释双斜线后，必须跟注释内容保留一个空格
- 单行注释可独占一行, 前边不许有空行, 缩进与下一行代码保持一致
- 可位于一个代码行的末尾，注意这里的格式
- 多行注释最少三行, 格式如

```
/*
 * 注释内容与星标前保留一个空格
 */
```
**函数声明**
- 一定先声明再使用， 不要利用 JavaScript engine的hoist特性, 违反了这个规则 JSLint 和 JSHint都会报 warn
- function declaration 和 function expression 的不同，function expression 的（）前后必须有空格，而function declaration 在有函数名的时候不需要空格， 没有函数名的时候需要空格。
- 函数调用括号前后不需要空格
- 立即执行函数的写法, 最外层必须包一层括号
- "use strict" 决不允许全局使用， 必须放在函数的第一行， 可以用自执行函数包含大的代码段, 如果 "use strict" 在函数外使用， JSLint 和 JSHint 均会报错

```
function doSomething(item) {
    // do something
}
var doSomething = function (item) {
    // do something
}

// Good
doSomething(item);
// Bad: Looks like a block statement
doSomething (item);

// Good
var value = (function() {
    // function body
    return {
        message: "Hi"
    }
}());

// Good
(function() {
    "use strict";
    function doSomething() {
        // code
    }
    function doSomethingElse() {
        // code
    }
})();
```