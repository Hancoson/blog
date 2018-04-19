/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 13:44:31 
 * @version 0.0.1 
 */
var request = require('request');
var errCode = request('./../config/errCode.js')
module.exports = function (url, options, callback) {

  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    if (response && response.statusCode == 200) {
      callback(error, body)
    }
    else {
      callback(error, response && errCode.response.statusCode)
    }


  });
  /* fetch(url, {
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