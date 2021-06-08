<template>
  <div>添加分类 {{$route.params.id}}</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    console.log(this.$route.params.id);
  }
}
</script>

<style>

</style>