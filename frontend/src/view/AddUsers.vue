<template>
  <div>
     <h3>新增用户</h3>
    <div style="margin: 20px"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="user">
      <el-form-item label="用户姓名" hide-required-asterisk="true">
        <el-input v-model="user.name" placeholder="请输入用户姓名"></el-input>
      </el-form-item>
      <el-form-item label="id">
        <el-input v-model="user.id" placeholder="请输入用户账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="user.phone" placeholder="请输入用户电话号码"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.email" placeholder="请输入用户邮箱"></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="user.Idcard" placeholder="请输入用户身份证号"></el-input>
      </el-form-item>
      <el-form-item label="权限">
          <el-select v-model="user.role">
            <el-option v-for="item in chose" :key="item.key" :label="item.value" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addUser()">添加书籍</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "adduser",
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
        role:''
      //   _id: "",
      },
      chose:[
        {
          key:"manager",
          value:'管理员'
        },{
          key:"reader",
          value:'读者'
        }
      ]
    };
  },
  methods: {
     addUser(){
      axios.post('http://localhost:3000/users/adduser',{
        name: this.user.name,
          id: this.user.id,
          phone: this.user.phone,
          email: this.user.email,
          Idcard: this.user.Idcard,
          password: this.user.password,
         //  _id: this.user._id,
      }).then(res=>{
        console.log(res);
        console.log('新增用户成功');
        this.$message({
          type:'success',
          message:'新增用户成功！'
        });
        this.user = ''
      })
    }
  },
};
</script>

<style lang='less' scoped>
.el-input{
   width: 200%;
}
</style>