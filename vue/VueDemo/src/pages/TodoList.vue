<template>
<div>
  <todo-header :addTodo='addTodo'></todo-header>
  <todo-body :todos='todos' :completedTodo='completedTodo'></todo-body>
  <todo-footer :todos='todos' :deleteCompletedTodos='deleteCompletedTodos'></todo-footer>
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
      todos: [],
      addTodo: (item) => {
        let maxId = 0
        this.todos.forEach(e => {
          if (e.id > maxId) {
            maxId = e.id
          }
        })
        item.id = maxId + 1
        this.todos.push(item)
        window.localStorage.setItem('todo-key', JSON.stringify(this.todos))
      },
      deleteCompletedTodos: () => {
        this.todos = this.todos.filter(item => !item.completed)
      },
      completedTodo: (id) => {
        this.todos = this.todos.map(item => {
          if(item.id === id) {
            item.completed = true
          }
          return item
        })
      }
    }
  },
  mounted () {
    this.todos = JSON.parse(window.localStorage.getItem('todo-key') || '[]')
  }
}
</script>
<style>

</style>
