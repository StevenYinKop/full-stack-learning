<template>
<ul class="list-group">
  <li class="list-group-item" v-for="(item, index) in commentsList" :key="index">
    <CommentsItem :item='item' :deleteComments='deleteComments' :index='index'/>
  </li>
</ul>
</template>

<script>
import CommentsItem from '../CommentsItem/CommentsItem'
export default {
  props: {
    commentsList: Array,
    deleteComments: Function
  },
  components: {
    CommentsItem
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style >

li {
  transition: 0.5s;
  overflow: hidden;
}

.list-group-item .centence {
  padding: 0px 50px;
}
</style>
