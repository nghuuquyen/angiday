'use strict';

const winston = require('winston');
const dailyRotateFile = require('winston-daily-rotate-file');
const moment = require('moment');
const fs = require( 'fs' );
const logDirs = ['logs', 'logs/error', 'logs/info', 'logs/exceptions'];

// Just to create logs folders if not exits.
for(var i = 0 ; i < logDirs.length; i++) {
  if ( !fs.existsSync(logDirs[i])) {
    // Create the directory if it does not exist
    fs.mkdirSync(logDirs[i]);
  }
}

function getCurrentTime() {
  return moment().format("DD-MM-YYYY, HH:mm:ss A");
}

let logger = new winston.Logger({
  exitOnError:false,
  transports: [
    new (dailyRotateFile)({
      name: 'info-file',
      level: 'info',
      filename: 'logs/info/api.log',
      json: true,
      maxsize: 1024 * 1024 * 2, // 2 MB
      timestamp: getCurrentTime,
      datePattern: 'dd-MM-yyyy.',
      prepend: true
    }),
    new (dailyRotateFile)({
      name: 'error-file',
      level: 'warn',
      filename: 'logs/error/api.log',
      json: true,
      maxsize: 1024 * 1024 * 2, // 2 MB
      timestamp: getCurrentTime,
      datePattern: 'dd-MM-yyyy.',
      prepend: true
    }),
    new (winston.transports.Console)({
      name: 'debug-console',
      level: 'debug',
      colorize: true,
      json: false,
      timestamp: getCurrentTime
    })
  ],
});

if(process.env.NODE_ENV === 'production') {
  logger.handleExceptions([
    new (dailyRotateFile)({
      name: 'exceptions-file',
      level : 'warn',
      filename: 'logs/exceptions/exceptions.log',
      json: true,
      maxsize: 1024 * 1024 * 2, // 2 MB
      timestamp: getCurrentTime,
      datePattern: 'dd-MM-yyyy.',
      prepend: true
    })
  ]);
}


module.exports = logger;
