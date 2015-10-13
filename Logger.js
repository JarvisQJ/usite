/**
 * log4js ��־��������ļ�
 * @type {exports}
 */
var log4js = require('log4js');

// logger configure
log4js.configure({
    appenders: [
        { type: 'console' }, {
            type: 'dateFile',
            filename: 'logs/zrcv.log',
            pattern: "_yyyy-MM-dd",
            maxLogSize: 1024,
            alwaysIncludePattern: false,
            backups: 4,
            category: 'logger'
        }
    ],
    replaceConsole: true
});

module.exports = log4js.getLogger('logger');