## Tab 标签页

选项卡切换组件

### 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。


### 代码演示 

>默认 tab


<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

```vue
<p-tabs :selected.sync="tab1">
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

<ClientOnly>
<tabs-demos2></tabs-demos2>
</ClientOnly>

```vue
<p-tabs :selected.sync="tab1">
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

<ClientOnly>
<tabs-demos3></tabs-demos3>
</ClientOnly>

```vue
<p-tabs :selected.sync="tab1">
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

### 参数介绍

|  |  selected | name | 
|---|  ----  |  --- | 
|功能| 与name组合使用,默认选中某个tab,必须为动态数据| 给tab-item取名,与selected组合使用 |
|类型| String | String| 
