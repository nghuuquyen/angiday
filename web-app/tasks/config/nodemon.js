'use strict';
var _ = require('lodash'),
defaultAssets = require('./../../config/assets/default');

module.exports = function(grunt) {
  grunt.config.set('nodemon', {
    dev: {
      script: 'server.js',
      options: {
        nodeArgs: ['--inspect'],
        ext: 'js,html',
        watch: _.union(defaultAssets.server.gruntConfig, defaultAssets.server.views, defaultAssets.server.allJS, defaultAssets.server.config)
      }
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');
};
