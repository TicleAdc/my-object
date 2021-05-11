<template>
  <div>
    <h3>书籍借还记录</h3>
    <div style="margin: 20px"></div>
    <el-table :data="info" stripe style="width: 100%">
      <el-table-column prop="bookName" label="书名" width="160">
      </el-table-column>
      <el-table-column prop="userName" label="读者" width="160"> </el-table-column>
      <el-table-column prop="lendTime" label="外借时间" width="160">
      </el-table-column>
      <el-table-column prop="borrowTime" label="归还时间" width="120"> </el-table-column>
      <el-table-column prop="others" label="备注信息" width="120"> </el-table-column>
      <!-- <el-table-column prop="description" label="简介" width="300">
      </el-table-column> -->
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="editBook(scope.row, scope.$index)"
            type="text"
            size="small"
            >续借</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="handleDelete(scope.row, scope.$index)"
            >归还</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "information",
  data() {
    return {
        info:[]
    };
  },
  mounted() {
      axios.get('http://localhost:3000/info/getinfo').then(res=>{
          this.info = res.data
      })
  },
  methods: {
      handleDelete(index, row) {
      console.log(index);
      // console.log(row[0].bookName);
     this.$confirm("是否确定续借书籍?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          axios
            .post("http://localhost:3000/info/delinfo", {
              _id: index._id,
            })
            .then((res) => {
              console.log(res);
              this.info.splice(row, 1);
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang='less' scoped>
</style>