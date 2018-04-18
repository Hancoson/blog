/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 13:35:23 
 * @version 0.0.1 
 */
var fetch = require('./../utils/fetch')
var config = require('./../config/config')

var Index = {
  get: function (req, callback) {
    fetch(config.HOST + '/api/q121212', req.body, function (data) {
      console.log(data)
      var con = JSON.parse(data);
      if (con.code == 200) {
        callback(null, data)
      } else {
        callback(null, { status: 500, msg: con.message })
      }
    })
  }
}

module.exports = Index