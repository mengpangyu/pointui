<template>
  <div class="tabs-item" @click="xxx" :class="classes">
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
          active: this.active
        }
      }
    },
    mounted() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>
<style lang="scss" scoped>
  $blue: blue;
  .tabs-item {
    display: flex;
    padding: 0 1em;
    align-items: center;
    color: $blue;
    height: 100%;
    &.active {
    }
  }
</style>