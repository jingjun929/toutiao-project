import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// ElementUI 是一个插件  集成了很多组件
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app')
