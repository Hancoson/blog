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
router(app);

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


http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port http://localhost:' + app.get('port'));
});