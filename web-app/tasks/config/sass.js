'use strict';

var config = require('./../../config/config.js');
var defaultAssets = require('./../../config/assets/default');

module.exports = function(grunt) {
	grunt.config.set('sass', {
		dist: {
			options: {
				style: 'expanded'
			},
			files: {
				'public/dist/css/main.css' : 'stylesheets/sass/main.scss'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
};
