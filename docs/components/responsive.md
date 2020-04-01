## Responsive 响应式布局

多端适应的布局方式

### 代码演示


<responsive-demos></responsive-demos>


```javascript
<p-row gutter="20">
   <p-col span="12" >...</p-col>
   <p-col span="12">...</p-col>
</p-row>
<p-row gutter="20">
   <p-col span="8" >...</p-col>
   <p-col span="8">...</p-col>
   <p-col span="8">...</p-col>
</p-row>
```

### 参数介绍

#### Row 组件
|  |  gutter (可选)  | align (可选)|
|---|  ----  | ----  |
|功能| 控制间隙  | 控制Col位置 |
|类型| Number | left,right,center| 
#### Col 组件
|  |  span | offset(可选) | ipad(可选) | narrow-pc(可选) |pc(可选)| wide-pc(可选) |
|---|  ----  | ----  |----|----|----|-----|
|功能| 控制Col的占比  | 控制前后的格子需要 | 适应ipad |适应窄 PC| 适应 PC |适应宽PC|
|类型| Number | Number | Object |Object| Object| Object|

>注意: 
- Col 一共有 24 格，在使用的时候请按照规则使用
- 适应屏幕的选择需传入一个对象，格式为 ipad=“{span:10,offset:1}”
- 本框架默认支持移动端，请用户斟酌使用
