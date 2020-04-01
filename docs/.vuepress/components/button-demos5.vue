<template>
  <div>
    <p-button-group>
      <p-button  icon="left">按钮</p-button>
      <p-button  icon="right" icon-position="right">按钮</p-button>
    </p-button-group>
  </div>
</template>
<script>
  import Button from '../../../src/Button'
  import ButtonGroup from '../../../src/Button_group'
  export default {
    components:{
      'p-button': Button,
      'p-button-group': ButtonGroup,
    }
  }
</script>
<style scoped lang="scss">

</style>