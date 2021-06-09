<template>
  <div>
    <el-table
     :data="list" 
     style="width: 100%" 
     :row-class-name="tableRowClassName">
      <el-table-column prop="title" label="新闻" width="500">

      </el-table-column>
      <el-table-column prop="author_name" label="出版社" width="180">

      </el-table-column>
      <el-table-column prop="date" label="日期">

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.$http({
      method:'get'
    }).then(res=>{
      console.log(res);
      this.list = res.result.data
    })
      // this.$http.get('http://api.web1024.cn/news/list',{
      //     params:{
      //         key: "8tk528",
      //     }
      // })
      // .then(res => {
      //     console.log(res.data.result);
      //     this.list = res.data.result.data
      // })
  },
   methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
};
</script>

<style scoped>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>