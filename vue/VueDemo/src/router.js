import VueRouter from 'vue-router'
import Comments from './pages/Comments.vue'
import Home from './pages/Home.vue'
import TodoList from './pages/TodoList.vue'

export default new VueRouter({
  routes: [{
    path: '/',
    redirect: '/Home'
  }, {
    path: '/Home',
    component: Home
  }, {
    path: '/Comments',
    component: Comments
  }, {
    path: '/TodoList',
    component: TodoList
  }]
})
