<template>
  <div>
    <p-tabs :selected.sync="selectedTab">
      <p-tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <p-tabs-item name="tab1">
          Tab1
        </p-tabs-item>
        <p-tabs-item name="tab2" disabled>
          Tab2
        </p-tabs-item>
        <p-tabs-item name="tab3">
          Tab3
        </p-tabs-item>
      </p-tabs-head>
      <p-tabs-body>
        <p-tabs-pane name="tab1">Tab1内容</p-tabs-pane>
        <p-tabs-pane name="tab2">Tab2内容</p-tabs-pane>
        <p-tabs-pane name="tab3">Tab3内容</p-tabs-pane>
      </p-tabs-body>
    </p-tabs>
  </div>
</template>
<script>
  import Tabs from '../../../src/Tabs'
  import TabsHead from "../../../src/Tabs-head"
  import TabsBody from "../../../src/Tabs-body"
  import TabsPane from "../../../src/Tabs-pane"
  import TabsItem from "../../../src/Tabs-item"
  import Icon from "../../../src/Icon"

  export default {
    data(){
      return {
        selectedTab: 'tab1'
      }
    },
    components: {
      'p-tabs': Tabs,
      'p-tabs-body': TabsBody,
      'p-tabs-head': TabsHead,
      'p-tabs-pane': TabsPane,
      'p-tabs-item': TabsItem,
      'p-icon': Icon
    }
  }
</script>
<style scoped lang="scss">
  * {
    /*padding: 0;*/
    /*margin: 0;*/
    box-sizing: border-box;
  }

  .row {
    background: #3EAF7C;
    color: #ffffff;

    .col {
      min-height: 30px;
      border: 1px solid #ffffff;
      display: flex;
      align-items: center;justify-content: center;
    }
  }
</style>