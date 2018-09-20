<template>
<form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="username">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" @click.prevent="add" class="btn btn-default pull-right">提交</button>
            </div>
          </div>
          <p style="color: red" v-show="errorMsg">{{errorMsg}}</p>
        </form>
</template>

<script>
export default {
  props: {
    addComments: Function
  },
  data () {
    return {
      username: '',
      content: '',
      errorMsg: ''
    }
  },
  methods: {
    add () {
      const { addComments, username, content } = this
      if (!username || !content) {
        this.errorMsg = '用户名或内容不能为空!'
      } else {
        this.errorMsg = ''
        addComments({ username, content })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
