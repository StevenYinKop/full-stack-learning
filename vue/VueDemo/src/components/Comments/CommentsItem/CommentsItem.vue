<template>
<div>
<div class="handle">
      <a href="javascript:;" @click.prevent='deleteC(index)'>删除</a>
    </div>
    <p class="user"><span >{{item.username}}</span><span>说:</span></p>
    <p class="centence">{{item.content}}</p>
</div>
</template>

<script>
export default {
  props: {
    index: Number,
    item: Object,
    deleteComments: Function
  },
  methods: {
    deleteC (index) {
      this.deleteComments(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.user {
  font-size: 22px;
}
</style>
