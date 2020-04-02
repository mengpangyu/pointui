## Input 输入框 

通过鼠标或键盘输入内容，是最基础的表单域的包装

### 何时使用 

需要用户输入表单域内容时


### 代码演示 

>默认输入框


<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

```vue
<p-input value="输入内容"></p-input>
```

>不可输入

<ClientOnly>
<input-demos2></input-demos2>
</ClientOnly>

```vue
<p-input disabled value="不可输入"></p-input>
```


>只读

<ClientOnly>
<input-demos3></input-demos3>
</ClientOnly>

```vue
<p-input readonly value="只读"></p-input>
```

>错误输入

<ClientOnly>
<input-demos4></input-demos4>
</ClientOnly>

```vue
<p-input value="错误内容" error="你输入的内容不符合要求"></p-input>
```


### 参数介绍

|  |  value | disabled | readonly | error |
|---|  ----  |  --- | --- | --- |
|功能| 设置输入框里的默认内容 | 禁止输入| 只读 | 错误信息 |
|类型| String | disabled| readonly | String |