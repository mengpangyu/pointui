## Toast 消息提示

提示反馈信息

### 何时使用

可提供成功、警告和错误等反馈信息

顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式

### 代码演示 

>自动关闭消息

<ClientOnly>
<toast-demos></toast-demos>
</ClientOnly>

```vue
<p-button @click="$toast('点击弹出提示')">上方弹出</p-button>
<p-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</p-button>
<p-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</p-button>
```

>手动关闭消息

<ClientOnly>
<toast-demos2></toast-demos2>
</ClientOnly>

```vue
<p-button class="toast" @click="$toast('点击弹出提示',{autoClose:false})">上方弹出</p-button>
<p-button @click="$toast('点击弹出提示', {position:'middle',autoClose:false})">中间弹出</p-button>
<p-button @click="$toast('点击弹出提示', {position:'bottom',autoClose:false})">下方弹出</p-button>
```

>运用回调

<ClientOnly>
<toast-demos3></toast-demos3>
</ClientOnly>


```vue
<p-button @click="$toast('我是toast消息提示', {
            closeButton: {
              text: 'OK',
              callback: () => {
                console.log('用户说OK')
              }
            }
          })">上方弹出</p-button>
```


>提示信息可以为HTML文本

<ClientOnly>
<toast-demos4></toast-demos4>
</ClientOnly>

```vue
<p-button @click="$toast(`<strong>我是加粗字体</strong>`, {enableHtml:true})">上方弹出</p-button>
```

### 参数介绍

|  |  position(可选) | autoClose(可选) | closeButton(可选) | enableHtml(可选) |
|---|  ----  | ----  | --- | ---- |
|功能| 控制消息的位置  | 控制是否自动关闭/关闭时间设置 | 设置关闭按钮的文本/设置一个回调|设置是否可以加HTML文本|
|类型| Ojbect | Boolean/Number | Object |Boolean|