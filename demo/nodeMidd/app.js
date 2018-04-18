/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 10:55:29 
 * @version 0.0.1 
 */
var express = require('express')
var http = require('http')
var path = require('path')
var ejs = require('ejs')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('./services/logger');
var router = require('./routes/index')

var app = express();
require(app);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
// app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger.express);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req
    .app
    .get('env') === 'development'
    ? err
    : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port http://localhost:' + app.get('port'));
});