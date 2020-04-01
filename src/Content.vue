<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script>
  export  default {
    name: 'PointContent'
  }
</script>
<style  lang="scss" scoped>
  .content{
    flex-shrink: 0;
    flex-grow: 1;
  }
</style>
