/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 11:20:28 
 * @version 0.0.1 
 */
var log4js = require('log4js')

log4js.configure({
  appenders: {
    out: { type: 'console' },
    file: {
      type: "dateFile",
      filename: 'logs/info.log',
      pattern: "_yyyy-MM-dd.log",
      alwaysIncludePattern: true,
    }
  },
  categories: {
    logInfo: { appenders: ['file'], level: 'info' },
    default: { appenders: ['out'], level: 'info' }
  },
  replaceConsole: true
});
var logInfo = log4js.getLogger('logInfo');

module.exports = {
  express: log4js.connectLogger(logInfo, { level: 'info' })
};