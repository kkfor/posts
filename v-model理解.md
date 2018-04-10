## 深入理解vue之v-model语法糖
vue中用v-model实现双向绑定，其实v-model只是一个语法糖。在自定义组件上也可以用v-model实现传递数据，以及父子组件数据的双向绑定。
### v-model语法糖拆解
vue中v-model的写法如下
```javascript
<input v-model="data"></input>
```
其实v-model是下面写法的简写形式，

```javascript
<input :value="data" @input="data = $event.target.value"></input>
```
- input中设置value属性，值为data。  
- input中绑定输入事件，每次输入$event.target.value获取input中输入的内容，传递给value属性
### 自定义组件v-model用法
父组件绑定v-model
```javascript
<foo v-model="data"></foo>
```
子组件通过props添加value属性值来接收父组件v-model的值
```javascript
props:['value']
```