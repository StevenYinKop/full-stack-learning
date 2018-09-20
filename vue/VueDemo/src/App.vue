<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <h2>DEMO 01 留言板</h2>
    <Comments/>
    <hr>
  </div>
</template>

<script>
import Comments from './components/Comments/Comments'

export default {
  name: 'App',
  components: {
    Comments
  }
}
</script>

<style>
</style>
