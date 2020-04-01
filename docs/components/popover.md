## Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层

### 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现

### 代码演示 

>点击时的Popover

<popover-demos></popover-demos>

```javascript
<p-popover position="right" >
  <template slot="content">
    <div>响应</div>
  </template>
  <p-button>按钮</p-button>
</p-popover>
```

**注意: 如果想更换Popover的位置，只需要改 position 即可**

>hover 时的 Popover

<popover-demos2></popover-demos2>

```javascript
<p-popover position="right" trigger="hover">
  <template slot="content">
    <div>响应</div>
  </template>
  <p-button>按钮</p-button>
</p-popover>
```
