import App from './App.vue'
import Vue from 'vue'

import VueCookies from 'vue-cookies'// vue cookies -- 用户登录状态存储
import tool from './assets/js/tool.js'//工具函数
import store from './assets/js/vuex.js'//状态管理
import soket from './assets/js/soket.js'//websoket
import router from './assets/js/router.js'//路由

Vue.config.productionTip = false

Vue.use(VueCookies)
//工具函数挂载
Vue.prototype.tool = new tool();
//soket 对象挂载
Vue.prototype.soket = soket
//当前用户对象
Vue.prototype
var vues = new Vue({
  render: h => h(App),
  router,//路由挂载
  store
}).$mount('#app')


