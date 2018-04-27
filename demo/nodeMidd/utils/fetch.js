/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 13:44:31 
 * @version 0.0.1 
 */
var rp = require('request-promise');
var logErr = require('log4js').getLogger('fetch')
module.exports = function (url, postData, callback) {
  var options = {
    url: url,
    method: "GET",
    json: true,
    headers: {
      "content-type": "application/json",
    },
    body: postData
  };

  rp(options)
    .then(function (parsedBody) {
      callback(null, { data: parsedBody, code: 200 })
    })
    .catch(function (err) {
      logErr.error('Error - url:', url, '--', err)
      callback(true, err.statusCode)
    });

} 