/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 13:44:31 
 * @version 0.0.1 
 */
var request = require('request');
module.exports = function (url, options, callback) {
  request({
    url: url,
    method: "GET",
    json: true,
    headers: {
      "content-type": "application/json",
    },
    body: options
  }, function (error, response, body) {
    var statusCode = response && response.statusCode
    if (response && response.statusCode == 200) {
      callback(null, body)
    }
    else {
      callback(true, statusCode)
    }
  });
} 