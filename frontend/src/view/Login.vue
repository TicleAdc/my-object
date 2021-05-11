<template>
  <div class="container">
    <top-header></top-header>
    <div class="login">
      <div class="title">管理员登录</div>
      <div class="login-input">
        <div class="user">账号:<input type="text" v-model="userName" /></div>
        <div class="pwd">
          密码:<input type="password" name="" id="" v-model="password" />
        </div>
        <div class="button">
          <button class="to-login" @click="toLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from "../components/TopHeader";
export default {
  name: "login",
  components: {
    topHeader,
  },
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    toLogin() {
      if (this.userName == "" || this.password == "") {
        this.$message.error("账号或密码为空，请检查后重试");
        this.userName = "";
        this.password = "";
      } else if (this.userName != "admin") {
        this.$message.error("账号输入错误，请重新输入");
        this.userName = "";
        this.password = "";
      } else if (this.password != "admin") {
        this.$message.error("密码输入错误，请重试");
        this.password = "";
      } else {
        this.$message({ message: "登录成功！", type: "success" });
        this.$router.push("/Home");
      }
    },
  },
};
</script>

<style lang='less' scoped>
.container {
  background-image: url("../assets/bg.png");
  background-size: 100%;
  height: 100vh;
  text-align: center;
  .login {
    margin-top: 40px;
    color: #ffffff;
    font-size: 16px;
    .title {
      font-size: 24px;
      margin-bottom: 40px;
    }
    .login-input {
      .user {
        margin-bottom: 30px;
        font-size: 18px;
        input {
          margin-left: 10px;
          border-radius: 5px;
          border: none;
          width: 260px;
          height: 28px;
          background-color: #cdf3e6;
        }
      }
      .pwd {
        margin-bottom: 30px;
        font-size: 18px;
        input {
          margin-left: 10px;
          border-radius: 5px;
          border: none;
          width: 260px;
          height: 28px;
          background-color: #cdf3e6;
        }
      }
      .button {
        button {
          width: 300px;
          height: 32px;
          border-radius: 5px;
          border: none;
          // font-family: 'Courier New', Courier, monospace;
          font-weight: 600;
          background-color: #6cd858;
          color: #ffffff;
        }
      }
    }
  }
}
</style>