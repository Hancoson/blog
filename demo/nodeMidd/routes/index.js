/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 11:16:14 
 * @version 0.0.1 
 */

var myRoutes = (app) => {
  app.get('/', function (req, res) {
    res.send('Hello World!');
  });
}
module.exports = myRoutes