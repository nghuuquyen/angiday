'use strict';

var defaultAssets = require('./../../config/assets/default');

module.exports = function(grunt) {
    grunt.config.set('concat_css', {
        production: {
            options: {
            },
            files: {
                "public/dist/vendor.min.css": defaultAssets.client.lib.css
            }
        }
    });

    grunt.loadNpmTasks('grunt-concat-css');
};
