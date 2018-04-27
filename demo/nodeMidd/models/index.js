/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 13:35:23 
 * @version 0.0.1 
 */
var myFetch = require('./../utils/fetch')
var config = require('./../config/config')
var errCode = require('./../config/errCode')

var Index = {
  get: function (req, callback) {
    myFetch('https://news-at.zhihu.com/api/4/news/before/' + req.t, {}, function (err, data) {
      console.log(err, data)
      if (!err) {
        callback(null, data)
      } else {
        callback(null, errCode.SERVER_ERR)
      }
    })
  }
}

module.exports = Index