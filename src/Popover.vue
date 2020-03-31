<template>
  <div class="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'PointPopover',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      onClick(event) {
        console.log(event.target)
        if (this.$refs.triggerWrapper.contains(event.target)) {
          this.visible = !this.visible
          console.log(this.visible)
          if (this.visible === true) {
            setTimeout(() => {
              document.body.appendChild(this.$refs.contentWrapper)
              let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
              this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`
              this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`
              let eventHandler = (e) => {
                console.log(e.target)
                console.log(this.$refs.contentWrapper)
                if(!this.$refs.contentWrapper.contains(e.target)){
                  this.visible = false
                  document.removeEventListener('click', eventHandler)
                }
              }
              document.addEventListener('click', eventHandler)
            })
          }else{
            console.log('dd')
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    width: 50px;
    position: absolute;
    transform: translateY(-100%);
  }
</style>