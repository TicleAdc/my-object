var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
// var bodyParser = require('body-parser')
var cors = require('cors')

var User = require('./db/Users')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books')
var InfoRouter = require('./routes/information')
var managerRouter = require('./routes/manager');
const Manager = require('./db/Manager');

var app = express();

mongoose.connect("mongodb://127.0.0.1:27017/bookshop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, function (err) {
  if (err) {
    console.log("数据库连接出错了" + err);

  } else {
    console.log("数据库连接成功");

  }
})

app.listen(60,function(){
  console.log("running");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books',booksRouter);
app.use('/info',InfoRouter)
app.use('/manager',managerRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
