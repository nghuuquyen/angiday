'use strict';

var _ = require('lodash'),
    defaultAssets = require('./../../config/assets/default');

module.exports = function(grunt) {
    grunt.config.set('jshint', {
        all: {
            src: _.union(defaultAssets.server.gruntConfig,
                defaultAssets.server.allJS,
                defaultAssets.client.js),
            options: {
                jshintrc: true,
                node: true,
                mocha: true,
                jasmine: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};