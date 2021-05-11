<template>
  <div>
    <TopHeader></TopHeader>
    <!-- <Menu></Menu> -->
    <div>
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        :collapse="false"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index='1'>
          <template slot="title">
            <span>书籍管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/books">
              <el-menu-item index="1-1">
                <span slot="title">书籍信息</span>
              </el-menu-item>
            </router-link>
            <router-link to="/addbook">
              <el-menu-item index="1-2">
                <span slot="title">新增书籍</span>
              </el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index='2'>
          <template slot="title">
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/users">
              <el-menu-item index="2-1">
                <span slot="title">读者信息</span>
              </el-menu-item>
            </router-link>
            <router-link to="/users">
              <el-menu-item index="2-3">
                <span slot="title">管理员信息</span>
              </el-menu-item>
            </router-link>
            <router-link to="/adduser">
              <el-menu-item index="2-2">
                <span slot="title">新增用户</span>
              </el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-submenu index='4'>
          <template slot="title">
            <span>管理员管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/manager">
              <el-menu-item index="2-1">
                <span slot="title">管理员信息</span>
              </el-menu-item>
            </router-link>
            <router-link to="/addmanager">
              <el-menu-item index="2-2">
                <span slot="title">新增管理员</span>
              </el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu> -->
        <el-submenu index='3'>
          <template slot="title">
            <span>书籍借还管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/lendbook">
              <el-menu-item index="3-1">
                <span slot="title">书籍外借</span>
              </el-menu-item>
            </router-link>
            <router-link to="/information">
              <el-menu-item index="3-2">
                <span slot="title">借还信息记录</span>
              </el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <div class="show">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import Menu from "../components/Menu";
import TopHeader from "../components/TopHeader";
// import axios from "axios";
export default {
  name: "home",
  components: {
    // Menu,
    TopHeader,
  },
  data() {
    return {
      menuItem: "",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang='less' scoped>
.el-menu-vertical-demo {
  width: 20%;
  height: 80vh;
  float: left;
}
.show{
  float: left;
  margin: 50px 10px 20px 20px;

}
span{
  font-size: 18px;
  font-weight: 400;
}
</style>