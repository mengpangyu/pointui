<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
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
    created() {
      if(this.eventBus){
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        })
      }
    },
    methods: {
      onClick() {
        if(this.disabled){
          return
        }
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('click',this)
      }
    }
  }
</script>
<style lang="scss" scoped>
  $disabled-color: #D6D3D3;
  $blue: #3EAF7C;
  .tabs-item {
    display: flex;
    padding: 0 1em;
    align-items: center;
    cursor: pointer;
    height: 100%;
    font-weight: bold;
    color: #999999;
    &.active {
      color: $blue;
    }
    &.disabled{
      color: $disabled-color;
      cursor: not-allowed;
    }
  }
</style>