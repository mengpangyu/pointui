const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/Tabs.vue'
import TabsHead from "../src/Tabs-head"
import TabsBody from "../src/Tabs-body"
import TabsPane from "../src/Tabs-pane"
import TabsItem from "../src/Tabs-item"

Vue.component('p-tabs', Tabs)
Vue.component('p-tabs-head', TabsHead)
Vue.component('p-tabs-body', TabsBody)
Vue.component('p-tabs-pone', TabsPane)
Vue.component('p-tabs-item', TabsItem)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  it('存在', () => {
    expect(TabsItem).to.be.exist
  })
  it('接受 name 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData:{
        name: 'x'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('x')
  })
  it('接受 disabled 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData:{
        name: 'x',
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.true
    const callback = sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })

})