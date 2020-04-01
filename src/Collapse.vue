<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'PointCollapse'
  }
</script>
<style lang="scss" scoped>
  $grey: grey;
  $border-radius:4px;
.collapse{
  border-radius: $border-radius;
  border: 1px solid $grey;
}
</style>