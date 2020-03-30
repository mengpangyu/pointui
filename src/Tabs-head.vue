<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PointTabsHead',
  inject: ['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(item,vm)=>{
      let {width,left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left= `${left}px`
    })
  }
}
</script>
<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: blue;
  $border-color: #ddd;
.tabs-head{
  border-bottom: 1px solid $border-color;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all .3s;
  }
  > .actions-wrapper{
    margin-left: auto;
    padding: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>