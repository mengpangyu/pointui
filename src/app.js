import Vue from 'vue'
import Button from './Button.vue'
import Icon from "./Icon"
import Button_group from "./Button_group"
import Input from "./Input"
import Col from "./Col"
import Row from "./Row"
import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"
import Layout from "./Layout"
import Sider from "./Sider"
import Toast from "./Toast"
import Plugin from "./plugin"
import Tabs from "./Tabs"
import TabsHead from "./Tabs-head"
import TabsBody from "./Tabs-body"
import TabsItem from "./Tabs-item"
import TabsPane from "./Tabs-pane"

Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
Vue.component('p-button-group', Button_group)
Vue.component('p-input', Input)
Vue.component('p-col', Col)
Vue.component('p-row', Row)
Vue.component('p-header', Header)
Vue.component('p-layout', Layout)
Vue.component('p-content', Content)
Vue.component('p-footer', Footer)
Vue.component('p-sider', Sider)
Vue.component('p-toast', Toast)
Vue.component('p-tabs', Tabs)
Vue.component('p-tabs-head', TabsHead)
Vue.component('p-tabs-body', TabsBody)
Vue.component('p-tabs-pone', TabsPane)
Vue.component('p-tabs-item', TabsItem)
Vue.use(Plugin)
new Vue({
  el: '#app',
  created(){
  },
  methods:{
    showToast(){
      this.$toast('wefff',{
        enableHtml: true,
        position: 'middle'
      })
    }
  }
})

