<template>
  <div style="margin: 20px 0;">
    <p-button @click="$toast('我是toast消息提示', {
                closeButton: {
                  text: 'OK',
                  callback: () => {
                    console.log('用户说OK')
                  }
                }
              })">上方弹出</p-button>
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