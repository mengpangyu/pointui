<template>
  <div style="margin: 20px 0;">
    <p-button class="toast" @click="$toast('点击弹出提示',{autoClose:false})">上方弹出</p-button>
    <p-button @click="$toast('点击弹出提示', {position:'middle',autoClose:false})">中间弹出</p-button>
    <p-button @click="$toast('点击弹出提示', {position:'bottom',autoClose:false})">下方弹出</p-button>
  </div>
</template>
<script>
  import Vue from 'vue'
  import plugin from "../../../src/plugin"
  import Button from "../../../src/Button"

  Vue.use(plugin)
  export default {
    components:{
      'p-button':Button
    },
  }
</script>
<style scoped lang="scss">
</style>