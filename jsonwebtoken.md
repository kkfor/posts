## jsonwebtoken
JSON Web令牌的实现。  
这是针对`draft-ietf-oauth-json-web-token-08`开发的。它使用node-jws

### 安装

```
$ npm install jsonwebtoken
```

### 迁移笔记
- 从v7到v8

### 用法
#### jwt.sign(payload, secretOrPrivateKey, [options, callback])
（异步）如果提供了回调，将用`err`或`JWT`调用回调。  
（同步）以字符串形式返回JsonWebToken。  
`payload`可以是对象字面量，缓冲区或有效的JSON字符串。请注意`exp`或其他声明仅在payload是对象字面量下设置。缓冲区或字符串payload不检查JSON的有效性。  
`secretOrPrivateKey`是一个字符串，缓冲区，或对象