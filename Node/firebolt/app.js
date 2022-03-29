var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ip = require('ip');
var mysql = require('mysql');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var applicationRouter = require('./routes/application');
var dbRouter = require('./routes/db');
var authRouter = require('./routes/auth');

var app = express();

//DB
var connection = mysql.createConnection({
  host : `${process.env.MYSQL_CONN}`,
  user : `${process.env.MYSQL_USR}`,
  password : `${process.env.MYSQL_PWD}`,
  database : `${process.env.MYSQL_DB}`
});

//IP
app.use( (req, res, next) => {
  res.locals.ip = ip.address();
  next();
});

//Bootstrap e Jquery
app.use('/css',express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/bi',express.static(path.join(__dirname, 'node_modules/bootstrap-icons')));
app.use('/js',express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/bootjs',express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/application', applicationRouter);
app.use('/db', dbRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use( (req, res, next) => {
  next(createError(404));
});

// error handler
app.use( (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen( () => {
  console.log('Server Running!');  
  console.log('Local IP: ' + ip.address());
});

module.exports = app;
