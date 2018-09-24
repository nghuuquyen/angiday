'use strict';

module.exports = function(grunt) {

  grunt.config.set('clean', {
    // Delete compile public content.
    dist: ['public/dist/']
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};
