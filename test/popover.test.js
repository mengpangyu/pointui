const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover.vue'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置 position', (done) => {
    Vue.component('p-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <p-popover position="left" ref="a">
      <template slot="content">
      弹出内容
      </template>
      <button>下面</button>
    </p-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-left')).to.be.true
      done()
    })
  })
})