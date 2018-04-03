backpack是node.js的极简构建系统。受facebook的create-reac-app,zeit的next.js和remy的nodemon启发，你可以用backpack通过零配置创建现成node.js应用和服务。backpack监听所有文件，热加载，替换和构建，所以你不必重启。有一些默认约定（像支持最新的JavaScript（async/await,对象展开运算符和类属性）），但是可以根据你的项目需求自定义配置。最方便的是你可以像一个依赖一样将backopack添加进你已经存在的node.js项目。
### backpack拥有以下特性：
- 最新的es6特性（包括模块语法，async/await，对象展开符）
- 友好的，可读的错误信息
- 热加载（在保存，添加/删除文件时等）
- 零配置，一个依赖
而且，你可以根据项目需要通过扩展基于webpack2的配置来配置backpack。
请阅读：如果你考虑在react.js中使用backpack，你应该使用razzle。razzle是react服务器端构建工具并且拥有多数相同的api。
### 用法
安装：  
```
npm i backpack-core --save
```
在package.json中添加脚本
```
{
  "script": {
    "dev": "backpack"
  }
}
```