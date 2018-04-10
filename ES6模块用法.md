## ES6模块
### 导入
ES6中用import关键字来导入模块，用法如下：
import导入模块的时候，主要由两部分：要导入的标识符和标识符所在的模块。
import后面跟花括号
- 导入单个模块
```javascript
import { foo1 } from './bar'
```
- 导入多个模块
```javascript
import { foo1, foo2 } from './bar'
```
- 导入所有模块
```javascript
import * as foo from './bar'
```
- 导入默认模块
用于
```javascript
import foo from './bar'
```
### 导出
export导出模块
- 导出单个模块
```javascript
export foo1
```
- 导出多个模块
```javascript
export {foo1, foo2, foo3}
```
- 重命名导出
```javascript
export {foo1 as foo2}
```
- 默认导出
`export default`为模块中指定默认输出值，只允许默认输出一个值
```javascript
export default foo1
```