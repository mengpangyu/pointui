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

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.ok
  })
  it('子组件只能是 tabs-head 和 tabs-body', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <p-tabs selected="sports">
        <p-tabs-head>
          <p-tabs-item name="woman"> 美女 </p-tabs-item>
          <p-tabs-item name="finance" > 财经 </p-tabs-item>
          <p-tabs-item name="sports"> 体育 </p-tabs-item>
        </p-tabs-head>
        <p-tabs-body>
          <p-tabs-pone name="woman"> 美女咨询 </p-tabs-pone>
          <p-tabs-pone name="finance"> 财经相关 </p-tabs-pone>
          <p-tabs-pone name="sports"> 体育相关 </p-tabs-pone>
        </p-tabs-body>
      </p-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      expect(vm.$el.querySelector('.tabs-item[data-name="sports"]').classList.contains('active')).to.be.true
      done()
    })
  })
  it('可以接受 direction prop', () => {
  })
})