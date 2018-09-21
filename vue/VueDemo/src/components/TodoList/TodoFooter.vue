<template>
  <el-button
  size="mini"
  type="danger"
  @click.native="deleteCompletedTodos"
  >
  清除已完成任务
  </el-button>
</template>
<script>
export default {
  props: {
    todos: Array,
    deleteCompletedTodos: Function
  }
}
</script>
