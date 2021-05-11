<template>
  <div>
    <h3>新增管理员</h3>
    <div style="margin: 20px"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="user">
      <el-form-item label="账户名" hide-required-asterisk="true">
        <el-input
          v-model="user.name"
          placeholder="请输入管理员账户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="id">
        <el-input v-model="user.id" placeholder="请输入管理员编号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input
          v-model="user.phone"
          placeholder="请输入用户电话号码"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.email" placeholder="请输入用户邮箱"></el-input>
      </el-form-item>
      <el-form-item label="管理员标识">
        <!-- <el-input v-model="user.Idcard" placeholder="请输入用户身份证号"></el-input> -->
        <el-select v-model="user.role">
          <el-option
            v-for="item in choseRole"
            :key="item.key"
            :label="item.value"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="">
          <el-input v-model="user.description"></el-input>
        </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="addUser()">完成添加</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addmanager",
  data() {
    return {
      labelPosition: "right",
      user: {
        name: "",
        id: "",
        Idcard: "",
        password: "111111",
        phone: "",
        email: "",
        borrowed: "",
        role: "",
        //   _id: "",
      },
      choseRole: [
          {
            key: "Y",
            value: "管理员",
          },
          {
            key: "N",
            value: "非管理员",
          },
        ],
    };
  },
  methods: {
    addUser() {
      axios
        .post("http://localhost:3000/users/adduser", {
          usernName: this.user.name,
          id: this.user.id,
          phone: this.user.phone,
          email: this.user.email,
          //   Idcard: this.user.Idcard,
          password: this.user.password,
          //  _id: this.user._id,
        })
        .then((res) => {
          console.log(res);
          console.log("新增用户成功");
          this.$message({
            type: "success",
            message: "新增用户成功！",
          });
          this.user = "";
        });
    },
  },
};
</script>

<style lang='less' scoped>
.el-input {
  width: 200%;
}
.el-form-item__label {
  width: 100px;
}
</style>