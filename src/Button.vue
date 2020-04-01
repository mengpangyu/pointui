<template>
  <button class="g-button ddddd" :class="{[`icon-pos-${iconPosition}`]:true}"
          @click="$emit('click')"
  >
    <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script>
  import Icon from "./Icon"

  export default {
    name: 'PointButton',
    components: {
      'g-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        types: String,
        default: 'left',
        validator(value) {
          return value === 'right' || value === 'left'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $button-height: 32px;
  $button-bg: #fff;
  $button-active-bg: #fff;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  @keyframes loadingCircle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .g-button {
    font-size: $font-size; height: $button-height; padding: 0 1em; border-radius: $border-radius; border: 1px solid $border-color; background: $botton-bg; display: inline-flex; justify-content: center; align-items: center;

    vertical-align: middle;

    &:hover {
      border-color: $border-color-hover;
    }

    &:active {
      background: $button-active-bg;
    }

    &:focus { outline: none; }

    > .icon { order: 1; margin-right: .2em; }

    > .content { order: 2; }

    &.icon-pos-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .2em;
      }

      > .content {
        order: 1;
      }
    }
  }

  .loading {
    animation: loadingCircle 1s infinite linear;
  }

</style>
