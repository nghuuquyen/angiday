/**
 * `tasks/config/babel`
 *
 * ---------------------------------------------------------------
 *
 * Transpile >=ES6 code for broader browser compatibility.
 *
 * For more information, see:
 *   https://sailsjs.com/anatomy/tasks/config/babel.js
 *
 */
var defaultAssets = require('./../../config/assets/default');

module.exports = function (grunt) {
  grunt.config.set('babel', {
    dist: {
      options: {
        /**
        * @babel/preset-env is a smart preset that allows you to use the latest 
        * JavaScript without needing to micromanage which syntax transforms 
        * (and optionally, browser polyfills) are needed by your target environment(s). 
        * This both makes your life easier and JavaScript bundles smaller!
        * 
        * ```
        * npm install --save-dev @babel/preset-env
        * ```
        */
        presets: ['@babel/preset-env']
      },
      files: [{
        expand: true,
        cwd: '.',
        src: defaultAssets.client.js,
        // Target compiled js in dist folder will used for minify for production.
        dest: 'public/dist/js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-babel');
};