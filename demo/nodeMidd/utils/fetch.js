/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 13:44:31 
 * @version 0.0.1 
 */
var fetch = require('node-fetch');
module.exports = function (url, method, options, callback, errBack) {
  fetch(url, {
    method: method,
    body: options,
    timeout: 3000,
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function (res) {
      if (callback) {
        callback(res)
      }
    })
    .catch(function (err) {
      if (errBack) {
        errBack(err)
      }
    });
} 