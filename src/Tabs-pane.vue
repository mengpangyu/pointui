<template>
  <div class="tabs-pane" v-if="active" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'PointTabsPane',
    inject: ['eventBus'],
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: [String,Number],
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
  }
</script>
<style lang="scss" scoped>
  .tabs-pane {
    &.active {
      background: #ff1100;
    }
  }
</style>