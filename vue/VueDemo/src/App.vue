<template>
  <div id="app">
    <el-container>
      <el-header >
        <Logo title="Vue js Learning Demo"/>
      </el-header>
      <hr>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          router>
          <el-menu-item index="/Home">
            <i class="el-icon-menu"></i>
            <span >Home</span>
          </el-menu-item>
          <el-menu-item index="/Comments">
            <i class="el-icon-document"></i>
            <span >Comments</span>
          </el-menu-item>
          <el-menu-item index="/TodoList">
            <i class="el-icon-setting"></i>
            <span >TodoList</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    </el-container>
  </div>
</template>

<script>
import Comments from './pages/Comments'
import Logo from './components/Logo/logo'
export default {
  name: 'App',
  components: {
    Comments,
    Logo
  }
}
</script>

<style>

</style>
