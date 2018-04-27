/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 11:32:13 
 * @version 0.0.1 
 */
var Indexs = require('./../models/index')
var Index = {
  //get '/'
  index: function (req, res, next) {
    res.render('index', { title: 'Express' });
  },
  get: function (req, res) {
    Indexs.get(req.query, function (err, data) {
      if (err) {
        res.json({ status: 500, msg: err })
      } else {
        res.json(data)
      }
    })
  }
}
module.exports = Index