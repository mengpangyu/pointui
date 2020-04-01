<template>
  <div>
   <p-collapse :selected="['1','2']">
     <p-collapse-item title="标题1" name="1">内容1</p-collapse-item>
     <p-collapse-item title="标题2" name="2">内容2</p-collapse-item>
     <p-collapse-item title="标题3" name="3">内容3</p-collapse-item>
   </p-collapse>
  </div>
</template>
<script>
 import Collapse from "../../../src/Collapse"
 import CollapseItem from "../../../src/CollapseItem"
  export default {
    components: {
      'p-collapse':Collapse,
      'p-collapse-item':CollapseItem

    }
  }
</script>
<style scoped lang="scss">
</style>