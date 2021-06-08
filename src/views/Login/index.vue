<template>
  <div>这是登录页
    <el-button type="primary" @click="login">登陆</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    login() {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>