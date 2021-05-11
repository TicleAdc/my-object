<template>
  <div class="container">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @click="changeRouter"
        >
          <el-submenu index="1">
            <template slot="title">
              <!-- <i class="el-icon-location"></i> -->
              <span>书籍管理</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="1-1" name="books">书籍信息</el-menu-item>
              <el-menu-item index="1-2" name="addbooks">新增书籍</el-menu-item>
              <!-- <el-menu-item index="1-3">选项3</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <!-- <i class="el-icon-location"></i> -->
              <span>账户管理</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="2-1">账户信息</el-menu-item>
              <el-menu-item index="2-2">新增账户</el-menu-item>
              <!-- <el-menu-item index="1-3">选项3</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
             <span>书籍借还</span> 
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="3-1">书籍外借</el-menu-item>
              <el-menu-item index="3-2">书籍归还</el-menu-item>
              <!-- <el-menu-item index="1-3">选项3</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeRouter(name){
      this.menuItem = name;
      this.$router.push({
        name:name
      })
    }
  },
};
</script>

<style lang='less' scoped>
.el-row {
  width: 20%;
  float: left;
  height: 100%;
}
.el-col-12 {
  width: 100%;
  // background-color: #79a0db;
  height: 70vh;
}
.el-menu {
  background-color: #79a0db;
  height: 120%;
}
</style>