/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 11:32:13 
 * @version 0.0.1 
 */
var Indexs = require('./../models/index')
var Index = {
  get: function (req, res) {
    console.log(req.body, res)
    Indexs.get(req, function (err, data) {
      console.log(err, data)
      if (err) {
        res.json({ status: 500, msg: err })
      } else {
        res.json(data)
      }
    })
  }
}
module.exports = Index