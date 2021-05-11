<template>
  <div>
    <h3>新增书籍</h3>
    <div style="margin: 20px"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="book">
      <el-form-item label="书名" hide-required-asterisk="true">
        <el-input v-model="book.bookName" placeholder="请输入书名"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="book.writer" placeholder="请输入作者"></el-input>
      </el-form-item>
      <el-form-item label="ISBN">
        <el-input v-model="book.ISBN" placeholder="请录入书籍ISBN号"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="book.count" placeholder="输入书籍的数量"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="book.type" placeholder="请选择书籍的分类">
          <el-option
            v-for="item in type"
            :key="item.key"
            :label="item.value"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="book.description" placeholder="请输入书籍的简介"></el-input>
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
  name: "addbooks",
  data() {
    return {
      labelPosition: "right",
      book: {
        bookName: "",
        writer: "",
        ISBN: "",
        count: "",
        type: "",
        description: "",
      },
      type: [
        {
          key: "A",
          value: "马克思主义、列宁主义、毛泽东思想、邓小平理论",
        },
        {
          key: "B",
          value: "哲学、宗教",
        },
        {
          key: "C",
          value: "社会科学总论",
        },
        {
          key: "D",
          value: "政治、法律",
        },
        {
          key: "E",
          value: "军事",
        },
        {
          key: "F",
          value: "经济",
        },
        {
          key: "G",
          value: "文化、科学、教育、体育",
        },
        {
          key: "H",
          value: "语言、文字",
        },
        {
          key: "I",
          value: "文学",
        },
        {
          key: "J",
          value: "艺术",
        },
        {
          key: "K",
          value: "历史、地理",
        },
        {
          key: "N",
          value: "自然科学总论",
        },
        {
          key: "O",
          value: "数理科学和化学",
        },
        {
          key: "P",
          value: "天文学、地球科学",
        },
        {
          key: "Q",
          value: "Q 生物科学",
        },
        {
          key: "R",
          value: "医药、卫生",
        },
        {
          key: "S",
          value: "农业科学",
        },
        {
          key: "T",
          value: "工业技术",
        },
        {
          key: "U",
          value: "交通运输",
        },
        {
          key: "V",
          value: "航空、航天",
        },
        {
          key: "X",
          value: "环境科学、安全科学",
        },
        {
          key: "Z",
          value: "综合性图书",
        },
      ],
    };
  },
  methods: {
    addBook(){
      axios.post('http://localhost:3000/books/addbooks',{
        bookName : this.book.bookName,
        writer :this.book.writer,
        ISBN:this.book.ISBN,
        count:this.book.count,
        type:this.book.type,
        description:this.book.description
      }).then(res=>{
        console.log(res);
        console.log('新增书籍成功');
        this.$message({
          type:'success',
          message:'新增书籍成功！'
        });
        this.book = ''
      })
    }
  },
};
</script>

<style lang='less' scoped>
h3 {
  text-align: left;
  margin-left: 40px;
  margin-bottom: 20px;
}
.el-input{
   width: 200%;
}
</style>