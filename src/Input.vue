<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
    @change="$emit('change',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @input="$emit('input',$event.target.value)"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from './Icon'
  export default {
    components:{Icon},
    name: 'PointInput',
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly:{
        type: Boolean,
        default: false
      },
      error:{
        type:String,
      }
    }
  }
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $font-size: 12px;
  $border-radius: 4px;
  $box-shadow-color: rgba(0, 0, 0, .5);
  $red: #f10;
  .wrapper { font-size: $font-size; display: inline-flex;
    align-items: center;
    > *{
      margin-right: .5em;
      &:last-child{
        margin-right: 0;
      }
    }

    > input { padding: 0 10px; height: $height; border: 1px solid $border-color; border-radius: $border-radius; font-size: inherit;
&:hover { border-color: $border-color-hover; }

      &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }
      &:disabled{ border-color: #bbb; color: #bbb; cursor: not-allowed; background: #ffffff; }
      &:read-only{ border-color: #bbb; color: #bbb; cursor: not-allowed; }
    }
    &.error{
      >input{
        border-color: $red;
      }
    }
    .icon-error{
      fill: $red;
    }
    .error-message{
      color: $red;
    }
  }
</style>