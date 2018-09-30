'use strict';


module.exports = function(grunt) {
    grunt.config.set('env',{
        test: {
            NODE_ENV: "test"
        },
        production: {
            NODE_ENV: "production"
        },
        development: {
            NODE_ENV: "development"
        }
    });

    grunt.loadNpmTasks('grunt-env');
};




