## Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层

### 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现

### 代码演示 

>点击时的Popover

<ClientOnly>
<popover-demos></popover-demos>
</ClientOnly>

```vue
 <p-popover position="right" >
  <template style="z-index: 999"slot="content">
    <div>响应</div>
  </template>
  <p-button>按钮</p-button>
</p-popover>
<p-popover >
  <template slot="content">
    <div >响应</div>
  </template>
  <p-button>按钮</p-button>
</p-popover>
<p-popover position="bottom">
  <template slot="content">
    <div >响应</div>
  </template>
  <p-button>按钮</p-button>
</p-popover>
<p-popover position="left">
  <template slot="content">
    <div >响应</div>
  </template>
  <p-button>按钮</p-button>
</p-popover>
```

**注意: 如果想更换Popover的位置，只需要改 position 即可**

>hover 时的 Popover

<ClientOnly>
<popover-demos2></popover-demos2>
</ClientOnly>

```vue
<p-popover position="right" trigger="hover">
  <template style="z-index: 999"slot="content">
    <div>响应</div>
  </template>
  <p-button>按钮</p-button>
</p-popover>
<p-popover trigger="hover">
  <template slot="content">
    <div >响应</div>
  </template>
  <p-button>按钮</p-button>
</p-popover>
<p-popover position="bottom" trigger="hover">
  <template slot="content">
    <div >响应</div>
  </template>
  <p-button>按钮</p-button>
</p-popover>
<p-popover position="left" trigger="hover">
  <template slot="content">
    <div >响应</div>
  </template>
  <p-button>按钮</p-button>
</p-popover>
```
### 参数介绍

|  |  position | trigger | 
|---|  ----  |  --- | 
|功能| 设置显示位置 | 设置事件 |
|类型| right/left/top/bottom | click/hover | 