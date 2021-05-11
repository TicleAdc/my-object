<template>
  <div>
    <h3>书籍外借</h3>
    <div style="margin: 20px"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="info">
      <el-form-item label="书名" hide-required-asterisk="true">
        <el-input v-model="info.bookName" placeholder="请输入书名(扫描书名录入)"></el-input>
      </el-form-item>
      <el-form-item label="读者">
        <el-input v-model="info.userName"></el-input>
      </el-form-item>
      <el-form-item label="外借时间">
        <el-input v-model="info.lendTime"></el-input>
      </el-form-item>
      <el-form-item label="归还时间">
        <el-input v-model="info.borrowTime"></el-input>
      </el-form-item>
      <!-- <el-form-item label="分类">
        <el-select v-model="book.type">
          <el-option
            v-for="item in type"
            :key="item.key"
            :label="item.value"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="备注">
        <el-input v-model="info.others"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addBook()">添加书籍</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "lendbook",
  data() {
    return {
      labelPosition: "right",
      info:{
          bookName:'',
          userName:'',
          lendTime:'',
          borrowTime:'',
          others:''
      }
    };
  },
  methods: {
      addBook(){
      axios.post('http://localhost:3000/info/lendbook',{
        bookName : this.info.bookName,
        userName :this.info.userName,
        lendTime: this.info.lendTime,
        borrowTime:this.info.borrowTime,
        others:this.info.others
      }).then(res=>{
        console.log(res);
        console.log('新增书籍成功');
        this.$message({
          type:'success',
          message:'书籍外借成功！'
        });
        this.info = ''
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