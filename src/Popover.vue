<template>
  <div class="popover" ref="popover" @click="onClick">
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
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper)
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },
      onClickDocument(e){
        console.log(this.$refs.popover)
        console.log(e.target)
        if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {return }
        this.close()
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close(){
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          }else{
            this.open()
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