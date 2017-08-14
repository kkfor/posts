/**
 * 创建一个原型对象为o的对象
 */
if (typeof Object.beget !== 'function') {
  Object.beget = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  }
}

/**
 * 给Function.prototype添加方法
 */
Function.prototype.method = function(name, func) {
  if(!this.prototype[name]) {
    this.prototype[name] = func;
  }
  return this;
};

/**
 * 封装继承
 */
Function.method('inherits', function(Parent) {
  this.prototype = new Parent();
  return this;
});

/**
 * 
 */
Function.method('curry', function() {
  var slice = Array.prototype.slice,
      args = slice.apply(arguments),
      that = this;
  return function() {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});



/**
 * 高仿new操作符
 */
Function.method('new', function() {
  var that = Object.create(this.prototype);
  var other = this.apply(that, arguments);
  return (typeof other === 'object' && other) || that;
})


Object.method('superior', function() {
  var that = this,
      method = that[name];
  return function() {
    return method.apply(that, arguments)
  }
})

/**
 * 判断数组
 */
// 方法1
var isArray = function(value) {
  return value && typeof value === 'object' && value.constructor === Array
}

// 方法2
var isArray2 = function(value) {
  return Object.prototype.toString.apply(value) === '[object Array]'
}

var arr = [1,22,35,18,8,4]
var b = arr.sort(function(a, b) {
  return a-b
})
console.log(b)
