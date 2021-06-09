<template>
  <div>
    <el-page-header @back="back" content="添加分类"></el-page-header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route.params.id);
  },
  methods: {
    back() {
      this.$router.push({
        path: "/classify",
      });
    },
  },
};
</script>

<style>
</style>