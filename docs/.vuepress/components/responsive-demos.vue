<template>
  <div style="width: 480px;height: 50px;margin: 10px" >
    <p-row gutter="20">
      <p-col span="12" >...</p-col>
      <p-col span="12">...</p-col>
    </p-row>
    <p-row gutter="20">
      <p-col span="8">...</p-col>
      <p-col span="8">...</p-col>
      <p-col span="8">...</p-col>
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