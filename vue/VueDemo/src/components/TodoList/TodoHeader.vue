<template>
<div>
  <el-input v-model="nameValue" placeholder="请输入待办事项"></el-input>
  <hr>
  <el-input v-model="contentValue" placeholder="请输入事项详情"></el-input>
  <hr>
  <el-button
  size="mini"
  type="primary"
  @click.native="addNewTodo">
    添加
  </el-button>
  <hr>
  <p style="color: red" v-show="errMsg">{{errMsg}}</p>
</div>
</template>
<script>
export default {
  props: {
    addTodo: Function
  },
  data () {
    return {
      nameValue: '',
      contentValue: '',
      errMsg: ''
    }
  },
  methods: {
    addNewTodo () {
      const { nameValue, contentValue } = this
      if (!nameValue || !contentValue) {
        this.errMsg = '请输入正确的名称和详情信息'
      } else {
        this.errMsg = ''
        this.addTodo({ name: nameValue, content: contentValue })
      }
    }
  }
}
</script>
<style>
</style>
