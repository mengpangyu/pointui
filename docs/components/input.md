## Input 输入框 

通过鼠标或键盘输入内容，是最基础的表单域的包装

### 何时使用 

需要用户输入表单域内容时


### 代码演示 

>默认输入框


<input-demos></input-demos>

```javascript
<p-input value="输入内容"></p-input>
```

>不可输入

<input-demos2></input-demos2>
```javascript
<p-input disabled value="不可输入"></p-input>
```


>只读

<input-demos3></input-demos3>
```javascript
<p-input readonly value="只读"></p-input>
```

>错误输入

<input-demos4></input-demos4>
```javascript
<p-input value="错误内容" error="你输入的内容不符合要求"></p-input>
```


