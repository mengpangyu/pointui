<template>
  <div class="popover" @click="xx">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'PointPopover',
    data(){
      return {
        visible: false
      }
    },
    methods:{
      xx(){
        this.visible = !this.visible
      }
    }
  }
</script>
<style lang="scss" scoped>
.popover{
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper{
    position: absolute;
    bottom: 100%;
    left: 0;
  }
}
</style>