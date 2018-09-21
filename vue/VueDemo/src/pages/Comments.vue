<template>
  <div>
      <comments-header />
      <div class="col-md-4">
        <CommentsInput :addComments='addComments' />
      </div>
      <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none' v-show="commentsList.length === 0">暂无评论，点击左侧添加评论！！！</h2>
        <CommentsList :commentsList='commentsList' :deleteComments='deleteComments'/>
      </div>
  </div>
</template>

<script>
import CommentsHeader from '../components/Comments/CommentsHeader/CommentsHeader'
import CommentsInput from '../components/Comments/CommentsInput/CommentsInput'
import CommentsList from '../components/Comments/CommentsList/CommentsList'
export default {
  components: {
    CommentsHeader,
    CommentsInput,
    CommentsList
  },
  data () {
    return {
      commentsList: [{username: 'Jack', content: 'Vue is so ez'}],
      addComments: (item) => {
        this.commentsList.push(item)
      },
      deleteComments: (index) => {
        this.commentsList.splice(index, 1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.reply {
  margin-top: 0px;
}
</style>
