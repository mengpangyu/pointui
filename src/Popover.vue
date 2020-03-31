<template>
  <div class="popover" ref="popover" >
    <div :class="{[`position-${position}`]:true} " ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
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
    mounted(){
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click',this.onClick)
      }else{
        this.$refs.popover.addEventListener('mouseenter',this.open)
        this.$refs.popover.addEventListener('mouseleave',this.close)
      }
    },
    destroyed() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click',this.onClick)
      }else{
        this.$refs.popover.removeEventListener('mouseenter',this.open)
        this.$refs.popover.removeEventListener('mouseleave',this.close)
      }
    },
    computed:{
      openEvent(){
        if (this.trigger === 'click') {
          return 'click'
        }else{
          return 'mouseenter'
        }
      },
      closeEvent(){
        if (this.trigger === 'click') {
          return 'click'
        }else{
          return 'mouseleave'
        }
      }
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0

        }
      },
      trigger:{
        type:String,
        default: 'click',
        validator(value){
          return ['click','hover'].indexOf(value) >= 0
        }
      }
    },
    methods: {
      positionContent() {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
        const {height: height2} = contentWrapper.getBoundingClientRect()
        let positions = {
          top: {
            top: top + window.scrollY,
            left: left + window.scrollX
          },
          bottom: {
            top: top + height + window.scrollY,
            left: left + window.scrollX
          },
          left: {
            top: top + (height - height2) / 2 + window.scrollY,
            left: left + window.scrollX
          },
          right: {
            top: top + (height - height2) / 2 + window.scrollY,
            left: left + window.scrollX + width
          },
        }
        contentWrapper.style.left = positions[this.position].left + 'px'
        contentWrapper.style.top = positions[this.position].top + 'px'
      },
      onClickDocument(e) {
        if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {return }
        if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {return }
        this.close()
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close() {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $border-color: #333;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: 4px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));background: #ffffff;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;

    &::before, &::after { content: ''; display: block; border: 10px solid transparent; width: 0; height: 0;
      position: absolute; }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::before, &::after { left: 10px; border-bottom: none;}

      &::before { border-top-color: $border-color; top: 100%; }

      &::after { border-top-color: white; top: calc(100% - 1px); }
    }

    &.position-bottom {
      margin-top: 10px;

      &::before, &::after { left: 10px;}

      &::before { border-top: none; border-bottom-color: $border-color; bottom: 100%; }

      &::after {  border-top: none;border-bottom-color: white; bottom: calc(100% - 1px); }
    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;

      &::before, &::after {
        border-right: none;
        transform: translateY(-50%);
        top: 50%;
      }

      &::before { left: 100%;border-left-color: $border-color; }

      &::after { left: calc(100% - 1px);border-left-color: white; }
    }

    &.position-right {
      margin-left: 10px;

      &::before, &::after {
        border-left: none;
        transform: translateY(-50%);
        top: 50%;
      }

      &::before { right: 100%;border-right-color: $border-color; }

      &::after { right: calc(100% - 1px);border-right-color: white; }
    }
  }
</style>