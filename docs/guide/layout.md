## Layout 布局


协助进行页面级整体布局


### 代码演示 

>下面布局样式仅参考,在使用时需要用户添加样式使用


>上中下布局


![avatar](../.vuepress/public/layout1.png)

```vue
<p-layout>
  <p-header>header</p-header>
  <p-content>content</p-content>
  <p-footer>footer</p-footer>
</p-layout>
```

>侧边栏在左边的布局



![avatar](../.vuepress/public/layout2.png)

```vue
<p-layout>
  <p-header>header</p-header>
      <p-layout>
        <p-sider>sider</p-sider>
        <p-content>content</p-content>
      </p-layout>
  <p-content>content</p-content>
  <p-footer>footer</p-footer>
</p-layout>
```

>侧边栏在右边的布局



![avatar](../.vuepress/public/layout3.png)

```vue
<p-layout>
  <p-header>header</p-header>
      <p-layout>
        <p-content>content</p-content>
        <p-sider>sider</p-sider>
      </p-layout>
  <p-content>content</p-content>
  <p-footer>footer</p-footer>
</p-layout>
```

>侧边栏在外部的布局



![avatar](../.vuepress/public/layout4.png)

```vue
<p-layout>
  <p-sider>sider</p-sider>
      <p-layout>
        <p-header>header</p-header>
        <p-content>content</p-content>
        <p-footer>footer</p-footer>
      </p-layout>
</p-layout>
```

