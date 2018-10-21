"use strict";

const _ = require('lodash');
const logger = require('./lib/logger');
const helpers = require('./lib/helpers');

/**
* @name validateEnvironmentVariable
* @description
* Do validate and set default NODE_ENV. If don't have NODE_ENV it
* will set to `development` as default.
*/
function validateEnvironmentVariable() {
  if(!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
    logger.info(`Doing Set Default NODE_ENV = ${process.env.NODE_ENV}`);
  } else {
    logger.info(`App run with NODE_ENV ${process.env.NODE_ENV}`);
  }
}

/**
* @name initGlobalConfigFolders
* @description
* Load assets folders of client or server.
*
* 1) Client folders used for setup express static routing content will allow
* browser client load.
*
* 2) Server folders maybe used for minify, test, watch or something like that.
*
* @param  {object} config config object
* @param  {config} assets assets object
* @return {object}        config object after populate client and server file
*                         folders.
*/
function initGlobalConfigFolders(config, assets) {
  // Appending files
  config.folders = {
    server: {},
    client: {}
  };

  // Setting globbed client paths for setup express static content.
  config.folders.client = helpers.getClientFolders(config, assets) || [];
}

/**
* @name initGlobalConfigFiles
* @description
* Load assets files path of client or server.
*
* 1) Client files used for bind to HTML file for browser client load.
* 2) Server files maybe used for test, watch or something like that.
*
* You can set it by hand or do like me, I use blod for get all files
* by pattern.
*
* @example
* let config.files = {
*   client: {
*     js : ['js/bootstrap.js', 'js/main.js'],
*     css : ['css/bootstrap.css', 'style.css']
*   }
* }
*
* If you just have few files you can do it by hand like above.
*
* @param  {object} config config object
* @param  {config} assets assets object
* @return {object}        config object after populate client and server file
*                         paths.
*/
function initGlobalConfigFiles(config, assets) {
  // Appending files
  config.files = {
    server: {},
    client: {}
  };

  // Setting Globbed js files
  config.files.client.js = helpers.getClientJSFilePaths(config, assets) || [];
  // Setting Globbed css files
  config.files.client.css = helpers.getClientCSSFilePaths(config, assets) || [];

  // Setting Globbed test files
  config.files.client.tests = helpers.getClientTestFilePaths(config, assets) || [];

  return config;
}

/**
* Initialize global configuration
*/
function initGlobalConfig() {
  // Must check and set default NODE_ENV
  validateEnvironmentVariable();

  // Get the default assets
  const defaultAssets = require('./assets/default');
  // Get the environment assets base on NODE_ENV
  const environmentAssets = require('./assets');

  // Get the default config
  const defaultConfig = require('./env/default');
  // Get the environment configs base on NODE_ENV
  const environmentConfig = require('./env');

  // Application assets.
  let assets;

  if(process.env.NODE_ENV === 'production') {
    // On production don't need merge defaut assets.
    // Becase default assets already compile to minify versions.
    assets = environmentAssets;
  } else {
    // Merge assets files
    assets = _.merge(defaultAssets, environmentAssets);
  }

  // Merge config files
  let config = _.merge(defaultConfig, environmentConfig);

  initGlobalConfigFiles(config, assets);
  initGlobalConfigFolders(config, assets);
  
  return config;
}

/**
* Set configuration object
*/
module.exports = initGlobalConfig();
