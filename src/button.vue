<template>
  <button class="g-button" :class="{[`icon-pos-${iconPosition}`]:true}"
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
<style lang="scss">
  @keyframes loadingCircle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .g-button {
    font-size: var(--font-size); height: var(--button-height); padding: 0 1em; border-radius: var(--border-radius); border: 1px solid var(--border-color); background: var(--botton-bg); display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background: var(--button-active-bg);
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
