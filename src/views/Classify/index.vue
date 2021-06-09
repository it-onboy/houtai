<template>
  <el-container>
    <el-header>
      <el-button type="primary" icon="el-icon-plus" @click="addShop">添加商品</el-button>
    </el-header>
    <el-main>
      <!-- 商品分类 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand" id="table">
          <template slot-scope="scope">
             <!-- <span>{{scope.row}}</span> -->
             <table style="width=100%" cellspacing='0'>
               <tr v-for="(item,index) in scope.row.children" :key="index">
                 <td style="width:150px;padding-left:30px">{{item.id}}</td>
                 <td style="width:200px;padding-left:5px">{{item.name}}</td>
                 <td style="width:300px">{{item.img}}</td>
                 <td></td>
               </tr>
             </table>
           </template>
        </el-table-column>
        <el-table-column width="150" label="商品 ID" prop="id" >
          
        </el-table-column>
        <el-table-column width="200" label="商品名称" prop="name"></el-table-column>
        <el-table-column width="300" label="缩略图" prop="img"></el-table-column>
        <el-table-column label="操作" >
          <template slot-scope="scope">
              <el-button type="success" @click="add(scope.row.id)">添加</el-button>
              <el-button type="primary" @click="update(scope.row.id)">修改</el-button>
              <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <!-- 分页 -->
    <el-footer>
      <el-pagination background :current-page="page"  :total="100" @current-change="changPage"></el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      tableData: [{
        id: 'hah',
        name: '男装',
        img:'',
        desc: '这是男装',
        children: [
          {
            id: 333,
            name:'夹克',
            img:''
          },
          {
            id: 444,
            name: '牛仔裤',
            img:''
          }
        ]
      }]
    }
  },
  methods:{
    changPage(page){
      // console.log(page);
      this.page = page
      console.log(this.page);
    },
    add(id){
      this.$router.push({
        path:'/classify/add/' + id
      })
    },
    update(id){
      this.$router.push({
        path:'/classify/add/' + id
      })
    },
    addShop() {
      this.$router.push({
        path:'/classify/add/' + '0'
      })
    }
  }
};
</script>

<style scoped>
 
</style>