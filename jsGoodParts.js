/**
 * 创建一个原型对象为o的对象
 */
if (typeof Object.beget !== 'function') {
  Object.beget = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  };
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
});


Object.method('superior', function() {
  var that = this,
      method = that[name];
  return function() {
    return method.apply(that, arguments);
  };
});

/**
 * 判断数组
 */
// 方法1
var isArray = function(value) {
  return value && typeof value === 'object' && value.constructor === Array;
};

// 方法2
var isArray2 = function(value) {
  return Object.prototype.toString.apply(value) === '[object Array]';
};

var arr = [1,22,35,18,8,4];
var b = arr.sort(function(a, b) {
  return a-b;
});

/**
 * 函数式构造器
 */
// 声明构造方法
var mamal = function(spec) {
  var that = {};

  that.get_name = function() {
    return spec.name;
  };
  that.says = function() {
    return spec.saying;
  };

  return that;
};

// 实例化
var myMamal = mamal({name: 'hari', saying: 'wuwu'});

// console.log(myMamal.get_name(), myMamal.says())

// 函数式继承
var cat = function(spec) {
  var that = mamal(spec);

  that.eat = function() {
    return spec.foods;
  };

  return that;
};

// 实例化
var mycat = cat({name: 'hulo', foods: 'fish', saying: 'miao'});
// console.log(mycat.get_name())

/**
 * 数字单词排序
 */
var m =['aa', 'bb', 'vbd', 123, 541, 22, 61, 18];
m.sort(function(a, b) {
  // 相等则不变
  if(a === b) {
    return 0;
  }
  // 类型相同，从小到大
  if(typeof a === typeof b) {
    return a < b ? -1 : 1;
  }
  // 类型不同时，按类型排列
  return typeof a < typeof b ? -1 : 1;
});

/**
 * 利用apply实现bind
 */
Function.method('bnd', function(that) {
  var method = this,
      slice = Array.prototype.slice,
      args = slice.apply(arguments, [1]);
  return function() {
    return method.apply(that, args.concat(slice.apply(arguments, [0])));
  };
});

/**
 * 
 */
var str = 'fsf';
var b = str.slice(2,3);
console.log(b);
