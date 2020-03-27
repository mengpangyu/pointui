const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/Input.vue'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('可以设置value', () => {
      vm = new Constructor({
        propsData: {
          value: '123'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('123')
    })
    it('可以设置 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('可以设置 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it('可以设置 error', () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
      const errorMessage = vm.$el.querySelector('.error-message')
      expect(errorMessage.innerText).to.equal('你错了')
    })
  })
  describe('event',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('change/blur/focus/input 事件', () => {
      ['change','blur','focus','input'].forEach(eventName=>{
        vm = new Constructor({}).$mount()
        const callback= sinon.fake()
        vm.$on(eventName,callback)
        let event = new Event(eventName)
        Object.defineProperty(event,'target',{
          value: {value: 'hi'},enumerable:true }) // 改变了 event 的值
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.called.calledWith('hi')
      })
    })
  })
})