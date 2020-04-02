
## Button 按钮

按钮用于开始一即时操作

### 何时使用

响应用户点击行为，触发相应的业务逻辑

在 Point UI 中,有四种按钮状态

### 代码演示 

>默认按钮


<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

```vue
<p-button>按钮</p-button>
```

>带icon的按钮

<ClientOnly>
<button-demos2></button-demos2>
</ClientOnly>

```vue
<p-button icon="setting">按钮</p-button>
<p-button icon="setting" icon-position="right">按钮</p-button>
```

>正在加载的按钮

<ClientOnly>
<button-demos4></button-demos4>
</ClientOnly>

```vue
<p-button loading="true">按钮</p-button>
```
>联合按钮

<ClientOnly>
<button-demos5></button-demos5>
</ClientOnly>

```vue
<p-button-group>
   <p-button  icon="left">按钮</p-button>
   <p-button  icon="right">按钮</p-button>
</p-button-group>
```
### 参数介绍

|  |  icon | icon-position | loading |
|---|  ----  |  --- | --- | --- |
|功能| 设置含有的icon | 设置icon位置 | 加载中的按钮 | 
|类型| String | left/right |  Boolean |