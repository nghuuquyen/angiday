'use strict';

var defaultAssets = require('./../../config/assets/default');

module.exports = function(grunt) {
  grunt.config.set("applicationJavaScriptFiles", defaultAssets.client.js);

  grunt.config.set('uglify', {
    production: {
      options: {
        mangle: false,
        compress: {
          sequences: true,
          dead_code: true,
          conditionals: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
          drop_console: true
        }
      },
      files: {
        'public/dist/application.min.js': "<%= applicationJavaScriptFiles %>"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
