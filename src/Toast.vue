<template>
  <div class="outer" :class="toastClasses">
    <div class="toast" ref="wrapper">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="clickClose">
      {{closeButton.text}}
    </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PointToast',
    props: {
      autoClose: {
        type: [Boolean,Number],
        default: 2,
        validator(value){
          return value === false || typeof value === 'number';
        }
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
        this.$nextTick(()=>{
          this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      },
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.closeMe()
          }, this.autoClose * 1000)
        }
      },
      closeMe() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      clickClose() {
        this.closeMe()
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
  @keyframes slide-up {
    0% { opacity: 0;transform: translateY(100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }

  @keyframes slide-down {
    0% { opacity: 0;transform: translateY(-100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }

  @keyframes fade-in {
    0% { opacity: 0;}
    100% {opacity: 1;}
  }

  .outer {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    &.position-top { top: 5px;

      > .toast {
        animation: slide-down .5s;
      }
    }

    &.position-bottom { bottom: 5px;

      > .toast {
        animation: slide-up .5s;
      }
    }

    &.position-middle { top: 50%;transform: translate(-50%, -50%);
      > .toast {
        animation: fade-in .5s;
      }
    }
  }

  .toast {
    font-size: $font-size; line-height: 1.8;
    min-height: $toast-min-height; display: flex; align-items: center; color: #ffffff;
    padding: 0 10px; background: $toast-bg; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);

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
  }
</style>
