<template>
  <div class="collapse-item">
    <div class="title" @click="open = !open">
      {{title}}
    </div>
    <div class="content"v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PointCollapseItem',
    props: {
      title: {
        type: String,
        require: true
      }
    },
    data(){
      return {open:false}
    }
  }
</script>
<style lang="scss" scoped>
  $grey: grey;
  $border-radius:4px;
.collapse-item{
  >.title{
    border: 1px solid $grey;
    margin: -1px -1px 0 -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 1em;
  }
  &:first-child{
    >.title{
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child{
    >.title:last-child{
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .content{
    padding: 0 1em;
  }

}
</style>