<template>
  <div class="tabs-head" ref="head">
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
      console.log(vm.$el)
      let {width,left} = vm.$el.getBoundingClientRect()
      let headerLeft = this.$refs.head.getBoundingClientRect().left
      console.log(width)
      this.$refs.line.style.width = `${width}px`
      console.log(left)
      this.$refs.line.style.left= `${left-headerLeft}px`
    })
  }
}
</script>
<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: #3EAF7C;
  $border-color: #ddd;
.tabs-head{
  border-bottom: 1px solid $border-color;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  > .line{
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all .3s;
  }
  > .actions-wrapper{
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    > button{
      padding: .5em 1em;
      border: none;
      outline: none;
      background: #ffffff;
      &:hover{
        color: $blue;
      }
    }
  }
}
</style>