'use strict';

var defaultAssets = require('./../../config/assets/default');

module.exports = function (grunt) {
    grunt.config.set('concat', {
        production: {
            options: {
                stripBanners: true
            },
            files: {
                "public/dist/vendor.min.js": defaultAssets.client.lib.js
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};






