'use strict';

module.exports = function(grunt) {
	grunt.config.set('wiredep', {
		task: {
			src: [
				'index.html'
			],
			options: {}
		}
	});

	grunt.loadNpmTasks('grunt-wiredep');
};
