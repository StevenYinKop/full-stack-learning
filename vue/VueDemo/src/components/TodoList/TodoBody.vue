<template>
    <el-table
    :data="todos"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection">
    </el-table-column>
    <el-table-column
      prop="name"
      label="任务名称">
    </el-table-column>
    <el-table-column
      prop="content"
      label="任务详情">
    </el-table-column>
    <el-table-column
      label="操作"
      width="120">
      <template slot-scope="scope">
        <i class="el-icon-check" @click="completedTodo(scope.row.id)"></i>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    todos: Array,
    completedTodo: Function
  },
  data () {
    return {
      multipleSelection: []
    }
  },
  methods: {
    tableRowClassName ({row}) {
      return row.completed ? 'todo-completed' : 'todo-not-completed'
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style>
  .el-table .todo-completed {
    background: #67C23A
  }
  .el-table .todo-not-completed {
    background: #F56C6C
  }
</style>
