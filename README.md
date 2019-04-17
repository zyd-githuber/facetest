## js部分
##### js变量提升
我们习惯将 var a = 2; 看作一个声明，而实际上 JavaScript 引擎并不这么认为。它将 var a 和 a = 2 当作两个单独的声明，第一个是编译阶段的任务，而第二个则是执行阶段的任务。
这意味着无论作用域中的声明出现在什么地方，都将在代码本身被执行前首先进行处理。
可以将这个过程形象地想象成所有的声明（变量和函数）都会被“移动”到各自作用域的
最顶端，这个过程被称为提升。
声明本身会被提升，而包括函数表达式的赋值在内的赋值操作并不会提升。而且如果一个作用域中同时存在同名变量与函数，那么函数会被优先提升。
##### bind、call、apply区别
      call、apply都用来改变this指向，作用都是一致的，只是传参不同
```
   getValue.call(obj,'jack','11岁') 
   getValue.apply(obj,['jack','11岁']) 
   bind是Function.prototype的一个方法，返回一个新函数
``` 
##### 运算符优先级
     && 运算符的优先级高于 ||，而 || 的优先级又高于 ? :  
##### js面向对象，原型链
    js面向对象有两种方式，但是他们的本质都是基于原型的。
    1. 第一种采用模拟其他语言‘类’设计模式的方式，利用构造函数例如F（）充当类的角色，建立new出来的对象与构造函数的prototype指向的原型对象之间的关联。
    实例自身找不到的方法，会继续沿着F.prototype上去找，类似于作用域链的感觉，这就是原型链，与java里父类之类之间的继承复制完全不同，js里对象的属性、方法
    只有查找，并没有产生复制。
    2. 利用Object.create(obj)，显式的去以传入的obj为原型，创建一个与之有原型链查找关系的新对象。
    规范答案：现在我们知道了，[[Prototype]] 机制就是存在于对象中的一个内部链接，它会引用其他对象。通常来说，这个链接的作用是：如果在对象上没有找到需要的属性或者方法引用，引擎就会继续在 [[Prototype]] 关联的对象上进行查找。同理，如果在后者中也没有找到需要的引用就会继续查找它的 [[Prototype]]，以此类推。这一系列对象的链接被称为“原型链”。
#####  数据类型
+ 存储位置：基本数据类型存储在栈上，引用类型存储在堆上
+ 分类：
  + 六种基本数据类型：string、number、boolean、null、undefined、symbol;
  + 一种复杂数据类型: Object （涉及 Function、Date、Array、String、Boolean、RegExp）;
+ 判断数据类型
  1. typeof:有string number boolean object undefined function 6种返回值
      + 优势：安全优势，即使变量压根不存在，也不会报错
      + 没法区分对象类型，还有typeof null 返回 object的历史遗留问题
  2. instanceof:只能用来判断对象类型，原理是判断对象[constructor]指向的构造函数是谁。一般的判断，typeof+instanceof就可以搞定
  3. js里原型链的终点止于Object.prototype，在这个原型上，js默认有两个常用方法，toString，valueOf，
      Object.prototype.toString.call(obj) 返回一个 字串‘[object 构造函数]’;
      + 优势：通用 
      + 比较麻烦
##### this指向问题
      完全取决于函数调用位置与方式，所以只能分析调用情况
    1. 函数直接调用，this指向window，或者undefined(取决于是否是严格模式)
    2. 通过一个对象去调用,this指向这个当前对象
    3. 构造函数里的this，指向即将要返回的实例
    4. call、apply调用中指向传入的对象
##### Promise
  [链接] : http://www.php.cn/js-tutorial-406264.html 
  基本讲的很全了
##### generator迭代器
##### 原型与es6 class
   + class新语法: http://www.php.cn/js-tutorial-406259.html 
   + 原型
      + 原型对象有一个constructor属性，指向该原型对象对应的构造函数。
      + 构造函数有一个prototype属性，指向实例对象的原型对象。
      + 实例对象有一个__proto__属性，指向该实例对象对应的原型对象
##### 强制隐式转换
   + ==的判断规则
      + NaN不等于NaN
      + null == undefined // 判断为true 
      + 111 == ‘111’// 转化为 111 == 111 判定为true，string类型转换为number类型去比较：可以理解为number类型有比较高的比较优先级
      + true == 1 // 转化为 1 == 1 判断为true， boolean 类型的比较也会优先转化成数字类型去比较 
      + 对象 == 基本类型 //对象需要先转化为基本类型，这个比较复杂，详细说说
          + 对象转化为基础数据类型，其实最终都是用调用对象自带的valueOf和toString两个方法之一并获得其返回值，作为其基础数据类型。
       例：[] == ![] // -> true       
##### 闭包
   + 概念：当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包
        + js里变量访问遵循词法作用域，说白了就是由写代码时候的位置决定的。所以，只要嵌套的作用域里返回一个函数（js里函数是一等公民，可以传递），那这个函数就会引用当时的执行环境，不受函数执行完销毁作用域的影响。
##### Event loop
   + 因为js是单线程的，但是浏览器是多线程的。常驻的线程包括，ajax请求、setTimeout定时器、UI渲染、dom或window事件，他们可以用来进行宏任务，然后就是promise等的微任务。
   + 事件循环：
        1. 执行宏任务队列中第一个任务，执行完后移除它
        2. 执行所有的微任务，执行完后移除它们                 
        3. 执行下一轮宏任务（重复步骤2）
        + 如此循环就形成了event loop，其中，每轮执行一个宏任务和所有的微任务
        
        [讲的不错] : https://www.cnblogs.com/daisygogogo/p/10116694.html  
##### 函数节流、防抖
+ 函数节流：是确保函数特定的时间内至多执行一次。(始终是延迟500毫秒再调用)
```
    function fun(){
      console.log('onresize')
    }
    function throttle(method,context){
              clearTimeout(method.timer);
              method.timer=setTimeout(function(){
                  method.call(context);
              },500);
          }
    
    window.onresize = ()=>throttle(fun,window)  
```   
+ 函数防抖:是函数在特定的时间内不被再调用后执行。(只在规定的时间内执行一次)
```
// 函数节流
var canRun = true;
document.getElementById("throttle").onscroll = function(){
if(!canRun){
  return
}
canRun = false
setTimeout( function () {
    console.log("函数节流")
    canRun = true
  }, 500)
}
```  
##### 跨域
   + 概念：因为同源策略的影响，浏览器会对与页面地址不同域的请求进行拦截，收不到响应
   + 解决方案
        1. cors;后端设置请求头，允许当前出错的域访问当前接口
        2. jsonp:利用script标签不受同源策略影响的小技巧，让前端利用script src指向一个后端api，将函数名字与请求参数拼到查询参数中，这样服务器会返回一段js代码，主要是调用前端预先写好的函，取到参数。
        3. 开发环境，起个node服务器，配置代理，因为服务器与服务器之间是不存在跨域问题的
        4. 服务器上利用Nginx做反向代理（没试过）
##### 前端必会的算法
   [算法] : https://blog.csdn.net/weixin_38984353/article/details/80393412
   1. 冒泡排序
   ```
   function quickSort(arr){
        for(var i = 0;i<arr.length;i++){
            for(var j = 0;j < arr.length - i - 1 ;j++){
                if(arr[j] > arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr
   }
   ```
   2. 寻找高频字符串
```
   function findHigh(str) {
       let obj = {};
       [].forEach.call(str,function (val) {
           obj[val] = typeof obj[val] === 'number'?obj[val]+1:0
       });
       console.log(obj);
       let arr = [];
       for(let key in obj){
           arr.push({
               str:key,
               count:obj[key]
           })
       }
       return mppx(arr)
   }
 ```
##### 动画
1. https://juejin.im/post/5ca59688f265da30c3478e19
##### dom事件
1. dom2级事件，三个阶段
   1. 事件捕获阶段
   2. 事件发生阶段
   3. 事件冒泡阶段
2. 事件委托
    本来应该发生在子元素上的事件，被委托到父元素上，判断event-target 去执行对应逻辑
##### 手写一个ajax
``` 
var xhr = new XmlHttpRequest() 或者  new ActiveXObject()
    xhr.onreadyChange = function(){
        if(xhr.readyState = 4){
        if(xhr.status == 200){
            var test = xhr.responseTest()
        }
    }
}
xhr.open("Get" , url ,false) //第三个参数，是否异步
```
##### 解析url后的参数
```
function getQueryString(name) { 
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
var r = window.location.search.substr(1).match(reg); 
if (r != null) return unescape(r[2]); return null; 
}   
```  
##### 字符串方法
    1. indexOf(0,1)可以传入两个参数。第一个参数是查找的字符串，第二个是从指定传入位置进行查找；
##### 实现 JS 对象的深拷贝
```
1. function deepClone(o1, o2) {
    for (let k in o2) {
        if (typeof o2[k] === 'object') {
            o1[k] = {};
            deepClone(o1[k], o2[k]);
        } else {
            o1[k] = o2[k];
        }
    }
}
// 测试用例
let obj = {
    a: 1,
    b: [1, 2, 3],
    c: {}
};
let emptyObj = Object.create(null);
deepClone(emptyObj, obj);
2. JSON.parse(JSON.stringfy(obj))
```
##### js常见报错类型
  ReferenceError 同作用域判别失败相关，而 TypeError 则代表作用域判别成功了，但是对
结果的操作是非法或不合理的。
##### eval()与JSON.parse()区别
##### let与const
    都是用来声明块级作用域的，而且不会在块作用域中进行提升
    区别是：const声明的是一个常量。
##### jQuery源码解析
    jQuery本质是一个函数,这个函数会返回一个类NodeList对象  
##### ES6模块化与common.js规范
```
 1. common.js
    --- a.js
    exports.a = xxx
    --- b.js
    var a = require('./a')
    console.log(a.a)
 2. es6模块化
    --- a.js
    export let a = xxx
    --- b.js
    import {a} from './a'
    or
    --- a.js
    let a = xxx
    export defult a
    --- b.js
    let x from './a.js'   
```  
## CSS部分
##### H5标签分类
       1. 行内元素：·a,b,span,img,input,select,strong·
       2. 块级元素：·ul,li,div,p,section,footer,h1-h6·  
##### 页面导入样式，使用link和@import有什么区别
    1. link属于XHTML标签，除了加载css外，还有别的用途；而@import只能用来加载css
    2. link引用css时，在页面加载时同时被加载；@import需要页面网页完全载入以后加载
    3. link是XHTML标签 无兼容性问题，@import是css2.1提出来的
##### 常见的浏览器内核有哪些?
    1. trident内核：IE
    2. Gecko内核：火狐浏览器
    3. Blink内核：Operea
    4. Webkit内核：Safari、Chrome
    5. 微信安卓版浏览器：X5
    6. 微信IOS版浏览器：由于苹果官方限制，所以与Safari内核一致 
##### 什么叫优雅降级和渐进增强？
    1. 优雅降级：页面效果优先，提倡先保持页面效果在现代浏览器的最佳显示，再向下兼容，比如一些css3的一些效果。
    2. 渐进增强：兼容性优先，先保证在低版本浏览器中可以完整实现功能，再寻求一些页面效果的精致。                
##### 能实现个三栏布局吗 （左右栏定宽，中间栏自适应） 
      1. 左右float，中间margin隔出间距(dom顺序，需要left ， right ，main这样)
      2. 左右float，中间positon：absolute；设置left；right距离
      3. flex布局:父元素display：flex；justify-content:space-betwen;左右元素定宽，中间子元素设置 flex-grow：1；设置为铺满剩余空间
##### display有哪些值，各有什么作用
       1. none;隐藏dom
       2. inline-block;转化为行块元素
       3. block; 转化为类块级元素，可以独占一行(但不是真正转化为块级元素，具有流体特性，可以撑满父盒子)
       4. flex;转化为弹性伸缩盒子     
##### position有几种定位方式 
      1. static。默认值，与正常元素没有两样。
      2. inherit。继承父类的postion值。ie不支持此属性。
      3. relative。相对于自身进行定位。
      4. absolute。绝对定位。相对于距元素上下级关系最近并且设置有定位的元素进行定位。
      5. fixed。 固定定位。相对于浏览器窗口进行定位。 
##### CSS样式优先级
    即 ID 选择器权值为 100，类选择器权值为 10，标签选择器权值为 1，当一个选择器由多个 ID 选择器、类选择器或标签选择器组成时，则将所有权值相加，然后再比较权值。style行内，为1000， ！important无穷大。
    以上方式只是便于理解
##### 如何清除浮动
    1.给父元素添加伪类
    .clear-float:after{
      content:'';
      display:block;
      clear:both;
    }
    2.overflow:hidden;
##### 如何适配移动端
    1.利用媒体查询进行响应式布局
    @media screen and (max-width: 300px) {
    html,body {
        font-size:0.58rem;
      }
    }
##### 盒子垂直水平居中实现方式
  1. 知道宽度情况下：margin:0 auto;
  2. display:inline-block; 父盒子设置 text-align:center; line-height:父盒height
  3. flex布局。display：flex; justify-content:center; align-item:center;
  4. postion:absolute;left:50%;top:50% + transfrom:translate(-50%,-50%)  
##### 关于CSS盒模型
  1. 标准盒模型
    设置的width只会影响content的宽度，最终width是content-width+padding+border+margin
    box-sizing:content-box; 
  2. ie盒模型
    box-sizing:border-box;
    设置的width是内容(content)+填充(padding)+边框(border)的总宽高
##### 边距重叠（塌陷）问题
    
##### BFC
    概念:指的是块级格式化上下文。就是可以指定一块只包含指定元素的渲染区域，不影响外部元素。
    用途： 1.清除浮动。给父元素设置overflow：hidden；计算BFC的高度时，浮动元素也参与计算
           2.margin塌陷与合并。给父元素设置overflow：hidden；可以隔离之间的影响。  
## HTML部分
##### HTML5有什么变化
 + 新的语义化元素
 + 视频和音频
 + Canvas
 + 新的存储方式 localStorage与sessionStorage
 + WebSocket
##### mata标签有哪些
```可能用到的meta标签
<!-- 设置缩放 -->
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" />
<!-- 可隐藏地址栏，仅针对IOS的Safari（注：IOS7.0版本以后，safari上已看不到效果） -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- 仅针对IOS的Safari顶端状态条的样式（可选default/black/black-translucent ） -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- IOS中禁用将数字识别为电话号码/忽略Android平台中对邮箱地址的识别 -->
<meta name="format-detection"content="telephone=no, email=no" />

其他meta标签
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
```
## 综合题
###### 前端性能优化
    1. 减少http请求；
    2. 减少静态资源的体积
    3. 使用缓存
    4. 代码结构层面的优化
###### 


