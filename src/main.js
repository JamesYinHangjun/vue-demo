// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入axios
import axios from 'axios'
// console.log(axios)    f wrap(){}
// axios 是一个函数, 下面相当于给vue挂载了一个方法， 这样在ListView中就可以使用 axios 了
Vue.prototype.$http =axios

import './api/mock.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
