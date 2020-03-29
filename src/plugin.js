import Toast from './Toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message,toastOptions) {
      let Constructor = Vue.extend(Toast)
      console.log(toastOptions)
      let toast = new Constructor({
        propsData: toastOptions
      })
      toast.$slots.default = [message]// 必须放在 mount 之前
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}