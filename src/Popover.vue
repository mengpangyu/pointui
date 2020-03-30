<template>
  <div class="popover" @click.stop="xx">
    <div class="content-wrapper" v-if="visible" @click.stop>
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
        if(this.visible === true){
          setTimeout(()=>{
            let eventHandler = () =>{
              this.visible = false
              document.removeEventListener('click',eventHandler)
            }
            document.addEventListener('click', eventHandler)
          },500)
        }
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