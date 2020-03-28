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
new Vue({
  el: '#app',
})

