<template>
  <div>
    <p-button icon="setting">按钮</p-button>
    <p-button icon="setting" icon-position="right">按钮</p-button>
  </div>
</template>
<script>
  import Button from '../../../src/Button'
  export default {
    components:{
      'p-button': Button
    }
  }
</script>
<style scoped lang="scss">

</style>