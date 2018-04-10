js中的this关键词很有趣，下面我们来分析一下关于this指向的几种情况。

1. 函数中的this
```javascript
function foo() {
  console.log(this)
}
foo()
```
运行foo函数时候，this为默认绑定，指向window

2. 对象方法调用中的this
```javascript
var obj = {
  say() {
    console.log(this)
  }
}
obj.say()
```
通过obj调用其中的say方法时，this指向obj

注意：
```javascript
var obj = {
  say() {
    console.log(this)
  }
}

var foo = obj.say
foo()
```
这里的this又回到的默认绑定，指向window。

所以很重要的一点，this指向是在运行时判断，而非声明时。

3. 通过call/apply/bind改变this指向
```javascript
var dog = {
  say() {
    console.log(this)
  }
}

var cat = {}

dog.say.call(cat)
```
其中this通过call被绑定到了cat上

4. 通过new操作符改变this指向
```javascript
function Person(name) {
  this.name = name
}
```
var person = new Person('lisi')
通过new操作符将this绑定到person对象上