#### js变量提升
原理是js引擎在执行代码的过程是分两个阶段的，1.编译阶段2.执行阶段
变量提升发生在执行阶段。

注意点: 函数与变量都会提升，相同的函数会覆盖上一个函数，并且函数提升优先于变量提升
#### bind、call、apply区别
      call、apply都用来改变this指向，作用都是一致的，只是传参不同
```
   getValue.call(obj,'jack','11岁') 
   getValue.apply(obj,['jack','11岁']) 
   bind是Function.prototype的一个属性
```   
#### js面向对象，原型链
    js面向对象有两种方式，但是他们的本质都是基于原型的。
    1. 第一种采用模拟其他语言‘类’设计模式的方式，利用构造函数例如F（）充当类的角色，建立new出来的对象与构造函数的prototype指向的原型对象之间的关联。
    实例自身找不到的方法，会继续沿着F.prototype上去找，类似于作用域链的感觉，这就是原型链，与java里父类之类之间的继承复制完全不同，js里对象的属性、方法
    只有查找，并没有产生复制。
    2. 利用Object.create(obj)，显式的去以传入的obj为原型，创建一个与之有原型链查找关系的新对象。
####  数据类型
+ 存储位置：基本数据类型存储在栈上，引用类型存储在堆上
+ 分类：
  + 六种基本数据类型：string、number、boolean、null、undefined、symbol;
  + 一种复杂数据类型: Object （涉及 Function、Date、Array、String、Boolean、RegExp）;
+ 判断数据类型
  1. typeof:有string number boolean object undefined function 6种返回值
      + 优势：安全优势，即使变量压根不存在，也不会报错
      + 没法区分对象类型，还有typeof null 返回 object的历史遗留问题
  2. instanceof:只能用来判断对象类型，原理是判断对象[]constructor指向的构造函数是谁。一般的判断，typeof+instanceof就可以搞定
  3. js里原型链的终点止于Object.prototype，在这个原型上，js默认有两个常用方法，toString，valueOf，
      Object.prototype.toString.call(obj) 返回一个 字串‘[object 构造函数]’;
      + 优势：通用 
      + 比较麻烦
 #### this指向问题
      完全取决于函数调用位置与方式，所以只能分析调用情况
    1. 函数直接调用，this指向window，或者undefined(取决于是否是严格模式)
    2. 通过一个对象去调用,this指向这个当前对象
    3. 构造函数里的this，指向即将要返回的实例
    4. call、apply中指向传入的对象
 #### Promise
  [链接] : http://www.php.cn/js-tutorial-406264.html 
  基本讲的很全了
 #### 原型与es6 class
   + class新语法: http://www.php.cn/js-tutorial-406259.html 
   + 原型
      + 原型对象有一个constructor属性，指向x该原型对象对应的构造函数。
      + 构造函数有一个prototype属性，指向实例对象的原型对象。
      + 实例对象有一个__proto__属性，指向该实例对象对应的原型对象
#### 强制隐式转换
   + ==的判断规则
      + NaN不等于NaN
      + null == undefined // 判断为true
      + 111 == ‘111’// 转化为 111 == 111 判定为true，string类型转换为number类型去比较：可以理解为number类型有比较高的比较优先级
      + true == 1 // 转化为 1 == 1 判断为true， boolean 类型的比较也会优先转化成数字类型去比较 
      + 对象 == 基本类型 //对象需要先转化为基本类型，这个比较复杂，详细说说
          + 对象转化为基础数据类型，其实最终都是用调用对象自带的valueOf和toString两个方法之一并获得其返回值，作为其基础数据类型。
       例：[] == ![] // -> true       
#### 闭包
   + 概念：闭包就是可以通过返回一个函数达到保存当时执行环境里的一种技术。
        + js里变量访问遵循词法作用域，说白了就是由写代码时候的位置决定的。所以，只要嵌套的作用域里返回一个函数（js里函数是一等公民，可以传递），那这个函数就会引用当时的执行环境，不受函数执行完销毁作用域的影响。
 #### Event loop
   js事件分为宏任务，微任务
   + 宏任务包括 setTimeout、script等
   + 微任务最常用的就是Promise
   + 一次完整的事件循环，包括以下几项
      + 执行同步代码，这属于宏任务
      + 执行栈为空，查询是否有微任务需要执行
      + 执行所有微任务
      + 必要的话渲染 UI
      + 然后开始下一轮 Event loop，执行宏任务中的异步代码                   
       
   
    
      
  
