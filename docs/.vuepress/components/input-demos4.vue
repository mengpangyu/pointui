<template>
  <div>
    <p-input value="错误内容" error="你输入的内容不符合要求"></p-input>
  </div>
</template>
<script>
  import Input from '../../../src/Input'
  export default {
    components:{
      'p-input': Input
    }
  }
</script>
<style scoped lang="scss">

</style>