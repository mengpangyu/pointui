<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'PointTabsItem',
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    mounted() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    methods: {
      onClick() {
        if(this.disabled){
          return
        }
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>
<style lang="scss" scoped>
  $disabled-color: grey;
  $blue: blue;
  .tabs-item {
    display: flex;
    padding: 0 1em;
    align-items: center;
    color: $blue;
    height: 100%;
    &.active {
    }
    &.disabled{
      color: $disabled-color;
    }
  }
</style>