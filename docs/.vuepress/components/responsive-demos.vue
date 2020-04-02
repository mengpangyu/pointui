<template>
  <div style="margin: 20px 0;">
    <p-row gutter="20">
      <p-col span="12">12</p-col>
      <p-col span="12">12</p-col>
    </p-row>
    <p-row gutter="20">
      <p-col span="8">8</p-col>
      <p-col span="8">8</p-col>
      <p-col span="8">8</p-col>
    </p-row>
    <p-row gutter="20">
      <p-col span="6">6</p-col>
      <p-col span="6">6</p-col>
      <p-col span="6">6</p-col>
      <p-col span="6">6</p-col>
    </p-row>
    <p-row gutter="20">
      <p-col span="4">4</p-col>
      <p-col span="4">4</p-col>
      <p-col span="4">4</p-col>
      <p-col span="4">4</p-col>
      <p-col span="4">4</p-col>
      <p-col span="4">4</p-col>
    </p-row>
  </div>
</template>
<script>
  import Row from '../../../src/Row'
  import Col from '../../../src/Col'
  export default {
    components:{
      'p-row': Row,
      'p-col': Col
    }
  }
</script>
<style scoped lang="scss">
  *{
    /*padding: 0;*/
    /*margin: 0;*/
    box-sizing: border-box;
  }
.row{
  background: #3EAF7C;
  color: #ffffff;
  .col{
    min-height: 30px;
    border: 1px solid #ffffff;
    display: flex;
    align-items: center;justify-content: center;
  }
}
</style>