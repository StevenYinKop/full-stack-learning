<template>
<div>
  <todo-header></todo-header>
  <todo-body :todos='todos' :addTodo='addTodo'></todo-body>
  <todo-footer :todos='todos'></todo-footer>
</div>
</template>
<script>
import TodoBody from '../components/TodoList/TodoBody'
import TodoHeader from '../components/TodoList/TodoHeader'
import TodoFooter from '../components/TodoList/TodoFooter'
export default {
  components: {
    TodoFooter, TodoBody, TodoHeader
  },
  data () {
    return {
      todos: [{
        id: 1,
        content: 'football ',
        name: 'football',
        completed: true
      }, {
        id: 2,
        content: 'learning vue',
        name: 'vue',
        completed: false
      }, {
        id: 3,
        content: 'learning java',
        name: 'java',
        completed: false
      }],
      addTodo(item) {
        let maxId = 0
        this.todos.forEach(e => {
          if(e.id > maxId) {
            maxId = e.id
          }
        })
        item.id = maxId + 1
      }
    }
  },
}
</script>
<style>

</style>
