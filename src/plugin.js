import Toast from './Toast'
function createToast({Vue,message,propsData}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]// 必须放在 mount 之前
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message,toastOptions) {
      if(currentToast){currentToast.close()}
      currentToast = createToast({Vue,message,propsData:toastOptions})
    }
  }
}
