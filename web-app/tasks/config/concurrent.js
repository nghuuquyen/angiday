'use strict';

module.exports = function(grunt) {
    grunt.config.set('concurrent', {
        build: ['nodemon' , 'watch'],
        options: {
            logConcurrentOutput: true
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
};