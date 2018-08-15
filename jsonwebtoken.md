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
`secretOrPrivateKey`是一个字符串，缓冲区，或对象包含HMAC算法的密码或RSA和ECDSA的PEM编码的私钥。对于带有密码短语的秘钥可以用{key, passphrase}(基于加密文档)，这种情况，请确认你传递了加密选项。  
`options`:
- `algorithm`（默认：`HS256`）
- `expiresIn`：用秒或字符串描述时间跨度zeit/ms。例如：`60`，`"2 days"`，`"10h"`，`"7d"`。数值将被理解为以秒计时。如果用字符串，请确认提供了时间单位（days，hours等），否则使用毫秒作为默认单位（`"120"`等同于`"120ms"`）
- `notBefore`：用秒或字符串描述时间跨度zeit/ms。例如：`60`，`"2 days"`，`"10h"`，`"7d"`。数值将被理解为以秒计时。如果用字符串，请确认提供了时间单位（days，hours等），否则使用毫秒作为默认单位（`"120"`等同于`"120ms"`）
- `audience`
- `issuer`
- `jwtid`
- `subject`
- `noTimestamp`
- `header`
- `keyid`
- `mutatePayload`：如果为true，sign函数将直接修改payload对象。如果你在声明被应用到payload之后，并且在编码成token之前，需要对payload的引用，这是有用的。  
如果`payload`不是一个缓冲区或字符串，它将用`JSON.stringify`强制转化成字符串。  
`expiresIn`，`notBefore`，`audience`，`subject`，`issuer`是没有默认值的。这些设置也可以在payload中分别用`exp`，`nbf`，`aud`，`sub`和`iss`提供，但是不可以两个同时存在。  
记住`exp`，`nbf`和`iat`是数字日期，参见相关令牌过期。  
可以通过`options.header`对象来自定义头部。  
除非指定了`noTimestamp`，否则创建jwts的时候会自动包含`iat`。如果`iat`被插入到了payload中，他将会被用来代替实际时间戳来计算像在`options.exporesIn`中给出的时间间隔`exp`。