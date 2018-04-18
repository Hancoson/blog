/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 11:16:14 
 * @version 0.0.1 
 */
var index = require('./../controllers/index')
module.exports = (app) => {
  app.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
  app.get('/api', index.get);
}