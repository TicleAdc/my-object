<template>
  <div>
    <h3>用户信息</h3>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="用户姓名" width="120">
      </el-table-column>
      <el-table-column prop="id" label="用户账号" width="120">
      </el-table-column>
      <el-table-column prop="password" label="密码" width="120">
      </el-table-column>
      <el-table-column prop="phone" label="联系电话" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="220"> </el-table-column>
      <el-table-column prop="Idcard" label="身份证号" width="220">
      </el-table-column>
      <!-- <el-table-column prop="borrowed" label="在借书籍" width="240">
      </el-table-column> -->
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="edituser(scope.row, scope.$index)"
            type="text"
            size="small"
            >编辑</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="handleDelete(scope.row, scope.$index)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改用户信息" :visible.sync="dialogFormVisible">
      <el-form :label-position="labelPosition" label-width="80px" :model="user">
        <el-form-item label="用户姓名" hide-required-asterisk="true">
          <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="id">
          <el-input v-model="user.id"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="user.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="user.Idcard"></el-input>
        </el-form-item>
        <!-- <el-form-item label="">
          <el-input v-model="user.description"></el-input>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="subUpdate()">修改书籍</el-button>
          <el-button @click="closeDialog()">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "users",
  data() {
    return {
      tableData: [],
      user: {
        name: "",
        id: "",
        Idcard: "",
        password: "",
        phone: "",
        email: "",
        borrowed: "",
        _id: "",
      },
      dialogFormVisible: false,
      labelPosition: "right",
    };
  },
  methods: {
    getusers() {
      axios.get("http://localhost:3000/users/getusers").then((res) => {
        this.tableData = res.data;
      });
    },
    handleDelete(index, row) {
      console.log(index);
      this.$confirm("即将删除该用户信息，是否确定?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          axios
            .post("http://localhost:3000/users/deluser", {
              _id: index._id,
            })
            .then((res) => {
              console.log(res);
              this.tableData.splice(row, 1);
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
    edituser(index, row) {
      console.log(index);
      this.dialogFormVisible = true;
      console.log(row);
      this.user.name = index.name;
      this.user.id = index.id;
      this.user.phone = index.phone;
      this.user.password = index.password;
      this.user.email = index.email;
      this.user.Idcard = index.Idcard;
      this.user._id = index._id;
    },
    closeDialog() {
      this.dialogFormVisible = false;
    },
    subUpdate() {
      axios
        .post("http://localhost:3000/users/edituser", {
          name: this.user.name,
          id: this.user.id,
          phone: this.user.phone,
          email: this.user.email,
          Idcard: this.user.Idcard,
          password: this.user.password,
          _id: this.user._id,
        })
        .then((res) => {
          console.log(res);
          console.log("修改用户信息成功");
          this.$message({
            type: "success",
            message: "修改用户信息成功！",
          });
          this.dialogFormVisible = false;
          this.getusers();
        });
    },
  },
  mounted() {
    this.getusers();
  },
};
</script>

<style lang='less' scoped>
.el-form-item__content {
  text-align: left !important;
  width: 50%;
}
h3 {
  text-align: left;
  margin-left: 10px;
  margin-bottom: 20px;
}
</style>