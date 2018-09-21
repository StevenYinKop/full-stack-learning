// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import ElementUI from 'element-ui'
import { Header, Container, Aside, Main, Row, Col, Menu, MenuItem, Input, Table, TableColumn, Button } from 'element-ui'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)

// Vue.component(ElContainer.name, ElContainer)
// Vue.component(ElAside.name, ElAside)
// Vue.component(ElMain.name, ElMain)
// Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
