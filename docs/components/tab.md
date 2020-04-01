## Tab 标签页

选项卡切换组件

### 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。


### 代码演示 

>默认 tab


<tabs-demos></tabs-demos>

```javascript
<p-tabs :selected.sync="selectedTab">
  <p-tabs-head>
    <template slot="actions">
      <button>设置</button>
    </template>
    <p-tabs-item name="tab1">Tab1</p-tabs-item>
    <p-tabs-item name="tab2">Tab2</p-tabs-item>
    <p-tabs-item name="tab3">Tab3</p-tabs-item>
  </p-tabs-head>
  <p-tabs-body>
    <p-tabs-pane name="tab1">Tab1内容</p-tabs-pane>
    <p-tabs-pane name="tab2">Tab2内容</p-tabs-pane>
    <p-tabs-pane name="tab3">Tab3内容</p-tabs-pane>
  </p-tabs-body>
</p-tabs>
```

>添加 icon 的 tab

<tabs-demos2></tabs-demos2>

```javascript
<p-tabs :selected.sync="selectedTab">
  <p-tabs-head>
    <template slot="actions">
      <button>设置</button>
    </template>
    <p-tabs-item name="tab1">
      <p-icon name="zan"></p-icon>Tab1
    </p-tabs-item>
    <p-tabs-item name="tab2">
      <p-icon name="zan"></p-icon>Tab2
    </p-tabs-item>
    <p-tabs-item name="tab3">
      <p-icon name="zan"></p-icon>Tab3
    </p-tabs-item>
  </p-tabs-head>
  <p-tabs-body>
    <p-tabs-pane name="tab1">Tab1内容</p-tabs-pane>
    <p-tabs-pane name="tab2">Tab2内容</p-tabs-pane>
    <p-tabs-pane name="tab3">Tab3内容</p-tabs-pane>
  </p-tabs-body>
</p-tabs>
```

>添加 禁用 的 tab

<tabs-demos3></tabs-demos3>

```javascript
<p-tabs :selected.sync="selectedTab">
  <p-tabs-head>
    <template slot="actions">
      <button>设置</button>
    </template>
    <p-tabs-item name="tab1">
      Tab1
    </p-tabs-item>
    <p-tabs-item name="tab2" disabled>
      Tab2
    </p-tabs-item>
    <p-tabs-item name="tab3">
      Tab3
    </p-tabs-item>
  </p-tabs-head>
  <p-tabs-body>
    <p-tabs-pane name="tab1">Tab1内容</p-tabs-pane>
    <p-tabs-pane name="tab2">Tab2内容</p-tabs-pane>
    <p-tabs-pane name="tab3">Tab3内容</p-tabs-pane>
  </p-tabs-body>
</p-tabs>
```
