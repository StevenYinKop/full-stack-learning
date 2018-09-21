<template>
  <el-button
  size="mini"
  type="danger"
  @click.native="deleteAllCompletedTodos"
  >
  清除已完成任务
  </el-button>
</template>
<script>
export default {
  props: {
    todos: Array
  },
  methods: {
    deleteAllCompletedTodos () {

    }
  }

}
</script>
