import Vue from 'vue'
import Button from './Button.vue'
import Icon from "./Icon"
import Button_group from "./Button_group"
import Input from "./Input"
import Col from "./Col"
import Row from "./Row"

Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
Vue.component('p-button-group', Button_group)
Vue.component('p-input', Input)
Vue.component('p-col', Col)
Vue.component('p-row', Row)
new Vue({
  el: '#app',
  data: {
    loadingState1: false,
    loadingState2: false,
    loadingState3: false,
    message: '1'
  }
})

// 单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect
// {
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData: {
//       icon: 'setting'
//     }
//   })
//   button.$mount()
//   let useElement = button.$el.querySelector('use')
//   expect(useElement.getAttribute('xlink:href')).to.eq('#icon-setting')
//   button.$el.remove()
//   button.$destroy()
// }
// {
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData: {
//       icon: 'setting',
//       loading: true
//     }
//   })
//   button.$mount()
//   let useElement = button.$el.querySelector('use')
//   expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
//   button.$el.remove()
//   button.$destroy()
// }
// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData: {
//       icon: 'setting',
//     }
//   })
//   button.$mount(div)
//   let svg = button.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('1')
//   button.$el.remove()
//   button.$destroy()
// }
// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData: {
//       icon: 'setting',
//       iconPosition: 'right'
//     }
//   })
//   button.$mount(div)
//   let svg = button.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq('2')
//   button.$el.remove()
//   button.$destroy()
// }
// {
//   const Constructor = Vue.extend(Button)
//   const button = new Constructor({
//     propsData: {
//       icon: 'setting',
//     }
//   })
//   button.$mount()
//   let spy = chai.spy(function(){})
//   button.$on('click',spy)
//   let buttons = button.$el
//   buttons.click()
//   expect(spy).to.have.been.called()
// }
