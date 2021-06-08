<template>
  <el-container>
    <el-header>
      <div class="head-left">
        <span v-show="isShow">我的系统管理后台</span>
        <span class="iconfont icon" :class="iconfont" @click="icon"></span>
      </div>
      <div class="head-right">
        <el-button type="primary" @click="back">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside :width="`${changWidth}px`">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          :collapse="!isShow"
          router
          unique-opened
        >
          <el-menu-item index="/user">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="/goods/set/add">
              <span slot="title">发布商品</span>
            </el-menu-item>
            <el-menu-item index="/goods/1">
              <span slot="title">在售商品</span>
            </el-menu-item>
            <el-menu-item index="/goods/2">
              <span slot="title">仓库商品</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="/classify">
            <template slot="title">
              <i class="el-icon-guide"></i>
              <span>分类管理</span>
            </template>
              <el-menu-item index="/classify">商品分类</el-menu-item>
              <el-menu-item index="/classify/add">添加分类</el-menu-item>
          </el-submenu>
          <el-menu-item index="/home">
            <i class="el-icon-s-platform"></i>
            <span slot="title">控制台</span>
          </el-menu-item>
          <el-submenu index="/news">
            <template slot="title">
              <i class="el-icon-notebook-2"></i>
              <span>新闻管理</span>
            </template>
              <el-menu-item index="/news">新闻分类</el-menu-item>
              <el-menu-item index="/news">添加分类</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      iconfont: "icon-caidanzuo",
      changWidth: 150
    };
  },
  methods: {
    icon() {
      this.isShow = !this.isShow;
      this.isShow
        ? (this.iconfont = "icon-caidanzuo")
        : (this.iconfont = "icon-caidanyou");
      // this.isShow ? this.changWidth = 200 : this.changWidth = 80
      this.changWidth = this.isShow ? 150 : 68
    },
    back() {
      this.$router.push('/Login')
    }
  },
  created() {
    // 当前第路由信息
    // console.log(location.pathname);
    // console.log(this.$route);
    
  }
};
</script>

<style scoped>
.el-header {
  background-color: skyblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
.el-container {
  height: 100%;
}
.el-aside {
  border-right: 1px solid #ddd;
  overflow: hidden;
  transition: all 1s;
}
.icon {
  font-size: 20px;
  color: #ddd;
  margin-left: 20px;
  cursor: pointer;
}
.header-left:first-child {
  user-select: none;
  cursor: default;
}
.el-menu{
  border:none
}
</style>