'use strict';

var defaultAssets = require('./../../config/assets/default');

module.exports = function(grunt) {

    grunt.config.set('cssmin', {
        production : {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            files: {
                'public/dist/application.min.css': defaultAssets.client.css
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
};




