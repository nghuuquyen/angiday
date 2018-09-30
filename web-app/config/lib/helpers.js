"use strict";

const _ = require('lodash');
const glob = require('glob');
const path = require('path');

module.exports = {
  getGlobbedPaths : getGlobbedPaths,
  getClientTestFilePaths : getClientTestFilePaths,
  getClientCSSFilePaths : getClientCSSFilePaths,
  getClientJSFilePaths : getClientJSFilePaths,
  getClientFolders : getClientFolders
};

/**
* @name getGlobbedPaths
* @description
* Get files by glob patterns
*
* @param  {string|array} globPatterns pattern path for glob.
* @param  {string|array} excludes     A part of file path need remove.
* @return {array}        All real file paths corect with glob patterns
*/
function getGlobbedPaths(globPatterns, excludes) {
  // URL paths regex
  var urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');

  // The output array
  var output = [];

  // If glob pattern is array then we use each pattern in a recursive way, otherwise we use glob
  if (_.isArray(globPatterns)) {
    globPatterns.forEach(function (globPattern) {
      output = _.union(output, getGlobbedPaths(globPattern, excludes));
    });
  } else if (_.isString(globPatterns)) {
    if (urlRegex.test(globPatterns)) {
      output.push(globPatterns);
    } else {
      var files = glob.sync(globPatterns);
      if (excludes) {
        files = files.map(function (file) {
          if (_.isArray(excludes)) {
            for (var i in excludes) {
              if (excludes.hasOwnProperty(i)) {
                file = file.replace(excludes[i], '');
              }
            }
          } else {
            file = file.replace(excludes, '');
          }
          return file;
        });
      }
      output = _.union(output, files);
    }
  }

  return output;
}

/**
* @name getClientJSFilePaths
* @description
* Get all client JS file paths
*
* @param  {object} config config object
* @param  {config} assets assets object
*
* @return {array} Client JS file paths
*/
function getClientJSFilePaths(config, assets) {
  return getGlobbedPaths(assets.client.lib.js, ['public/'])
  .concat(getGlobbedPaths(assets.client.js, ['public/']));
}

/**
* @name getClientCSSFilePaths
* @description
* Get all client css file paths
*
* @param  {object} config config object
* @param  {config} assets assets object
*
* @return {array} Client CSS file paths
*/
function getClientCSSFilePaths(config, assets) {
  return getGlobbedPaths(assets.client.lib.css, ['public/'])
  .concat(getGlobbedPaths(assets.client.css, ['public/']));
}

/**
* @name getClientTestFilePaths
* @description
* Get all client test file paths
*
* @param  {object} config config object
* @param  {config} assets assets object
*
* @return {array} Client JS file paths
*/
function getClientTestFilePaths(config, assets) {
  return getGlobbedPaths(assets.client.tests);
}

/**
* @name getClientFolders
* @description
* Get all client folders for setup express static content.
*
* @param  {object} config config object
* @param  {config} assets assets object
*
* @return {array} Client folders file paths
*/
function getClientFolders(config, assets) {
  return getGlobbedPaths('client/modules/**/*');
}
