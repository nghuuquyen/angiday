'use strict';
var _ = require('lodash'),
	defaultAssets = require('./../../config/assets/default');

module.exports = function(grunt) {
	grunt.config.set('watch', {
		css: {
			files: '**/*.scss',
			tasks: ['sass' , 'cssmin']
		},
		js: {
			files: _.union(defaultAssets.server.gruntConfig, defaultAssets.server.allJS, defaultAssets.client.js),
			tasks: ['jshint']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};