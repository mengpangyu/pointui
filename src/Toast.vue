<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="clickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>
<script>
  export default {
    name: 'PointToast',
    props: {
      autoClose: {
        type: Boolean,
        default: false
      },
      autoCloseDelay: {
        type: Number,
        default: 2
      },
      closeButton: {
        type: Object,
        default() {
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    computed: {
      toastClasses() {
        return {[`position-${this.position}`]: true}
      }
    },
    mounted() {
      this.updateStyles()
      this.execAutoClose()
    },
    methods: {
      updateStyles() {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      },
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      close() {
        this.$el.remove()
        this.$destroy()
      },
      clickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback()
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, .75);
  .toast { position: fixed; font-size: $font-size; line-height: 1.8;
    min-height: $toast-min-height; display: flex; align-items: center; color: #ffffff;
    padding: 0 10px; background: $toast-bg; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    left: 50%;

    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }

    .message {
      padding: 6px 0;
    }

    .line {
      height: 100%;
      border-left: 1px solid #666666;
      margin-left: 16px;
    }

    &.position-top {
      top: 5px;transform: translateX(-50%);
    }
    &.position-bottom{
      bottom: 5px;transform: translateX(-50%);
    }
    &.position-middle{
      top: 50%;transform: translate(-50%,-50%);
    }
  }
</style>
