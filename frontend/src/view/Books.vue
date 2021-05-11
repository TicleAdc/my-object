<template>
  <div>
    <h3>书籍信息展示</h3>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="bookName" label="书名" width="160">
      </el-table-column>
      <el-table-column prop="ISBN" label="ISBN" width="160"> </el-table-column>
      <el-table-column prop="writer" label="作者" width="160">
      </el-table-column>
      <el-table-column prop="type" label="分类" width="120"> </el-table-column>
      <el-table-column prop="count" label="数量" width="120"> </el-table-column>
      <el-table-column prop="description" label="简介" width="300">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="editBook(scope.row, scope.$index)"
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
    <el-dialog title="修改书籍信息" :visible.sync="dialogFormVisible">
      <el-form :label-position="labelPosition" label-width="80px" :model="book">
        <el-form-item label="书名" hide-required-asterisk="true">
          <el-input v-model="book.bookName" placeholder="请输入书名"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="book.writer"></el-input>
        </el-form-item>
        <el-form-item label="ISBN">
          <el-input v-model="book.ISBN"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="book.count"></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="book.type">
            <el-option
              v-for="item in type"
              :key="item.key"
              :label="item.value"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="book.description"></el-input>
        </el-form-item>
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
  name: "books",
  data() {
    return {
      tableData: [],
      book: {
        bookName: "",
        writer: "",
        ISBN: "",
        count: "",
        type: "",
        description: "",
        _id:""
      },
      dialogFormVisible: false,
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
      labelPosition: "right",
    };
  },
  methods: {
    getBooks() {
      axios.get("http://localhost:3000/books/getbooks").then((res) => {
        this.tableData = res.data;
      });
    },
    handleDelete(index, row) {
      console.log(index);
      // console.log(row[0].bookName);
     this.$confirm("即将删除该书籍信息，是否确定?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          axios
            .post("http://localhost:3000/books/delbook", {
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
    editBook(index, row) {
      console.log(index);
      this.dialogFormVisible = true;
      console.log(row);
      this.book.bookName = index.bookName;
      this.book.writer = index.writer;
      this.book.ISBN = index.ISBN;
      this.book.type = index.type;
      this.book.count = index.count;
      this.book.description = index.description;
      this.book._id = index._id
    },
    closeDialog() {
      this.dialogFormVisible = false;
    },
    subUpdate() {
      axios
        .post("http://localhost:3000/books/editbook", {
          bookName: this.book.bookName,
          writer: this.book.writer,
          ISBN: this.book.ISBN,
          count: this.book.count,
          type: this.book.type,
          description: this.book.description,
          _id:this.book._id
        })
        .then((res) => {
          console.log(res);
          console.log("修改书籍成功");
          this.$message({
            type: "success",
            message: "修改书籍成功！",
          });
          this.dialogFormVisible = false;
          this.getBooks()
        });
    },
  },
  mounted() {
    this.getBooks();
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
.el-submenu__title{
  text-align: center im !important;
}
.el-menu{
  text-align: center;
}
</style>