'use strict';

var defaultAssets = require('./../../config/assets/default');

module.exports = function (grunt) {
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
        'public/dist/application.min.js': [
          /**
          * Make sure two configuration files load first.
          * This step must after babel transform task, because babel config
          * output files into `public/dist/js` folder.
          */
          'public/dist/js/client/modules/core/app/config.js',
          'public/dist/js/client/modules/core/app/init.js',
          'public/dist/js/client/modules/*/*.js',
          'public/dist/js/client/modules/*/**/*.js'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify-es');
};
