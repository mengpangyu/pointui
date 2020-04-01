## Collapse 折叠面板

可以折叠/展开的内容区域

### 何时使用

对复杂区域进行分组和隐藏，保持页面的整洁。

**手风琴**是一种特殊的折叠面板，只允许单个内容区域展开。

### 代码演示 

>单个折叠面板


<collapse-demos></collapse-demos>

```javascript
<p-collapse single :selected="['1']">
 <p-collapse-item title="标题1" name="1">内容1</p-collapse-item>
 <p-collapse-item title="标题2" name="2">内容2</p-collapse-item>
 <p-collapse-item title="标题3" name="3">内容3</p-collapse-item>
</p-collapse>
```

>多个折叠面板

<collapse-demos2></collapse-demos2>

```javascript
<p-collapse :selected="['1']">
 <p-collapse-item title="标题1" name="1">内容1</p-collapse-item>
 <p-collapse-item title="标题2" name="2">内容2</p-collapse-item>
 <p-collapse-item title="标题3" name="3">内容3</p-collapse-item>
</p-collapse>
```
