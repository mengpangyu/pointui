<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'PointToast'
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: black;
  .toast{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    display: flex;
    align-items: center;
    color: #ffffff;
    padding: 0 10px;
    background: $toast-bg;
    background: rgba(0, 0, 0, .75);
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
  }
</style>
