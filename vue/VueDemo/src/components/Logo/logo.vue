<template>
  <div class="container logo-title">
    <img src="../../assets/logo.png" alt="vue logo">
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style>
.logo-title img {
  height: 72px;
  width: 72px;
  float: left;
}
.logo-title p {
  font-size: 30px;
  font-weight: 500;
}
.logo-title div {
  margin-top: 20px;
  margin-bottom: 10px;

}
</style>
